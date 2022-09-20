/**
 * @author Gaurish Sethia
 * @description Koa basic typescript example
 */
// Importing Koa
import Koa from 'koa';
var port = process.env.PORT || 3000;

// Create Koa Application
const app = new Koa();

// Add routes
app.use(async (ctx, next) => {
    ctx.body = "Hello World";
    await next();
});

// Parameters
app.use(async (ctx, next) => {
    ctx.body = "Hello " + ctx.params.name;
    await next();
});

// Query Parameters
app.use(async (ctx, next) => {
    ctx.body = "Hello " + ctx.query.name;
    await next();
});

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});