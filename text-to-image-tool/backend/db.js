const { Pool } = require("pg");
const fs = require("fs");

let pool;

async function initDB() {
  if (pool) return pool;

  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  // Run migration (init.sql)
  const initSql = fs.readFileSync(__dirname + "/migrations/init.sql", "utf-8");
  await pool.query(initSql);

  console.log("✅ Database initialized");
  return pool;
}

function getDB() {
  if (!pool) throw new Error("DB not initialized");
  return pool;
}

module.exports = { initDB, getDB };