import { useEffect, useRef, useState, useCallback, type FC, type MouseEvent, type WheelEvent } from 'react';
import type { DictionaryItem, GraphNode3D, GraphEdge3D, Category, ThemeMode } from '../types/dictionary';
import { CATEGORIES } from '../data/dictionaryData';
import { soundEffects } from '../utils/soundEffects';

interface GraphCanvasProps {
  items: DictionaryItem[];
  selectedId: string | null;
  onSelectItem: (id: string) => void;
  isMonochrome: boolean;
  filterCategory: Category | 'all';
  searchQuery: string;
  theme: ThemeMode;
}

export const GraphCanvas: FC<GraphCanvasProps> = ({
  items,
  selectedId,
  onSelectItem,
  isMonochrome,
  filterCategory,
  searchQuery,
  theme
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Graph state references
  const nodesRef = useRef<GraphNode3D[]>([]);
  const edgesRef = useRef<GraphEdge3D[]>([]);
  const hoveredNodeIdRef = useRef<string | null>(null);

  // Camera & Interaction
  const cameraRef = useRef({
    rotX: 0.3,
    rotY: -0.4,
    targetRotX: 0.3,
    targetRotY: -0.4,
    zoom: 650,
    targetZoom: 650,
    panX: 0,
    panY: 0,
    targetPanX: 0,
    targetPanY: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    lastMouseX: 0,
    lastMouseY: 0
  });

  const [activeHoverNode, setActiveHoverNode] = useState<GraphNode3D | null>(null);

  // Initialize nodes and edges
  useEffect(() => {
    const categoryKeys = Object.keys(CATEGORIES) as Category[];
    const categoryAngles: Record<Category, number> = {} as Record<Category, number>;
    categoryKeys.forEach((cat, idx) => {
      categoryAngles[cat] = (idx / categoryKeys.length) * Math.PI * 2;
    });

    const newNodes: GraphNode3D[] = items.map((item) => {
      const angle = categoryAngles[item.category] || 0;
      const radius = 220 + (Math.random() * 80 - 40);
      const elevation = (Math.random() - 0.5) * 140;

      // Group loosely by category in spherical bands
      const x = Math.cos(angle + (Math.random() * 0.4 - 0.2)) * radius;
      const z = Math.sin(angle + (Math.random() * 0.4 - 0.2)) * radius;
      const y = elevation;

      return {
        id: item.id,
        title: item.title,
        category: item.category,
        x,
        y,
        z,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        vz: (Math.random() - 0.5) * 0.2,
        radius: 6,
        color: CATEGORIES[item.category]?.color || '#94a3b8'
      };
    });

    // Build edges from relatedIds
    const newEdges: GraphEdge3D[] = [];
    const itemMap = new Map<string, DictionaryItem>(items.map((i) => [i.id, i]));

    items.forEach((item) => {
      item.relatedIds.forEach((relId) => {
        if (itemMap.has(relId)) {
          // Avoid duplicate backwards edges
          const pairKey = [item.id, relId].sort().join(':::');
          if (!newEdges.some((e) => [e.source, e.target].sort().join(':::') === pairKey)) {
            newEdges.push({ source: item.id, target: relId });
          }
        }
      });
    });

    nodesRef.current = newNodes;
    edgesRef.current = newEdges;
  }, [items]);

  // Center camera when selectedId changes
  useEffect(() => {
    if (!selectedId) return;
    const node = nodesRef.current.find((n) => n.id === selectedId);
    if (!node) return;

    // Smoothly fly camera to face the node
    const distance = Math.sqrt(node.x * node.x + node.z * node.z);
    if (distance > 0.001) {
      const targetAngle = Math.atan2(node.x, node.z);
      cameraRef.current.targetRotY = -targetAngle;
      cameraRef.current.targetRotX = Math.atan2(node.y, distance) * 0.6;
      cameraRef.current.targetZoom = 520;
    }
  }, [selectedId]);

  // Main 3D simulation and render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    // Background floating dust particles
    const dustParticles: { x: number; y: number; z: number; size: number }[] = [];
    for (let i = 0; i < 90; i++) {
      dustParticles.push({
        x: (Math.random() - 0.5) * 800,
        y: (Math.random() - 0.5) * 600,
        z: (Math.random() - 0.5) * 800,
        size: Math.random() * 1.5 + 0.5
      });
    }

    // Force simulation step
    const stepPhysics = () => {
      const nodes = nodesRef.current;
      const edges = edgesRef.current;
      const nodeMap = new Map(nodes.map((n) => [n.id, n]));

      // 1. Repulsion between all nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dz = b.z - a.z;
          const distSq = dx * dx + dy * dy + dz * dz + 0.01;
          const dist = Math.sqrt(distSq);

          if (dist < 180) {
            const force = (180 - dist) / dist * 0.035;
            a.vx -= dx * force;
            a.vy -= dy * force;
            a.vz -= dz * force;
            b.vx += dx * force;
            b.vy += dy * force;
            b.vz += dz * force;
          }
        }
      }

      // 2. Spring attraction along edges
      edges.forEach((edge) => {
        const a = nodeMap.get(edge.source);
        const b = nodeMap.get(edge.target);
        if (!a || !b) return;

        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dz = b.z - a.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 0.1;
        const targetDist = 70;
        const force = (dist - targetDist) * 0.0015;

        a.vx += (dx / dist) * force;
        a.vy += (dy / dist) * force;
        a.vz += (dz / dist) * force;
        b.vx -= (dx / dist) * force;
        b.vy -= (dy / dist) * force;
        b.vz -= (dz / dist) * force;
      });

      // 3. Center gravity & damping
      nodes.forEach((n) => {
        n.vx -= n.x * 0.0006;
        n.vy -= n.y * 0.0006;
        n.vz -= n.z * 0.0006;

        n.vx *= 0.92;
        n.vy *= 0.92;
        n.vz *= 0.92;

        n.x += n.vx;
        n.y += n.vy;
        n.z += n.vz;
      });
    };

    const render = () => {
      const cam = cameraRef.current;

      // Smooth camera interpolation
      cam.rotX += (cam.targetRotX - cam.rotX) * 0.08;
      cam.rotY += (cam.targetRotY - cam.rotY) * 0.08;
      cam.zoom += (cam.targetZoom - cam.zoom) * 0.08;
      cam.panX += (cam.targetPanX - cam.panX) * 0.08;
      cam.panY += (cam.targetPanY - cam.panY) * 0.08;

      // Gentle auto-rotation when not interacting
      if (!cam.isDragging && !selectedId) {
        cam.targetRotY += 0.0006;
      }

      stepPhysics();

      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2 + cam.panX;
      const centerY = height / 2 + cam.panY;

      ctx.clearRect(0, 0, width, height);

      // Precalculate rotation matrices
      const cosY = Math.cos(cam.rotY);
      const sinY = Math.sin(cam.rotY);
      const cosX = Math.cos(cam.rotX);
      const sinX = Math.sin(cam.rotX);

      // 3D Projection helper
      const project = (x: number, y: number, z: number) => {
        // Rotate around Y
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;

        // Rotate around X
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX + cam.zoom;

        const fov = 500;
        const scale = fov / Math.max(z2, 10);

        return {
          px: centerX + x1 * scale,
          py: centerY + y2 * scale,
          scale,
          depth: z2
        };
      };

      // Draw subtle background floating ambient particles
      dustParticles.forEach((p) => {
        const prj = project(p.x, p.y, p.z);
        if (prj.depth > 10) {
          ctx.beginPath();
          ctx.arc(prj.px, prj.py, p.size * prj.scale * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = isMonochrome ? 'rgba(255, 255, 255, 0.06)' : 'rgba(148, 163, 184, 0.12)';
          ctx.fill();
        }
      });

      const nodes = nodesRef.current;
      const edges = edgesRef.current;
      const activeId = hoveredNodeIdRef.current || selectedId;

      // Connected nodes set for selective highlighting
      const connectedNodeIds = new Set<string>();
      if (activeId) {
        connectedNodeIds.add(activeId);
        edges.forEach((e) => {
          if (e.source === activeId) connectedNodeIds.add(e.target);
          if (e.target === activeId) connectedNodeIds.add(e.source);
        });
      }

      // Draw Edges
      const nodeMap = new Map(nodes.map((n) => [n.id, n]));
      edges.forEach((edge) => {
        const a = nodeMap.get(edge.source);
        const b = nodeMap.get(edge.target);
        if (!a || !b) return;

        const isEdgeConnected = activeId && (edge.source === activeId || edge.target === activeId);
        const isDimmed = activeId && !isEdgeConnected;

        // Filter category check
        const matchesFilter =
          filterCategory === 'all' ||
          a.category === filterCategory ||
          b.category === filterCategory;

        if (!matchesFilter) return;

        const pA = project(a.x, a.y, a.z);
        const pB = project(b.x, b.y, b.z);

        ctx.beginPath();
        ctx.moveTo(pA.px, pA.py);
        ctx.lineTo(pB.px, pB.py);

        if (isEdgeConnected) {
          ctx.strokeStyle = isMonochrome
            ? (theme === 'light' ? 'rgba(15, 23, 42, 0.75)' : 'rgba(255, 255, 255, 0.75)')
            : (theme === 'light' ? 'rgba(2, 132, 199, 0.8)' : 'rgba(56, 189, 248, 0.7)');
          ctx.lineWidth = 1.8;
        } else if (isDimmed) {
          ctx.strokeStyle = isMonochrome
            ? (theme === 'light' ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.02)')
            : (theme === 'light' ? 'rgba(148, 163, 184, 0.08)' : 'rgba(255, 255, 255, 0.03)');
          ctx.lineWidth = 0.5;
        } else {
          ctx.strokeStyle = isMonochrome
            ? (theme === 'light' ? 'rgba(15, 23, 42, 0.12)' : 'rgba(255, 255, 255, 0.08)')
            : (theme === 'light' ? 'rgba(100, 116, 139, 0.22)' : 'rgba(148, 163, 184, 0.14)');
          ctx.lineWidth = 0.8;
        }
        ctx.stroke();
      });

      // Sort nodes by depth for correct 3D overlap painter's algorithm
      const projectedNodes = nodes.map((node) => {
        const prj = project(node.x, node.y, node.z);
        return {
          node,
          ...prj
        };
      });
      projectedNodes.sort((a, b) => b.depth - a.depth);

      // Draw Nodes
      projectedNodes.forEach(({ node, px, py, scale, depth }) => {
        if (depth <= 10) return;

        const isSelected = node.id === selectedId;
        const isHovered = node.id === hoveredNodeIdRef.current;
        const isConnected = connectedNodeIds.has(node.id);
        const isCategoryMatch = filterCategory === 'all' || node.category === filterCategory;
        const isSearchMatch =
          !searchQuery.trim() ||
          node.title.toLowerCase().includes(searchQuery.toLowerCase());

        let nodeColor = isMonochrome ? '#e2e8f0' : node.color;
        if (!isCategoryMatch || !isSearchMatch) {
          nodeColor = '#334155';
        }

        const baseRadius = node.radius * scale;
        const drawRadius = isSelected ? baseRadius * 1.8 : isHovered ? baseRadius * 1.4 : baseRadius;

        // Glow halo for selected or hovered nodes
        if (isSelected || isHovered || (activeId && isConnected)) {
          const glowRadius = drawRadius * (isSelected ? 3.5 : 2.5);
          const gradient = ctx.createRadialGradient(px, py, drawRadius * 0.5, px, py, glowRadius);
          gradient.addColorStop(0, isMonochrome ? 'rgba(255, 255, 255, 0.5)' : (CATEGORIES[node.category]?.glowColor || 'rgba(56, 189, 248, 0.4)'));
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.beginPath();
          ctx.arc(px, py, glowRadius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Main Node Core
        ctx.beginPath();
        ctx.arc(px, py, Math.max(drawRadius, 2.5), 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? '#ffffff' : nodeColor;
        ctx.fill();

        // Subtle ring around node
        if (isSelected || isHovered) {
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Draw Labels based on depth, hover, or selection
        const shouldShowLabel =
          isSelected ||
          isHovered ||
          (activeId && isConnected) ||
          scale > 0.85 ||
          (isSearchMatch && searchQuery.trim().length > 0);

        if (shouldShowLabel && isCategoryMatch) {
          const fontSize = Math.max(9, Math.min(13, 11 * scale));
          ctx.font = `${isSelected || isHovered ? '600' : '400'} ${fontSize}px "Server Mono", "JetBrains Mono", monospace`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';

          // Text shadow / readability plate
          if (theme === 'light') {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fillText(node.title, px + 1, py + drawRadius + 4);

            // Main text
            ctx.fillStyle = isSelected
              ? '#0284c7'
              : isHovered
              ? '#0f172a'
              : isConnected
              ? '#334155'
              : isMonochrome
              ? '#475569'
              : '#1e293b';
            ctx.fillText(node.title, px, py + drawRadius + 3);
          } else {
            ctx.fillStyle = 'rgba(10, 10, 15, 0.85)';
            ctx.fillText(node.title, px + 1, py + drawRadius + 4);

            // Main text
            ctx.fillStyle = isSelected
              ? '#ffffff'
              : isHovered
              ? '#f8fafc'
              : isConnected
              ? '#cbd5e1'
              : isMonochrome
              ? '#94a3b8'
              : '#cbd5e1';
            ctx.fillText(node.title, px, py + drawRadius + 3);
          }
        }
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isMonochrome, filterCategory, searchQuery, selectedId, theme]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Raycasting / Hit-testing
  const findNodeAtMouse = useCallback(
    (clientX: number, clientY: number): GraphNode3D | null => {
      const canvas = canvasRef.current;
      if (!canvas) return null;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const mouseX = (clientX - rect.left) * dpr;
      const mouseY = (clientY - rect.top) * dpr;

      const cam = cameraRef.current;
      const centerX = canvas.width / 2 + cam.panX;
      const centerY = canvas.height / 2 + cam.panY;
      const cosY = Math.cos(cam.rotY);
      const sinY = Math.sin(cam.rotY);
      const cosX = Math.cos(cam.rotX);
      const sinX = Math.sin(cam.rotX);

      let closestNode: GraphNode3D | null = null;
      let minDistance = Infinity;

      nodesRef.current.forEach((node) => {
        const x1 = node.x * cosY - node.z * sinY;
        const z1 = node.x * sinY + node.z * cosY;
        const y2 = node.y * cosX - z1 * sinX;
        const z2 = node.y * sinX + z1 * cosX + cam.zoom;

        if (z2 <= 10) return;

        const scale = 500 / z2;
        const px = centerX + x1 * scale;
        const py = centerY + y2 * scale;

        const dx = mouseX - px;
        const dy = mouseY - py;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const hitRadius = Math.max(14 * scale, 12);
        if (dist <= hitRadius && dist < minDistance) {
          minDistance = dist;
          closestNode = node;
        }
      });

      return closestNode;
    },
    []
  );

  // Mouse / Touch Event Handlers
  const handleMouseDown = (e: MouseEvent<HTMLCanvasElement>) => {
    const cam = cameraRef.current;
    cam.isDragging = true;
    cam.dragStartX = e.clientX;
    cam.dragStartY = e.clientY;
    cam.lastMouseX = e.clientX;
    cam.lastMouseY = e.clientY;
  };

  const handleMouseMove = (e: MouseEvent<HTMLCanvasElement>) => {
    const cam = cameraRef.current;
    if (cam.isDragging) {
      const dx = e.clientX - cam.lastMouseX;
      const dy = e.clientY - cam.lastMouseY;

      if (e.buttons === 2 || e.shiftKey) {
        // Pan
        cam.targetPanX += dx * 1.2;
        cam.targetPanY += dy * 1.2;
      } else {
        // Orbit
        cam.targetRotY += dx * 0.005;
        cam.targetRotX = Math.max(-Math.PI * 0.45, Math.min(Math.PI * 0.45, cam.targetRotX + dy * 0.005));
      }

      cam.lastMouseX = e.clientX;
      cam.lastMouseY = e.clientY;
    } else {
      // Hover hit-test
      const hitNode = findNodeAtMouse(e.clientX, e.clientY);
      if (hitNode?.id !== hoveredNodeIdRef.current) {
        hoveredNodeIdRef.current = hitNode?.id || null;
        setActiveHoverNode(hitNode);
        if (hitNode) {
          soundEffects.playHover();
        }
      }
    }
  };

  const handleMouseUp = (e: MouseEvent<HTMLCanvasElement>) => {
    const cam = cameraRef.current;
    const moved = Math.hypot(e.clientX - cam.dragStartX, e.clientY - cam.dragStartY);
    cam.isDragging = false;

    // If mouse didn't drag significantly, treat as a click
    if (moved < 5) {
      const clickedNode = findNodeAtMouse(e.clientX, e.clientY);
      if (clickedNode) {
        soundEffects.playSelect();
        onSelectItem(clickedNode.id);
      }
    }
  };

  const handleWheel = (e: WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const cam = cameraRef.current;
    const zoomDelta = e.deltaY * 0.6;
    cam.targetZoom = Math.max(220, Math.min(1300, cam.targetZoom + zoomDelta));
  };

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-slate-50 dark:bg-[#090a0f] transition-colors duration-200">
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full h-full cursor-grab active:cursor-grabbing block"
      />

      {/* Floating HUD controls hint */}
      <div className="absolute bottom-4 left-4 pointer-events-none text-xs text-slate-500 dark:text-zinc-500 font-mono flex items-center gap-4 bg-white/80 dark:bg-zinc-950/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 dark:border-zinc-800/60 shadow-xs">
        <span>Drag: Orbit</span>
        <span>•</span>
        <span>Scroll: Zoom</span>
        <span>•</span>
        <span>Shift + Drag: Pan</span>
        <span>•</span>
        <span>Click node: Inspect</span>
      </div>

      {/* Hover preview tooltip */}
      {activeHoverNode && (
        <div className="absolute top-4 left-4 pointer-events-none bg-white/95 dark:bg-zinc-900/90 backdrop-blur-md border border-slate-200 dark:border-zinc-700/60 px-3 py-2 rounded-lg shadow-xl text-left max-w-xs transition-opacity duration-150">
          <div className="text-xs font-semibold text-slate-900 dark:text-zinc-200">{activeHoverNode.title}</div>
          <div className="text-[10px] text-slate-500 dark:text-zinc-400 capitalize mt-0.5">
            {CATEGORIES[activeHoverNode.category]?.label}
          </div>
        </div>
      )}
    </div>
  );
};
