/**
 * Speech-to-Text Service
 * Uses the Browser's native Web Speech API
 */

export class STTService {
  private recognition: any;

  constructor() {
    // Check if the browser supports the Web Speech API
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      console.error("Speech Recognition not supported in this browser.");
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false; // Only send final result
    this.recognition.continuous = false;    // Stop listening after one phrase
  }

  // Starts listening and returns a Promise with the text
  listen(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!this.recognition) return reject("STT Not Supported");

      this.recognition.start();

      this.recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        resolve(transcript);
      };

      this.recognition.onerror = (event: any) => {
        reject(event.error);
      };

      this.recognition.onend = () => {
        console.log("Listening stopped.");
      };
    });
  }
}