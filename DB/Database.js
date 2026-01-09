const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

pool.connect()
  .then(client => {
    console.log("Connected to Supabase Postgres");
    client.release();
  })
  .catch(err => {
    console.error("Error connecting to Supabase DB", err);
  });

module.exports = pool;