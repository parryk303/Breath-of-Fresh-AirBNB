const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:7188@localhost:5432/listings',
  ssl: !!process.env.DATABASE_URL,
});
// eslint-disable-next-line no-console
console.log('=============== Connected to PostgreSQL ===============');

module.exports = pool;
