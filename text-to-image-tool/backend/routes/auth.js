const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getDB } = require("../db");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const db = getDB();

  const hashed = await bcrypt.hash(password, 10);
  await db.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
    username,
    hashed,
  ]);

  res.json({ message: "✅ User registered" });
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const db = getDB();

  const result = await db.query("SELECT * FROM users WHERE username=$1", [
    username,
  ]);
  const user = result.rows[0];
  if (!user) return res.status(400).json({ error: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ error: "Invalid password" });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.json({ token });
});

module.exports = router;