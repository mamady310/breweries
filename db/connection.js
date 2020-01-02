const mongoose = require("mongoose");

let mongoURI = ""

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/breweries_db";
  }

mongoose.connect("mongodb://localhost/breweries_db", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;

