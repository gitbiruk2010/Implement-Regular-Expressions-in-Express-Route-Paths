// Import necessary modules
const express = require('express');

// Create an Express application
const app = express();
// Use environment port or default to 3000
const port = process.env.PORT || 3000;

// Define a route using a regular expression
app.get('/user(name)?', (req, res) => {
  res.send('Hello, user or username!');
});

// 404 error handler
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
