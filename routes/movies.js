var express = require('express')
var router = express.Router()
var movieCtrl = require('../controllers/movies')

/* GET users listing. */
router.get('/', movieCtrl.index)
router.get('/new', movieCtrl.new)
router.get('/:id', movieCtrl.show)
router.post('/', movieCtrl.create)

module.exports = router
