const Brewery = require('./Brewery')
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