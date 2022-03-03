const router = require('express').Router()
// const AuthMidelware = require("../middleware/auth.middleware");
const listController = require('../modules/list/list.controller');

router.get('/get/', [listController.get]);
// router.post('/update/:id', [listController.update]);
// router.post('/delete', [listController.delete]);

module.exports = router;