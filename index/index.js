const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Virginia Breweries'))
app.listen(5000, () => console.log('Example app listening on port 5000!'))