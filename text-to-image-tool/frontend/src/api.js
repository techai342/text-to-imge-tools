// Temporary mock function - remove later
export const generateImage = async (prompt) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Return mock response
  return {
    success: true,
    message: "Image generated successfully!",
    imageUrl: "https://via.placeholder.com/512/0077ff/ffffff?text=Generated+Image",
    prompt: prompt
  };
};
