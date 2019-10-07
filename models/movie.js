const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = Schema({
    title: String,
    releaseYear: { type: Number, default: 2000 },
    mpaaRating: String,
    cast: [String],
    nowShowing: { type: Boolean, default: false }
})

// compile the schema into a model and export it
module.exports = mongoose.model('Movie', movieSchema)