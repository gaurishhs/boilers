const Router = require('express').Router;

const router = Router();

router.get('/router', (req, res) => {
    res.send('Hello World!');
})

module.exports = router;