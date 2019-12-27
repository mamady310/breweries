const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Virginia Breweries'))

app.get('/city', (req, res) => res.send ('Breweries by City'))

app.listen(5000, () => console.log('Example app listening on port 5000!'))