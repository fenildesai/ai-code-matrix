import { useEffect, useState, type FC } from 'react';
import type { DictionaryItem } from '../types/dictionary';
import { CATEGORIES, getConnectedItems } from '../data/dictionaryData';
import { soundEffects } from '../utils/soundEffects';
import { 
  X, 
  Share2, 
  Check, 
  AlertTriangle, 
  MessageSquareQuote, 
  Network, 
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface TermDetailDrawerProps {
  item: DictionaryItem | null;
  onClose: () => void;
  onSelectTerm: (id: string) => void;
}

export const TermDetailDrawer: FC<TermDetailDrawerProps> = ({
  item,
  onClose,
  onSelectTerm
}) => {
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && item) {
        soundEffects.playClose();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  const category = CATEGORIES[item.category];
  const connectedItems = getConnectedItems(item.id);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.hash = item.id;
      navigator.clipboard.writeText(url.toString());
      setCopied(true);
      soundEffects.playClick();
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSelectConnected = (id: string) => {
    soundEffects.playSelect();
    onSelectTerm(id);
  };

  const handleClose = () => {
    soundEffects.playClose();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={handleClose}
        className="fixed inset-0 bg-black/40 dark:bg-black/50 backdrop-blur-sm z-40 transition-opacity animate-in fade-in duration-200"
      />

      {/* Drawer Container */}
      <aside 
        className="fixed top-0 right-0 bottom-0 w-full sm:w-[540px] md:w-[600px] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl border-l border-slate-200 dark:border-zinc-800 shadow-2xl z-50 flex flex-col overflow-hidden animate-in slide-in-from-right duration-250 select-text transition-colors duration-200"
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-200 dark:border-zinc-800/80 flex items-start justify-between gap-4 bg-slate-50/80 dark:bg-zinc-900/40">
          <div className="flex-1 min-w-0">
            {/* Category badge */}
            <div className="flex items-center gap-2 mb-2">
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ backgroundColor: category?.color || '#38bdf8' }}
              />
              <span 
                className="text-xs font-mono font-medium tracking-wide uppercase"
                style={{ color: category?.color || '#38bdf8' }}
              >
                {category?.label || item.category}
              </span>
            </div>

            {/* Term Title */}
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-zinc-100 font-mono">
              {item.title}
            </h1>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200 hover:bg-slate-200 dark:hover:bg-zinc-800 transition-colors"
              title="Copy link to term"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={handleClose}
              className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200 hover:bg-slate-200 dark:hover:bg-zinc-800 transition-colors"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 text-slate-700 dark:text-zinc-300">
          {/* Core Definition Quote Card */}
          <div className="relative p-4 rounded-xl bg-gradient-to-r from-slate-100/90 to-slate-50/40 dark:from-zinc-900/90 dark:to-zinc-900/40 border border-slate-200/90 dark:border-zinc-800/90 shadow-inner">
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-slate-900 dark:text-zinc-100 font-medium leading-relaxed">
                {item.shortDef}
              </p>
            </div>
          </div>

          {/* ELI5 Section */}
          {item.eli5 && (
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <span>🧒</span>
                <span>Explain Like I'm 5</span>
              </div>
              <p className="text-sm leading-relaxed text-amber-800 dark:text-amber-200/90">
                {item.eli5}
              </p>
            </div>
          )}

          {/* Practical Example */}
          {item.practicalExample && (
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30 space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <span>💡</span>
                <span>Practical Example</span>
              </div>
              <p className="text-sm leading-relaxed text-emerald-800 dark:text-emerald-200/90">
                {item.practicalExample}
              </p>
            </div>
          )}

          {/* Deep Dive Breakdown */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
              Mechanism & Deep Dive
            </h3>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-zinc-300 font-normal">
              {item.deepDive}
            </p>
          </div>

          {/* Pitfalls / What to Avoid */}
          {item.avoid && (
            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/30 space-y-2">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>What to Avoid / Common Trap</span>
              </div>
              <p className="text-sm leading-relaxed text-rose-700 dark:text-rose-200/90">
                {item.avoid}
              </p>
            </div>
          )}

          {/* In The Wild Dialogue */}
          {item.usage && (
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 space-y-2">
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <MessageSquareQuote className="w-4 h-4" />
                <span>In The Wild</span>
              </div>
              <blockquote className="text-sm italic text-slate-600 dark:text-zinc-300 border-l-2 border-sky-500/40 pl-3 leading-relaxed">
                {item.usage}
              </blockquote>
            </div>
          )}

          {/* Connected Knowledge Network */}
          {connectedItems.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
                <Network className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                <span>Connected Concepts ({connectedItems.length})</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {connectedItems.map((rel) => {
                  const relCat = CATEGORIES[rel.category];
                  return (
                    <button
                      key={rel.id}
                      onClick={() => handleSelectConnected(rel.id)}
                      className="group flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-zinc-900/70 border border-slate-200 dark:border-zinc-800/80 hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-800/60 transition-all text-left"
                    >
                      <div className="min-w-0 pr-2">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: relCat?.color || '#38bdf8' }}
                          />
                          <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 truncate">
                            {relCat?.label || rel.category}
                          </span>
                        </div>
                        <div className="text-xs font-mono font-semibold text-slate-700 dark:text-zinc-200 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors truncate">
                          {rel.title}
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-600 group-hover:text-slate-600 dark:group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-zinc-800/80 bg-slate-50/80 dark:bg-zinc-900/40 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-zinc-500">
          <span>Slug: #{item.id}</span>
          <span>The AI Code Matrix</span>
        </div>
      </aside>
    </>
  );
};
