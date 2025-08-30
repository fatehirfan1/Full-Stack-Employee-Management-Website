// models/createTables.js
import pool from "../config/db.js";

const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS employees (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        position VARCHAR(100),
        salary NUMERIC,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    console.log("✅ Employees table created!");
  } catch (err) {
    console.error("❌ Error creating tables:", err.message);
  } finally {
    pool.end();
  }
};

createTables();
