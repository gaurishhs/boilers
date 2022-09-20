module.exports = exampleMiddleware = (req, res, next) => {
    // Do something
    console.log('Middleware called!')
    next();
}