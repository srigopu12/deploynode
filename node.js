// Importing required modules
const http = require('http');

// Creating a server
const server = http.createServer((req, res) => {
  // Setting the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Sending the welcome message
  res.end('Welcome to Simple Creativity!\n');
});

// Specifying the port and host
const port = 3000;
const host = 'localhost';

// Starting the server
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
