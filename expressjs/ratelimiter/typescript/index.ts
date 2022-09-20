/**
 * @author Gaurish Sethia
 */
import express from "express";
import rateLimit from "express-rate-limit";

// Declare port, default is 3000 or use environment variable
var port = process.env.PORT || 3000;

// Create express app
const app = express();

// Create rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
});

// Apply rate limiter to all requests
app.use(limiter);

// Add landing route
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Start server
app.listen(port, () => {
  console.log("Express Server listening on " + port);
});
