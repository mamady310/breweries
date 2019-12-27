const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/breweries_db", { useNewUrlParser: true });

module.exports = mongoose;

