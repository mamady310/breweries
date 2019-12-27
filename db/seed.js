const Brewery = require('../models/Brewery.js')
const data = require('./data.json')

// const breweryData = data.map(item => {
//     const brewery = {}
//     brewery.name = item.name
//     brewery.city = item.city
//     brewery.state = item.state
//     brewery.phone = item.phone
//     brewery.website_url = item.website_url

//     return brewery
// })
// console.log(breweryData)

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