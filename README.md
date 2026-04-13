![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Ollama](https://img.shields.io/badge/LLM-Ollama-orange)
![Next.js](https://img.shields.io/badge/Framework-Next.js%2014-black)

# 🎙️ Captain Awesome's Voice AI Agent
... (rest of your current content) ...

## 💻 Code Example
To interact with the agent logic directly in your code:
```typescript
import { getAgentResponse } from '@/lib/services/agent';

const answer = await getAgentResponse("Who is the captain?");
console.log(answer); // "You are, Captain Awesome!"

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# 🎙️ Captain Awesome's Voice AI Agent

An immersive, privacy-focused AI assistant built with **Next.js**, **Web Speech API**, and **Ollama (Llama 3.2)**.

## 🚀 The Mission
Build a modular voice agent that listens, thinks, and speaks—all while bypassing cloud quotas by utilizing a **Local-First LLM Architecture**.

## 🧠 Architecture: The Flow
1. **User Speaks:** Captured via the browser's `Web Speech API` (STT).
2. **Local Processing:** The text is sent to a local **Ollama** server running `llama3.2:1b`.
3. **Conversation Memory:** The agent utilizes a persistent state object to remember context (e.g., it knows I am Captain Awesome!).
4. **Voice Output:** The response is spoken back using the `SpeechSynthesis API` (TTS).

## 🛠️ Modular Service Structure
- `lib/services/stt.ts`: Handles microphone input and speech-to-text.
- `lib/services/tts.ts`: Handles text-to-speech output.
- `lib/services/agent.ts`: Orchestrates requests to the local Ollama instance.
- `lib/hooks/useVoiceAgent.ts`: The "Brain" hook that manages the logic flow.

## ⚙️ How to Run Locally
1. Clone the repo: `git clone https://github.com/Lareciyo/voice-ai-agent.git`
2. Install dependencies: `npm install`
3. **Install Ollama:** [Download here](https://ollama.com/)
4. **Pull the Brain:** Run `ollama run llama3.2:1b` in your terminal.
5. Start the engine: `npm run dev`
6. Open `localhost:3000` and start talking!

## 🛡️ Privacy Features
- No cloud API keys required.
- All conversation data stays on the local machine.
- Zero-quota, unlimited throughput for 24/7 PHW.