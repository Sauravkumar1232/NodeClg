const http = require("http");
const url = require("url");

// Create a server object
const server = http.createServer((req, res) => {
  // Parse the URL to get query parameters
  const queryObject = url.parse(req.url, true).query;

  // Check if the required parameters are provided
  if (!queryObject.principal || !queryObject.rate || !queryObject.time) {
    res.statusCode = 400; // Bad Request
    res.end("Missing required parameters");
    return;
  }

  // Parse query parameters into numbers
  const principal = parseFloat(queryObject.principal);
  const rate = parseFloat(queryObject.rate);
  const time = parseFloat(queryObject.time);

  // Calculate simple interest
  const simpleInterest = (principal * rate * time) / 100;

  // Prepare response
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Simple Interest: ${simpleInterest}`);
});

// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
