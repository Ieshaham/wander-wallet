const express = require('express');
const app = express();
const { Client } = require('pg');  // PostgreSQL client
const cors = require('cors');
const bodyParser = require('body-parser');

// Middleware to parse JSON body
app.use(bodyParser.json());
app.use(cors());  // For handling cross-origin requests

// Create a PostgreSQL client
const client = new Client({
  host: 'localhost',
  port: 5433,         // Make sure this is the correct port (5433 in your case)
  user: 'postgres',
  password: 'Laqavia19',
  database: 'postgres',  // Use the correct database name
});

// Connect to PostgreSQL
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL');
  })
  .catch(err => {
    console.error('Connection error', err.stack);
  });

// Basic route to handle requests to the root URL
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Route to get all destinations
app.get('/destinations', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM destination');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching destinations', err);
    res.status(500).json({ error: 'Failed to fetch destinations' });
  }
});

// Route to add a new destination
app.post('/add-destination', async (req, res) => {
  const { destination_name, location_name, amount } = req.body;

  try {
    const result = await client.query(
      'INSERT INTO destination (destination_name, location_name, amount) VALUES ($1, $2, $3) RETURNING *',
      [destination_name, location_name, amount]
    );
    res.status(200).json({
      message: 'Destination added successfully!',
      data: result.rows[0],
    });
  } catch (err) {
    console.error('Error inserting data: ', err);
    res.status(500).json({ error: 'Failed to add destination' });
  }
});

// Start the server on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
