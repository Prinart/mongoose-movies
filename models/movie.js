const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = Schema({
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    cast: [String],
    nowShowing: Boolean
})

// compile the schema into a model and export it
module.exports = mongoose.model('Movie', movieSchema)