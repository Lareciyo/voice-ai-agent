'use client';
import { useVoiceAgent } from '../lib/hooks/useVoiceAgent';

export default function Home() {
  const { startConversation, isListening, isProcessing, transcript, response } = useVoiceAgent();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 p-24 text-white">
      <h1 className="text-4xl font-bold mb-8">AI Voice Assistant</h1>
      
      <div className="flex flex-col items-center gap-6">
        {/* The Talk Button */}
        <button
          onClick={startConversation}
          disabled={isListening || isProcessing}
          className={`h-32 w-32 rounded-full text-xl font-bold transition-all duration-300 ${
            isListening ? 'bg-red-500 animate-pulse scale-110' : 
            isProcessing ? 'bg-yellow-500' : 'bg-indigo-600 hover:bg-indigo-500'
          }`}
        >
          {isListening ? 'Listening...' : isProcessing ? 'Thinking...' : 'TALK'}
        </button>

        {/* Visual Feedback Area */}
        <div className="mt-12 w-full max-w-md space-y-4">
          <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
            <p className="text-xs uppercase text-slate-500 mb-1 font-mono">You:</p>
            <p className="text-lg">{transcript || "Wait for speech..."}</p>
          </div>
          
          <div className="p-4 bg-indigo-900/30 rounded-lg border border-indigo-500/30">
            <p className="text-xs uppercase text-indigo-400 mb-1 font-mono">Agent:</p>
            <p className="text-lg italic text-indigo-100">{response || "Ready to respond..."}</p>
          </div>
        </div>
      </div>
    </main>
  );
}