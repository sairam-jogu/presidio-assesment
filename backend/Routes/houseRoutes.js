const express = require('express')
const { authentcateJWT } = require('../Middleware/middleware')
const {postHouse, getHouse, getUserHouses, getAllHouses,updateHouse,deleteHouse } = require("../Controllers/houseController")

const router = express.Router()

router.post("/addHouse",authentcateJWT,postHouse)
router.get("/getHouse/:id",authentcateJWT,getHouse)
router.get("/getUserHouse",authentcateJWT,getUserHouses)
router.get("/getAllHouses",getAllHouses)
router.put("/update/:id",authentcateJWT,updateHouse)
router.delete("/delete/:id",authentcateJWT,deleteHouse)

module.exports = router