/**
 * Local Ollama Agent Service
 * 100% Private - 0% Quotas - Unlimited PHW
 */

export const conversationState = {
  history: [] as { role: string; content: string }[]
};

export const getAgentResponse = async (userText: string): Promise<string> => {
  try {
    const response = await fetch("http://localhost:11434/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3.2:1b",
        messages: [
          ...conversationState.history,
          { role: "user", content: userText }
        ],
        stream: false, // Wait for the full thought
      }),
    });

    if (!response.ok) throw new Error("Ollama is not responding. Is the app running?");

    const data = await response.json();
    const aiText = data.message.content;

    // Update memory
    conversationState.history.push({ role: "user", content: userText });
    conversationState.history.push({ role: "assistant", content: aiText });

    return aiText;
  } catch (error) {
    console.error("Ollama Error:", error);
    return "Captain! My local brain is offline. Please make sure the Ollama app is running in your taskbar.";
  }
};

//Final PR Check