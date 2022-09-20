// Import express module
/**
 * @author Gaurish Sethia
 * @description This is a basic express server with typescript
 * We use @types/express for type definitions since express doesn't provide by default.
 */
import express from "express";
// Declare port, default is 3000 or use environment variable
var port = process.env.PORT || 3000;

// Create express app
const app = express();

// Add landing route
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Parameters
app.get("/hello/:name", (req, res) => {
  res.json({ message: `Hello ${req.params.name}` });
});

// Query Parameters
app.get("/hello", (req, res) => {
  res.json({ message: `Hello ${req.query.name}` });
})

// Start server
app.listen(port, () => {
  console.log("Express Server listening on " + port);
});
