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

// Body parser
app.use(express.json());

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

const upload = require('./routes/upload');
const getUser = require('./routes/user')
app.use('/', upload)
app.use('/users', getUser)

const PORT  = process.env.PORT || 4000

const server = app.listen(PORT,console.log(`App is listening on ${PORT}`))