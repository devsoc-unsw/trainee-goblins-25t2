// index.js
const express = require('express');
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

//  ROUTES 

// GET route for the homepage
app.get('/', (req, res) => {
  res.send('Hello World!');



// GET route to fetch all users


// POST route to add a new user


// Start the server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});