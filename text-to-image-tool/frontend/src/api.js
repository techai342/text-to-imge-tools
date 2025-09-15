const API_URL = "https://text-to-imge-tools-production.up.railway.app";

export const generateImage = async (prompt) => {
  try {
    const response = await fetch(`${API_URL}/api/generate/image`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to generate image. Please try again.");
  }
};
