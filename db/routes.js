const express = require("express")

const beerController = require ("./Controller/controller")

const beerRouter = express.Router()

beerRouter.get("/brewery")

module.exports = beerRouter