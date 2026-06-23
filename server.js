// server.js — The "middleman" between your browser and the Anthropic API
// This file runs on your computer and forwards API requests safely,
// bypassing the browser's CORS security restriction.

const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

// ─── PUT YOUR API KEY HERE ───────────────────────────────────────────────────
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
// ────────────────────────────────────────────────────────────────────────────

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Allow requests from your browser (CORS headers)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight OPTIONS request (browser sends this before every API call)
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  // Serve the HTML file when browser visits http://localhost:3000
  if (req.method === "GET" && req.url === "/") {
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("index.html not found — make sure it's in the same folder as server.js");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
    return;
  }

  // Forward API calls to Anthropic when browser posts to http://localhost:3000/api
  if (req.method === "POST" && req.url === "/api") {
    let body = "";

    req.on("data", (chunk) => { body += chunk; });

    req.on("end", () => {
      // Forward the request to Anthropic's real API
      const options = {
        hostname: "api.anthropic.com",
        path: "/v1/messages",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
      };

      const apiReq = https.request(options, (apiRes) => {
        let responseData = "";
        apiRes.on("data", (chunk) => { responseData += chunk; });
        apiRes.on("end", () => {
          res.writeHead(apiRes.statusCode, { "Content-Type": "application/json" });
          res.end(responseData);
        });
      });

      apiReq.on("error", (err) => {
        res.writeHead(500);
        res.end(JSON.stringify({ error: err.message }));
      });

      apiReq.write(body);
      apiReq.end();
    });
    return;
  }

  // Catch-all for any other requests
  res.writeHead(404);
  res.end("Not found");
});

server.listen(PORT, () => {
  console.log(`✅ YMCA Partner Tool server running!`);
  console.log(`👉 Open your browser and go to: http://localhost:${PORT}`);
  console.log(`   Press Ctrl+C to stop the server.`);
});
