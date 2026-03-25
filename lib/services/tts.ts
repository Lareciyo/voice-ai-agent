/**
 * Text-to-Speech Service
 * Uses the Browser's native SpeechSynthesis API
 */

export const speak = (text: string): void => {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    // Cancel any current speaking
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0; // Normal speed
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    window.speechSynthesis.speak(utterance);
  } else {
    console.error("TTS not supported.");
  }
};