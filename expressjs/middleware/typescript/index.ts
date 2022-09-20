/**
 * @author Gaurish Sethia
 * @description This is a basic express server with middlewares in typescript
 */
import express from "express";

// Declare port, default is 3000 or use environment variable
var port = process.env.PORT || 3000;

// Create express app
const app = express();

// Add middleware
app.use((req, res, next) => {
  console.log("Middleware Called");
  next();
});

// Add landing route
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Start server
app.listen(port, () => {
  console.log("Express Server listening on " + port);
});
