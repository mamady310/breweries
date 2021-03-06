const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser")
const breweryRoutes = require('./db/routes')


app.use(bodyParser.json())
app.use(cors());
app.use("/", breweryRoutes)
app.get("/", (req, res) => {res.send('/brewery')})
app.set("port", process.env.PORT || 5000);

breweryRoutes.post("/create", (req, res) => {
  Beer.create(req.body).then(beer => {
    res.json(beer)
  })
})

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});













// const express = require('express')
// const app = express()
// const cors = require('cors')
// <<<<<<< HEAD
// const breweryRoutes = require('./db/routes')
// =======
// const breweryRoutes = require('../db/routes')
// >>>>>>> 7e0404b9c47191d04397a059005286a88548a265

// app.use(cors());


// <<<<<<< HEAD
// // app.listen(5000, () => console.log('Example app listening on port 5000!'))
// =======
// app.listen(5000, () => console.log('Example app listening on port 5000!'))
// >>>>>>> 7e0404b9c47191d04397a059005286a88548a265


// app.use("/", breweryRoutes)

// app.get("/", (req, res) => {res.send('/brewery')})

// <<<<<<< HEAD
// app.set("port", process.env.PORT || 5000);

// app.listen(app.get("port"), () => {
//   console.log(`✅ PORT: ${app.get("port")} 🌟`);
// });
// =======
// >>>>>>> 7e0404b9c47191d04397a059005286a88548a265
