const Brewery = require('../models/Brewery.js')
const data = require('./data.json')



Brewery.remove({})
    .then(() => {
        Brewery.create(data)
            .then((dataReturn) => {
                console.log(dataReturn)
            })
            .catch(err => {
                console.log(err)
            })
    })