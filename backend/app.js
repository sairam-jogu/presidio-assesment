const express = require('express')
const connectToDb = require('./Config/connectToDb')
const cors = require('cors')
const authRoutes = require("./Routes/authRoutes")
const houseRoutes = require('./Routes/houseRoutes')
const app = express()
require('dotenv').config()

connectToDb();
app.use(express.json())

app.use(cors())


app.use("/",authRoutes)

app.use("/",houseRoutes)


module.exports = app;

