const { Pool } = require('pg');

// Creating Pool
const openDb = () => {
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
    return pool;
};

const query = (sql, values = []) => {
    return new Promise(async (resolve, reject) => {
        try {
            const pool = openDb();
            const result = await pool.query(sql, values);
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = { query };
