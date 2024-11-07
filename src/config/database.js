// db.js
const { Client } = require('pg');

// Create the PostgreSQL client
const client = new Client({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,                // Default PostgreSQL port
});

// Connect to the database
client.connect();

// Example query to fetch all users
client.query('SELECT * FROM users;', (err, res) => {
    if (err) {
        console.error('Error executing query', err.stack);
    } else {
        console.log(res.rows);  // Logs the result (all rows in the 'users' table)
    }
    client.end();  // Close the connection
});
