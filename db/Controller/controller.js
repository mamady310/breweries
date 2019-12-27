const Beer = require("../../Models/Brewery.js")


module.exports = {
    drinks: (req, res) => {
        Beer.find({}).then( (beer) => {
            res.json(beer)
        })
    },
    findById: (req, res) => { 
        Beer.findById({ _id: req.params.Id })
          .then(beer => {
            res.json(beer)
          })
      },
}
 

