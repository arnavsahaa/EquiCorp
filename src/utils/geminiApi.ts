
/**
 * Utility for making calls to Google's Gemini AI API
 */

export async function callGemini(prompt: string) {
  const apiKey = "AIzaSyAnONWrR2LWBd3ZhO-Yx4xBf4E4JgGC4eU"; // Gemini API key

  // Enhance the prompt with context about workplace discrimination issues
  const enhancedPrompt = `As an expert on workplace discrimination issues such as Glass Ceiling, Occupational Segregation, Maternity Discrimination, and Retaliation for Speaking Out, please provide helpful information about: ${prompt}`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/chat-bison-001:generateMessage?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: {
            messages: [
              {
                author: "user",
                content: enhancedPrompt,
              },
            ],
          },
          temperature: 0.7,
          candidateCount: 1,
        }),
      }
    );

    const data = await response.json();
    
    if (!response.ok) {
      console.error("Gemini API error:", data);
      throw new Error(data.error?.message || "Could not fetch a response from Gemini");
    }
    
    return data.candidates[0].content;
  } catch (err) {
    console.error("API Error:", err);
    return "Error: Could not fetch a response from Gemini. " + (err instanceof Error ? err.message : "");
  }
}

/**
 * Type definitions for API responses and requests
 */
export interface GeminiResponse {
  candidates: Array<{
    content: string;
  }>;
}
