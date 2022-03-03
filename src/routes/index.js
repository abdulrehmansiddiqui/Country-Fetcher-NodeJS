const router = require('express').Router();

router.use('/list', require('./list.router'));

module.exports = router;