const express = require('express')
const dotenv = require('dotenv')

//Load ENV vars
dotenv.config({ path : './config/config.env'})

//Connect DB
const connectDB = require('./config/db')
connectDB();

const app = express();

const PORT  = process.env.PORT || 4000

const server = app.listen(PORT,console.log(`App is listening on ${PORT}`))