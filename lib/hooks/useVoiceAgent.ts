import { useState } from 'react';
import { STTService } from '../services/stt';
import { speak } from '../services/tts';
import { getAgentResponse } from '../services/agent';

export const useVoiceAgent = () => {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const startConversation = async () => {
    const stt = new STTService();
    
    try {
      // 1. Listen
      setIsListening(true);
      const userText = await stt.listen();
      setIsListening(false);
      setTranscript(userText);

      // 2. Process (Mock Agent)
      setIsProcessing(true);
      const aiText = await getAgentResponse(userText);
      setIsProcessing(false);
      setResponse(aiText);

      // 3. Speak
      speak(aiText);
      
    } catch (error) {
      console.error("Voice Agent Error:", error);
      setIsListening(false);
      setIsProcessing(false);
    }
  };

  return {
    startConversation,
    isListening,
    isProcessing,
    transcript,
    response
  };
};