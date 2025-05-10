
/**
 * Utility for making calls to Google's Gemini AI API
 */

export async function callGemini(prompt: string) {
  const apiKey = "AIzaSyAnONWrR2LWBd3ZhO-Yx4xBf4E4JgGC4eU"; // Gemini API key

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();
    
    if (!response.ok) {
      console.error("Gemini API error:", data);
      throw new Error(data.error?.message || "Could not fetch a response from Gemini");
    }
    
    return data.candidates[0].content.parts[0].text;
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
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}
