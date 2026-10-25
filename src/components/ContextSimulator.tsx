import { useState, type FC } from 'react';
import { soundEffects } from '../utils/soundEffects';
import { 
  DollarSign, 
  Activity, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  ShieldAlert,
  Zap,
  Award,
  BookOpen
} from 'lucide-react';

interface MissionStep {
  id: number;
  scenarioTitle: string;
  situation: string;
  question: string;
  optionA: {
    title: string;
    description: string;
    isOptimal: boolean;
    tokenCost: number;
    dollarCost: number;
    hpImpact: number;
    resultTitle: string;
    resultExplanation: string;
    conceptKey: string;
  };
  optionB: {
    title: string;
    description: string;
    isOptimal: boolean;
    tokenCost: number;
    dollarCost: number;
    hpImpact: number;
    resultTitle: string;
    resultExplanation: string;
    conceptKey: string;
  };
}

interface Mission {
  id: number;
  title: string;
  badge: string;
  conceptFocus: string;
  briefing: string;
  steps: MissionStep[];
}

const MISSIONS: Mission[] = [
  {
    id: 1,
    title: 'The Production Outage',
    badge: 'Mission 1',
    conceptFocus: 'Selective Context vs. Massive Dumps',
    briefing: 'A critical bug is crashing production on user login with: "TypeError: Cannot read properties of undefined (reading \'verifyToken\')". You have $2.00 in agent credits. Find and fix it without blowing your budget or bloating context!',
    steps: [
      {
        id: 1,
        scenarioTitle: 'Step 1: Locating the Bug in a 50-File Repository',
        situation: 'The repository contains 50 source files across frontend, backend, and database migrations. You need the agent to find where verifyToken is broken.',
        question: 'How should your agent inspect the codebase?',
        optionA: {
          title: 'Option A: Dump all 50 files into context at once',
          description: 'Instruct the agent to read the entire repository into the context window so it has "all the code".',
          isOptimal: false,
          tokenCost: 78000,
          dollarCost: 0.234,
          hpImpact: -45,
          resultTitle: '🚨 Severe Context Bloat! $0.234 Burned!',
          resultExplanation: 'Loading all 50 files consumed 78,000 tokens in one turn! Irrelevant CSS, UI components, and mock files flooded the model\'s attention heads. Your agent\'s attention health collapsed by 45 HP into the Caution Zone.',
          conceptKey: 'Attention Budget & Attention Degradation'
        },
        optionB: {
          title: 'Option B: Run a targeted grep_search for "verifyToken"',
          description: 'Instruct the agent to search for the specific function name and only read the 1 file that matches.',
          isOptimal: true,
          tokenCost: 3200,
          dollarCost: 0.0096,
          hpImpact: 0,
          resultTitle: '💡 Masterstroke! Only $0.0096 spent!',
          resultExplanation: 'Targeted search located authMiddleware.ts in 100ms using just 3,200 tokens. The agent preserved 96% of its attention budget, keeping its reasoning razor-sharp in the Smart Zone.',
          conceptKey: 'Progressive Disclosure & Tool Calling'
        }
      },
      {
        id: 2,
        scenarioTitle: 'Step 2: Applying the Code Fix & Verifying',
        situation: 'You located the bug: an undefined header was passed to verifyToken. Now you need the agent to implement the fix.',
        question: 'How should the agent apply the fix to ensure it doesn\'t cause regressions?',
        optionA: {
          title: 'Option A: Replace code and blindly say "Looks good!"',
          description: 'Accept the agent\'s proposed code modification without running tests or static analysis.',
          isOptimal: false,
          tokenCost: 15000,
          dollarCost: 0.065,
          hpImpact: -30,
          resultTitle: '⚠️ Vibe Coding Hazard! Hidden Bug Introduced!',
          resultExplanation: 'The agent modified the code but introduced a syntax error in the export statement. Because no automated check was run, the error slipped into production. This is the danger of pure "Vibe Coding" without verification.',
          conceptKey: 'Vibe Coding vs. Automated Check'
        },
        optionB: {
          title: 'Option B: Run compiler & test suite in a self-healing loop',
          description: 'Instruct the harness to run npm test, feed any error output back into the prompt, and verify passing tests.',
          isOptimal: true,
          tokenCost: 5400,
          dollarCost: 0.021,
          hpImpact: +15,
          resultTitle: '🏆 100% Verified! Tests Passed!',
          resultExplanation: 'The agent ran the test runner, caught an edge-case null check failure immediately, auto-repaired the file, and confirmed all 24 unit tests passed. Production outage resolved with zero regressions!',
          conceptKey: 'Self-Healing Loop & Deterministic Guardrails'
        }
      }
    ]
  },
  {
    id: 2,
    title: 'The Dumb Zone Trap',
    badge: 'Mission 2',
    conceptFocus: 'Compaction & Handoffs',
    briefing: 'Your coding session has dragged on for 16 turns. The conversation history is cluttered with 95,000 tokens of old terminal outputs and failed attempts. The agent is now repeating the same mistake. Can you rescue the session?',
    steps: [
      {
        id: 1,
        scenarioTitle: 'Turn 17: The Agent Starts Hallucinating & Forgetting',
        situation: 'The agent was told to format code in TypeScript, but on turn 17 it outputs Python syntax and re-deletes a file it was told to keep.',
        question: 'What is your intervention strategy?',
        optionA: {
          title: 'Option A: Argue with the agent in chat for 4 more turns',
          description: 'Type: "Why did you delete that file again? I already told you 5 turns ago not to touch it! Remember your instructions!"',
          isOptimal: false,
          tokenCost: 45000,
          dollarCost: 0.185,
          hpImpact: -50,
          resultTitle: '💥 Context Collapse! Trapped in the Dumb Zone!',
          resultExplanation: 'Arguing with the model added another 45,000 tokens of conversational complaints to the context window! Because attention degradation had already set in, adding more noise made the model even more confused and sycophantic.',
          conceptKey: 'Dumb Zone & Context Poisoning'
        },
        optionB: {
          title: 'Option B: Trigger Compaction into a clean Handoff Artifact',
          description: 'Use the harness Compaction command to compress the prior 16 turns into a 600-token summary of decisions and clean next steps.',
          isOptimal: true,
          tokenCost: 2800,
          dollarCost: 0.012,
          hpImpact: +40,
          resultTitle: '🧹 Clean Slate! Attention Restored to 100%!',
          resultExplanation: 'Compaction eliminated 90,000 tokens of historical chatter, leaving only a crystal-clear handoff ticket. The agent snapped straight back into its sharpest Smart Zone and completed the task flawlessly on the next turn!',
          conceptKey: 'Compaction, Clearing & Handoff Artifact'
        }
      }
    ]
  },
  {
    id: 3,
    title: 'The Prefix Cache Heist',
    badge: 'Mission 3',
    conceptFocus: 'Prompt Caching & Token Economics',
    briefing: 'Your team is running a multi-turn agent that reviews 10 pull requests per day. Each review reads a 40,000-token documentation manual. Optimize prompt structure to avoid a massive API bill!',
    steps: [
      {
        id: 1,
        scenarioTitle: 'Architecting the System Prompt for 10 Runs',
        situation: 'You need the agent to inspect PRs while referencing your 40,000-token architecture guide on every single request.',
        question: 'How do you arrange the prompt to minimize cost?',
        optionA: {
          title: 'Option A: Inject a dynamic timestamp at the top of the prompt',
          description: 'Prepend "Current Time: 2026-10-24 21:45:12 UTC" right at Line 1 before the architecture guide.',
          isOptimal: false,
          tokenCost: 80000,
          dollarCost: 0.24,
          hpImpact: -25,
          resultTitle: '💸 Cache Busted! Full Price Paid Every Turn!',
          resultExplanation: 'Because the timestamp changed on every request, the model provider could never match a static prefix. You paid 100% full inference price for all 40,000 tokens on every single turn!',
          conceptKey: 'Prefix Cache Invalidation & Tokenomics'
        },
        optionB: {
          title: 'Option B: Pin the static docs at the top, dynamic prompt at the end',
          description: 'Keep the system brief, AGENTS.md, and documentation frozen at the very top of the context window.',
          isOptimal: true,
          tokenCost: 80000,
          dollarCost: 0.024,
          hpImpact: +30,
          resultTitle: '⚡ 90% Provider Cache Discount Unlocked!',
          resultExplanation: 'Because the top 40,000 tokens stayed bit-for-bit identical across requests, the provider\'s Prefix Cache served them instantly at a 90% discount ($0.024 instead of $0.24). You saved $2.16 across 10 runs!',
          conceptKey: 'Prefix Cache, Cache Tokens & KV Caching'
        }
      }
    ]
  }
];

export const ContextSimulator: FC = () => {
  // Navigation: 'game' vs 'sandbox'
  const [activeTab, setActiveTab] = useState<'game' | 'sandbox'>('game');

  // Game state
  const [currentMissionIdx, setCurrentMissionIdx] = useState<number>(0);
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [budget, setBudget] = useState<number>(2.0); // $2.00 starting credits
  const [attentionHp, setAttentionHp] = useState<number>(100);
  const [tokensUsed, setTokensUsed] = useState<number>(3500); // starts with base prompt
  const [score, setScore] = useState<number>(0);
  const [lastOutcome, setLastOutcome] = useState<{
    title: string;
    explanation: string;
    isOptimal: boolean;
    tokenCost: number;
    dollarCost: number;
    hpImpact: number;
    conceptKey: string;
  } | null>(null);

  // Free play sandbox state
  const [sandboxPrompt, setSandboxPrompt] = useState<string>('Refactor authentication flow to use JWT');
  const [sandboxIncludeFiles, setSandboxIncludeFiles] = useState<boolean>(true);
  const [sandboxIncludeGrep, setSandboxIncludeGrep] = useState<boolean>(true);
  const [sandboxEffort, setSandboxEffort] = useState<'low' | 'med' | 'high'>('med');
  const [sandboxTokens, setSandboxTokens] = useState<number>(12000);

  const currentMission = MISSIONS[currentMissionIdx];
  const currentStep = currentMission.steps[currentStepIdx];
  const isMissionFinished = currentStepIdx >= currentMission.steps.length;

  // Grade calculation
  let grade = 'A';
  if (budget > 1.6 && attentionHp > 75) grade = 'S (Agent Master)';
  else if (budget > 1.2 && attentionHp > 50) grade = 'A (Efficient)';
  else if (budget > 0.8 && attentionHp > 30) grade = 'B (Average)';
  else if (budget > 0.4) grade = 'C (Bloated)';
  else grade = 'F (Dumb Zone Broke)';

  // Handle Decision
  const handleChooseOption = (option: MissionStep['optionA']) => {
    if (option.isOptimal) {
      soundEffects.playSelect();
      setScore((prev) => prev + 250);
    } else {
      soundEffects.playClose();
    }

    setBudget((prev) => Math.max(0, prev - option.dollarCost));
    setAttentionHp((prev) => Math.max(10, Math.min(100, prev + option.hpImpact)));
    setTokensUsed((prev) => prev + option.tokenCost);

    setLastOutcome({
      title: option.resultTitle,
      explanation: option.resultExplanation,
      isOptimal: option.isOptimal,
      tokenCost: option.tokenCost,
      dollarCost: option.dollarCost,
      hpImpact: option.hpImpact,
      conceptKey: option.conceptKey
    });
  };

  const handleNextStep = () => {
    soundEffects.playClick();
    setLastOutcome(null);
    if (currentStepIdx + 1 < currentMission.steps.length) {
      setCurrentStepIdx((prev) => prev + 1);
    } else {
      // Mission completed
      setCurrentStepIdx(currentMission.steps.length);
    }
  };

  const handleNextMission = () => {
    soundEffects.playSelect();
    setLastOutcome(null);
    setCurrentStepIdx(0);
    if (currentMissionIdx + 1 < MISSIONS.length) {
      setCurrentMissionIdx((prev) => prev + 1);
    } else {
      // Loop or restart
      setCurrentMissionIdx(0);
    }
  };

  const handleResetGame = () => {
    soundEffects.playClick();
    setCurrentMissionIdx(0);
    setCurrentStepIdx(0);
    setBudget(2.0);
    setAttentionHp(100);
    setTokensUsed(3500);
    setScore(0);
    setLastOutcome(null);
  };

  // Sandbox turn
  const handleSandboxRun = () => {
    soundEffects.playClick();
    let add = 1200;
    if (sandboxIncludeGrep) add += 4500;
    if (sandboxIncludeFiles) add += 16000;
    if (sandboxEffort === 'high') add += 3000;
    setSandboxTokens((prev) => prev + add);
  };

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-[#090a0f] p-4 sm:p-8 transition-colors duration-200">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Header with Mode Switcher */}
        <div className="border-b border-zinc-800 pb-4 flex items-start sm:items-center justify-between gap-4 flex-col sm:flex-row">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
              <Zap className="w-4 h-4" />
              <span>Interactive Simulator</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-mono text-zinc-100 mt-1">
              Context Quest: The Agent Architect Challenge
            </h1>
            <p className="text-xs text-zinc-400 mt-1 max-w-2xl">
              Learn why tokens, context windows, and caching matter by making real architectural choices under budget constraints!
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-xl shrink-0">
            <button
              onClick={() => setActiveTab('game')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                activeTab === 'game'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              🎮 Story Missions
            </button>
            <button
              onClick={() => setActiveTab('sandbox')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                activeTab === 'sandbox'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              🧪 Free Sandbox
            </button>
          </div>
        </div>

        {activeTab === 'game' ? (
          <>
            {/* Gamified Real-Time HUD */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Budget */}
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                    Budget Credits
                  </span>
                  <span className="text-zinc-500">$2.00 max</span>
                </div>
                <div className={`text-xl font-bold font-mono ${budget > 1.0 ? 'text-emerald-400' : budget > 0.4 ? 'text-amber-400' : 'text-rose-400'}`}>
                  ${budget.toFixed(3)}
                </div>
                <div className="w-full h-1.5 rounded-full bg-zinc-950 overflow-hidden">
                  <div 
                    style={{ width: `${Math.max(2, (budget / 2.0) * 100)}%` }} 
                    className={`h-full transition-all duration-300 ${budget > 1.0 ? 'bg-emerald-500' : budget > 0.4 ? 'bg-amber-500' : 'bg-rose-500'}`}
                  />
                </div>
              </div>

              {/* Attention Health */}
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-sky-400" />
                    Attention Health
                  </span>
                  <span className="text-zinc-500">{attentionHp}%</span>
                </div>
                <div className={`text-xl font-bold font-mono ${attentionHp > 70 ? 'text-emerald-400' : attentionHp > 40 ? 'text-amber-400' : 'text-rose-400'}`}>
                  {attentionHp > 70 ? 'Smart Zone' : attentionHp > 40 ? 'Caution Zone' : 'Dumb Zone!'}
                </div>
                <div className="w-full h-1.5 rounded-full bg-zinc-950 overflow-hidden">
                  <div 
                    style={{ width: `${attentionHp}%` }} 
                    className={`h-full transition-all duration-300 ${attentionHp > 70 ? 'bg-emerald-500' : attentionHp > 40 ? 'bg-amber-500' : 'bg-rose-500'}`}
                  />
                </div>
              </div>

              {/* Context Occupancy */}
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-purple-400" />
                    Context Gauge
                  </span>
                  <span className="text-zinc-500">128k Limit</span>
                </div>
                <div className="text-xl font-bold font-mono text-zinc-200">
                  {tokensUsed.toLocaleString()} <span className="text-xs font-normal text-zinc-500">tokens</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-zinc-950 overflow-hidden">
                  <div 
                    style={{ width: `${Math.min(100, (tokensUsed / 128000) * 100)}%` }} 
                    className="h-full bg-purple-500 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Score / Grade */}
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    Engineer Rank
                  </span>
                  <span className="text-zinc-500">{score} XP</span>
                </div>
                <div className="text-xl font-bold font-mono text-amber-300">
                  {grade}
                </div>
                <div className="text-[10px] text-zinc-500 font-mono">
                  Efficiency Rating
                </div>
              </div>
            </div>

            {/* Mission Selector Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {MISSIONS.map((m, idx) => {
                const isActive = idx === currentMissionIdx;
                return (
                  <button
                    key={m.id}
                    onClick={() => {
                      soundEffects.playClick();
                      setCurrentMissionIdx(idx);
                      setCurrentStepIdx(0);
                      setLastOutcome(null);
                    }}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-zinc-800 text-zinc-100 border border-zinc-700 shadow-md'
                        : 'bg-zinc-900/40 text-zinc-400 hover:text-zinc-200 border border-zinc-800/60'
                    }`}
                  >
                    <span className="px-1.5 py-0.5 rounded bg-zinc-800/90 text-zinc-300 text-[10px] border border-zinc-700/50">
                      {m.badge}
                    </span>
                    <span>{m.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Mission Card */}
            {!isMissionFinished ? (
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-6">
                {/* Mission Header */}
                <div className="space-y-1.5 border-b border-zinc-800/80 pb-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold">
                      {currentMission.badge}: {currentMission.title}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      Core Concept: <strong className="text-zinc-200">{currentMission.conceptFocus}</strong>
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed pt-1">
                    {currentMission.briefing}
                  </p>
                </div>

                {/* Current Decision Point */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-sky-400 uppercase font-semibold">
                      {currentStep.scenarioTitle}
                    </div>
                    <p className="text-sm font-medium text-zinc-200 leading-relaxed">
                      {currentStep.situation}
                    </p>
                    <p className="text-xs font-mono font-semibold text-amber-300 pt-1">
                      👉 Question: {currentStep.question}
                    </p>
                  </div>

                  {/* Decision Option Cards */}
                  {!lastOutcome ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      {/* Option A */}
                      <div 
                        onClick={() => handleChooseOption(currentStep.optionA)}
                        className="group p-5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80 cursor-pointer transition-all space-y-3 relative shadow-md"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-bold font-mono text-zinc-100 group-hover:text-sky-300 transition-colors">
                            {currentStep.optionA.title}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 shrink-0">
                            Action A
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {currentStep.optionA.description}
                        </p>
                        <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
                          <span>Est. {currentStep.optionA.tokenCost.toLocaleString()} tokens</span>
                          <span className="text-sky-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1 font-semibold">
                            Choose This <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>

                      {/* Option B */}
                      <div 
                        onClick={() => handleChooseOption(currentStep.optionB)}
                        className="group p-5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80 cursor-pointer transition-all space-y-3 relative shadow-md"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-bold font-mono text-zinc-100 group-hover:text-emerald-300 transition-colors">
                            {currentStep.optionB.title}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 shrink-0">
                            Action B
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {currentStep.optionB.description}
                        </p>
                        <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
                          <span>Est. {currentStep.optionB.tokenCost.toLocaleString()} tokens</span>
                          <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1 font-semibold">
                            Choose This <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Outcome Banner when an option is selected */
                    <div className="p-5 rounded-xl border animate-in fade-in duration-200 space-y-4"
                      style={{
                        backgroundColor: lastOutcome.isOptimal ? 'rgba(52, 211, 153, 0.08)' : 'rgba(248, 113, 113, 0.08)',
                        borderColor: lastOutcome.isOptimal ? 'rgba(52, 211, 153, 0.35)' : 'rgba(248, 113, 113, 0.35)'
                      }}
                    >
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          {lastOutcome.isOptimal ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                          ) : (
                            <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0" />
                          )}
                          <h4 className="text-sm font-bold font-mono text-zinc-100">
                            {lastOutcome.title}
                          </h4>
                        </div>

                        {/* Real-Time Consequence Badges */}
                        <div className="flex items-center gap-2 font-mono text-xs">
                          <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-rose-400">
                            -${lastOutcome.dollarCost.toFixed(3)}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                            +{lastOutcome.tokenCost.toLocaleString()} Tokens
                          </span>
                          <span className={`px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 ${lastOutcome.hpImpact >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {lastOutcome.hpImpact >= 0 ? `+${lastOutcome.hpImpact} HP` : `${lastOutcome.hpImpact} HP`}
                          </span>
                        </div>
                      </div>

                      {/* Explanation */}
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {lastOutcome.explanation}
                      </p>

                      {/* Relevant Concept Tag */}
                      <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between flex-wrap gap-2">
                        <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                          <span>Related Matrix Concept: <strong className="text-purple-300">{lastOutcome.conceptKey}</strong></span>
                        </span>

                        <button
                          onClick={handleNextStep}
                          className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-900 font-mono font-bold text-xs transition-colors shadow-sm flex items-center gap-1.5"
                        >
                          <span>Continue Scenario</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Mission Completed Summary Card */
              <div className="p-8 rounded-2xl bg-zinc-900/60 border border-emerald-500/30 text-center space-y-5 animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <Award className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-mono text-zinc-100">
                    {currentMission.title} Completed!
                  </h3>
                  <p className="text-xs text-zinc-400 max-w-md mx-auto">
                    You navigated this engineering scenario with a remaining budget of <strong>${budget.toFixed(3)}</strong> and <strong>{attentionHp}% Attention Acuity</strong>.
                  </p>
                </div>

                {/* Score badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-mono">
                  <span className="text-zinc-400">Final Rank:</span>
                  <span className="text-amber-400 font-bold">{grade}</span>
                </div>

                <div className="pt-4 flex items-center justify-center gap-3">
                  <button
                    onClick={handleNextMission}
                    className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono font-bold text-xs transition-colors shadow-lg shadow-emerald-500/20"
                  >
                    Play Next Mission
                  </button>
                  <button
                    onClick={handleResetGame}
                    className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-xs border border-zinc-700 transition-colors"
                  >
                    Restart All Missions
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Free Play Sandbox Tab */
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-6">
            <div className="space-y-1">
              <h2 className="text-base font-bold font-mono text-zinc-100">
                Free-Play Token Calculator
              </h2>
              <p className="text-xs text-zinc-400">
                Type your own prompt and select tools to inspect how many raw tokens are consumed per turn.
              </p>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-mono text-zinc-300">Your Prompt:</label>
              <textarea
                value={sandboxPrompt}
                onChange={(e) => setSandboxPrompt(e.target.value)}
                rows={2}
                className="w-full p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-sm font-mono text-zinc-200"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <label className="flex items-center gap-2 p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono cursor-pointer">
                <input
                  type="checkbox"
                  checked={sandboxIncludeFiles}
                  onChange={(e) => setSandboxIncludeFiles(e.target.checked)}
                />
                <span>Include Read Files (+16k tokens)</span>
              </label>

              <label className="flex items-center gap-2 p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono cursor-pointer">
                <input
                  type="checkbox"
                  checked={sandboxIncludeGrep}
                  onChange={(e) => setSandboxIncludeGrep(e.target.checked)}
                />
                <span>Include Grep Search (+4.5k tokens)</span>
              </label>

              <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-between text-xs font-mono">
                <span>Effort:</span>
                {(['low', 'med', 'high'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSandboxEffort(lvl)}
                    className={`px-2 py-0.5 rounded uppercase ${sandboxEffort === lvl ? 'bg-amber-500/20 text-amber-300' : 'text-zinc-500'}`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="text-xs font-mono text-zinc-400">
                Current Sandbox Context: <strong className="text-zinc-200">{sandboxTokens.toLocaleString()} tokens</strong>
              </div>
              <button
                onClick={handleSandboxRun}
                className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-mono font-bold text-xs"
              >
                Simulate Turn
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
