const express = require('express')
const app = express()
const cors = require('cors')
const breweryRoutes = require('./db/routes')

app.use(cors());


// app.listen(5000, () => console.log('Example app listening on port 5000!'))


app.use("/", breweryRoutes)

app.get("/", (req, res) => {res.send('/brewery')})

app.set("port", process.env.PORT || 5000);

app.post("/controller", (req, res) => {
  List.create(req.body).then(list => {
    res.json(list)
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
