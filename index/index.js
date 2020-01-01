const express = require('express')
const app = express()
const cors = require('cors')
const breweryRoutes = require('../db/routes')

app.use(cors());


app.listen(5000, () => console.log('Example app listening on port 5000!'))


app.use("/", breweryRoutes)

app.get("/", (req, res) => {res.send('/brewery')})

