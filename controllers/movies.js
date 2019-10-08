const Movie = require('../models/movie')
const Performer = require('../models/performer')

module.exports = {
  create,
  new: newMovie,
  index,
  show
}

function show(req, res) {
  Movie.findById(req.params.id)
    .populate('cast')
    .exec(function(err, movie) {
      Performer.find({ _id: { $nin: movie.cast } }, function(err, performers) {
        res.render('movies/show', { movie, title: 'Movie Details', performers })
      })
    })
}

function index(req, res) {
  Movie.find({}, (err, movies) => {
    res.render('movies/index', { movies, title: 'All Movies' })
  })
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing
  // remove empty properties
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  var movie = new Movie(req.body)
  movie.save(function(err) {
    // one way to handle errors
    if (err) return res.render('movies/new')
    console.log(movie)
    // for now, redirect right back to new.ejs
    res.redirect(`/movies/${movie._id}`)
  })
}

function newMovie(req, res) {
  res.render('movies/new', { title: 'Add Movie' })
}
