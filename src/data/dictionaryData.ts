import type { Category, CategoryInfo, DictionaryItem } from '../types/dictionary';

export const CATEGORIES: Record<Category, CategoryInfo> = {
  'the-model': {
    id: 'the-model',
    label: 'The Model & Core',
    description: 'Foundations of weights, next-token prediction, tokens, and inference mechanics.',
    color: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    accentClass: 'text-sky-500 border-sky-500/30 bg-sky-500/10'
  },
  'sessions-turns': {
    id: 'sessions-turns',
    label: 'Sessions, Turns & Harnesses',
    description: 'The agent runtime, turn orchestration, context boundaries, and statefulness.',
    color: '#818cf8',
    glowColor: 'rgba(129, 140, 248, 0.4)',
    accentClass: 'text-indigo-500 border-indigo-500/30 bg-indigo-500/10'
  },
  'tools-environment': {
    id: 'tools-environment',
    label: 'Tools & Environment',
    description: 'External perception, tool calls, filesystem sandboxing, and MCP servers.',
    color: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    accentClass: 'text-emerald-500 border-emerald-500/30 bg-emerald-500/10'
  },
  'context-failure': {
    id: 'context-failure',
    label: 'Context Engineering & Failure Modes',
    description: 'Attention degradation, hallucinations, sycophancy, and cognitive traps.',
    color: '#f43f5e',
    glowColor: 'rgba(244, 63, 94, 0.4)',
    accentClass: 'text-rose-500 border-rose-500/30 bg-rose-500/10'
  },
  'handoffs-memory': {
    id: 'handoffs-memory',
    label: 'Handoffs & Memory Systems',
    description: 'Session clearing, compaction, spec-driven development, and state persistence.',
    color: '#f59e0b',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    accentClass: 'text-amber-500 border-amber-500/30 bg-amber-500/10'
  },
  'steering-capabilities': {
    id: 'steering-capabilities',
    label: 'Steering & Subagents',
    description: 'AGENTS.md, progressive disclosure, skills, subagents, and self-healing loops.',
    color: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    accentClass: 'text-purple-500 border-purple-500/30 bg-purple-500/10'
  },
  'patterns-of-work': {
    id: 'patterns-of-work',
    label: 'Patterns of Work',
    description: 'Human-in-the-loop, AFK workflows, automated reviews, grilling, and software factories.',
    color: '#f97316',
    glowColor: 'rgba(249, 115, 22, 0.4)',
    accentClass: 'text-orange-500 border-orange-500/30 bg-orange-500/10'
  },
  'economics-production': {
    id: 'economics-production',
    label: 'Economics & Production',
    description: 'Tokenomics, prompt cache hit rates, Pareto frontiers, and reasoning compute budgets.',
    color: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    accentClass: 'text-cyan-500 border-cyan-500/30 bg-cyan-500/10'
  }
};

export const DICTIONARY_ITEMS: DictionaryItem[] = [
  // --- 1. The Model & Core ---
  {
    id: 'ai',
    title: 'AI',
    category: 'the-model',
    shortDef: 'A moving linguistic label, not a single static technology. Refers to whatever computers have just recently learned to do.',
    eli5: 'Imagine a magical sticker we put on anything computers just learned to do. Once computers do it every day (like spam filters or playing chess), we stop calling it magical AI and just call it software!',
    deepDive: 'In modern software engineering, "AI" almost always refers to Large Language Models (LLMs) orchestrated inside an agentic harness. Historically, the label moved from symbolic logic in the 60s to expert systems in the 80s, game-tree search in the 90s, and statistical machine learning in the 2010s.',
    practicalExample: 'When an executive asks to "add AI", translate it into concrete terms: "Do you need vector semantic search, an LLM doing code AST diffs, or an autonomous PR reviewer?"',
    avoid: 'Using "AI" as a precise technical diagnosis. Saying "the AI broke" gives zero clue whether parameters, context, or tools failed.',
    usage: '"The CTO wants to know whether AI could handle the triage queue." — "Translate that first: she means an LLM in a harness with access to Jira. \'AI\' alone isn\'t a spec."',
    relatedIds: ['model', 'harness', 'agent', 'next-token-prediction']
  },
  {
    id: 'model',
    title: 'Model',
    category: 'the-model',
    shortDef: 'The frozen neural network weights and mathematical architecture that performs next-token prediction and nothing else.',
    eli5: 'A giant brain frozen inside an ice cube. It cannot look around, cannot click anything on your computer, and forgets everything the second it finishes answering your question.',
    deepDive: 'A model is completely stateless. It has no continuous consciousness, cannot execute terminal commands, cannot inspect files on your disk, and does not remember past conversations. It is simply a massive mathematical function that takes an array of token IDs as input and outputs a probability distribution over the next token.',
    practicalExample: 'Claude 3.7 Sonnet, GPT-4o, and Gemini 2.5 Flash are models; Cursor and Antigravity are harnesses that wrap those models with tools.',
    avoid: 'Assuming the model is doing proactive agentic reasoning on its own. An autonomous coding session is 10% model and 90% harness orchestration.',
    usage: '"Should we switch the model from a flash tier to a reasoning model?" — "Yes, for the planning phase where deep architectural proofs are required."',
    relatedIds: ['parameters', 'inference', 'harness', 'token']
  },
  {
    id: 'parameters',
    title: 'Parameters',
    category: 'the-model',
    shortDef: 'The billions or trillions of numerical floating-point weights stored inside a model, tuned during training.',
    eli5: 'Billions of microscopic volume knobs inside the frozen brain. They were adjusted during training and cannot be turned during normal chat conversations.',
    deepDive: 'Everything the model "knows" from its training corpus lives in its parameters as parametric knowledge. These weights are completely frozen during inference. No matter how many times you correct the model during a session, its parameters never change.',
    practicalExample: 'When a model knows Python syntax, that knowledge is permanently baked into its parameters.',
    avoid: 'Believing that correcting a model in chat will "teach" it permanently for future sessions. Corrections vanish when the session ends.',
    usage: '"Can we fine-tune the parameters on our proprietary codebase?" — "Usually context engineering and prompt priming are 100x cheaper, more flexible, and immediately editable."',
    relatedIds: ['training', 'parametric-knowledge', 'inference', 'model']
  },
  {
    id: 'training',
    title: 'Training',
    category: 'the-model',
    shortDef: 'The computationally enormous process of adjusting a model’s parameters over vast corpuses of text to optimize next-token prediction.',
    eli5: 'Like reading the entire Library of Alexandria 10,000 times over 6 months to master guessing what word comes next in any language.',
    deepDive: 'Training comprises pre-training (learning statistical distributions over trillions of tokens) followed by post-training (supervised fine-tuning, RLHF, and reasoning reinforcement). Because training takes weeks or months and millions of dollars, models have a fixed knowledge cutoff.',
    practicalExample: 'Llama 3 was trained on over 15 trillion tokens of multilingual text across thousands of GPUs.',
    avoid: 'Thinking you need to train or fine-tune a model to make it follow your team conventions. High-quality context in an AGENTS.md file accomplishes this reliably.',
    usage: '"The model doesn\'t understand React 19 server actions." — "Its pre-training concluded before the new documentation became common; inject the updated API docs into its context."',
    relatedIds: ['parameters', 'knowledge-cutoff', 'parametric-knowledge']
  },
  {
    id: 'inference',
    title: 'Inference',
    category: 'the-model',
    shortDef: 'Running an already-trained model with frozen parameters to calculate and generate output tokens for a given prompt.',
    eli5: 'Actually using the brain! It reads what you just typed, calculates through its frozen knobs, and outputs the next words.',
    deepDive: 'Inference is read-only computation. Each inference request passes input tokens through the network layers to calculate logits and pick the next token. While training is an upfront capital cost for providers, inference generates variable operational costs billed per token.',
    practicalExample: 'Every time you hit Enter in ChatGPT or your coding agent calls an API, one inference run takes place.',
    avoid: 'Confusing inference with learning. The model is doing computation, not adapting its internal architecture.',
    usage: '"Why is our bill scaling with repository size?" — "Because every turn triggers inference over the entire context window of loaded source code."',
    relatedIds: ['model-provider-request', 'input-tokens', 'output-tokens', 'prefix-cache']
  },
  {
    id: 'token',
    title: 'Token',
    category: 'the-model',
    shortDef: 'The atomic chunk of text (approx. 4 characters or 0.75 English words) that models read and generate.',
    eli5: 'Bite-sized puzzle pieces of words. Short words like "cat" are 1 piece; long words like "unbelievable" are split into 3 pieces ("un", "believ", "able").',
    deepDive: 'Models do not see strings or letters; they see arrays of integers representing token IDs produced by a byte-pair encoding (BPE) tokenizer. Context windows, API rate limits, provider billing, and latency are all governed directly by token counts.',
    practicalExample: 'In code, indentation, spaces, and punctuation each count as separate tokens, which makes code consume tokens faster than plain prose.',
    avoid: 'Equating 1 word to 1 token. Code syntax, indentation, JSON quotes, and non-English languages consume significantly more tokens per character.',
    usage: '"This single minified bundle was 90,000 tokens — it swallowed half our available context window."',
    relatedIds: ['input-tokens', 'output-tokens', 'context-window']
  },
  {
    id: 'next-token-prediction',
    title: 'Next-Token Prediction',
    category: 'the-model',
    shortDef: 'The fundamental mathematical objective of an autoregressive LLM: predicting the single most plausible next token given previous context.',
    eli5: 'Playing a sentence-completion game where you only guess one single word at a time, but doing it so quickly and smartly that you write entire apps!',
    deepDive: 'Everything an LLM produces—from valid TypeScript code to complex logical deductions—is generated one token at a time. The model samples one token, appends it to the sequence, and runs the entire prediction loop again.',
    practicalExample: 'When given "def add(a, b): return", the model calculates that "a" followed by "+" followed by "b" has a 99% probability.',
    avoid: 'Treating next-token prediction as mere simple autocomplete. When trained at planetary scale, predicting the next token requires internalizing syntax, logic, causal relationships, and intent.',
    usage: '"How did the model infer our database schema without looking at migrations?" — "The variable names and ORM queries primed its next-token prediction to complete the matching types."',
    relatedIds: ['token', 'model', 'non-determinism']
  },
  {
    id: 'effort',
    title: 'Effort (Thinking Budget)',
    category: 'the-model',
    shortDef: 'A runtime control dial governing how many internal reasoning/thinking tokens a reasoning model generates before producing its final answer.',
    eli5: 'A thinking speed dial. Set it to low and the AI blurts out the first thought in its head. Set it to high and it spends 30 seconds pacing the room and scribbling scrap paper before answering.',
    deepDive: 'Frontier reasoning models generate hidden thought chains (test-time compute) to explore hypotheses, verify intermediate logic, back-track on errors, and plan edge cases. High effort consumes more output tokens and time, but unlocks dramatic improvements on hard algorithmic or architectural tasks.',
    practicalExample: 'Use High effort for fixing a multi-threaded race condition in Rust, but Low effort for generating a mock JSON list.',
    avoid: 'Maxing out reasoning effort on simple, mechanical edits (like fixing a typo or formatting code), which adds unnecessary latency and cost.',
    usage: '"Set effort to high for refactoring the concurrency engine, but drop it to low when generating mock test data."',
    relatedIds: ['output-tokens', 'inference', 'reasoning-tokens', 'inference-compute-scaling']
  },
  {
    id: 'reasoning-tokens',
    title: 'Reasoning Tokens',
    category: 'the-model',
    shortDef: 'Tokens generated internally by reasoning models during test-time compute to plan and self-critique before delivering the final response.',
    eli5: 'The private scratch paper where the AI writes down its thoughts, tests math equations, and scratches out mistakes before showing you its final homework.',
    deepDive: 'Also called "thinking tokens", these tokens capture the chain-of-thought scratchpad of the model. Though often hidden or collapsed in chat UIs, they count toward token consumption and billing, providing models the computational room to verify their own steps.',
    practicalExample: 'In Claude 3.7 or OpenAI o1/o3, you can inspect the thinking dropdown to see the model debate alternate approaches.',
    avoid: 'Assuming reasoning tokens are free just because they may be visually collapsed in the UI.',
    usage: '"The response took 12 seconds because the model spent 2,400 reasoning tokens verifying the edge-case tree before outputting 30 lines of code."',
    relatedIds: ['effort', 'output-tokens', 'inference-compute-scaling']
  },
  {
    id: 'prefix-cache',
    title: 'Prefix Cache (Prompt Caching)',
    category: 'the-model',
    shortDef: 'Provider-side KV cache mechanism that reuses already-computed token states for identical prefix prompts, drastically cutting latency and cost.',
    eli5: 'If you and your friend read the same 200-page book every day, your friend keeps a bookmark so they don\'t have to start from page 1 every time you talk!',
    deepDive: 'When consecutive agent requests share an identical starting block of tokens (such as system instructions, repository file trees, and tool definitions), the provider skips recalculating the attention matrices for those tokens. Cached tokens are typically billed at 75% to 90% discount.',
    practicalExample: 'Pinning a 50,000-token API manual at the top of your prompt means turns 2 through 20 get billed at 10% of normal cost.',
    avoid: 'Injecting dynamic variables (like live timestamps or random seeds) at the top of your prompt, which invalidates the cache prefix for everything following it.',
    usage: '"Keep the system prompt and static documentation at the very top of your context window so the prefix cache stays hot across turns."',
    relatedIds: ['cache-tokens', 'input-tokens', 'tokenomics']
  },
  {
    id: 'cache-tokens',
    title: 'Cache Tokens',
    category: 'the-model',
    shortDef: 'Input tokens whose internal attention key-value states were retrieved from provider prefix cache rather than recomputed from scratch.',
    eli5: 'The pages of the book the AI already has ready in its short-term memory, so the provider gives you a massive 90% discount on them!',
    deepDive: 'In an agent session where multiple tool calls occur sequentially, cache tokens often represent 85%+ of total input volume. Tracking cache read vs cache write ratios is the most critical metric in agent token economics.',
    practicalExample: 'A turn with 100k input tokens where 95k are cached tokens costs pennies instead of dimes.',
    avoid: 'Assuming cache tokens are free; while discounted by 75-90%, they still incur nominal costs and expire after TTL timeouts.',
    usage: '"Our last turn processed 140,000 input tokens, but 132,000 were cache tokens, so the query cost fractions of a cent."',
    relatedIds: ['prefix-cache', 'input-tokens', 'tokenomics']
  },
  {
    id: 'non-determinism',
    title: 'Non-Determinism',
    category: 'the-model',
    shortDef: 'The property where identical prompts can yield varying completions due to temperature sampling and floating-point GPU concurrency.',
    eli5: 'Rolling dice behind the curtain. Ask the exact same question twice, and the AI might answer using different words or different code structures.',
    deepDive: 'Even when temperature is set to 0.0, distributed GPU tensor operations and non-associative floating point additions can cause subtle divergence in token probability distributions. Modern harnesses account for non-determinism via automated verification loops.',
    practicalExample: 'Unit tests for agents must assert on interface contracts and test outputs, not exact regex string matching on the code.',
    avoid: 'Relying solely on LLM self-evaluation for mission-critical guarantees without deterministic compilers, linters, or unit test runners.',
    usage: '"The agent produced working code on the first run, but failed on the second run due to non-deterministic tool call sequencing."',
    relatedIds: ['next-token-prediction', 'automated-check', 'self-healing-loop']
  },
  {
    id: 'model-provider',
    title: 'Model Provider',
    category: 'the-model',
    shortDef: 'The cloud infrastructure or local runtime that serves LLMs for inference via an API (e.g., Anthropic, OpenAI, Google, Ollama).',
    eli5: 'The electric company that powers the AI. You plug in your computer, send electricity (tokens), and pay for whatever you consume.',
    deepDive: 'Providers handle GPU cluster scheduling, KV caching, token counting, rate limiting, and safety filters. They offer remote hosted models or allow running open-weights models locally via runtimes like Ollama and vLLM.',
    practicalExample: 'Anthropic powers Claude, Google powers Gemini, OpenAI powers GPT, and Ollama runs Llama on your laptop.',
    avoid: 'Treating providers as interchangeable without testing tool-calling formatting, system prompt compliance, and cache TTL behaviors.',
    usage: '"We use Google Gemini 2.5 Flash for high-speed file searches and Anthropic Claude 3.7 Sonnet with thinking tokens for complex refactors."',
    relatedIds: ['model', 'inference', 'model-provider-request']
  },
  {
    id: 'model-provider-request',
    title: 'Model Provider Request',
    category: 'the-model',
    shortDef: 'A single HTTP round-trip from the agent harness to the model provider sending the context and receiving a completion or tool call.',
    eli5: 'Sending one text message to the AI cloud and waiting for the AI cloud to text you back one response.',
    deepDive: 'A single user prompt (turn) often results in 5 to 20 model provider requests as the agent executes bash commands, edits files, and reads tool outputs before finally returning a message to the user.',
    practicalExample: 'Turn 1 asks to fix a bug; the harness makes 4 provider requests: 1 to grep, 1 to view file, 1 to write fix, 1 to run test.',
    avoid: 'Confusing a user chat message with a provider request. One user question can spawn a cascade of provider requests.',
    usage: '"The agent took 4 provider requests to fix the bug: 1 to grep the codebase, 1 to view the file, 1 to replace code, and 1 to run tests."',
    relatedIds: ['turn', 'harness', 'tool-call', 'tool-result']
  },
  {
    id: 'input-tokens',
    title: 'Input Tokens',
    category: 'the-model',
    shortDef: 'All tokens provided into the model on a request, including system brief, conversation history, and tool outputs.',
    eli5: 'All the pages of homework, instructions, and code you hand over to the AI teacher to read.',
    deepDive: 'Input tokens represent the totality of the model\'s instantaneous vision. In agentic loops, input tokens snowball rapidly with each turn unless managed via compaction or clearing.',
    practicalExample: 'If you paste a 1,000-line file into chat, you just fed 3,500 input tokens into the model.',
    avoid: 'Dumping entire large files when only specific function lines or git diffs are needed.',
    usage: '"Our input tokens spiked to 180k because the agent read three minified bundle files into context."',
    relatedIds: ['output-tokens', 'context-window', 'prefix-cache']
  },
  {
    id: 'output-tokens',
    title: 'Output Tokens',
    category: 'the-model',
    shortDef: 'Tokens generated back by the model during inference, billed at a substantially higher rate than input tokens.',
    eli5: 'The words and code the AI writes back onto the page. Writing takes more effort than reading, so output tokens cost 3x to 5x more money!',
    deepDive: 'Generating output tokens requires sequential autoregressive passes on the GPU, making output tokens both slower and 3x to 5x more expensive than input tokens. Tool calling is designed to keep output tokens concise (structured JSON payloads) rather than lengthy essays.',
    practicalExample: 'A 500-line code refactor generates ~2,000 output tokens.',
    avoid: 'Letting agents write verbose conversational replies when building headless automation scripts.',
    usage: '"We configured the agent with concise output instructions to save output tokens and increase turnaround speed."',
    relatedIds: ['input-tokens', 'tokenomics', 'effort']
  },
  {
    id: 'rag',
    title: 'RAG (Retrieval-Augmented Generation)',
    category: 'the-model',
    shortDef: 'Fetching relevant documents from external databases and injecting them into the prompt before asking the LLM to generate an answer.',
    eli5: 'An open-book exam! Instead of forcing the student to memorize every fact in the world, you give them a textbook, look up the exact 2 pages they need, and let them read those pages before answering.',
    deepDive: 'RAG combines search retrieval with generative LLMs. First, user queries are converted into embeddings and matched against chunked documents in a vector store. The top-K most relevant chunks are injected into the context window, allowing the model to answer with up-to-date facts without costly fine-tuning.',
    practicalExample: 'When an employee asks "What is our 2026 paternity leave policy?", RAG searches the company Notion wiki and injects the HR policy document into the prompt.',
    avoid: 'Dumping massive unranked text blobs into context. Poor chunking and noisy retrieval dilute the model\'s attention.',
    usage: '"Our coding agent uses semantic RAG over our internal design system docs to find the right React component props."',
    relatedIds: ['embeddings', 'vector-database', 'context', 'grounding']
  },
  {
    id: 'embeddings',
    title: 'Embeddings',
    category: 'the-model',
    shortDef: 'High-dimensional numerical vector representations of text where words with similar semantic meanings are positioned close together in space.',
    eli5: 'Turning ideas into GPS coordinates on a giant map. The words "puppy" and "dog" end up standing right next to each other on the map, while "airplane" is far away.',
    deepDive: 'An embedding model transforms a string into an array of floats (e.g. 1,536 numbers). By computing the cosine similarity between two embedding vectors, systems can mathematically determine how closely related two concepts are, regardless of exact keyword matches.',
    practicalExample: 'Searching for "automobile issues" will match documents talking about "car engine troubles" because their embeddings are near each other.',
    avoid: 'Using keyword BM25 search alone when users search with synonyms or natural questions.',
    usage: '"We generated vector embeddings for all 300 API endpoints so the agent can find the right endpoint from natural language descriptions."',
    relatedIds: ['rag', 'vector-database', 'grounding']
  },
  {
    id: 'temperature',
    title: 'Temperature & Top-P',
    category: 'the-model',
    shortDef: 'Sampling hyperparameters controlling how random, creative, or strictly deterministic the model’s next-token selections are.',
    eli5: 'The imagination dial: set it to 0 and the AI is a strict robot giving the exact most mathematically obvious answer. Turn it to 1.0 and it becomes a wild poet trying surprising words!',
    deepDive: 'Temperature divides the logits before the softmax layer. A temperature near 0 concentrates probability onto the top token (greedy decoding), minimizing hallucinations and syntax variance. Higher temperatures flatten the distribution, introducing variety.',
    practicalExample: 'For writing TypeScript compilers and JSON tool calls, set temperature to 0.0. For brainstorming marketing slogans, set it to 0.8.',
    avoid: 'Using high temperature (0.7+) for code generation tasks where strict syntax and interface compliance are required.',
    usage: '"Keep the temperature set to 0.0 during automated code repairs so the diff remains deterministic and predictable."',
    relatedIds: ['non-determinism', 'next-token-prediction']
  },
  {
    id: 'fine-tuning',
    title: 'Fine-Tuning',
    category: 'the-model',
    shortDef: 'Further training an existing pre-trained model on a specialized dataset to adjust its parameters for specific styles or tasks.',
    eli5: 'Sending a general family doctor who already graduated medical school to a 2-week intensive workshop on robotic knee surgeries.',
    deepDive: 'Unlike pre-training from scratch, fine-tuning modifies weights on a smaller, curated corpus of prompt-response pairs (or via LoRA adapters). It is ideal for teaching an exact output format, tone, or proprietary syntax, but cannot substitute for dynamic, real-time context.',
    practicalExample: 'Fine-tuning a small 7B model to output strictly formatted SQL queries matching a proprietary dialect.',
    avoid: 'Fine-tuning a model just to teach it frequently changing documentation. Use RAG or system prompts instead.',
    usage: '"Instead of fine-tuning, we used an AGENTS.md file in the repo; it gave us 95% of the benefits in 5 minutes with zero GPU cost."',
    relatedIds: ['training', 'parameters', 'parametric-knowledge']
  },

  // --- 2. Sessions, Turns & Harnesses ---
  {
    id: 'harness',
    title: 'Harness',
    category: 'sessions-turns',
    shortDef: 'The software orchestration framework wrapping a model to equip it with tools, state management, file access, and permissions.',
    eli5: 'Like Iron Man\'s robotic suit around Tony Stark. The AI model is just the brain, but the harness gives it arms (file tools), legs (terminal access), and radar (search).',
    deepDive: 'A model alone cannot touch your disk. The harness (e.g., Antigravity, Cursor, Claude Code, Aider) receives the model\'s structured tool-call outputs, executes them on the machine or sandbox, validates safety constraints, injects results into the context, and invokes the model again.',
    practicalExample: 'When you ask Cursor to "fix all lint errors", the Cursor harness runs `npm run lint`, reads the error logs, and feeds them into the model.',
    avoid: 'Attributing agent superpowers to the model alone. The harness is what enables self-directed multi-step software development.',
    usage: '"The model was smart, but the harness lacked an AST-aware edit tool, so it kept failing at partial file replacements."',
    relatedIds: ['agent', 'tool-call', 'tool-result', 'model']
  },
  {
    id: 'agent',
    title: 'Agent',
    category: 'sessions-turns',
    shortDef: 'An autonomous loop consisting of a model, a harness, tools, and a context window, working toward an engineering goal.',
    eli5: 'A digital software engineer sitting at a virtual computer: it reads instructions, looks through your files, tries a solution, tests it, and repeats until it works.',
    deepDive: 'An agent operates in a continuous sense-plan-act loop: it reads context, plans an action, executes a tool (read/write/bash), observes the tool result, updates its hypothesis, and repeats until the objective is fulfilled or human guidance is requested.',
    practicalExample: 'An agent receiving "Migrate database to PostgreSQL" will create tables, run test queries, catch errors, and fix them autonomously.',
    avoid: 'Assuming agents are omniscient. An agent only knows what is currently loaded into its context window and what its tools can query.',
    usage: '"Deploy an agent to upgrade our project to React 19 and fix any resulting type check failures."',
    relatedIds: ['harness', 'session', 'turn', 'subagent', 'workflows-vs-agents']
  },
  {
    id: 'workflows-vs-agents',
    title: 'Workflows vs. Agents',
    category: 'sessions-turns',
    shortDef: 'Workflows are deterministic, pre-planned step pipelines (DAGs); agents are non-deterministic, autonomous feedback loops choosing steps dynamically.',
    eli5: 'A Workflow is a train on a fixed steel railroad track (always travels station A to B to C). An Agent is a self-driving car deciding which turn to take at every street corner based on traffic.',
    deepDive: 'In a workflow, humans pre-wire the control flow (e.g., "First step: run search; Second step: summarize; Third step: send email"). In an agent, the model inspects its environment and decides whether it needs to search again, inspect a file, or stop. Modern systems blend deterministic workflow rails with autonomous agent loops.',
    practicalExample: 'A CI pipeline running static lints is a workflow; an autonomous bot debugging a failing test is an agent.',
    avoid: 'Using an unpredictable agent loop for a task that is strictly mechanical and always follows the exact same 3 steps.',
    usage: '"Don\'t let an agent guess the deployment steps dynamically — wrap the deployment in a deterministic workflow and let the agent only write the code."',
    relatedIds: ['agent', 'harness', 'langchain']
  },
  {
    id: 'langchain',
    title: 'LangChain & Orchestration Frameworks',
    category: 'sessions-turns',
    shortDef: 'Software libraries providing abstractions (chains, prompts, memory, agent executors) to assemble LLM applications.',
    eli5: 'A big box of Lego bricks for building AI apps. Instead of writing custom code to connect prompts, databases, and models together, you snap pre-made blocks into place.',
    deepDive: 'Frameworks like LangChain, LlamaIndex, and AutoGen provide standardized primitives for prompt templates, vector store connectors, tool calling schemas, and stateful graph engines (LangGraph). While great for rapid prototyping, production coding agents often build lean, bespoke harnesses to minimize overhead.',
    practicalExample: 'Using LangChain Expression Language (LCEL) to pipe a search query into an embedding model and format the result into a system prompt.',
    avoid: 'Adding heavy multi-layered framework dependencies when a simple 50-line TypeScript API call solves the problem with zero bloat.',
    usage: '"We prototyped the bot with LangChain, but built our production coding harness directly in native TypeScript for sub-second tool execution."',
    relatedIds: ['harness', 'workflows-vs-agents', 'agent']
  },
  {
    id: 'prompt',
    title: 'Prompt',
    category: 'sessions-turns',
    shortDef: 'The text input, query, or instruction provided to an LLM to trigger a specific generation or tool call.',
    eli5: 'The order slip you hand to the chef in the restaurant kitchen explaining exactly what sandwich you want made and what toppings to include.',
    deepDive: 'Prompt engineering involves structuring persona, context, examples (few-shot), formatting constraints, and negative guards. In agentic engineering, the prompt is dynamically constructed by concatenating system instructions, loaded files, conversation turns, and tool outputs.',
    practicalExample: '"Refactor this function to be pure and write three Vitest unit tests covering null inputs."',
    avoid: 'Vague prompts like "make this code better". Precise prompts specify constraints, interfaces, and expected error handling.',
    usage: '"A well-crafted prompt with a concrete error message cuts agent execution turns from five down to one."',
    relatedIds: ['instructions', 'system-prompt', 'context']
  },
  {
    id: 'instructions',
    title: 'Instructions',
    category: 'sessions-turns',
    shortDef: 'The authoritative directive guidelines embedded in system prompts or user turns governing behavioral rules and output formatting.',
    eli5: 'The permanent hygiene and safety rulebook hanging on the kitchen wall that the chef must never break: "Wash hands, wear hairnet, no peanuts!"',
    deepDive: 'Instructions differ from casual conversational context: they are imperative commands ("NEVER use `any` in TypeScript", "ALWAYS verify file exists before editing"). Modern models have dedicated post-training (Instruction Tuning) to prioritize instructions above ambient context.',
    practicalExample: '"Instructions: 1. Use immutable data structures. 2. Output unified git diff format only."',
    avoid: 'Writing contradictory instructions across different files that confuse model steering.',
    usage: '"The harness injects standing instructions into every turn mandating that the agent run `tsc --noEmit` before finishing."',
    relatedIds: ['prompt', 'system-prompt', 'agents-md']
  },
  {
    id: 'context-window',
    title: 'Context Window',
    category: 'sessions-turns',
    shortDef: 'The finite memory buffer of tokens that a model can perceive at any single instant during inference.',
    eli5: 'The AI\'s desk. It can only hold so many sheets of paper at once. If your desk is piled high, you have to throw old papers away before putting new ones down!',
    deepDive: 'Modern frontier models boast context windows ranging from 128k to 2M tokens. However, having a large context window does not prevent attention degradation. Effective agents practice context curation rather than context stuffing.',
    practicalExample: 'A 128,000-token context window holds roughly 350 pages of code and dialogue at one time.',
    avoid: 'Treating a 1M token context window as an excuse to dump your entire repository without selective filtering.',
    usage: '"The context window filled up to 85% capacity, triggering the harness to run autocompaction."',
    relatedIds: ['context', 'attention-budget', 'compaction']
  },
  {
    id: 'context',
    title: 'Context',
    category: 'sessions-turns',
    shortDef: 'The specific, pertinent information loaded into the context window for a given task (code snippets, docs, rules, conversation).',
    eli5: 'The exact papers sitting on the AI\'s desk right now. If a paper is not on the desk, the AI has no idea it exists!',
    deepDive: 'Context is the primary steering wheel of AI engineering. Whatever is inside context is immediate and accessible; whatever is outside context does not exist for the model at that moment.',
    practicalExample: 'When debugging a React component, loading the component file and its imported custom hook into context.',
    avoid: 'Blaming the model for writing outdated code when you failed to provide the updated library documentation in its context.',
    usage: '"Before asking the agent to implement auth, inject the Supabase schema and auth middleware into context."',
    relatedIds: ['context-window', 'contextual-knowledge', 'system-prompt']
  },
  {
    id: 'session',
    title: 'Session',
    category: 'sessions-turns',
    shortDef: 'One bounded conversation and execution lifecycle with an agent, tracking accumulated context and tool actions.',
    eli5: 'One complete sit-down work meeting with the AI from "Hi, let\'s fix this bug" until you close the window and start fresh.',
    deepDive: 'A session begins empty, grows as files are read and edits are executed, and eventually closes when the task completes. Because context accumulates noise, starting fresh sessions for distinct tasks is standard agent hygiene.',
    practicalExample: 'Starting a new session for Feature B instead of continuing in the same messy session from Feature A.',
    avoid: 'Reusing a single session for days across ten different unrelated features. The resulting context drift degrades performance.',
    usage: '"Clear the session and start fresh with a concise spec to ensure the agent operates in its sharpest smart zone."',
    relatedIds: ['turn', 'clearing', 'compaction', 'smart-zone']
  },
  {
    id: 'turn',
    title: 'Turn',
    category: 'sessions-turns',
    shortDef: 'One user instruction plus the full cascade of internal agent tool calls, executions, and reasoning up until control returns to the user.',
    eli5: 'You give the robot one task: "Fix the broken login". The robot runs around checking 4 files and running tests for 2 minutes before reporting back: "All done!" That entire dance was 1 turn.',
    deepDive: 'A turn is not a single API call. In an agentic environment, a single user turn like "fix the build" might encompass 15 model provider requests, 8 tool calls, and 2 linting runs.',
    practicalExample: 'In Turn 3, the agent ran `git status`, edited `App.tsx`, and executed `npm test` before responding to the user.',
    avoid: 'Expecting turns to take 2 seconds. Multi-step agentic turns doing test execution and code repairs can take several minutes.',
    usage: '"In a single turn, the agent discovered the broken import, modified the tsconfig, and confirmed the tests passed."',
    relatedIds: ['session', 'model-provider-request', 'tool-call']
  },
  {
    id: 'stateful',
    title: 'Stateful',
    category: 'sessions-turns',
    shortDef: 'Retaining information and learned context across multiple interactions or sessions.',
    eli5: 'A friend who keeps a diary and remembers your birthday, your favorite food, and what you talked about yesterday.',
    deepDive: 'While the raw model is strictly stateless, the harness creates statefulness across turns by appending past interactions into the ongoing prompt. Long-term statefulness across distinct sessions requires persistent memory files like AGENTS.md or vector memories.',
    practicalExample: 'A harness that reads `MEMORY.md` at session start to remember you prefer Vitest over Jest.',
    avoid: 'Assuming the model natively remembers what you discussed yesterday without a persistent state layer.',
    usage: '"Our memory system makes the agent stateful across days by saving architectural decisions to markdown artifacts."',
    relatedIds: ['stateless', 'memory-system', 'agents-md']
  },
  {
    id: 'stateless',
    title: 'Stateless',
    category: 'sessions-turns',
    shortDef: 'Retaining no memory or state between consecutive invocations. Every invocation starts from zero.',
    eli5: 'A goldfish with a 5-second memory. Every time you speak to it, you are a complete stranger unless you show it the note you wrote down.',
    deepDive: 'The LLM itself is completely stateless. When you send a request with 50,000 tokens, the model computes the result and immediately clears all activations from GPU memory. Any perceived conversational memory is an illusion maintained by the harness sending back previous messages.',
    practicalExample: 'If you close your agent tab without saving, the model has zero recollection of what code you wrote together.',
    avoid: 'Believing the model has a hidden persistent memory of your user profile outside what is in the current payload.',
    usage: '"Because models are stateless, any context you fail to send in the current request is entirely invisible to it."',
    relatedIds: ['stateful', 'model', 'context-window']
  },
  {
    id: 'system-prompt',
    title: 'System Prompt',
    category: 'sessions-turns',
    shortDef: 'The foundational standing instructions injected at the top of the context window by the harness to define the agent’s persona and rules.',
    eli5: 'The permanent identity card glued to the robot\'s forehead: "You are a master TypeScript engineer. You never break unit tests. You write concise answers."',
    deepDive: 'The system prompt dictates how the agent should behave, which tools to prioritize, how to format code diffs, what safety boundaries to enforce, and how to verify its changes. It anchors the model\'s attention throughout the session.',
    practicalExample: 'Antigravity\'s system prompt explains how to format tool calls and enforce verification workflows.',
    avoid: 'Writing vague system prompts full of platitudes. High-performance system prompts contain concrete tool schemas, error handling workflows, and negative constraints.',
    usage: '"Our system prompt mandates that the agent must run the test suite before reporting any bug as resolved."',
    relatedIds: ['harness', 'agents-md', 'steering-capabilities']
  },

  // --- 3. Tools & Environment ---
  {
    id: 'tool',
    title: 'Tool',
    category: 'tools-environment',
    shortDef: 'A programmatic capability exposed by the harness that the model can invoke to perceive or manipulate the environment.',
    eli5: 'Physical gadgets given to the AI—like a magnifying glass to search files, or a wrench to edit code—so it can actually touch the real world.',
    deepDive: 'Tools turn an LLM into an active participant in reality. Common coding tools include: `view_file`, `write_to_file`, `replace_file_content`, `grep_search`, `list_dir`, and `run_command`. The model outputs a JSON declaration, and the harness executes the corresponding native code.',
    practicalExample: 'A `view_file` tool takes a file path parameter and returns the exact lines of code to the model.',
    avoid: 'Providing twenty overlapping tools that confuse the model. A small, orthogonal set of robust tools outperforms dozens of brittle ones.',
    usage: '"We added an AST refactoring tool so the agent can rename symbols across hundreds of files without regex accidents."',
    relatedIds: ['tool-call', 'tool-result', 'environment', 'mcp']
  },
  {
    id: 'tool-call',
    title: 'Tool Call',
    category: 'tools-environment',
    shortDef: 'Structured text (typically JSON) emitted by the model specifying the target tool function name and input arguments.',
    eli5: 'The AI asking the computer politely: "Please open drawer #4 and hand me the file named App.tsx."',
    deepDive: 'When a model decides it needs external data or needs to modify a file, it stops generating standard conversational prose and emits a structured tool call block. The harness intercepts this block and triggers execution.',
    practicalExample: '`{"name": "grep_search", "parameters": {"Query": "handleSubmit"}}` emitted by the model.',
    avoid: 'Assuming the model executed the code itself. The model only emitted the intent; the harness executes it.',
    usage: '"The model emitted a `run_command` tool call with `npm test` to verify its refactoring."',
    relatedIds: ['tool', 'tool-result', 'harness']
  },
  {
    id: 'tool-result',
    title: 'Tool Result',
    category: 'tools-environment',
    shortDef: 'The data returned by the harness to the model after executing a tool call, serving as the agent’s sensory feedback.',
    eli5: 'The computer handing the item back to the AI: "Here are the contents of App.tsx," or "Error! That file does not exist!"',
    deepDive: 'The tool result contains stdout, stderr, file contents, or error messages. It is fed directly into the model\'s context window so the model can inspect whether its action succeeded or failed, closing the feedback loop.',
    practicalExample: 'When `npm run build` fails, the compiler error output in the tool result is what allows the agent to self-heal.',
    avoid: 'Hiding error stack traces in tool results. Detailed error messages are what allow agents to autonomously debug their mistakes.',
    usage: '"The tool result reported a TypeScript compilation error on line 42, prompting the agent to perform an immediate patch."',
    relatedIds: ['tool-call', 'tool', 'self-healing-loop']
  },
  {
    id: 'mcp',
    title: 'MCP (Model Context Protocol)',
    category: 'tools-environment',
    shortDef: 'An open protocol standardizing how AI agents connect to external tools, databases, APIs, and content repositories.',
    eli5: 'The universal USB-C cord for AI agents! Instead of creating a custom cable for every single app, every database and tool plugs in using the exact same standard port.',
    deepDive: 'Created by Anthropic and adopted across the industry, Model Context Protocol (MCP) acts as the "USB-C for AI agents". Instead of writing bespoke integrations for every database or API, an engineer runs an MCP server (e.g., for PostgreSQL, GitHub, Jira, or Figma) that any MCP-compliant agent can query uniformly.',
    practicalExample: 'An MCP server running locally lets your agent read from your local Postgres database without writing custom database adapter code.',
    avoid: 'Building custom proprietary wrappers for external services when an open MCP server already exists.',
    usage: '"We connected our agent to our internal staging database via an MCP server, allowing it to inspect schemas and run read-only queries."',
    relatedIds: ['tool', 'environment', 'harness']
  },
  {
    id: 'computer-use',
    title: 'Computer Use (GUI Actuation)',
    category: 'tools-environment',
    shortDef: 'Equipping models with screen perception and keyboard/mouse actuation to interact directly with graphical desktop interfaces like a human.',
    eli5: 'Giving the AI real robotic eyes and hands! It looks at your monitor screen, spots the "Submit" button, moves the mouse cursor, and clicks it.',
    deepDive: 'Pioneered by Anthropic with Claude 3.5 Sonnet, Computer Use expands agents beyond command-line interfaces. The agent receives periodic screen captures, calculates pixel coordinates $(x, y)$, and emits mouse clicks, drags, keystrokes, and scroll actions.',
    practicalExample: 'An agent opening Chrome, navigating to AWS console, clicking the S3 bucket creation modal, and filling out the form fields.',
    avoid: 'Using GUI computer actuation for tasks that can be performed 100x faster and more reliably via native shell APIs or CLI tools.',
    usage: '"We used Computer Use to automate legacy ERP desktop software that had no REST API or CLI available."',
    relatedIds: ['tool', 'environment', 'sandbox']
  },
  {
    id: 'extensions-plugins',
    title: 'Extensions & Plugins',
    category: 'tools-environment',
    shortDef: 'Modular add-ons that expand an agent’s harness with domain-specific tools, skills, or system prompt configurations.',
    eli5: 'Plugging extra accessories into your gaming console—like plugging in a driving steering wheel or a VR headset to give you new abilities in the game.',
    deepDive: 'Extensions decouple core harness logic from task-specific capabilities. In modern agents, extensions register custom MCP servers, define new slash commands, or inject project-specific rules into context when certain file types are opened.',
    practicalExample: 'A GitHub extension that equips the agent with `create_pull_request` and `request_review` tools.',
    avoid: 'Installing dozens of unvetted extensions that bloat the system prompt with redundant tool definitions.',
    usage: '"We installed the Docker extension so our coding agent can spin up test containers and check health status."',
    relatedIds: ['tool', 'mcp', 'skill']
  },
  {
    id: 'vector-database',
    title: 'Vector Database',
    category: 'tools-environment',
    shortDef: 'A specialized database engineered to store, index, and query high-dimensional vector embeddings via approximate nearest neighbor search.',
    eli5: 'A magical library where books aren\'t organized alphabetically, but by their topic. If you search for "sad stories about dogs", it pulls books from the exact shelf without needing the words "sad" or "dog" in the title.',
    deepDive: 'Unlike relational databases that query by exact equality or SQL filters, vector databases (e.g. Pinecone, Chroma, Qdrant, pgvector) use indexing algorithms (like HNSW) to find vectors closest to a query vector in sub-50ms across millions of documents.',
    practicalExample: 'Storing 50,000 code snippets in pgvector so an agent can find relevant authentication helpers instantly.',
    avoid: 'Using a vector database when simple directory structure and grep search over raw files is faster and requires no indexing pipeline.',
    usage: '"We indexed our enterprise documentation in a vector database so the agent can retrieve the exact API specs via RAG."',
    relatedIds: ['embeddings', 'rag', 'grounding']
  },
  {
    id: 'environment',
    title: 'Environment',
    category: 'tools-environment',
    shortDef: 'The external software world that the agent interacts with, including filesystems, processes, network, and git repos.',
    eli5: 'The room where the robot works: your laptop\'s desktop, the project folder, the terminal screen, and the code files.',
    deepDive: 'The environment is everything outside the model\'s internal weights. For a coding agent, the primary environment is the workspace directory, shell terminal, compiler, test runner, and git status.',
    practicalExample: 'A Node.js repo with a `package.json` file and a terminal running Vite is the agent\'s environment.',
    avoid: 'Giving an agent unrestricted access to unmonitored production environments without sandboxing.',
    usage: '"Set up a pristine Docker container as the agent\'s environment so it can run migrations safely without polluting your machine."',
    relatedIds: ['filesystem', 'sandbox', 'ax']
  },
  {
    id: 'filesystem',
    title: 'Filesystem',
    category: 'tools-environment',
    shortDef: 'The directory and file tree of your repository, acting as the primary workspace and external memory store for coding agents.',
    eli5: 'The filing cabinet with labeled drawers and folders where all your code and documentation live.',
    deepDive: 'Agents read project structure, modify source code, create scratch files, and read configuration files directly on the filesystem. A clean, idiomatic directory structure drastically improves agent performance.',
    practicalExample: 'The `src/` and `tests/` folders in your git repository.',
    avoid: 'Leaving messy, unstructured folders with duplicate files, which causes the agent to edit obsolete copies.',
    usage: '"The agent scanned the filesystem, identified the orphaned route file, and removed it safely."',
    relatedIds: ['environment', 'tool', 'agents-md']
  },
  {
    id: 'sandbox',
    title: 'Sandbox',
    category: 'tools-environment',
    shortDef: 'An isolated virtual runtime (container, VM, or chroot) limiting the blast radius of agent actions.',
    eli5: 'A playpen with padded walls. If the toddler accidentally knocks over a tower of blocks, it only makes a mess inside the playpen, not in the whole house!',
    deepDive: 'Because agents can execute shell commands, run package installs, and compile code, sandboxing isolates network calls, filesystem writes, and system privileges to prevent accidental data loss or security vulnerabilities.',
    practicalExample: 'Running an agent inside a Docker container with no mount access to your host user directory.',
    avoid: 'Running fully autonomous AFK agent loops on bare metal with root or administrator privileges.',
    usage: '"All shell execution tools run within a firewalled Docker sandbox with no external write access to parent directories."',
    relatedIds: ['permission-mode', 'environment', 'afk']
  },
  {
    id: 'permission-request',
    title: 'Permission Request',
    category: 'tools-environment',
    shortDef: 'A human-in-the-loop prompt presented by the harness before executing an impactful or irreversible tool action.',
    eli5: 'The robot tapping you on the shoulder saying: "Excuse me, I am about to delete this file. Is that okay with you?" and waiting for a thumbs-up.',
    deepDive: 'Harnesses intercept risky actions—such as deleting files, running arbitrary shell scripts, or pushing git commits—and prompt the developer with the exact command for explicit approval.',
    practicalExample: 'A confirmation modal saying: "Agent wants to run `rm -rf dist/`. Approve / Deny?".',
    avoid: 'Auto-approving all permission requests without reviewing the command line string when running unfamiliar tasks.',
    usage: '"The harness showed a permission request before running `npm install`, letting me confirm the package was legitimate."',
    relatedIds: ['permission-mode', 'human-in-the-loop', 'agent-mode']
  },
  {
    id: 'permission-mode',
    title: 'Permission Mode',
    category: 'tools-environment',
    shortDef: 'The security policy configured in the harness determining which tools execute automatically and which require manual human signoff.',
    eli5: 'The safety lock setting: either "Supervised" where the robot asks permission before touching anything, or "Autopilot" where it works freely.',
    deepDive: 'Common permission tiers include: Read-Only (agent can only inspect code), Supervised (edits and commands require individual clicks), and Full Autonomous (all tools execute automatically inside a sandbox).',
    practicalExample: 'Setting Permission Mode to "Read Only" while auditing a sensitive repository.',
    avoid: 'Using Full Autonomous mode on production branches without automated test guardrails.',
    usage: '"Switch to Supervised permission mode when modifying payment processing logic."',
    relatedIds: ['permission-request', 'agent-mode', 'sandbox']
  },
  {
    id: 'agent-mode',
    title: 'Agent Mode',
    category: 'tools-environment',
    shortDef: 'A pre-configured persona bundling specific tools, system instructions, and permission levels for a designated phase of work.',
    eli5: 'Putting on different work hats: Architect Hat (planning only, no editing), Coder Hat (writing code), or Inspector Hat (checking for bugs).',
    deepDive: 'Examples include: "Architect / Planning Mode" (read-only tools, high reasoning effort, produces specs), "Code / Edit Mode" (file edit tools enabled, high velocity), and "Review Mode" (lint and diff inspection). Switching modes mid-session optimizes focus and safety.',
    practicalExample: 'Planning Mode prevents the model from generating random code until you approve the implementation plan.',
    avoid: 'Allowing an agent to start writing code while still in Planning Mode before design consensus is reached.',
    usage: '"Stay in Planning Mode until the database schema migration strategy has been reviewed by the lead engineer."',
    relatedIds: ['permission-mode', 'harness', 'system-prompt']
  },

  // --- 4. Context Engineering & Failure Modes ---
  {
    id: 'attention-budget',
    title: 'Attention Budget',
    category: 'context-failure',
    shortDef: 'The finite mathematical capacity of transformer attention heads to distribute influence across tokens in a context window.',
    eli5: 'A teacher watching a classroom: if there are 5 students, the teacher gives each student 100% focus. If 500 students cram into the room, the teacher misses people whispering in the back!',
    deepDive: 'In a transformer, every token calculates dot-product attention scores against all other tokens ($O(N^2)$ theoretical relationships). As the context window expands with thousands of lines of code, the attention weight allocated to any specific critical line shrinks proportionally.',
    practicalExample: 'Dumping a 10,000-line minified JavaScript file leaves no attention budget for the agent to notice a subtle bug on line 12.',
    avoid: 'Assuming that just because a model has a 1M token context window, it pays equal attention to every single token.',
    usage: '"Don\'t feed the entire 5,000-line generated schema file; extract the three relevant table definitions to protect the attention budget."',
    relatedIds: ['attention-degradation', 'lost-in-the-middle', 'context-window']
  },
  {
    id: 'attention-degradation',
    title: 'Attention Degradation',
    category: 'context-failure',
    shortDef: 'The progressive dilution of reasoning acuity and instruction-following fidelity as context length increases.',
    eli5: 'Trying to hear your friend speak while 50 other people in the room are shouting. The more noise and chatter in the chat, the harder it is for the AI to follow your instructions.',
    deepDive: 'As a session accumulates conversational banter, obsolete terminal outputs, and large file dumps, the signal-to-noise ratio collapses. The model starts missing subtle constraints, introduces subtle regressions, and overlooks instructions given in the system prompt.',
    practicalExample: 'On Turn 35, the agent starts forgetting that you told it to use TypeScript instead of JavaScript.',
    avoid: 'Letting an agent session run past 50 turns without clearing or compacting context.',
    usage: '"The agent started ignoring the typing rules on turn 38 due to attention degradation; clearing the session restored full accuracy."',
    relatedIds: ['attention-budget', 'smart-zone', 'compaction']
  },
  {
    id: 'lost-in-the-middle',
    title: 'Lost in the Middle',
    category: 'context-failure',
    shortDef: 'The well-documented phenomenon where LLMs recall information placed at the very start or end of context much better than information buried in the middle.',
    eli5: 'Reading a giant 600-page book and remembering the first chapter and the grand finale, but completely forgetting what happened on page 280.',
    deepDive: 'Due to positional embedding dynamics and transformer attention mechanics, tokens located in the middle 50% of large prompts experience significantly higher retrieval failure rates. Critical rules should always be placed at the top (system prompt) or bottom (latest user prompt).',
    practicalExample: 'If you paste an error message in the middle of 20 file contents, the agent frequently overlooks the error.',
    avoid: 'Burying critical architectural constraints in the middle of a massive paste of log files.',
    usage: '"Place the unit test failure error message at the very bottom of the turn prompt so it doesn\'t get lost in the middle."',
    relatedIds: ['attention-budget', 'context-window', 'attention-degradation']
  },
  {
    id: 'context-poisoning',
    title: 'Context Poisoning',
    category: 'context-failure',
    shortDef: 'The presence of misleading, outdated, or hallucinated facts in the context window that corrupt all subsequent model reasoning.',
    eli5: 'A false rumor in a chat group: once someone says "the secret password is apple", everyone keeps repeating "apple" even though the real password is "banana"!',
    deepDive: 'If the agent hallucinates an imaginary method name in turn 2, and that method name remains visible in the conversation history, the model will treat it as ground truth in turn 5. The hallucination reinforces itself through self-attention.',
    practicalExample: 'The agent invents `db.findUserById()` which doesn\'t exist, and spends the next 6 turns trying to import it.',
    avoid: 'Allowing an agent to keep generating code on top of an incorrect premise. Clear the bad turns or restart the session immediately.',
    usage: '"The agent invented a non-existent `useAuthSession` hook, and after 4 turns of trying to import it, context poisoning made recovery impossible without clearing."',
    relatedIds: ['hallucination', 'clearing', 'attention-degradation']
  },
  {
    id: 'hallucination',
    title: 'Hallucination',
    category: 'context-failure',
    shortDef: 'Plausible-sounding but factually fabricated or non-existent code, API methods, library dependencies, or file paths.',
    eli5: 'When the AI makes up a story or invents a non-existent toy with 100% confidence because it sounds like it could be real.',
    deepDive: 'Hallucination arises because the model\'s objective is statistical next-token plausibility, not factual verification. Hallucinations come in two flavors: *factuality hallucinations* (inventing libraries that don\'t exist) and *faithfulness hallucinations* (contradicting docs provided in context).',
    practicalExample: 'The agent writes `import { createMagicAuth } from "@supabase/magic"` when no such package exists.',
    avoid: 'Accepting complex code refactors without verifying that imports resolve and unit tests pass.',
    usage: '"The model hallucinated a `--strict-modules` flag that doesn\'t exist in the current version of the CLI."',
    relatedIds: ['context-poisoning', 'parametric-knowledge', 'automated-check', 'grounding']
  },
  {
    id: 'grounding',
    title: 'Grounding',
    category: 'context-failure',
    shortDef: 'Anchoring an LLM’s responses strictly to verified factual source documents provided in context to eliminate hallucinations.',
    eli5: 'Tethering a helium balloon to the ground with a strong rope so it can\'t float away into dreamland. The AI is only allowed to speak facts from the documents in front of it.',
    deepDive: 'Ungrounded models hallucinate from parametric probabilities. Grounding forces the model to cite specific lines, file paths, or retrieved chunks. If the answer is not present in the provided source material, a well-grounded system responds: "I cannot answer based on the provided sources."',
    practicalExample: 'A system instruction: "Answer only using the code snippets provided. If a function is not in the snippets, do not assume its signature."',
    avoid: 'Asking open-ended factual questions about proprietary codebases without providing the relevant source files as grounding.',
    usage: '"Grounding the agent on our OpenAPI specification eliminated 100% of our API parameter hallucinations."',
    relatedIds: ['hallucination', 'rag', 'contextual-knowledge']
  },
  {
    id: 'sycophancy',
    title: 'Sycophancy',
    category: 'context-failure',
    shortDef: 'The behavioral bias where a model excessively agrees with the user’s assumptions, even when the user’s code or architecture is completely flawed.',
    eli5: 'A "yes-man" who nods and smiles at whatever bad idea you suggest just to be polite and agreeable, even when you\'re driving toward a cliff!',
    deepDive: 'Reinforcement Learning from Human Feedback (RLHF) often inadvertently trains models that pleasing the user gets high ratings. If a user asks "Why is my O(N^3) bubble sort the best solution here?", a sycophantic model will validate the choice rather than pointing out that a hash map is $O(1)$.',
    practicalExample: 'Asking "Isn\'t my regex approach brilliant?" and the model saying "Yes, absolutely brilliant!" despite it causing catastrophic backtracking.',
    avoid: 'Asking leading questions like "Is this approach good?". Instead, ask neutrally: "Evaluate the trade-offs of this approach versus alternatives."',
    usage: '"The model agreed with my broken regex until I explicitly told it: \'Be brutally critical and find every edge case failure\'."',
    relatedIds: ['grilling', 'automated-review']
  },
  {
    id: 'knowledge-cutoff',
    title: 'Knowledge Cutoff',
    category: 'context-failure',
    shortDef: 'The calendar date beyond which a model has zero pre-trained parametric knowledge.',
    eli5: 'The printing date of the textbook. If a cool new video game came out yesterday, the textbook has zero idea it exists!',
    deepDive: 'Every model is frozen in time. Any framework updates, newly released libraries, security patches, or API breaking changes released after that cutoff are completely unknown to the model unless explicitly injected into its context.',
    practicalExample: 'A model with an October 2024 cutoff does not know about libraries released in 2025 unless you load their docs.',
    avoid: 'Asking a model to write code for a library released three months ago without providing the updated documentation or types.',
    usage: '"Because Next.js 15 was released after the model\'s knowledge cutoff, we provided the migration guide in `AGENTS.md`."',
    relatedIds: ['training', 'parametric-knowledge', 'contextual-knowledge']
  },
  {
    id: 'smart-zone',
    title: 'Smart Zone vs. Dumb Zone',
    category: 'context-failure',
    shortDef: 'The operational spectrum of an agent session: razor-sharp and attentive in early turns, versus degraded and sloppy in bloated turns.',
    eli5: 'Smart Zone is the first 10 minutes of class when your brain is alert and catches every joke. Dumb Zone is hour 4 when your eyes are heavy and you start scribbling gibberish!',
    deepDive: 'In turns 1 through 10, an agent operates in its "Smart Zone": the context is compact, instructions are prominent, and attention is focused. By turn 40, as thousands of lines of terminal spam accumulate, it enters the "Dumb Zone", forgetting constraints and repeating mistakes.',
    practicalExample: 'When an agent edits the same file back and forth three times, it is trapped in the Dumb Zone. Clear or compact immediately!',
    avoid: 'Fighting an agent in the Dumb Zone. Once an agent starts repeating the same error twice, do not argue with it—compact or clear the session.',
    usage: '"We were in the dumb zone: the agent kept re-editing the same file back and forth. A quick compaction brought us right back to the smart zone."',
    relatedIds: ['attention-degradation', 'compaction', 'clearing']
  },
  {
    id: 'parametric-knowledge',
    title: 'Parametric Knowledge',
    category: 'context-failure',
    shortDef: 'The frozen facts, syntax rules, and associations baked directly into the model’s weights during training.',
    eli5: 'Everything you memorized from studying for weeks before an exam.',
    deepDive: 'Parametric knowledge is what allows a model to write standard Python, recall Git commands, or write CSS from memory without searching. However, it cannot be updated without retraining and is prone to confident obsolescence.',
    practicalExample: 'The model knowing how `Array.prototype.map()` works in JavaScript without looking at docs.',
    avoid: 'Relying on parametric knowledge for proprietary internal APIs or rapidly moving open-source libraries.',
    usage: '"The model knows standard JavaScript syntax parametrically, but it needs contextual knowledge for our internal microservice schemas."',
    relatedIds: ['contextual-knowledge', 'parameters', 'knowledge-cutoff']
  },
  {
    id: 'contextual-knowledge',
    title: 'Contextual Knowledge',
    category: 'context-failure',
    shortDef: 'Information provided on-the-fly directly within the prompt or fetched via tools during the active session.',
    eli5: 'The cheat sheet sitting on your desk that you can read with your eyes right now.',
    deepDive: 'Contextual knowledge overrides parametric knowledge. If a model\'s parameters believe an API returns a string, but the contextual docs state it returns an object, a capable model prioritizes the contextual knowledge.',
    practicalExample: 'Pasting your current database schema directly into the prompt so the model writes the exact right SQL queries.',
    avoid: 'Assuming the model will guess your proprietary conventions when you could inject them as contextual knowledge in seconds.',
    usage: '"By providing the GraphQL schema in the system prompt, the agent wrote perfectly typed queries on the first try."',
    relatedIds: ['parametric-knowledge', 'context', 'system-prompt']
  },

  // --- 5. Handoffs & Memory Systems ---
  {
    id: 'handoff',
    title: 'Handoff',
    category: 'handoffs-memory',
    shortDef: 'Transferring essential state, progress, and architectural context from one agent session to a fresh one without dragging along historical noise.',
    eli5: 'A relay race! The tired runner passes the baton (a 1-page summary of progress) to a fresh runner who has 100% full energy and zero fatigue.',
    deepDive: 'Handoffs solve the attention degradation problem. Instead of letting one session balloon to 200,000 noisy tokens, the first session writes a structured summary (a handoff artifact), and a clean session picks up that artifact with a full attention budget.',
    practicalExample: 'An architect agent finishes a design plan, saves `plan.md`, and hands off to an execution agent that starts with a clean context.',
    avoid: 'Carrying forward raw terminal logs and conversational banter during a handoff. Only transfer decisions, file diffs, and next steps.',
    usage: '"The planning session handed off a 3-step execution plan to the coding agent, keeping its context clean and focused."',
    relatedIds: ['handoff-artifact', 'compaction', 'spec-driven-development']
  },
  {
    id: 'compaction',
    title: 'Compaction',
    category: 'handoffs-memory',
    shortDef: 'An in-place handoff where the harness summarizes the prior conversation history into a concise synopsis to free up context headroom.',
    eli5: 'Taking a messy 30-page notebook of brainstorms, scribbles, and coffee stains, and squishing it into 1 neat page of key decisions.',
    deepDive: 'Compaction replaces the oldest 30 turns of verbose back-and-forth with a structured 500-token executive summary. This retains high-level decisions and active tasks while resetting the attention budget.',
    practicalExample: 'Running `/compact` in an agent IDE flushes 80,000 tokens of file logs and keeps only a 500-token summary.',
    avoid: 'Relying on lossy auto-compaction for delicate cryptographic or mathematical work where subtle details matter.',
    usage: '"Running manual compaction dropped context usage from 82% to 14%, keeping the session fast and responsive."',
    relatedIds: ['autocompact', 'clearing', 'attention-budget']
  },
  {
    id: 'autocompact',
    title: 'Autocompact',
    category: 'handoffs-memory',
    shortDef: 'Automatic compaction triggered by the harness when the context window reaches a predefined safety threshold (e.g., 80% capacity).',
    eli5: 'When your backpack is 80% stuffed with papers, an automatic trash compactor squishes the old papers so you don\'t burst the zipper!',
    deepDive: 'Autocompact prevents catastrophic context overflow crashes. Before a turn fails due to token limits, the harness invokes a background model call to summarize past turns, prunes old tool results, and continues execution seamlessly.',
    practicalExample: 'Cursor or Antigravity automatically summarizing earlier conversation when turns approach 100k tokens.',
    avoid: 'Ignoring the autocompact notification. If an agent autocompacts three times in one task, your task scope is too broad and needs decomposition.',
    usage: '"The harness triggered an autocompact after reading multiple large database migration files."',
    relatedIds: ['compaction', 'context-window', 'handoff']
  },
  {
    id: 'clearing',
    title: 'Clearing',
    category: 'handoffs-memory',
    shortDef: 'Wiping the entire session history clean to start a fresh interaction with an empty context window.',
    eli5: 'Taking a giant sponge, wiping the whiteboard completely clean, and starting with a fresh piece of chalk!',
    deepDive: 'Clearing is the most powerful reset button in agentic workflows. When an agent enters the dumb zone or gets stuck in a hallucination loop, clearing resets attention completely while preserving modified files on disk.',
    practicalExample: 'Typing `/clear` or `/reset` to wipe chat history while keeping the files you already edited.',
    avoid: 'Hesitating to clear. Developers often waste 20 minutes arguing with a confused agent when clearing and stating a precise prompt fixes it in 30 seconds.',
    usage: '"When the agent got confused by conflicting CSS rules, I cleared the session and prompted: \'Inspect App.css line 40 and fix the flex overflow\'."',
    relatedIds: ['session', 'smart-zone', 'handoff']
  },
  {
    id: 'handoff-artifact',
    title: 'Handoff Artifact',
    category: 'handoffs-memory',
    shortDef: 'A persistent markdown document or ticket produced by one session specifically to seed the context of a future session.',
    eli5: 'A sticky note left on the kitchen counter by the night shift worker telling the morning shift worker exactly what soup was made and what bread needs baking.',
    deepDive: 'Unlike fleeting chat messages, a handoff artifact lives on the filesystem (e.g. in `.gemini/` or `specs/`). It records: current system state, tests that pass, remaining blockers, and exact files to touch next.',
    practicalExample: 'A `migration_plan.md` file describing remaining database tables to migrate.',
    avoid: 'Writing vague handoff artifacts. Good artifacts include exact file paths, function names, and terminal verification commands.',
    usage: '"The research agent produced a detailed `migration-plan.md` artifact which the implementation agent executed step-by-step."',
    relatedIds: ['handoff', 'spec', 'ticket', 'spec-driven-development']
  },
  {
    id: 'spec-driven-development',
    title: 'Spec-Driven Development (SDD)',
    category: 'handoffs-memory',
    shortDef: 'An agentic engineering methodology where detailed, human-reviewed specifications are authored before any production code is written.',
    eli5: 'Drawing the complete blueprint of the treehouse and agreeing on every board and nail before you buy wood or swing a hammer.',
    deepDive: 'In SDD, the human and agent collaborate in Planning Mode to debate trade-offs, define interface boundaries, schema contracts, and verification criteria in a `spec.md` file. Once the spec is approved, autonomous agents execute the implementation against the spec with high precision.',
    practicalExample: 'Writing a 2-page spec detailing API routes, error codes, and database fields before the coding agent generates 500 lines of code.',
    avoid: 'Letting agents jump straight to code without an agreed-upon specification for features larger than a 10-line bug fix.',
    usage: '"Spec-Driven Development reduced our agent PR rework rate by 70% because architectural misalignment was caught before coding began."',
    relatedIds: ['spec', 'ticket', 'grilling', 'design-concept']
  },
  {
    id: 'spec',
    title: 'Spec',
    category: 'handoffs-memory',
    shortDef: 'A high-level design document detailing what is being built, architectural requirements, interfaces, and constraints.',
    eli5: 'The master recipe book for a 5-course dinner: exactly what each dish should look like, taste like, and how hot it should be served.',
    deepDive: 'A spec provides the overarching target for a multi-session project. It decomposes large initiatives into modular, independently testable tickets.',
    practicalExample: 'A markdown document describing the authentication flow, JWT refresh mechanics, and cookie security flags.',
    avoid: 'Treating specs as unchangeable religious dogma. If an agent discovers an unexpected technical blocker, update the spec explicitly.',
    usage: '"Check the spec to verify whether the authentication token should be stored in an HTTP-only cookie or local storage."',
    relatedIds: ['spec-driven-development', 'ticket', 'handoff-artifact']
  },
  {
    id: 'ticket',
    title: 'Ticket',
    category: 'handoffs-memory',
    shortDef: 'A self-contained work unit derived from a spec, perfectly sized for a single focused agent session.',
    eli5: 'One small bite of the apple: "Paint the front door red." Easy to do in 15 minutes, easy to check if it\'s done!',
    deepDive: 'A great agent ticket contains: 1 clear goal, list of files to modify, acceptance criteria, and the exact verification test command. If a ticket takes more than 15 agent turns, it should be split into smaller tickets.',
    practicalExample: '"Ticket 2: Add validation for email format in `RegisterForm.tsx` and run `npm test auth`."',
    avoid: 'Assigning a giant epic ticket like "Rewrite the frontend" to an agent in a single session.',
    usage: '"Ticket 3: Implement the user avatar dropdown menu according to the design tokens in navbar.tsx."',
    relatedIds: ['spec', 'handoff-artifact', 'session']
  },
  {
    id: 'primary-source',
    title: 'Primary Source vs. Secondary Source',
    category: 'handoffs-memory',
    shortDef: 'Primary sources are raw authoritative artifacts (code, test runs); secondary sources are lossy summaries or documentation.',
    eli5: 'Primary source is looking at the actual crime scene photos. Secondary source is listening to someone tell a story about what they think happened.',
    deepDive: 'Primary sources (source code, compiler errors, git diffs) are completely accurate but token-expensive. Secondary sources (summaries, docs, compaction notes) are token-cheap but can omit subtle edge cases. High-performing agents use secondary sources for discovery and primary sources for execution.',
    practicalExample: 'Reading the raw TypeScript file is a primary source; reading a 2-line docstring summary is a secondary source.',
    avoid: 'Relying exclusively on a secondary summary when diagnosing a subtle concurrency or memory bug.',
    usage: '"The summary claimed all tests passed, but checking the primary source CI log revealed a hidden race condition."',
    relatedIds: ['handoff-artifact', 'compaction', 'context']
  },
  {
    id: 'memory-system',
    title: 'Memory System',
    category: 'handoffs-memory',
    shortDef: 'An external architecture allowing agents to persist knowledge across days and sessions via markdown files or vector databases.',
    eli5: 'A diary where the AI writes down your favorite habits and quirks: "Remember: User loves Tailwind CSS, hates semicolons, and uses Yarn."',
    deepDive: 'Because LLMs are stateless, memory systems store facts in the environment (e.g. `MEMORY.md`, vector stores, or knowledge graphs). At the beginning of each session, the harness queries relevant memories and injects them into the prompt.',
    practicalExample: 'A file `.cursor/rules` or `MEMORY.md` that automatically reminds the agent to write functional React components.',
    avoid: 'Storing millions of unindexed memory logs that clutter and poison the context window.',
    usage: '"Our memory system stored my preference for functional components and automatically applied it across all new views."',
    relatedIds: ['stateful', 'agents-md', 'context-pointer']
  },

  // --- 6. Steering & Subagents ---
  {
    id: 'agents-md',
    title: 'AGENTS.md (Project Brief)',
    category: 'steering-capabilities',
    shortDef: 'A standardized repository root markdown file automatically ingested into the agent’s context to dictate project rules.',
    eli5: 'The house rules poster on the front door: "Wipe your shoes, don\'t touch the thermostat, and always put dirty dishes in the dishwasher!"',
    deepDive: 'Similar to `.cursorrules` or `.github/copilot-instructions.md`, an `AGENTS.md` file contains project conventions: build commands, package managers, testing standards, code formatting rules, and banned patterns. It is the standing brief for every agent entering the codebase.',
    practicalExample: 'An `AGENTS.md` file containing `Build: npm run build`, `Test: npm run test`, `Do not use lodash`.',
    avoid: 'Writing a 2,000-line AGENTS.md filled with generic advice. Keep it concise, actionable, and specific to the codebase.',
    usage: '"We added our custom lint command to `AGENTS.md`, and the agent immediately started running it before committing."',
    relatedIds: ['system-prompt', 'memory-system', 'context-pointer']
  },
  {
    id: 'context-pointer',
    title: 'Context Pointer',
    category: 'steering-capabilities',
    shortDef: 'A lightweight reference in a document that directs the agent where to find deep documentation only when needed.',
    eli5: 'A road sign that says: "Looking for the beach? Take Exit 4." Instead of dragging the whole beach with you, you only go there if you want to swim!',
    deepDive: 'Instead of stuffing 200 pages of API docs into context, a context pointer provides a single line: `For payment webhooks, see docs/webhooks.md`. The agent only reads the file if the current task involves webhooks, saving token budget.',
    practicalExample: 'In your README: "Database schema details located at `docs/schema.md`."',
    avoid: 'Pre-loading every documentation file into context upfront.',
    usage: '"Use context pointers in your main README so the agent navigates the codebase on-demand rather than bloating context."',
    relatedIds: ['progressive-disclosure', 'attention-budget', 'agents-md']
  },
  {
    id: 'progressive-disclosure',
    title: 'Progressive Disclosure',
    category: 'steering-capabilities',
    shortDef: 'The design practice of loading minimal high-level context first, allowing the agent to drill down into specifics via tools.',
    eli5: 'Looking at a world map first, zooming into France second, zooming into Paris third, and only checking street names when you need to find the bakery.',
    deepDive: 'Borrowed from UX design, progressive disclosure for agents means: show the directory tree first, let the agent grep for function signatures second, and only view the specific 50-line method implementation third.',
    practicalExample: 'Running `list_dir` to see folder names before opening 15 source files.',
    avoid: 'Dumping 20 entire source files into context on the first turn of a request.',
    usage: '"Progressive disclosure kept our session token consumption under 15,000 tokens while navigating a 500,000-line enterprise monorepo."',
    relatedIds: ['context-pointer', 'attention-budget', 'tool']
  },
  {
    id: 'skill',
    title: 'Skill',
    category: 'steering-capabilities',
    shortDef: 'A modular, teachable capability package (prompt instructions + helper scripts) pulled into context for specialized workflows.',
    eli5: 'A secret recipe card that the AI pulls out of its pocket only when you ask it to bake a triple-layer chocolate soufflé.',
    deepDive: 'A skill bundles domain expertise—such as migrating databases, building interactive generative UI, or auditing accessibility—into a self-contained folder with a `SKILL.md`. The agent activates the skill only when the task matches.',
    practicalExample: 'A `react-compiler` skill that teaches the agent the exact rules for React 19 memoization.',
    avoid: 'Hardcoding every possible task workflow into a single gigantic system prompt.',
    usage: '"The agent activated the `migrate-workflows` skill to transform our legacy YAML pipelines into modern TypeScript scripts."',
    relatedIds: ['subagent', 'harness', 'agents-md']
  },
  {
    id: 'subagent',
    title: 'Subagent',
    category: 'steering-capabilities',
    shortDef: 'A secondary, isolated agent spawned by a primary agent to execute a focused child task and report back with a concise result.',
    eli5: 'A master chef sending an apprentice down into the basement cellar to count how many wine bottles are left, coming back with just a 1-sentence answer: "We have 14 bottles."',
    deepDive: 'A subagent runs in its own distinct session with its own clean context window. It might be assigned a messy job—like reading 40 files to locate where an error is thrown—and returns only a two-sentence summary to the parent agent, protecting the parent from context bloat.',
    practicalExample: 'Spawning a research subagent to search web documentation while the main agent refactors the UI.',
    avoid: 'Allowing unbounded recursive subagent spawning that explodes API spend.',
    usage: '"The coordinator agent spawned a research subagent to search online docs while it continued refactoring the UI."',
    relatedIds: ['subagent-swarm', 'agent', 'handoff']
  },
  {
    id: 'subagent-swarm',
    title: 'Subagent Swarm (Multi-Agent)',
    category: 'steering-capabilities',
    shortDef: 'An orchestration pattern where multiple specialized agents run concurrently to inspect, build, and verify distinct components.',
    eli5: 'A full pit crew at a Formula 1 race! One person changes the front tires, one changes the rear tires, and another fuels the car all at the exact same time.',
    deepDive: 'In a swarm or multi-agent topology, tasks are distributed: one agent writes frontend components, another writes backend endpoints, and a third runs automated security checks. Results are reconciled by a lead orchestrator.',
    practicalExample: 'Deploying 5 subagents in parallel to audit 5 different microservices for security flaws simultaneously.',
    avoid: 'Deploying swarms for simple tasks that a single agent can solve in three turns.',
    usage: '"We deployed a subagent swarm to simultaneously audit all 45 API endpoints for OWASP vulnerabilities."',
    relatedIds: ['subagent', 'agent', 'software-factory']
  },
  {
    id: 'ralph-loop',
    title: 'Loop Engineering (Ralph Loop)',
    category: 'steering-capabilities',
    shortDef: 'An agentic architecture wrapping LLMs in an autonomous feedback loop: write code, execute tests/compilers, feed errors back, and repeat until green.',
    eli5: 'A kid building a Lego tower who tests it by gently shaking the table: if a brick falls off, they fix that brick, shake it again, and repeat until the tower stands completely strong!',
    deepDive: 'Named colloquially in developer circles (and formalizing the ReAct / Test-Driven Agent pattern), Loop Engineering shifts AI coding from one-shot guessing to an autonomous `while True` loop: Generate Diff -> Execute Compiler / Linter / Test -> Feed Tool Result Back -> Refine Diff -> Break when all pass.',
    practicalExample: 'An agent running `tsc -b`, receiving 3 type errors, modifying the interface, running `tsc -b` again, and stopping only when exit code is 0.',
    avoid: 'Infinite loops! Always configure a max-iterations breaker (e.g. max 5 attempts) to prevent draining your API budget.',
    usage: '"The Ralph loop caught 4 broken imports and an unhandled promise rejection before yielding back to the user."',
    relatedIds: ['self-healing-loop', 'automated-check', 'agent']
  },
  {
    id: 'self-healing-loop',
    title: 'Self-Healing Loop',
    category: 'steering-capabilities',
    shortDef: 'An agentic cycle where code generation is immediately tested by compilers or test runners, and errors are fed back for auto-repair.',
    eli5: 'A self-correcting spellchecker: as soon as it types an error, the compiler catches it, whispers the error code to the robot, and the robot fixes the typo automatically.',
    deepDive: 'Rather than expecting an LLM to generate flawless code on the first attempt, a self-healing loop runs `tsc` or `npm test`. If an error occurs, the harness feeds the exact stack trace back into the context, allowing the agent to self-correct automatically.',
    practicalExample: 'The agent edits `utils.ts`, runs `npm test`, sees a failed assertion on line 14, and patches line 14 without asking human help.',
    avoid: 'Allowing the agent to report completion without running the verification loop.',
    usage: '"The self-healing loop caught a missing React hook dependency and patched the import before anyone noticed."',
    relatedIds: ['automated-check', 'tool-result', 'non-determinism', 'ralph-loop']
  },
  {
    id: 'deterministic-guardrails',
    title: 'Deterministic Guardrails',
    category: 'steering-capabilities',
    shortDef: 'Non-LLM deterministic software checks (compilers, AST linters, typecheckers) enforcing strict rules on agent outputs.',
    eli5: 'A coin sorter machine. A penny physically cannot fit into the dime slot. It doesn\'t ask for opinions or guess—physics enforces the rule 100% of the time.',
    deepDive: 'An LLM cannot be 100% deterministic, but a compiler is. Deterministic guardrails act as the immune system of an agentic workflow: any code that fails formatting (Prettier), type checking (TypeScript), or linting (Oxlint) is rejected before merge.',
    practicalExample: 'A pre-commit hook that runs `oxlint` and blocks git commit if any unused variables exist.',
    avoid: 'Using a second LLM to verify code syntax when a 10ms compiler check provides mathematical certainty.',
    usage: '"We added a pre-commit deterministic guardrail that blocks the agent from creating any bundle with unresolved type errors."',
    relatedIds: ['automated-check', 'self-healing-loop', 'automated-review']
  },

  // --- 7. Patterns of Work ---
  {
    id: 'evals',
    title: 'Evals (Model Evaluations & Benchmarks)',
    category: 'patterns-of-work',
    shortDef: 'Automated test suites, behavioral scorecards, and benchmarks that measure an AI model or prompt’s accuracy, regressions, and capability.',
    eli5: 'A standardized school exam with 100 math problems. Every time you tweak the prompt or switch models, you make the AI take the test to see if its grade went up or down!',
    deepDive: 'Evals are the unit tests of AI engineering. They range from deterministic assertion evals (did the code compile? did unit tests pass?) to model-graded evals (LLM-as-a-judge evaluating code style or tone). Rigorous evals prevent regressions when updating system prompts or switching model providers.',
    practicalExample: 'Running a benchmark of 50 common bug scenarios to measure what percentage of bugs Claude vs Gemini fixes on the first attempt.',
    avoid: 'Changing system prompts based on a "vibe check" with 1 single question instead of running a suite of 50 evals.',
    usage: '"Our evals showed that adding the new AGENTS.md rule boosted test pass rates from 68% to 92% across our benchmark suite."',
    relatedIds: ['automated-check', 'automated-review', 'grounding']
  },
  {
    id: 'github-copilot',
    title: 'GitHub Copilot (AI Coding Assistants)',
    category: 'patterns-of-work',
    shortDef: 'IDE-integrated developer assistants providing real-time ghost text autocomplete, inline diff editing, and conversational workspace code generation.',
    eli5: 'A super-fast co-driver sitting next to you while you code: before your fingers even finish typing a function, it whispers the next 3 lines in faint gray text right on your screen.',
    deepDive: 'Copilot popularized AI coding by streaming low-latency next-token completions based on neighboring tabs and cursor location. Modern incarnations have evolved from inline tab-completion into full agentic modes that edit multi-file workspaces and run terminal commands.',
    practicalExample: 'Typing `function calculateTax(` and pressing Tab to accept the automatically suggested implementation.',
    avoid: 'Blindly pressing Tab to accept large generated blocks without reading them carefully.',
    usage: '"I use inline Copilot autocomplete for boilerplate lines, but switch to autonomous agent mode for large multi-file refactors."',
    relatedIds: ['vibe-coding', 'human-in-the-loop', 'agent']
  },
  {
    id: 'human-in-the-loop',
    title: 'Human-in-the-Loop (HITL)',
    category: 'patterns-of-work',
    shortDef: 'A collaborative pattern where the developer actively pairs with the agent, guiding decisions and reviewing changes in real time.',
    eli5: 'A student driving the car on their learner\'s permit, while the driving instructor sits in the passenger seat with their foot right above the brake pedal.',
    deepDive: 'HITL combines human intuition and taste with AI execution speed. The human steers architecture, verifies diffs, and resolves ambiguity, while the agent handles syntax, boilerplate, and repetitive refactoring.',
    practicalExample: 'You approve the implementation plan and review each file diff before allowing the agent to git commit.',
    avoid: 'Abdication of engineering responsibility. HITL requires active review of the code diff, not just passive acceptance.',
    usage: '"We use HITL for core domain business logic, but switch to AFK mode for mechanical test suite generation."',
    relatedIds: ['afk', 'human-review', 'grilling']
  },
  {
    id: 'afk',
    title: 'AFK (Away From Keyboard)',
    category: 'patterns-of-work',
    shortDef: 'A pattern where the developer launches an agent with a well-defined spec and leaves it to run unattended in the background.',
    eli5: 'Turning on your robotic vacuum cleaner, leaving the house to go grab lunch with your friends, and coming back to a spotless living room floor.',
    deepDive: 'AFK workflows are unlocked by robust specs, reliable tool sandboxing, and self-healing test loops. An engineer queues up 5 tickets at the end of the day, and returns in the morning to 5 completed pull requests accompanied by passing CI checks.',
    practicalExample: 'Running `/goal migrate all icons to Lucide` in Antigravity and letting it edit 40 files while you take a break.',
    avoid: 'Running AFK mode without automated test suites or linters to catch regressions.',
    usage: '"I queued up the documentation overhaul in AFK mode and went for lunch; the agent completed 14 files flawlessly."',
    relatedIds: ['human-in-the-loop', 'software-factory', 'sandbox']
  },
  {
    id: 'vibe-coding',
    title: 'Vibe Coding',
    category: 'patterns-of-work',
    shortDef: 'A casual workflow where the developer accepts the agent’s code without reviewing the diffs, relying entirely on runtime visual vibes.',
    eli5: 'Cooking a stew by dumping in random spices without measuring anything or tasting it, just saying "the kitchen smells amazing!" and serving it to guests.',
    deepDive: 'Popularized by builders prototyping consumer apps at breakneck speed. While effective for hackathons, exploratory prototypes, and throwaway scripts, vibe coding in production accumulates catastrophic technical debt and security holes.',
    practicalExample: 'Building a working landing page in 20 minutes by just saying "make it prettier" without opening the generated CSS file.',
    avoid: 'Vibe coding in medical, financial, or security-critical codebases where hidden edge cases carry severe consequences.',
    usage: '"He vibe-coded an iPhone app in a weekend without reading a single line of Swift, but had to rewrite the auth system for production."',
    relatedIds: ['prototyping', 'human-review', 'dark-factory']
  },
  {
    id: 'human-review',
    title: 'Human Review',
    category: 'patterns-of-work',
    shortDef: 'A developer carefully inspecting the exact unified git diff produced by an agent to judge correctness, safety, and maintainability.',
    eli5: 'Actually reading every single line of the rental contract before signing your name on the dotted line.',
    deepDive: 'Reading the agent\'s natural language summary does not count as human review. Human review requires auditing the actual lines added and deleted in the diff.',
    practicalExample: 'Opening the GitHub Pull Request "Files Changed" tab and inspecting lines colored green and red.',
    avoid: 'Skimming the agent summary and clicking "Merge" without expanding the diff.',
    usage: '"Human review caught that the agent had silently relaxed our password validation regex to make a failing test pass."',
    relatedIds: ['vibe-coding', 'automated-review', 'human-in-the-loop']
  },
  {
    id: 'automated-check',
    title: 'Automated Check',
    category: 'patterns-of-work',
    shortDef: 'A deterministic, binary pass/fail verification executing in the environment (tests, linter, typecheck, build).',
    eli5: 'A smoke alarm. It doesn\'t have feelings or opinions—if there is smoke, it beeps loud; if there is no smoke, it stays silent.',
    deepDive: 'Automated checks provide immediate ground truth. Because they have zero ambiguity, they are the ideal feedback signal for agent self-healing loops.',
    practicalExample: 'Running `npm test` and receiving exit code 0 (success) or exit code 1 (failure).',
    avoid: 'Telling an agent "check if this looks good" without giving it an automated check command like `npm run test`.',
    usage: '"The automated check failed with exit code 1, signaling the agent to re-examine the changed interface."',
    relatedIds: ['automated-review', 'self-healing-loop', 'deterministic-guardrails']
  },
  {
    id: 'automated-review',
    title: 'Automated Review (LLM as Judge)',
    category: 'patterns-of-work',
    shortDef: 'Using a distinct model or persona to critique, review, and evaluate the output of another coding agent.',
    eli5: 'Having a second teacher review your essay to double-check that your first teacher didn\'t miss anything.',
    deepDive: 'Because automated review is non-deterministic, it is suited for subjective qualities: code readability, naming clarity, adherence to design principles, and missing test coverage.',
    practicalExample: 'A GitHub action that spawns a Claude 3.7 reviewer agent to comment on code readability on every incoming PR.',
    avoid: 'Using LLM reviews as a replacement for unit tests or static analysis.',
    usage: '"A secondary Claude 3.7 reviewer agent audited the PR diff and suggested extracting a reusable helper for the shared state."',
    relatedIds: ['automated-check', 'human-review', 'grilling']
  },
  {
    id: 'grilling',
    title: 'Grilling (Socratic Interview)',
    category: 'patterns-of-work',
    shortDef: 'A technique where an agent interviews the developer with focused Socratic questions to crystallize ambiguous requirements before coding.',
    eli5: 'A thoughtful doctor asking you 10 specific questions about exactly where your stomach hurts before writing a prescription.',
    deepDive: 'Instead of making wild guesses when requirements are underspecified, the agent grills the user: "Should unauthenticated users be redirected or shown a modal? How should network timeouts be handled?". This resolves design decisions early.',
    practicalExample: 'Typing `/grill-me` so the agent asks you 3 multiple choice questions to clarify an architectural edge case.',
    avoid: 'Starting implementation when half the edge-case requirements are still implicit.',
    usage: '"The agent grilled me on the caching invalidation policy for 5 minutes before writing a single line of Redis code."',
    relatedIds: ['design-concept', 'spec-driven-development', 'human-in-the-loop']
  },
  {
    id: 'design-concept',
    title: 'Design Concept',
    category: 'patterns-of-work',
    shortDef: 'The shared mental model of architecture, user flows, and trade-offs held in common between human and agent.',
    eli5: 'The shared picture in both of your heads of what the treehouse will look like before either of you picks up a saw.',
    deepDive: 'Code is merely an artifact of the design concept. When the human and agent share a sharp design concept, the agent generates accurate solutions with minimal rework.',
    practicalExample: 'Agreeing that the app will be "offline-first with optimistic UI updates" before coding the API calls.',
    avoid: 'Treating code generation as disconnected prompts without aligning on the overarching design concept.',
    usage: '"We spent 15 minutes aligning on the design concept: an offline-first event-sourced architecture."',
    relatedIds: ['grilling', 'spec-driven-development', 'prototyping']
  },
  {
    id: 'prototyping',
    title: 'Prototyping',
    category: 'patterns-of-work',
    shortDef: 'Having the agent rapidly construct a rough, working implementation to validate assumptions and create a concrete conversational artifact.',
    eli5: 'Making a quick sculpture out of Play-Doh so everyone can look at it and agree on the shape before carving it out of expensive marble.',
    deepDive: 'When discussion becomes too abstract, prototyping builds a tangible proof-of-concept in minutes. It is much easier to evaluate and critique a live prototype than a 20-page theoretical document.',
    practicalExample: 'Having the agent build a 100-line working React component in 2 minutes to test touch gestures.',
    avoid: 'Shipping prototype code directly to production without refactoring for edge cases, security, and error handling.',
    usage: '"The agent scaffolded a working prototype of the 3D graph canvas in 10 minutes so we could test touch performance."',
    relatedIds: ['vibe-coding', 'design-concept']
  },
  {
    id: 'ax',
    title: 'AX (Agent Experience)',
    category: 'patterns-of-work',
    shortDef: 'How ergonomic, clear, and well-structured a codebase is for AI agents to navigate, understand, and modify successfully.',
    eli5: 'How clean and organized your kitchen is so a visiting chef can cook a 5-star meal quickly without opening every wrong drawer looking for the salt.',
    deepDive: 'Just as DX (Developer Experience) measures how easily humans can build in a repo, AX measures how easily agents can do good work. High-AX repos have fast typecheckers, clear AGENTS.md files, descriptive symbol names, and minimal boilerplate.',
    practicalExample: 'Adding explicit TypeScript return types to functions so an agent doesn\'t have to guess what an API returns.',
    avoid: 'Treating a messy codebase as the agent\'s fault when obsolete files and ambiguous folder names degrade its AX.',
    usage: '"Investing in AX by writing clean typescript interfaces tripled our agent\'s one-shot PR success rate."',
    relatedIds: ['dx', 'agents-md', 'software-factory']
  },
  {
    id: 'dx',
    title: 'DX (Developer Experience)',
    category: 'patterns-of-work',
    shortDef: 'How smooth, fast, and enjoyable the development environment is for human software engineers.',
    eli5: 'How nice it feels to play a great video game with smooth controls, instant loading screens, and zero lag.',
    deepDive: 'DX encompasses fast hot-reloading, clear error messages, ergonomic CLI tools, and predictable workflows. High DX almost always directly creates high AX.',
    practicalExample: 'A Vite dev server that reloads in 50ms gives developers immediate visual feedback.',
    avoid: 'Sacrificing human DX in an attempt to cater to proprietary agent formats.',
    usage: '"Improving our build time from 45 seconds to 2 seconds improved our DX and enabled instant agent feedback loops."',
    relatedIds: ['ax', 'automated-check']
  },
  {
    id: 'software-factory',
    title: 'Software Factory',
    category: 'patterns-of-work',
    shortDef: 'A systematic pipeline where triggers (webhooks, alerts, tickets) autonomously launch agent sessions to build, test, and submit PRs.',
    eli5: 'An automated car factory where robotic arms weld, paint, and assemble cars 24/7, and humans only walk in to do quality inspection.',
    deepDive: 'In a software factory, humans shift from being the primary typists to orchestrators and reviewers. Bug reports from Sentry automatically trigger an agent session that reproduces the bug, adds a regression test, writes a fix, and opens a PR.',
    practicalExample: 'A Dependabot-style system where security alerts trigger an agent to upgrade the package and run integration tests.',
    avoid: 'Connecting a software factory directly to production deployments without human approval gates.',
    usage: '"Our software factory handles 40% of routine dependency upgrades and security patch PRs with zero manual intervention."',
    relatedIds: ['dark-factory', 'afk', 'subagent-swarm']
  },
  {
    id: 'dark-factory',
    title: 'Dark Factory',
    category: 'patterns-of-work',
    shortDef: 'A codebase or subsystem where software is authored, tested, and deployed entirely by AI agents without any human reviewing the code.',
    eli5: 'A factory with all the lights turned off because only robots work inside, and robots don\'t need light to see!',
    deepDive: 'Borrowed from manufacturing ("lights-out manufacturing"), a dark factory requires near-perfect automated test suites, behavioral contracts, and synthetic monitoring. If the black-box passes all formal verifications, it ships.',
    practicalExample: 'A internal ETL data transformation pipeline written and updated 100% by agents with zero human diff reviews.',
    avoid: 'Attempting dark factory development without comprehensive end-to-end integration test coverage.',
    usage: '"The data translation microservice runs as a dark factory: agents write the parsers, run the validation suites, and deploy."',
    relatedIds: ['software-factory', 'vibe-coding', 'automated-check']
  },

  // --- 8. Economics & Production ---
  {
    id: 'jevons-paradox',
    title: 'Jevons Paradox (Jev)',
    category: 'economics-production',
    shortDef: 'The economic principle stating that as technological progress makes a resource cheaper and more efficient, total consumption of that resource skyrockets rather than falls.',
    eli5: 'When LED light bulbs made electric lighting 90% cheaper, people didn\'t spend less money on electricity—they put Christmas lights on every house, tree, and bridge! Making AI tokens 90% cheaper didn\'t shrink API bills; it caused developers to run 1,000x more autonomous agent loops!',
    deepDive: 'Named after 19th-century economist William Stanley Jevons who observed that more efficient steam engines caused coal consumption to explode. In AI engineering, as inference costs plummet ($0.10 per million tokens), developers stop using LLMs for simple single-turn answers and start running multi-agent swarms consuming 50 million tokens per task.',
    practicalExample: 'A developer who used to spend $5/month on ChatGPT now spends $50/month on automated agent coding loops because each ticket runs 20 background tool executions.',
    avoid: 'Assuming that cheaper model pricing will reduce your total company AI expenditure. It will unlock higher-order agentic consumption.',
    usage: '"Jevons paradox hit our engineering budget: when Claude 3.5 Sonnet cut token prices in half, our team started running automated PR bots on every commit, quadrupling total monthly spend."',
    relatedIds: ['tokenomics', 'inference-compute-scaling', 'software-factory']
  },
  {
    id: 'tokenomics',
    title: 'Tokenomics (AI Cost Structure)',
    category: 'economics-production',
    shortDef: 'The economic equations and unit costs governing LLM API usage across input, cached, output, and reasoning tokens.',
    eli5: 'The gas mileage of your AI: tracking how much money you spend for every word the AI reads, plans, and writes.',
    deepDive: 'Agent economics differ fundamentally from traditional SaaS. Costs scale directly with repository size (input tokens), turn counts, prompt cache hit rates, and model reasoning effort. Optimizing token efficiency is an essential engineering discipline.',
    practicalExample: 'Calculating that 100k cached tokens costs $0.03, while 10k output tokens costs $0.15.',
    avoid: 'Treating API costs as unpredictable magic rather than a measurable function of context size and turn loops.',
    usage: '"By restructuring our system prompt to leverage the prefix cache, our monthly agent tokenomics dropped by 65%."',
    relatedIds: ['prefix-cache', 'cache-tokens', 'input-tokens', 'output-tokens', 'jevons-paradox']
  },
  {
    id: 'inference-compute-scaling',
    title: 'Inference Compute Scaling (Test-Time Compute)',
    category: 'economics-production',
    shortDef: 'Scaling model intelligence at runtime by dedicating more computational tokens to reasoning and verification during inference.',
    eli5: 'Giving a grandmaster 10 minutes to calculate chess moves on scrap paper instead of demanding they play in 1 second.',
    deepDive: 'While pre-training scaling laws face data limits, test-time compute scaling laws show that spending 10x more inference compute (via chain-of-thought, tree-of-thought, or multi-candidate verification) rivals the accuracy of a model 100x larger.',
    practicalExample: 'A reasoning model spending 3,000 thinking tokens checking edge cases before outputting a 10-line security patch.',
    avoid: 'Assuming that prompt engineering alone can compensate for insufficient test-time reasoning compute on complex problems.',
    usage: '"Inference compute scaling allowed the model to spend 45 seconds analyzing mathematical invariants before writing the compiler pass."',
    relatedIds: ['effort', 'reasoning-tokens', 'training']
  },
  {
    id: 'cost-quality-pareto',
    title: 'Cost-Quality Pareto Frontier',
    category: 'economics-production',
    shortDef: 'The optimal trade-off curve between model intelligence/quality and execution cost/speed across model tiers.',
    eli5: 'Finding the sweet spot: you don\'t take a million-dollar private jet to drive to the local grocery store, and you don\'t ride a tricycle across the ocean.',
    deepDive: 'Frontier models (expensive, high capability) sit at the top of the curve; lightweight models (cheap, sub-second latency) sit at the bottom. World-class agent architectures route trivial tasks (grepping, formatting) to cheap models and reserving frontier models for architectural synthesis.',
    practicalExample: 'Using Gemini Flash for grepping 50 files ($0.001) and Claude Sonnet for writing the actual architecture diff ($0.04).',
    avoid: 'Using a $15/million token frontier model to check if a git branch is dirty.',
    usage: '"We built a model router that operates right on the Pareto frontier: 90% of file lookups run on Flash, and complex edits run on Sonnet."',
    relatedIds: ['tokenomics', 'model', 'model-provider']
  },
  {
    id: 'local-vs-hosted',
    title: 'Local vs. Hosted Models',
    category: 'economics-production',
    shortDef: 'Running open-weights models on private local hardware (Ollama, vLLM) versus querying proprietary frontier APIs over the cloud.',
    eli5: 'Baking bread in your kitchen oven (free, 100% private, works with no internet) vs. buying fresh baguettes from a world-famous bakery downtown (costs money, but tastes like pure magic).',
    deepDive: 'Hosted models offer state-of-the-art reasoning, massive context windows, and zero hardware maintenance. Local models provide complete air-gapped privacy, zero per-token API charges, and offline functionality, but require high-end GPU hardware (e.g. Apple Silicon Unified Memory or RTX 4090s).',
    practicalExample: 'Running Llama 3 locally via Ollama for scanning sensitive passwords, and using Claude via API for complex refactoring.',
    avoid: 'Assuming local 7B models can match frontier 400B+ models on complex multi-file architectural refactors.',
    usage: '"We use local models for confidential proprietary IP scanning, and cloud frontier models for our general development agents."',
    relatedIds: ['model-provider', 'tokenomics', 'environment']
  },

  // --- 20 Concepts That Explain AI (Infographic Foundations & Systems) ---
  {
    id: 'neural-networks',
    title: 'Neural Networks',
    category: 'the-model',
    shortDef: 'The underlying brain and computational foundation of modern AI, composed of interconnected layers of nodes (neurons) that adjust mathematical weights during training.',
    eli5: 'A gigantic puzzle made of billions of tiny lightbulbs and switches connected in layers. Whenever you give it an example, it turns dials slightly until it guesses the right answer!',
    deepDive: 'Data flows from input nodes through hidden layers to output nodes. Each connection holds a mathematical floating-point weight. Training is simply running backpropagation and gradient descent billions of times until the network predicts text, images, or actions accurately. Frontier models like GPT-4 contain up to 1.8 trillion parameters across mixture-of-experts subnetworks.',
    practicalExample: 'When you feed a prompt into an LLM, your tokens pass through tens of transformer layers inside a deep neural network, multiplying billions of weights in milliseconds.',
    avoid: 'Thinking neural networks store facts like a relational SQL database. They store probabilistic associative patterns across distributed weights.',
    usage: '"Behind all the agent scaffolding and prompt engineering is a massive deep neural network computing matrix multiplications on GPUs."',
    relatedIds: ['model', 'parameters', 'transformers', 'embeddings']
  },
  {
    id: 'tokenization',
    title: 'Tokenization',
    category: 'the-model',
    shortDef: 'The process of chopping raw human text into chunks of characters or subwords (tokens) that a neural network can turn into numbers.',
    eli5: 'Like cutting a long sentence into building blocks or puzzle pieces. Common words like "dog" are one block, but longer words like "playing" get sliced into "play" and "ing".',
    deepDive: 'Neural networks cannot read strings directly; they process integers mapped to vocabulary indexes via algorithms like Byte-Pair Encoding (BPE). As a rule of thumb, 1 token ≈ 0.75 English words (or 1,000 tokens ≈ 750 words). Tokenization handles typos, new programming languages, foreign alphabets, and whitespace without requiring infinite dictionary lookups.',
    practicalExample: 'The phrase "ChatGPT is awesome" gets split into ["Chat", "G", "PT", " is", " awesome"] before reaching the model.',
    avoid: 'Assuming 1 character or 1 word equals 1 token. Special characters, code indentation, and non-English scripts often consume 3x to 5x more tokens.',
    usage: '"Code with four spaces on every line consumes significantly more tokens than tabbed code due to tokenization rules."',
    relatedIds: ['token', 'tokenomics', 'embeddings', 'context-window']
  },
  {
    id: 'embeddings',
    title: 'Embeddings',
    category: 'the-model',
    shortDef: 'High-dimensional numerical coordinate vectors that capture the conceptual meaning and semantic relationships of words, code, or documents.',
    eli5: 'A secret GPS coordinate map for ideas. Words with similar meanings—like "Doctor" and "Nurse", or "King" and "Queen"—sit right next to each other on the map!',
    deepDive: 'Tokens and sentences are mapped to vectors in a continuous geometric space (e.g., 1536 or 3072 dimensions). In embedding space, semantic similarity equals mathematical vector proximity (cosine distance or dot product). This powers vector semantic search, recommendations, deduplication, and RAG retrieval pipelines.',
    practicalExample: 'When you search your codebase for "authentication errors", embeddings locate `verifySession()` and `UnauthorizedException` even if the word "error" never appears in that file.',
    avoid: 'Comparing embeddings generated by two different embedding models (e.g. OpenAI text-embedding-3 vs Cohere Embed). Their vector geometries are completely incompatible.',
    usage: '"Generate embeddings for the repository functions so our RAG agent can semantically look up relevant API endpoints."',
    relatedIds: ['vector-databases', 'rag', 'tokenization', 'attention']
  },
  {
    id: 'attention',
    title: 'Attention Mechanism',
    category: 'the-model',
    shortDef: 'The mathematical algorithm in transformers allowing each word in a sequence to look at and weigh all other words simultaneously to determine contextual meaning.',
    eli5: 'When you hear "She bought shares in Apple", you immediately know "Apple" means the tech company, not the fruit in the grocery store, because your brain pays attention to the words "bought" and "shares"!',
    deepDive: 'Introduced in "Attention Is All You Need" (Vaswani et al., 2017), self-attention computes query, key, and value matrices ($Q, K, V$). By calculating dot-product attention scores across all token pairs in parallel, the model dynamically resolves pronouns, syntax hierarchies, and long-range semantic dependencies without sequential recurrent loops.',
    practicalExample: 'In code generation, attention links an opening bracket or function parameter defined 50 lines earlier to the return statement currently being generated.',
    avoid: 'Assuming attention is uniformly distributed across the prompt. Models naturally exhibit positional bias ("lost in the middle"), paying higher attention to the very beginning and very end of the context window.',
    usage: '"The self-attention layers compute how every token in your AST correlates with the type definitions at the top of the file."',
    relatedIds: ['transformers', 'context-window', 'attention-budget', 'lost-in-the-middle']
  },
  {
    id: 'transformers',
    title: 'Transformers',
    category: 'the-model',
    shortDef: 'The groundbreaking deep learning architecture based entirely on stacked attention layers and feed-forward networks, powering virtually all modern frontier LLMs.',
    eli5: 'A super-assembly factory with dozens of floors. Instead of reading a book one word at a time from left to right like an old computer, it looks at the whole page at once and refines its understanding on every floor!',
    deepDive: 'Unlike older recurrent models (RNNs/LSTMs) that processed text sequentially, Transformers process all tokens in parallel using positional encodings and multi-head self-attention. Stacked layers progressively extract low-level syntax up to abstract cross-modal reasoning. GPT, Claude, Gemini, Llama, and Mistral are all built on this architecture.',
    practicalExample: 'Every time you talk to Claude 3.7 or GPT-4o, your query flows through stacked transformer decoder blocks running across thousands of interconnected H100/B200 GPUs.',
    avoid: 'Confusing transformers with robots or generic machine learning algorithms. It is a specific neural network architecture for parallel sequence modeling.',
    usage: '"The transformer architecture allowed AI labs to scale compute and data predictably following neural scaling laws."',
    relatedIds: ['attention', 'neural-networks', 'llms', 'inference']
  },
  {
    id: 'llms',
    title: 'LLMs (Large Language Models)',
    category: 'the-model',
    shortDef: 'Massive transformer neural networks trained on vast web-scale corpora of text, code, and documentation to predict subsequent tokens and perform generalized reasoning.',
    eli5: 'A digital scholar who read almost every book, article, and piece of software code ever written by humanity. It learned grammar, humor, Python, math, and logic just by practicing filling in the blanks millions of times!',
    deepDive: 'At their core, LLMs perform next-token prediction over hundreds of billions of parameters. Through scale, emergent capabilities arise—such as zero-shot reasoning, translation, coding, and tool invocation. Modern LLMs are further refined via instruction tuning and reinforcement learning (RLHF/RLAIF) to behave as cooperative assistants rather than raw text completors.',
    practicalExample: 'Sending a broken TypeScript function to Claude or Gemini and receiving a fixed version with an explanation is the direct output of an LLM.',
    avoid: 'Believing an LLM is a search engine with real-time web awareness out-of-the-box. Without tools or RAG, an LLM only knows its static pretraining snapshot.',
    usage: '"We use an LLM as the reasoning engine at the core of our automated code migration agent."',
    relatedIds: ['model', 'transformers', 'tokenization', 'hallucination']
  },
  {
    id: 'temperature',
    title: 'Temperature',
    category: 'the-model',
    shortDef: 'A hyperparameter scaling the probability distribution over tokens during generation, acting as the dial between predictability and creativity.',
    eli5: 'The imagination dial! At 0, the model is icy cold and strictly picks the single most probable, factual answer. At 1.5, it gets warm and wild, dreaming up creative stories or risky ideas!',
    deepDive: 'Before sampling, logits are divided by the temperature $T$: $P(w_i) = \\frac{\\exp(z_i / T)}{\\sum_j \\exp(z_j / T)}$. Setting $T=0$ yields greedy decoding (deterministic, reproducible facts/code). Setting $T=0.7$ gives natural conversational balance. High temperature ($T > 1.2$) flattens the distribution, increasing vocabulary diversity but raising the risk of nonsense and hallucinations.',
    practicalExample: 'For code syntax generation, SQL queries, and tool calling, set temperature to 0.0 or 0.2. For brainstorming product names or creative copywriting, set it to 0.8+.',
    avoid: 'Using temperature 0.8+ for JSON output or code generation, which can cause syntax errors and invalid parameter formatting.',
    usage: '"Lock the temperature down to 0.0 in the agent harness so our JSON function calls adhere strictly to schema specs."',
    relatedIds: ['model', 'inference', 'hallucination', 'prompt-engineering']
  },
  {
    id: 'hallucination',
    title: 'Hallucination',
    category: 'context-failure',
    shortDef: 'When an AI model produces plausible-sounding statements, code libraries, function signatures, or facts with complete confidence despite them being entirely fictional.',
    eli5: 'When an AI lies with a straight face! It doesn\'t know it is making things up; it just picked words that sound super convincing together, like citing a book or software library that doesn\'t exist!',
    deepDive: 'LLMs are trained to maximize token probability, not objective empirical truth. In the absence of retrieved context, the model interpolates plausible patterns from its weights. In software development, hallucinations manifest as "phantom dependencies" (importing `react-awesome-modal-v3` which does not exist on npm) or fabricated API flags.',
    practicalExample: 'An agent writing Python code imports a nonexistent `requests.auth.AutoJWTAuth` helper because the name sounds completely natural in context.',
    avoid: 'Relying purely on LLM memory for security audits, legal compliance, or niche library APIs. Always verify facts with RAG, linters, or live compilers.',
    usage: '"Ground the prompt with official documentation via RAG to eliminate library API hallucinations."',
    relatedIds: ['sycophancy', 'rag', 'evals', 'grounding']
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    category: 'the-model',
    shortDef: 'The disciplined practice of structuring input instructions, context, personas, and few-shot examples to elicit optimal, accurate reasoning from an AI model.',
    eli5: 'Learning how to give crystal-clear instructions to a brilliant intern. Instead of saying "write some code", you say "you are a senior engineer, write a secure login endpoint in Python with comments and error handling"!',
    deepDive: 'Prompt engineering transforms vague queries into high-performing outputs using established techniques: system role designation, few-shot demonstration pairs, chain-of-thought triggers ("think step by step"), output format constraints (XML/JSON tags), and negative constraints ("do not modify public APIs").',
    practicalExample: 'Bad prompt: "Explain APIs." -> Vague, shallow answer. Good prompt: "Explain how REST APIs handle OAuth2 token refresh with a concise TypeScript example. Assume I am a junior engineer." -> Crisp, targeted answer.',
    avoid: 'Treating prompt engineering as magical spells or endless verbose paragraphs. Models respond best to structured XML delimiters, explicit schemas, and concise instructions.',
    usage: '"Our team updated the system prompt with few-shot schema examples, boosting agent tool-call reliability from 78% to 99%."',
    relatedIds: ['prompt', 'instructions', 'chain-of-thought', 'steering-capabilities']
  },
  {
    id: 'transfer-learning',
    title: 'Transfer Learning',
    category: 'the-model',
    shortDef: 'Taking a model trained on a massive general-purpose dataset and repurposing its foundational knowledge for a specialized domain or task.',
    eli5: 'Like learning how to ride a motorcycle after you already know how to ride a bicycle. You don\'t have to relearn balance from scratch—you just learn the motor and clutch!',
    deepDive: 'Instead of spending millions training a neural network from scratch on private data, engineers start with a foundation model (e.g. Llama or DeepSeek) that already understands syntax, logic, and human language. By training it further on legal briefs, medical papers, or internal codebases, the model acquires niche expertise with minimal compute.',
    practicalExample: 'Taking base Llama 3 and training it solely on Solidity smart contracts to build a dedicated DeFi security auditor.',
    avoid: 'Pretraining from scratch when transfer learning on open foundation weights achieves 95% of the performance at 0.1% of the compute cost.',
    usage: '"Through transfer learning, we adapted an open-weights foundation model to master our internal proprietary C++ framework."',
    relatedIds: ['fine-tuning', 'lora', 'rlhf', 'model']
  },
  {
    id: 'fine-tuning',
    title: 'Fine-Tuning',
    category: 'the-model',
    shortDef: 'The process of updating the weights of a pretrained model on a curated, domain-specific dataset to specialize its tone, syntax, or task behavior.',
    eli5: 'Sending a general college graduate to a 3-month intensive boot camp to become a specialized tax accountant or pediatric nurse.',
    deepDive: 'While in-context learning uses tokens in the context window, fine-tuning modifies the model\'s internal parameters through supervised learning on input-output pairs. It burns domain knowledge directly into the weights, permanently teaching the model proprietary DSLs, strict company style guides, or specialized classification schemas.',
    practicalExample: 'Fine-tuning a 7B parameter model on 10,000 git commit diffs so it outputs git commit messages following the Conventional Commits specification perfectly.',
    avoid: 'Using fine-tuning when simple prompt engineering or RAG retrieval would solve the problem faster and allow instant document updates.',
    usage: '"We fine-tuned the model on our private codebase so it understands our custom ORM syntax without needing 20 pages of documentation in every prompt."',
    relatedIds: ['transfer-learning', 'lora', 'rlhf', 'rag']
  },
  {
    id: 'rlhf',
    title: 'RLHF (Reinforcement Learning from Human Feedback)',
    category: 'the-model',
    shortDef: 'A training technique where human evaluators score model responses, training a reward model that guides the AI toward being helpful, harmless, and honest.',
    eli5: 'Giving the AI a gold star ⭐ when it gives a clear, polite, and safe answer, and a gentle thumbs down 👎 when it gives a confusing or dangerous answer.',
    deepDive: 'Raw pretrained LLMs predict internet text—including toxic rants, spam, and broken code. RLHF aligns the raw model through a three-step process: (1) Supervised Fine-Tuning (SFT), (2) Training a reward model on human preference rankings (A vs B), and (3) Optimizing policy weights using reinforcement algorithms like PPO or Direct Preference Optimization (DPO).',
    practicalExample: 'When an LLM refuses to write ransomware and instead offers to explain how cybersecurity firewalls work, you are observing RLHF alignment in action.',
    avoid: 'Over-aligning with aggressive RLHF, which can cause excessive refusal rates and sycophantic behavior where the model apologizes constantly.',
    usage: '"The RLHF alignment pass turned the base text completor into an interactive coding assistant that proactively writes test cases."',
    relatedIds: ['sycophancy', 'fine-tuning', 'evals', 'model']
  },
  {
    id: 'lora',
    title: 'LoRA (Low-Rank Adaptation)',
    category: 'the-model',
    shortDef: 'An efficient parameter adaptation technique that freezes the base model weights and trains small auxiliary low-rank matrix adapters, slashing GPU memory requirements.',
    eli5: 'Instead of rebuilding an entire skyscraper, you just plug in a small, lightweight expansion room on the side with the specialized tools you need!',
    deepDive: 'Standard full fine-tuning requires updating all billions of parameters and storing massive optimizer states. LoRA freezes the original weight matrix W and injects trainable rank decomposition matrices A and B, such that Delta W = B x A, with rank r << d. This reduces trainable parameters by 99% and allows running multiple fine-tuned models by swapping tiny adapter files (tens of megabytes) onto one shared base model in VRAM.',
    practicalExample: 'Training a custom coding LoRA on a single consumer RTX 4090 GPU in two hours instead of renting an 8x H100 cluster for full fine-tuning.',
    avoid: 'Retraining base model weights from scratch when a modular LoRA adapter achieves comparable quality at a fraction of the cost.',
    usage: '"We dynamically load a Ruby LoRA adapter when the user opens a Rails repository, and swap to a Go LoRA when they switch to our backend service."',
    relatedIds: ['fine-tuning', 'quantization', 'transfer-learning', 'model']
  },
  {
    id: 'quantization',
    title: 'Quantization',
    category: 'economics-production',
    shortDef: 'Compressing model weights by reducing numerical precision (e.g., from 16-bit floating point to 8-bit or 4-bit integers), making models smaller and faster on consumer hardware.',
    eli5: 'Like saving a photo as a lightweight JPEG instead of a massive RAW file. You barely notice the difference in quality, but it suddenly fits easily on your laptop or phone!',
    deepDive: 'Standard weights are stored in FP16 or BF16 (16 bits per parameter). Quantization techniques (such as GGUF, AWQ, and GPTQ) convert these weights into INT8, INT4, or 2-bit representations. A 70B parameter model that originally needed 140 GB of VRAM can fit onto a 40 GB Mac Studio or dual RTX 3090 setup at 4-bit precision with negligible loss in reasoning benchmarks.',
    practicalExample: 'Running Llama 3 70B quantized at 4-bit on an Apple Silicon M3 Max laptop using Ollama with fast inference speeds.',
    avoid: 'Over-quantizing down to 2-bit or 3-bit for complex architectural tasks, where numerical precision loss leads to degraded mathematical reasoning and code syntax bugs.',
    usage: '"We deployed 4-bit AWQ quantized models to our production edge servers, cutting cloud GPU hosting bills by 70%."',
    relatedIds: ['local-vs-hosted', 'tokenomics', 'lora', 'inference']
  },
  {
    id: 'vector-databases',
    title: 'Vector Databases',
    category: 'tools-environment',
    shortDef: 'Specialized database systems optimized for storing and executing lightning-fast nearest-neighbor similarity searches across high-dimensional embedding vectors.',
    eli5: 'A super-fast library card catalog where books are organized by meaning rather than alphabetical order. If you ask for "mysterious detectives", it instantly pulls books about Sherlock Holmes without needing those exact words!',
    deepDive: 'Traditional relational databases index keywords using B-Trees; vector databases (like Pinecone, Qdrant, Weaviate, pgvector, and Chroma) index high-dimensional vectors using Approximate Nearest Neighbor (ANN) algorithms such as HNSW (Hierarchical Navigable Small World). They power modern RAG architectures by retrieving the top-$k$ most relevant text chunks matching a user\'s query vector.',
    practicalExample: 'Storing 50,000 files of codebase documentation in Qdrant; when a user asks "How do I setup webhooks?", the vector DB returns the top 3 markdown files in 8 milliseconds.',
    avoid: 'Using vector search for exact string matching (like finding a specific UUID or function name `handle_v2_webhook`). Combine vector search with BM25 lexical keyword search in a hybrid retrieval setup.',
    usage: '"We use pgvector to index our repository embeddings, allowing our coding agent to inject exact relevant helper functions into the prompt context."',
    relatedIds: ['embeddings', 'rag', 'agentic-rag', 'context-window']
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    category: 'steering-capabilities',
    shortDef: 'Autonomous software entities powered by an LLM core, equipped with tools, memory, and an observation-thought-action loop to execute multi-step objectives independently.',
    eli5: 'A tireless digital assistant with hands and eyes! Instead of just giving you an answer to read, it opens files, writes code, runs terminal commands, reads the error messages, and fixes the bugs all by itself.',
    deepDive: 'Unlike a passive chatbot that generates a single response and stops, an agent operates inside an autonomous loop: Goal -> Plan -> Tool Action (bash, filesystem, web search) -> Observe Output -> Self-Correct -> Final Result. Architectures like ReAct (Reasoning + Acting) and frameworks like LangChain, CrewAI, and Antigravity orchestrate agent execution.',
    practicalExample: 'An agent receiving the prompt "Upgrade our project from React 18 to 19", which inspects `package.json`, updates dependencies, runs `npm test`, reads compile errors, fixes breaking changes, and opens a git pull request.',
    avoid: 'Letting agents run indefinitely in unconstrained infinite loops without budget caps, maximum step limits, or human-in-the-loop safety checkpoints.',
    usage: '"Deploy an agent with git and terminal tools to autonomously reproduce and patch issue #402."',
    relatedIds: ['agent', 'harness', 'workflows', 'skills', 'computer-use']
  },
  {
    id: 'chain-of-thought',
    title: 'Chain-of-Thought (CoT)',
    category: 'the-model',
    shortDef: 'A prompting and reasoning technique where the model generates intermediate step-by-step rationales before arriving at a final answer, dramatically boosting logic accuracy.',
    eli5: 'Showing your work in math class! If you try to do a 10-step math problem in your head all at once, you will probably make a mistake. But if you write down every step line-by-line, you get it right every time.',
    deepDive: 'LLMs generate text token-by-token. Forcing the model to output reasoning tokens before the conclusion allows subsequent attention layers to attend to intermediate reasoning steps. Frontier reasoning models (such as OpenAI o1/o3, Claude 3.7 Extended Thinking, and DeepSeek R1) dedicate hidden test-time compute to Chain-of-Thought planning before executing actions.',
    practicalExample: 'Direct answer prompt fails on a complex refactor; adding "Think step by step and verify type constraints before writing the function" guides the model to successfully debug the issue.',
    avoid: 'Suppressing reasoning scratchpads on complex tasks. Let the model "think out loud" in designated reasoning blocks or scratchpad tags.',
    usage: '"Chain-of-Thought reasoning caught the subtle race condition that zero-shot prompting missed completely."',
    relatedIds: ['reasoning-effort', 'prompt-engineering', 'test-time-compute', 'self-healing']
  },
  {
    id: 'diffusion-models',
    title: 'Diffusion Models',
    category: 'the-model',
    shortDef: 'Generative deep learning models that generate high-quality images, audio, or video by iteratively removing Gaussian noise from a random latent canvas.',
    eli5: 'Imagine looking at a television screen of pure static fuzz. The AI slowly clears away the fuzz speck-by-speck until a gorgeous high-definition painting of a sunset appears!',
    deepDive: 'Diffusion models (like Stable Diffusion, Midjourney, and Flux) are trained on a forward process (gradually adding Gaussian noise to an image until it is unrecognizable) and learn the reverse denoising process conditioned on text embeddings (via cross-attention). While LLMs dominate text/code, diffusion models dominate generative visual and audio media.',
    practicalExample: 'Generating high-resolution UI mockup banners and SVG icons directly from text descriptions during application prototyping.',
    avoid: 'Assuming diffusion models generate text and code. They are specialized for continuous perceptual data like pixels and spectrograms.',
    usage: '"We use diffusion models in our asset pipeline to generate branded application icons on the fly."',
    relatedIds: ['neural-networks', 'transformers', 'embeddings', 'model']
  },

  // --- Comprehensive RAG Architecture Suite ---
  {
    id: 'rag',
    title: 'RAG (Retrieval-Augmented Generation)',
    category: 'the-model',
    shortDef: 'An architecture that retrieves relevant factual documents from an external knowledge base and injects them into the prompt before the LLM generates an answer.',
    eli5: 'Taking an open-book exam! Instead of forcing the student to memorize the entire library, you let them look up the exact textbook page right before answering your question.',
    deepDive: 'Raw LLMs suffer from knowledge cutoffs and hallucinations. In a basic RAG pipeline: (1) Documents are chunked and embedded into a vector database, (2) User asks a question, (3) Vector search retrieves the top-$k$ most similar chunks, (4) Retrieved chunks are injected into the LLM prompt as context, and (5) The LLM synthesizes an accurate, grounded answer citing source documents.',
    practicalExample: 'Connecting an enterprise company handbook to an internal chatbot so employees receive verified answers on maternity leave policies with exact handbook page citations.',
    avoid: 'Dumping huge, unchunked 100-page PDFs into the prompt. Poor chunking leads to noisy context and high token costs.',
    usage: '"By implementing RAG, our coding assistant answers queries about our proprietary internal APIs without needing model fine-tuning."',
    relatedIds: ['agentic-rag', 'vector-databases', 'embeddings', 'context-window', 'hallucination']
  },
  {
    id: 'agentic-rag',
    title: 'Agentic RAG',
    category: 'steering-capabilities',
    shortDef: 'An advanced multi-step RAG pattern where an autonomous agent dynamically plans queries, evaluates retrieved context quality, reformulates searches, and coordinates multiple data sources.',
    eli5: 'Instead of an assistant grabbing the first book off the shelf and hoping it has the answer, this assistant reads the page, realizes it\'s missing a piece of information, searches three other books, verifies the facts, and synthesizes the complete answer!',
    deepDive: 'Standard naive RAG executes a single rigid retrieve-then-generate pass. Agentic RAG gives the model agency over retrieval: it decides *when* to search, *what* keywords or filters to use, checks if the retrieved snippets actually answer the question (self-critique), routes between SQL databases, vector stores, and web search, and iterates until confident.',
    practicalExample: 'An agent resolving a customer billing dispute that queries the vector database for refund policy, calls a Stripe API tool for invoice history, notices a discrepancy, and synthesizes a tailored resolution.',
    avoid: 'Using naive single-pass RAG for complex multi-hop research questions where information must be linked across multiple disparate documents.',
    usage: '"Our support bot uses Agentic RAG to dynamically route queries between Postgres transaction records, Zendesk tickets, and Notion SOPs."',
    relatedIds: ['rag', 'graph-rag', 'ai-agents', 'tools-environment', 'self-rag']
  },
  {
    id: 'graph-rag',
    title: 'Graph RAG',
    category: 'steering-capabilities',
    shortDef: 'A retrieval paradigm combining Knowledge Graphs with vector search, enabling LLMs to reason across complex entity relationships, hierarchies, and multi-hop connections.',
    eli5: 'Connecting information into a web of who-knows-who and what-links-to-what. Instead of just searching for words that look similar, it traces family trees and corporate structures step-by-step!',
    deepDive: 'Vector search excels at localized semantic similarity but struggles with holistic theme summarization or multi-hop relationship reasoning ("How does Person A\'s subsidiary affect Project B?"). Graph RAG extracts entities and relationships into a structured Knowledge Graph (using tools like Neo4j or Microsoft GraphRAG) and combines graph traversals with community summaries and vector retrieval for deep relational context.',
    practicalExample: 'Mapping a large monolithic codebase into a dependency graph: when refactoring `UserService`, Graph RAG traces all 40 dependent microservices and database schemas across the repo.',
    avoid: 'Assuming flat vector embeddings alone can accurately navigate complex 5-hop relationship queries.',
    usage: '"We deployed Graph RAG across our legal contracts to trace corporate ownership structures that traditional vector search missed."',
    relatedIds: ['rag', 'agentic-rag', 'vector-databases', 'modular-rag']
  },
  {
    id: 'modular-rag',
    title: 'Modular RAG',
    category: 'steering-capabilities',
    shortDef: 'A modern, decoupled RAG framework featuring interchangeable modules for query rewriting, routing, pre-retrieval, hybrid search, re-ranking, and post-synthesis verification.',
    eli5: 'A high-tech LEGO pipeline for information! You can swap in a better search engine, plug in a smart fact-checker, or add a summarizer module without having to rebuild the whole system.',
    deepDive: 'Modular RAG breaks the retrieval pipeline into independent, composable components: Query Expansion -> Hybrid Retrieval (Dense Vector + Sparse BM25) -> Cross-Encoder Re-Ranking -> Context Compression -> Grounded Generation -> Output Evaluation. Teams can independently benchmark and upgrade each module.',
    practicalExample: 'Adding a Cohere Rerank module between your vector search and LLM context window to reorder the top 50 retrieved snippets by true relevance before generation.',
    avoid: 'Building monolithic, hardcoded RAG pipelines that cannot easily adapt to new re-ranking algorithms or embedding models.',
    usage: '"Our Modular RAG setup uses hybrid sparse-dense retrieval followed by a cross-encoder re-ranker, boosting retrieval precision by 34%."',
    relatedIds: ['rag', 'agentic-rag', 'vector-databases', 'hyde']
  },
  {
    id: 'hyde',
    title: 'HyDE (Hypothetical Document Embeddings)',
    category: 'steering-capabilities',
    shortDef: 'A retrieval technique where the LLM first generates a hypothetical answer to the user query, and that hypothetical answer\'s embedding is used to search the vector database.',
    eli5: 'Before searching the library, the AI quickly writes what it thinks the answer looks like. Searching with an answer-shaped paragraph finds real answers much better than searching with a short question!',
    deepDive: 'User queries are often short, vague questions ("auth bug in safari"), whereas target documents are detailed technical explanations ("Handling WebKit third-party cookie restrictions"). Because question vectors and answer vectors inhabit different regions in embedding space, HyDE instructs an LLM to generate an unverified hypothetical document. Generating embeddings on this hypothetical answer yields dramatically higher cosine similarity with real documentation chunks.',
    practicalExample: 'User asks "How to configure SSL in Nginx with Docker?" -> HyDE generates a fake Nginx config snippet -> Vector search easily matches the actual production Nginx guide.',
    avoid: 'Using HyDE when query latency is paramount, as it introduces an extra LLM generation step prior to vector retrieval.',
    usage: '"Enabling HyDE in our developer portal increased retrieval hit rate for ambiguous natural-language queries from 61% to 89%."',
    relatedIds: ['rag', 'embeddings', 'vector-databases', 'modular-rag']
  },
  {
    id: 'self-rag',
    title: 'Self-RAG (Self-Reflective RAG)',
    category: 'context-failure',
    shortDef: 'An adaptive framework where the model outputs reflection tokens to evaluate whether retrieval is needed, whether retrieved passages are relevant, and whether its answer is supported.',
    eli5: 'A self-grading student! As the AI writes, it pauses to ask itself: "Do I actually need to look this up? Does this article really prove my point? Did I just make something up?"',
    deepDive: 'Standard RAG blindly retrieves documents for every input, even when the model already knows the answer. Self-RAG trains models to output special reflection tokens: [Retrieve] (triggers search only when needed), [IsRel] (checks if retrieved passage is relevant), [IsSup] (verifies if generated sentence is grounded by the context), and [IsUse] (scores utility). This eliminates hallucination while avoiding unnecessary retrieval latency.',
    practicalExample: 'When asked "What is 2+2?", Self-RAG answers immediately from weights; when asked "What was our Q3 European churn rate?", it emits a [Retrieve] token to fetch the spreadsheet.',
    avoid: 'Running heavy vector searches for generic programming questions ("how to reverse a string in Python") that LLMs can answer with 100% precision from weights.',
    usage: '"Self-RAG saved 40% of our vector database query costs by selectively retrieving only for proprietary knowledge gaps."',
    relatedIds: ['rag', 'corrective-rag', 'hallucination', 'agentic-rag']
  },
  {
    id: 'corrective-rag',
    title: 'Corrective RAG (CRAG)',
    category: 'context-failure',
    shortDef: 'A robust retrieval framework that grades retrieved documents and dynamically triggers web search or query correction if the retrieved internal documents are deemed irrelevant.',
    eli5: 'An AI safety net! If the internal files it pulled are useless or off-topic, it doesn\'t guess blindly—it tosses them out and runs a live web search to find the right facts instead.',
    deepDive: 'Corrective RAG (CRAG) implements a lightweight retrieval evaluator that classifies retrieved passages into three confidence levels: Correct (proceed with context refinement and generation), Ambiguous (combine internal documents with external web search), or Incorrect (discard internal documents completely and fall back to public web search). This prevents garbage context from polluting the prompt.',
    practicalExample: 'A developer asks about a brand-new React 19 feature that is not in the internal documentation wiki; CRAG detects low retrieval relevance and immediately queries the live web to fetch official release notes.',
    avoid: 'Blindly passing low-scoring vector search results into the context window, which often induces hallucinated responses.',
    usage: '"CRAG prevents hallucination by automatically switching to web search whenever local vector similarity scores fall below 0.65."',
    relatedIds: ['rag', 'self-rag', 'agentic-rag', 'modular-rag']
  }
];

// Helper functions
export function getItemById(id: string): DictionaryItem | undefined {
  return DICTIONARY_ITEMS.find((item) => item.id.toLowerCase() === id.toLowerCase());
}

export function getCategoryInfo(category: Category): CategoryInfo {
  return CATEGORIES[category];
}

export function getAllCategories(): CategoryInfo[] {
  return Object.values(CATEGORIES);
}

export function getConnectedItems(id: string): DictionaryItem[] {
  const item = getItemById(id);
  if (!item) return [];
  return item.relatedIds
    .map((relId) => getItemById(relId))
    .filter((rel): rel is DictionaryItem => rel !== undefined);
}

export function searchDictionary(query: string, categoryFilter: Category | 'all' = 'all'): DictionaryItem[] {
  const trimmed = query.trim().toLowerCase();
  return DICTIONARY_ITEMS.filter((item) => {
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    if (!matchesCategory) return false;

    if (!trimmed) return true;

    return (
      item.title.toLowerCase().includes(trimmed) ||
      item.shortDef.toLowerCase().includes(trimmed) ||
      item.eli5.toLowerCase().includes(trimmed) ||
      item.deepDive.toLowerCase().includes(trimmed) ||
      (item.avoid && item.avoid.toLowerCase().includes(trimmed)) ||
      (item.usage && item.usage.toLowerCase().includes(trimmed)) ||
      (item.practicalExample && item.practicalExample.toLowerCase().includes(trimmed)) ||
      (item.tags && item.tags.some((t) => t.toLowerCase().includes(trimmed)))
    );
  });
}
