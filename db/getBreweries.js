const fs = require('fs')
const fetch = require('node-fetch');
const url = 'https://api.openbrewerydb.org/breweries?by_state=virginia'

fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        let breweries = JSON.stringify(res)
        fs.writeFile('./db/data.json', breweries, err => {
            if (err) {
                console.log(err)
            } else {
                console.log('success')
            }
        })
    })