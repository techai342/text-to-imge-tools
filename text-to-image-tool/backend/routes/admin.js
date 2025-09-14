const express = require("express");
const { getDB } = require("../db");

const router = express.Router();

// Get all users (simple admin route)
router.get("/users", async (req, res) => {
  const db = getDB();
  const result = await db.query("SELECT id, username, created_at FROM users");
  res.json(result.rows);
});

// Get all generations
router.get("/generations", async (req, res) => {
  const db = getDB();
  const result = await db.query(
    "SELECT id, user_id, prompt, image_url, created_at FROM generations ORDER BY created_at DESC"
  );
  res.json(result.rows);
});

module.exports = router;