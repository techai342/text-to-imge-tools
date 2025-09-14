const express = require("express");
const { getDB } = require("../db");

const router = express.Router();

// Dummy image generation (replace with real API later)
router.post("/", async (req, res) => {
  const { prompt, userId } = req.body;
  const db = getDB();

  // Count today's images for user
  const today = new Date().toISOString().split("T")[0];
  const result = await db.query(
    "SELECT COUNT(*) FROM generations WHERE user_id=$1 AND DATE(created_at)=$2",
    [userId, today]
  );

  if (parseInt(result.rows[0].count) >= 10) {
    return res.status(403).json({ error: "Daily limit reached (10 images)" });
  }

  // For now, just return a dummy URL
  const imageUrl = `https://dummyimage.com/512x512/000/fff&text=${encodeURIComponent(
    prompt
  )}`;

  await db.query(
    "INSERT INTO generations (user_id, prompt, image_url) VALUES ($1, $2, $3)",
    [userId, prompt, imageUrl]
  );

  res.json({ imageUrl });
});

module.exports = router;