const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Define the target URL where requests will be forwarded
const targetURL = 'http://www.google.com';

// Create a proxy middleware with the target URL
const proxy = createProxyMiddleware({
  target: targetURL,
  changeOrigin: true,
  xfwd: true,
});

// Use the proxy middleware for the relative path
app.use('/search', proxy);

// Start the server on port 5500
const port = 5500;
app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
