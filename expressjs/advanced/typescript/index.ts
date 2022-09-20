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
var port = process.env.PORT || 3000;
import router from './router';


// Create Express Application
const app = express();

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