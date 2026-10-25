import type { FC } from 'react';
import type { ViewMode, ThemeMode } from '../types/dictionary';
import { soundEffects } from '../utils/soundEffects';
import { 
  Globe2, 
  BookOpen, 
  Cpu, 
  Palette, 
  Volume2, 
  VolumeX, 
  Info,
  Sparkles,
  Sun,
  Moon
} from 'lucide-react';

interface NavbarProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  isMonochrome: boolean;
  onToggleMonochrome: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onOpenAbout: () => void;
  totalTermsCount: number;
}

export const Navbar: FC<NavbarProps> = ({
  viewMode,
  onViewModeChange,
  theme,
  onToggleTheme,
  isMonochrome,
  onToggleMonochrome,
  isMuted,
  onToggleMute,
  onOpenAbout,
  totalTermsCount
}) => {
  const handleModeChange = (mode: ViewMode) => {
    soundEffects.playClick();
    onViewModeChange(mode);
  };

  const handleMonochromeClick = () => {
    soundEffects.playClick();
    onToggleMonochrome();
  };

  const handleMuteClick = () => {
    onToggleMute();
    if (isMuted) {
      soundEffects.playSelect();
    }
  };

  const handleAboutClick = () => {
    soundEffects.playOpen();
    onOpenAbout();
  };

  return (
    <header className="h-14 border-b border-slate-200/90 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-950/85 backdrop-blur-xl px-4 flex items-center justify-between select-none z-30 shrink-0 transition-colors duration-200">
      {/* Brand Identity */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500 p-[1px] shadow-sm shadow-indigo-500/20">
            <div className="w-full h-full bg-white dark:bg-zinc-950 rounded-[7px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-sky-500 dark:text-sky-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm tracking-tight text-slate-900 dark:text-zinc-100 font-mono">
                The AI Code Matrix
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-semibold">
                v1.2
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation View Switcher */}
      <div className="flex items-center p-1 bg-slate-100 dark:bg-zinc-900/90 rounded-xl border border-slate-200 dark:border-zinc-800">
        <button
          onClick={() => handleModeChange('universe')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            viewMode === 'universe'
              ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-xs border border-slate-200/80 dark:border-zinc-700/60 font-semibold'
              : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
          }`}
          title="3D Knowledge Universe"
        >
          <Globe2 className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400" />
          <span className="hidden sm:inline">3D Universe</span>
        </button>

        <button
          onClick={() => handleModeChange('lexicon')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            viewMode === 'lexicon'
              ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-xs border border-slate-200/80 dark:border-zinc-700/60 font-semibold'
              : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
          }`}
          title="Lexicon Grid View"
        >
          <BookOpen className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span className="hidden sm:inline">Encyclopedia</span>
          <span className="text-[10px] text-slate-500 dark:text-zinc-500 font-mono">({totalTermsCount})</span>
        </button>

        <button
          onClick={() => handleModeChange('simulator')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            viewMode === 'simulator'
              ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-zinc-100 shadow-xs border border-slate-200/80 dark:border-zinc-700/60 font-semibold'
              : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
          }`}
          title="Context Quest (Gamified Token Simulator)"
        >
          <Cpu className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
          <span className="hidden sm:inline">Context Quest</span>
          <span className="text-[10px] text-amber-600 dark:text-amber-400 font-mono font-bold px-1.5 py-0.5 rounded bg-amber-500/10">Game</span>
        </button>
      </div>

      {/* Utility Controls */}
      <div className="flex items-center gap-1.5">
        {/* Theme Toggle (Light / Dark) */}
        <button
          onClick={onToggleTheme}
          className="p-2 rounded-lg text-xs font-medium border border-slate-200 dark:border-zinc-800 bg-slate-100 dark:bg-zinc-900/60 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-zinc-100 hover:bg-slate-200 dark:hover:bg-zinc-800/50 transition-colors"
          title={theme === 'light' ? 'Switch to Dark Mode (Press T)' : 'Switch to Light Mode (Press T)'}
        >
          {theme === 'light' ? <Moon className="w-4 h-4 text-indigo-600" /> : <Sun className="w-4 h-4 text-amber-400" />}
        </button>

        {/* Color Palette Toggle (Category / Monochrome) */}
        <button
          onClick={handleMonochromeClick}
          className={`p-2 rounded-lg text-xs font-medium border transition-colors ${
            isMonochrome
              ? 'bg-slate-200 dark:bg-zinc-800 border-slate-300 dark:border-zinc-700 text-slate-900 dark:text-zinc-100'
              : 'bg-slate-100 dark:bg-zinc-900/60 border-slate-200 dark:border-zinc-800/80 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 hover:bg-slate-200 dark:hover:bg-zinc-800/50'
          }`}
          title={isMonochrome ? 'Switch to Vibrant Category Colors' : 'Switch to Minimalist Monochrome'}
        >
          <Palette className="w-4 h-4" />
        </button>

        {/* Sound Toggle */}
        <button
          onClick={handleMuteClick}
          className={`p-2 rounded-lg text-xs font-medium border transition-colors ${
            !isMuted
              ? 'bg-slate-100 dark:bg-zinc-900/60 border-slate-200 dark:border-zinc-800/80 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-zinc-100'
              : 'bg-slate-100/50 dark:bg-zinc-900/40 border-slate-200 dark:border-zinc-800 text-slate-400 dark:text-zinc-600'
          }`}
          title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        {/* About Modal Button */}
        <button
          onClick={handleAboutClick}
          className="p-2 rounded-lg text-xs font-medium bg-slate-100 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800/80 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 hover:bg-slate-200 dark:hover:bg-zinc-800/50 transition-colors"
          title="About This Project"
        >
          <Info className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
