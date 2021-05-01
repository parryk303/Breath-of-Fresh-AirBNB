const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? true : false
});
client.connect();
// eslint-disable-next-line no-console
console.log('=============== Connected to PostgreSQL ===============');

module.exports = client;
