var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send({status: true, message: 'index'});
});

module.exports = router;
