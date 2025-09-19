const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Basic CORS
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend is working!" });
});

// Generate route
app.post("/api/generate/image", (req, res) => {
  try {
    const { prompt } = req.body;
    res.json({
      success: true,
      message: "Image generated successfully!",
      imageUrl: https://via.placeholder.com/512/0077ff/ffffff?text=${encodeURIComponent(prompt)},
      prompt: prompt
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(🚀 Server running on port ${PORT});
});
