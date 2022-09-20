module.exports = exampleMiddleware = (ctx, next) => {
    console.log('Middleware called');
    next();
}