const Performer = require('../models/performer')
const Movie = require('../models/movie')
module.exports = {
  new: newPerfomer,
  create,
  addToCast
}

function addToCast(req, res) {
  Movie.findById(req.params.id, function(err, movie) {
    movie.cast.push(req.body.performerId)
    movie.save(function(err) {
      res.redirect(`/movies/${movie._id}`)
    })
  })
}

function create(req, res) {
  // Hack to "fix" date formatting to prevent possible day off by 1
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  var s = req.body.born
  req.body.born = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`
  Performer.create(req.body, function(err, performer) {
    res.redirect('/performers/new')
  })
}

function newPerfomer(req, res) {
  Performer.find({}, function(err, performers) {
    res.render('performers/new', { title: 'Add Performer', performers })
  })
}
