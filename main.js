const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "portfolio" directory
app.use(express.static(path.join(__dirname, './static/')));

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './', 'index.html'));
});

// Start the server on port 3000 (or any port you like)
const port = process.env.PORT || 8100;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
