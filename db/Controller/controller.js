const Beer = require("../../Models/Brewery.js")


module.exports = {
    drinks: (req, res) => {
        Beer.find({}).then( (beer) => {
            res.json(beer)
        })
    }
},
 

