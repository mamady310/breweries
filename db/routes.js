const express = require("express")

const beerController = require ("./Controller/controller")

const beerRouter = express.Router()

beerRouter.get("/", beerController.drinks)
beerRouter.get("/:Id", beerController.findById)
beerRouter.get("/name/:showName", beerController.showName)
beerRouter.get("/city/:showCity", beerController.showCity)
beerRouter.post("/create/:", beerController.create)


module.exports = beerRouter

