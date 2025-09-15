const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const generateRoutes = require("./routes/generate");
const adminRoutes = require("./routes/admin");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/generate", generateRoutes);
app.use("/api/admin", adminRoutes);

// Temporary routes
app.get("/", (req, res) => {
  res.json({ message: "Text to Image API is working!" });
});

app.get("/api/auth", (req, res) => {
  res.json({ message: "Auth endpoint working!" });
});

app.get("/api/generate/image", (req, res) => {
  res.json({ message: "Generate endpoint working!" });
});

app.get("/api/admin/users", (req, res) => {
  res.json({ message: "Admin endpoint working!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
