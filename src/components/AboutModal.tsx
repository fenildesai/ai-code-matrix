import type { FC } from 'react';
import { soundEffects } from '../utils/soundEffects';
import { X, Sparkles, ExternalLink, Heart } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    soundEffects.playClose();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-white/95 dark:bg-zinc-950/95 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-6 z-10 space-y-5 animate-in zoom-in-95 duration-200 text-slate-700 dark:text-zinc-300 transition-colors duration-200">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-zinc-800/80 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-500 p-[1px]">
              <div className="w-full h-full bg-white dark:bg-zinc-950 rounded-[7px] flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
              </div>
            </div>
            <h2 className="text-base font-bold font-mono text-slate-900 dark:text-zinc-100">
              About The AI Code Matrix
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 dark:text-zinc-400 hover:text-slate-700 dark:hover:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
          <p>
            <strong>AI coding shouldn't feel like a black box.</strong> Jargon like <em>context windows</em>, <em>attention budgets</em>, <em>MCP servers</em>, and <em>handoff artifacts</em> are frequently thrown around with little clear explanation.
          </p>

          <p>
            This project translates the entire vocabulary of modern agentic coding into plain, intuitive English. Every concept is connected into an interactive 3D knowledge network so you can explore relationships visually.
          </p>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 space-y-2">
            <div className="text-xs font-mono font-semibold text-slate-800 dark:text-zinc-200 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
              <span>2026 Enhanced Edition Additions</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-500 dark:text-zinc-400">
              <li><strong>80+ Curated Concepts</strong> across 8 knowledge clusters.</li>
              <li><strong>2025/2026 Breakthroughs:</strong> Model Context Protocol (MCP), Prompt Caching / KV Caching, Spec-Driven Development, Reasoning Effort, Subagent Swarms, and Self-Healing Loops.</li>
              <li><strong>Interactive Token Simulator:</strong> Visual experiment of attention zones, context window limits, and cost equations.</li>
              <li><strong>Web Audio Engine:</strong> Synthesized micro-interaction soundscapes.</li>
            </ul>
          </div>

          <div className="text-xs text-slate-500 dark:text-zinc-400 space-y-1">
            <p>
              Originally inspired by <a href="https://www.aicodingdictionary.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline inline-flex items-center gap-1">The AI Coding Dictionary <ExternalLink className="w-3 h-3" /></a> by Matt Pocock at aihero.dev.
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-200 dark:border-zinc-800/80 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-zinc-500">
          <span className="flex items-center gap-1">
            Built for developers <Heart className="w-3 h-3 text-rose-500 inline fill-rose-500" />
          </span>
          <button
            onClick={handleClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold hover:bg-slate-800 dark:hover:bg-white transition-colors"
          >
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
};
