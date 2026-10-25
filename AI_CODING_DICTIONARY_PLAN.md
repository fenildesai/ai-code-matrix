# AI Coding Dictionary (Custom Edition) - Complete Project & Architecture Plan

A modern, enhanced recreation and evolution of [The AI Coding Dictionary](https://www.aicodingdictionary.com/) by Matt Pocock / AI Hero.

---

## 1. Vision & Differentiation

The original **AI Coding Dictionary** introduced a brilliant premise: translate the confusing, buzzword-heavy jargon of AI coding into plain English and map the concepts into an interactive 3D knowledge graph.

### How We Are Making It "Our Own Version" (Key Enhancements)

| Feature | Original AI Coding Dictionary | Our Custom Version |
| :--- | :--- | :--- |
| **Vocabulary Scope** | 71 terms across 7 sections | **80+ terms across 8 sections**, updated for 2025/2026 agentic developments |
| **New 2025/2026 Concepts** | Baseline LLM concepts | *Model Context Protocol (MCP)*, *Prompt Caching / KV Cache*, *Spec-Driven Development (SDD)*, *Reasoning/Thinking Tokens*, *Subagent Swarms*, *Context Poisoning*, *Lost-in-the-Middle*, *Self-Healing Loops* |
| **Dual View Modes** | 3D Graph only | **3D Universe Graph** 🌌 + **Lexicon Encyclopedia View** 📖 + **Interactive Simulator** 🧪 |
| **Interactive Simulator** | None | **Live Token & Context Simulator**: Visualize how turns, tools, prefix caches, and attention budgets consume window limits |
| **Learning Paths** | Unstructured graph browsing | **Guided Paths**: Curated journeys (*"From Prompt to Agent"*, *"Context Engineering Masterclass"*, *"Agentic Architecture"*) |
| **Audio Feedback** | Pre-recorded audio clips | **Synthesized Web Audio**: Zero-asset audio engine generating futuristic micro-interaction soundscapes |
| **Search & Discovery** | Basic input search | Fast fuzzy search with keyboard hotkeys (`/` or `Cmd+K`), category filter chips, and instant graph highlighting |
| **Theming** | Light / Dark base | **Vibrant Category Spectrum** vs **Sleek Minimalist Monochrome** + Dark/Light adaptability |

---

## 2. Information Architecture & Content Taxonomy

The vocabulary is organized into 8 interconnected knowledge clusters:

```
                          ┌───────────────────────────┐
                          │   1. The Model & Core     │
                          │   (Tokens, Weights, LLMs) │
                          └─────────────┬─────────────┘
                                        │
                 ┌──────────────────────┼──────────────────────┐
                 ▼                      ▼                      ▼
    ┌─────────────────────────┐  ┌──────────────┐  ┌─────────────────────────┐
    │ 2. Sessions, Turns &    │  │ 3. Tools &   │  │ 4. Context Engineering  │
    │    Harnesses            │  │   Environments│  │    & Failure Modes      │
    └────────────┬────────────┘  └──────┬───────┘  └────────────┬────────────┘
                 │                      │                       │
                 └──────────────────────┼───────────────────────┘
                                        │
                 ┌──────────────────────┼──────────────────────┐
                 ▼                      ▼                      ▼
    ┌─────────────────────────┐  ┌──────────────┐  ┌─────────────────────────┐
    │ 5. Handoffs, Specs &    │  │ 6. Steering &│  │ 7. Patterns of Work     │
    │    Memory Systems       │  │   Subagents  │  │    (HITL, AFK, Vibe)    │
    └─────────────────────────┘  └──────────────┘  └─────────────────────────┘
                                        │
                                        ▼
                          ┌───────────────────────────┐
                          │ 8. Economics & Production │
                          │ (Tokenomics, Cache, Evs)  │
                          └───────────────────────────┘
```

### Detailed Section Breakdown

1. **The Model & Inference**:
   * *AI*, *Model*, *Parameters (Weights)*, *Training*, *Inference*, *Next-Token Prediction*, *Token*, *Effort & Thinking Tokens*, *Model Provider*, *Model Provider Request*, *Input Tokens*, *Output Tokens*, *Prefix Cache*, *Cache Tokens*, *Non-Determinism*, *Knowledge Cutoff*.
2. **Sessions, Context Windows & Turns**:
   * *Harness*, *Agent*, *Context Window*, *Context*, *Session*, *Turn*, *Stateful vs Stateless*, *System Prompt*, *Context Priming*.
3. **Tools & Environment**:
   * *Tool*, *Tool Call*, *Tool Result*, *Environment*, *Filesystem*, *Sandbox*, *Permission Request*, *Permission Mode*, *Agent Mode*, *MCP (Model Context Protocol)*.
4. **Context Engineering & Failure Modes**:
   * *Attention Budget*, *Attention Degradation*, *Attention Relationship*, *Lost in the Middle*, *Context Poisoning*, *Contextual Knowledge*, *Parametric Knowledge*, *Hallucination*, *Sycophancy*, *Smart Zone vs Dumb Zone*.
5. **Handoffs & Memory**:
   * *Handoff*, *Compaction*, *Autocompact*, *Clearing*, *Handoff Artifact*, *Spec-Driven Development*, *Spec*, *Ticket*, *Primary Source vs Secondary Source*, *Memory System*.
6. **Steering & Agent Capabilities**:
   * *AGENTS.md*, *Context Pointer*, *Progressive Disclosure*, *Skill*, *Subagent*, *Subagent Swarm*, *Deterministic Guardrails*, *Self-Healing Loop*.
7. **Patterns of Work**:
   * *Human-in-the-Loop (HITL)*, *AFK (Away From Keyboard)*, *Automated Check*, *Automated Review*, *Human Review*, *Vibe Coding*, *Dark Factory*, *Software Factory*, *DX (Developer Experience)*, *AX (Agent Experience)*, *Design Concept*, *Grilling*, *Prototyping*.
8. **Economics & Production Architecture**:
   * *Tokenomics*, *KV Cache Hit Rate*, *Cost-Quality Pareto Curve*, *Inference Compute Scaling*, *Local vs Hosted Models*.

---

## 3. Technology Stack & Technical Choices

- **Framework**: React 19 + TypeScript (Strict typing for all definitions and graph math).
- **Bundler & Tooling**: Vite 8 + Oxlint.
- **Styling**: Modern CSS design system featuring:
  - Monospace + Grotesk typography inspired by editorial developer tools.
  - Glassmorphic translucent surfaces (`backdrop-filter: blur`).
  - Dark cosmic / warm parchment modes.
- **3D Physics & Visual Graph Engine**:
  - Custom Canvas 3D force-directed physics engine.
  - True 3D coordinate system ($x, y, z$) with perspective projection, orbital rotation, mouse wheel zoom, pan, and inertial damping.
  - Glow shaders / canvas radial gradients for node depth-of-field.
  - Interactive raycasting / hit-testing for hover and click detection.
- **Micro-Interaction Sound Effects**:
  - Web Audio API pure synthesizer (sine, triangle, bandpass filters) creating subtle, pleasant acoustic feedback without external MP3 asset loads.
- **Icons**: Lucide React for consistent, crisp interface iconography.

---

## 4. UI Components & Layout Architecture

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  Navbar: Brand Logo | View Mode (3D/List/Sim) | Color Mode | Sound | About   │
├──────────────────────────────────────────────────────────────────────────────┤
│  Search & Category Filter Bar: [ Search terms... (/) ] [ All ] [ Model ] ...  │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                                                   ┌─────────────────────────┐│
│                                                   │ Term Detail Drawer:     ││
│              3D Knowledge Graph Canvas            │                         ││
│                         OR                        │  - Term Name & Category ││
│                Lexicon / List View                │  - Punchy Definition    ││
│                         OR                        │  - Mechanics / Deep Dive││
│                 Context Simulator                 │  - ⚠️ What to Avoid     ││
│                                                   │  - 💬 In The Wild Quote ││
│                                                   │  - Connected Nodes      ││
│                                                   │  - [ Jump to Node ]     ││
│                                                   └─────────────────────────┘│
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  Status Bar: Term count, Active filters, Graph physics stats & navigation tip│
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Execution Roadmap

1. **Phase 1: Dependencies & Data Modeling**
   - Install `lucide-react`.
   - Create TypeScript definitions in `src/types/dictionary.ts`.
   - Build complete 80+ item dataset in `src/data/dictionaryData.ts` with relationships and rich explanations.
2. **Phase 2: Audio & Utilities**
   - Implement zero-dependency Web Audio synthesizer in `src/utils/soundEffects.ts`.
3. **Phase 3: 3D Force-Directed Graph Engine**
   - Implement `src/components/GraphCanvas.tsx` featuring 3D projection, orbital rotation, zoom, physics simulation, node glow, and connected link rendering.
4. **Phase 4: Search, Navigation & Slide-out Drawer**
   - Create `Navbar.tsx`, `SearchBar.tsx`, and `TermDetailDrawer.tsx` with smooth transitions and deep-linking.
5. **Phase 5: Alternative Views (Lexicon List & Context Simulator)**
   - Create `LexiconListView.tsx` for fast encyclopedia browsing.
   - Create `ContextSimulator.tsx` for interactive token & context window exploration.
   - Create `AboutModal.tsx`.
6. **Phase 6: Integration, Polish & Verification**
   - Wire everything into `src/App.tsx` and refine `src/index.css`.
   - Verify build (`npm run build`), linting (`oxlint`), responsiveness, and interaction flow.
