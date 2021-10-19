const mongoose = require('mongoose')

const CarrierSchema = new mongoose.Schema({
    company_name : {
        type : String
    }
})


module.exports = mongoose.model('Carrier', CarrierSchema)