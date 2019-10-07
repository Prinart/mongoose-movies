var express = require('express');
var router = express.Router();
var movieCtrl = require('../controllers/movies')

/* GET users listing. */
router.get('/new', movieCtrl.new);
router.post('/', movieCtrl.create)

module.exports = router;
