const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// ✅ Fixed CORS configuration
app.use(cors({
  origin: [
    "https://text-to-image-tools-yuyz.vercel.app",
    "http://localhost:3000",
    "https://text-to-imge-tools-production.up.railway.app"
  ],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/generate", require("./routes/generate"));

// Temporary routes
app.get("/", (req, res) => {
  res.json({ message: "Text to Image API is working!" });
});

app.get("/api/generate/image", (req, res) => {
  res.json({ message: "Generate endpoint working!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
