const Beer = require("./Brewery")

module.exports = {
  drinks: (req, res) => {
      Beer.find({}).then( (beer) => {
          res.json(beer)
      })
  },
  create: (req, res) => {
    Beer.create({
      name: req.body.name,
      city: req.body.city,
      state: req.body.state,
      phone: req.body.phone,
      website_url: req.body.website_url,
    }   
    )
    .then(beer => {
        res.json(beer)
      })
},
delete: (req, res) => {
  Beer.create({
    name: req.body.name,
    city: req.body.city,
    state: req.body.state,
    phone: req.body.phone,
    website_url: req.body.website_url,
  })
  .then( beer => {
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

}
 

