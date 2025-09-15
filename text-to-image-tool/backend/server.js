const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const generateRoutes = require("./routes/generate");
const adminRoutes = require("./routes/admin");
// REMOVE THIS LINE: const { initDB } = require("./db"); ❌

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/generate", generateRoutes);
app.use("/api/admin", adminRoutes);

// ✅ SIMPLE START WITHOUT DATABASE
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
 console.log(🚀 Server running on port ${PORT});  // ✅ RIGHT 
});
