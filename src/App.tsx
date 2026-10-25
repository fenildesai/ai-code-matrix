import { useState, useEffect, useMemo, useCallback } from 'react';
import type { ViewMode, Category, ThemeMode } from './types/dictionary';
import { DICTIONARY_ITEMS, getItemById, searchDictionary } from './data/dictionaryData';
import { soundEffects } from './utils/soundEffects';

import { Navbar } from './components/Navbar';
import { SearchBar } from './components/SearchBar';
import { GraphCanvas } from './components/GraphCanvas';
import { LexiconListView } from './components/LexiconListView';
import { ContextSimulator } from './components/ContextSimulator';
import { TermDetailDrawer } from './components/TermDetailDrawer';
import { AboutModal } from './components/AboutModal';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('universe');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [isMonochrome, setIsMonochrome] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(soundEffects.getMuted());
  const [isAboutOpen, setIsAboutOpen] = useState<boolean>(false);

  // Theme state: default to 'light'
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ai_matrix_theme');
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'light'; // Light version is default!
  });

  // Keep <html> class synchronized with theme
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.add('light');
        root.classList.remove('dark');
      }
      localStorage.setItem('ai_matrix_theme', theme);
    }
  }, [theme]);

  const handleToggleTheme = useCallback(() => {
    soundEffects.playClick();
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  // Sync with URL Hash on mount & hash changes
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace(/^#/, '').trim().toLowerCase();
      if (hash) {
        const found = getItemById(hash);
        if (found) {
          setSelectedId(found.id);
        }
      }
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  // Update URL Hash when selectedId changes
  const handleSelectItem = useCallback((id: string) => {
    setSelectedId(id);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${id}`);
    }
  }, []);

  const handleCloseDetail = useCallback(() => {
    setSelectedId(null);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  // Mute toggle handler
  const handleToggleMute = useCallback(() => {
    const newMuted = soundEffects.toggleMute();
    setIsMuted(newMuted);
  }, []);

  // Filtered dictionary items
  const filteredItems = useMemo(() => {
    return searchDictionary(searchQuery, activeCategory);
  }, [searchQuery, activeCategory]);

  // Selected item object
  const selectedItem = useMemo(() => {
    if (!selectedId) return null;
    return getItemById(selectedId) || null;
  }, [selectedId]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === '1') {
        setViewMode('universe');
        soundEffects.playClick();
      } else if (e.key === '2') {
        setViewMode('lexicon');
        soundEffects.playClick();
      } else if (e.key === '3') {
        setViewMode('simulator');
        soundEffects.playClick();
      } else if (e.key.toLowerCase() === 'm') {
        handleToggleMute();
      } else if (e.key.toLowerCase() === 't') {
        handleToggleTheme();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleToggleMute, handleToggleTheme]);

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-slate-50 text-slate-900 dark:bg-[#090a0f] dark:text-zinc-100 font-sans select-none transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        isMonochrome={isMonochrome}
        onToggleMonochrome={() => setIsMonochrome((prev) => !prev)}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onOpenAbout={() => setIsAboutOpen(true)}
        totalTermsCount={DICTIONARY_ITEMS.length}
      />

      {/* Search & Domain Filter Bar (for Universe and Lexicon views) */}
      {viewMode !== 'simulator' && (
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          totalResults={filteredItems.length}
        />
      )}

      {/* Main View Port */}
      <main className="flex-1 relative overflow-hidden flex flex-col">
        {viewMode === 'universe' && (
          <GraphCanvas
            items={filteredItems}
            selectedId={selectedId}
            onSelectItem={handleSelectItem}
            isMonochrome={isMonochrome}
            filterCategory={activeCategory}
            searchQuery={searchQuery}
            theme={theme}
          />
        )}

        {viewMode === 'lexicon' && (
          <LexiconListView
            items={filteredItems}
            activeCategory={activeCategory}
            searchQuery={searchQuery}
            onSelectItem={handleSelectItem}
          />
        )}

        {viewMode === 'simulator' && <ContextSimulator />}
      </main>

      {/* Term Detail Drawer Modal */}
      <TermDetailDrawer
        item={selectedItem}
        onClose={handleCloseDetail}
        onSelectTerm={handleSelectItem}
      />

      {/* About Project Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
}
