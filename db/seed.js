const Brewery = require('../models/Brewery.js')
const data = require('./data.json')

const breweryData = data.map(item => {
    const brewery = {}
    brewery.name = item.name
    brewery.city = item.capital
    brewery.state = item.region
    brewery.phone = item.population
    brewery.website_url = item.website_url

    return country
})
console.log(breweryData)

Brewery.remove({})
    .then(() => {
        Brewery.create(breweryData)
            .then(breweries => {
                console.log(breweries)
            })
            .catch(err => {
                console.log(err)
            })
    })