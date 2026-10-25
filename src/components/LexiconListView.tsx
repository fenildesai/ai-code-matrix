import type { FC } from 'react';
import type { DictionaryItem, Category } from '../types/dictionary';
import { getAllCategories } from '../data/dictionaryData';
import { soundEffects } from '../utils/soundEffects';
import { ArrowUpRight, Network } from 'lucide-react';

interface LexiconListViewProps {
  items: DictionaryItem[];
  activeCategory: Category | 'all';
  searchQuery: string;
  onSelectItem: (id: string) => void;
}

export const LexiconListView: FC<LexiconListViewProps> = ({
  items,
  activeCategory,
  onSelectItem
}) => {
  const categories = getAllCategories();

  // Group items by category
  const groupedItems = categories.reduce<Record<Category, DictionaryItem[]>>((acc, cat) => {
    acc[cat.id] = items.filter((item) => item.category === cat.id);
    return acc;
  }, {} as Record<Category, DictionaryItem[]>);

  const handleCardClick = (id: string) => {
    soundEffects.playSelect();
    onSelectItem(id);
  };

  const handleCardHover = () => {
    soundEffects.playHover();
  };

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-[#090a0f] p-4 sm:p-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto space-y-12">
        {categories
          .filter((cat) => activeCategory === 'all' || activeCategory === cat.id)
          .map((cat) => {
            const catItems = groupedItems[cat.id] || [];
            if (catItems.length === 0) return null;

            return (
              <section key={cat.id} className="space-y-4">
                {/* Category Header */}
                <div className="border-b border-slate-200 dark:border-zinc-800 pb-3 flex items-start sm:items-center justify-between gap-4 flex-col sm:flex-row">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: cat.color }}
                      />
                      <h2 className="text-xl font-bold font-mono text-slate-900 dark:text-zinc-100 tracking-tight">
                        {cat.label}
                      </h2>
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-300 dark:border-zinc-800 text-slate-500 dark:text-zinc-400">
                        {catItems.length}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1 max-w-2xl">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Term Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {catItems.map((item) => {
                    return (
                      <div
                        key={item.id}
                        onClick={() => handleCardClick(item.id)}
                        onMouseEnter={handleCardHover}
                        className="group relative flex flex-col justify-between p-5 rounded-xl bg-white dark:bg-zinc-900/50 hover:bg-slate-50 dark:hover:bg-zinc-900/90 border border-slate-200 dark:border-zinc-800/80 hover:border-slate-300 dark:hover:border-zinc-700 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-black/50"
                      >
                        <div>
                          {/* Top row */}
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span 
                              className="text-[11px] font-mono tracking-wider uppercase font-semibold"
                              style={{ color: cat.color }}
                            >
                              {cat.label}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-600 group-hover:text-slate-700 dark:group-hover:text-zinc-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>

                          {/* Title */}
                          <h3 className="text-lg font-bold font-mono text-slate-900 dark:text-zinc-100 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors mb-2">
                            {item.title}
                          </h3>

                          {/* Short Definition */}
                          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                            {item.shortDef}
                          </p>
                        </div>

                        {/* Footer tags */}
                        {item.relatedIds.length > 0 && (
                          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-zinc-800/60 flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-zinc-500">
                            <Network className="w-3 h-3 text-slate-400 dark:text-zinc-500" />
                            <span>{item.relatedIds.length} connected</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}

        {items.length === 0 && (
          <div className="py-24 text-center space-y-3">
            <div className="text-slate-500 dark:text-zinc-500 font-mono text-sm">No dictionary entries matched your query.</div>
            <p className="text-xs text-slate-400 dark:text-zinc-600">Try searching for concepts like "MCP", "Context window", "Compaction", or "Sycophancy".</p>
          </div>
        )}
      </div>
    </div>
  );
};
