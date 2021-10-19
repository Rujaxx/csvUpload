const express = require('express')
const dotenv = require('dotenv')
const fileUpload = require('express-fileupload')

// const csvtojson = require("csvtojson");

// csvtojson()
//   .fromFile("data.csv")
//   .then(csvData => {
//     console.log(csvData);
//   })

//Load ENV vars
dotenv.config({ path : './config/config.env'})

//Connect DB
const connectDB = require('./config/db')
connectDB();

const app = express();

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

let upload = require('./routes/upload');
app.use('/', upload)

const PORT  = process.env.PORT || 4000

const server = app.listen(PORT,console.log(`App is listening on ${PORT}`))