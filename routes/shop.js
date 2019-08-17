const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.send('Hello From Express');//like express github lib file html
});

module.exports = router;