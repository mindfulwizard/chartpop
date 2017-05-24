const router = require('express').Router();
const reducer = require('./reducer');
const struct = require('./struct');

router.post('/', (req, res) => {
    const testCalc = struct(req.body.results);
    res.json(testCalc);
});

module.exports = router;