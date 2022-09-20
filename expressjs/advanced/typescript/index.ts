/**
 * @author Gaurish Sethia
 * @description Advanced ExpressJS with Typescript
 * @see https://expressjs.com/en/guide/routing.html
 * @see https://expressjs.com/en/guide/error-handling.html
 * @see https://expressjs.com/en/guide/writing-middleware.html
 * @see https://expressjs.com/en/guide/behind-proxies.html
 * @see https://expressjs.com/en/guide/debugging.html
 */

import express from 'express';
import { exampleMiddleware } from './middlewares';
import rateLimit from 'express-rate-limit'
var port = process.env.PORT || 3000;
import router from './router';


// Create Express Application
const app = express();

// Initialize rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

// Apply to all requests
app.use(limiter);

// Add middleware
app.use(exampleMiddleware)

// Add routes
app.use('/', router);

// Error Handling
app.get("/error", (req, res) => {
    throw new Error("Error!");
});

// Parameters
app.get("/hello/:name", (req, res) => {
    res.send("Hello " + req.params.name);
});

// Query Parameters
app.get("/hello", (req, res) => {
    res.send("Hello " + req.query.name);
});

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});