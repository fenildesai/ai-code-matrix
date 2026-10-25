import { useRef, useEffect, type FC } from 'react';
import type { Category } from '../types/dictionary';
import { CATEGORIES, getAllCategories } from '../data/dictionaryData';
import { soundEffects } from '../utils/soundEffects';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: Category | 'all';
  onCategoryChange: (category: Category | 'all') => void;
  totalResults: number;
}

export const SearchBar: FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  totalResults
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const categories = getAllCategories();

  // Hotkey listener for '/' or 'Cmd+K' / 'Ctrl+K'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') ||
        ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')
      ) {
        e.preventDefault();
        inputRef.current?.focus();
        soundEffects.playClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCategoryClick = (cat: Category | 'all') => {
    soundEffects.playClick();
    onCategoryChange(cat);
  };

  const handleClear = () => {
    onSearchChange('');
    inputRef.current?.focus();
    soundEffects.playClick();
  };

  return (
    <div className="w-full bg-white/90 dark:bg-zinc-950/60 backdrop-blur-md border-b border-slate-200/80 dark:border-zinc-800/60 px-4 py-2.5 flex flex-col gap-2 z-20 shrink-0 transition-colors duration-200">
      <div className="flex items-center gap-3 max-w-5xl mx-auto w-full">
        {/* Search Input Box */}
        <div className="relative flex-1 group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-zinc-500 group-focus-within:text-sky-500 dark:group-focus-within:text-sky-400 transition-colors">
            <Search className="w-4 h-4" />
          </div>

          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search terms, concepts, pitfalls, or workflows..."
            className="w-full pl-9 pr-16 py-1.5 bg-slate-50 dark:bg-zinc-900/80 border border-slate-300 dark:border-zinc-800/90 rounded-lg text-sm text-slate-900 dark:text-zinc-200 placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-sky-500/60 focus:ring-1 focus:ring-sky-500/30 transition-all font-mono"
          />

          <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center gap-1.5">
            {searchQuery && (
              <button
                onClick={handleClear}
                className="p-1 text-slate-400 dark:text-zinc-500 hover:text-slate-700 dark:hover:text-zinc-300 rounded hover:bg-slate-100 dark:hover:bg-zinc-800/50"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-slate-400 dark:text-zinc-500 bg-slate-100 dark:bg-zinc-800/70 rounded border border-slate-300 dark:border-zinc-700/50">
              /
            </kbd>
          </div>
        </div>

        {/* Results counter */}
        <div className="text-xs font-mono text-slate-500 dark:text-zinc-500 whitespace-nowrap">
          {totalResults} {totalResults === 1 ? 'match' : 'matches'}
        </div>
      </div>

      {/* Category Filter Pills (Wrapping – all domains always visible) */}
      <div className="flex items-center gap-1.5 flex-wrap max-w-5xl mx-auto w-full">
        <button
          onClick={() => handleCategoryClick('all')}
          className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
            activeCategory === 'all'
              ? 'bg-sky-600 text-white font-semibold shadow-sm'
              : 'bg-slate-100 dark:bg-zinc-900/60 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 hover:bg-slate-200 dark:hover:bg-zinc-800/60 border border-slate-300 dark:border-zinc-800/60'
          }`}
        >
          All Domains
        </button>

        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap flex items-center gap-1.5 transition-all ${
                isActive
                  ? 'bg-slate-800 dark:bg-zinc-800 text-white dark:text-zinc-100 border border-slate-700 dark:border-zinc-700 shadow-sm'
                  : 'bg-slate-100 dark:bg-zinc-900/60 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 hover:bg-slate-200 dark:hover:bg-zinc-800/60 border border-slate-300 dark:border-zinc-800/60'
              }`}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: CATEGORIES[cat.id]?.color }}
              />
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
