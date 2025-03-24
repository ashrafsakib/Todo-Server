const { Pool } = require('pg');

// Creating Pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false,
    },
});

const query = async (sql, values = []) => {
    try {
        console.log(pool)
        const result = await pool.query(sql, values);
        return result;
    } catch (error) {
        console.error('Database query error:', error);
        throw error;
    }
};

module.exports = { query };
