export type Category =
  | 'the-model'
  | 'sessions-turns'
  | 'tools-environment'
  | 'context-failure'
  | 'handoffs-memory'
  | 'steering-capabilities'
  | 'patterns-of-work'
  | 'economics-production';

export interface CategoryInfo {
  id: Category;
  label: string;
  description: string;
  color: string;
  glowColor: string;
  accentClass: string;
}

export interface DictionaryItem {
  id: string;
  title: string;
  category: Category;
  shortDef: string;
  eli5: string; // "Explain Like I'm 5" relatable real-world metaphor
  deepDive: string;
  practicalExample?: string;
  avoid?: string;
  usage?: string;
  relatedIds: string[];
  tags?: string[];
}

export interface GraphNode3D {
  id: string;
  title: string;
  category: Category;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  color: string;
}

export interface GraphEdge3D {
  source: string;
  target: string;
}

export type ViewMode = 'universe' | 'lexicon' | 'simulator';

export type ThemeMode = 'light' | 'dark';

export interface SimulatorTurn {
  id: number;
  type: 'user' | 'assistant' | 'tool';
  label: string;
  inputTokens: number;
  outputTokens: number;
  cachedTokens: number;
  reasoningTokens: number;
}
