const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Brewery = new Schema({
    name: String,
    city: String,
    state: String,
    phone: Number,
    website_url: String,

})

module.exports = mongoose.model('Brewery', Brewery)