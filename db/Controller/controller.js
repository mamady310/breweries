const Beer = require("../Brewery")


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
      showName: (req, res) => {
        Beer.find({name: req.params.name})
          .then(beer => {
            res.json(beer)
          })
      },
      showCity: (req, res) => {
        Beer.find({city: req.params.city})
          .then(beer => {
            res.json(beer)
          })
      },
     createCustomer: (req, res) => {
       Beer.create (req.body).then(Beer =>{
        res.json(Beer) 
       })
     },
    }
 

