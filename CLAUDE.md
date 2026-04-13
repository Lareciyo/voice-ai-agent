@AGENTS.md
# CLAUDE.md - Voice AI Agent Context

## 🏗️ Project Architecture
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **AI Integration:** Local Ollama API (`localhost:11434`)
- **Voice APIs:** Web Speech API (Native Browser STT/TTS)
- **Services:** Modularized in `lib/services/` for STT, TTS, and Agent logic.

## 🛠️ Common Commands
- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run lint` - Run ESLint code quality checks
- `ollama run llama3.2:1b` - Start the local model (External)

## 📏 Coding Conventions
- **Naming:** Use PascalCase for components and camelCase for functions/services.
- **State Management:** Keep `conversationState` central in `agent.ts` to manage history.
- **Async Logic:** Always use `async/await` with `try/catch` blocks for API calls.
- **Typing:** Strict TypeScript typing; avoid `any`.

## ⚠️ Important Gotchas
- **Ollama Connection:** The agent will fail if Ollama isn't running in the background.
- **Browser Support:** Web Speech API works best in Chrome; ensure microphone permissions are granted.
- **Memory:** `conversationState.history` resets on page refresh unless moved to localStorage.