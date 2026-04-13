# API Documentation

## Agent Service (`agent.ts`)

### `getAgentResponse`
Sends a text string to the local Ollama instance and returns the AI's response.

**Parameters:**
- `userText` (string): The transcribed text from the user's voice input.

**Returns:** - `Promise<string>`: The processed response from Llama 3.2.

**Error Handling:**
- Returns a specific "offline" message if the fetch request to `localhost:11434` fails.

---

## State Management (`conversationState`)
A global object used to maintain short-term memory during a session.

**Properties:**
- `history`: An array of objects containing `role` ('user' or 'assistant') and `content`.