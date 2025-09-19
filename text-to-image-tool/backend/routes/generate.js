const express = require('express');
const router = express.Router();

// POST route for image generation
router.post('/image', async (req, res) => {
  try {
    const { prompt } = req.body;
    
    // Mock response - replace with actual AI API later
    const imageUrl = https://via.placeholder.com/512/0077ff/ffffff?text=${encodeURIComponent(prompt)};
    
    res.json({
      success: true,
      message: "Image generated successfully!",
      imageUrl: imageUrl,
      prompt: prompt
    });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ 
      success: false,
      error: "Internal server error" 
    });
  }
});

module.exports = router;
