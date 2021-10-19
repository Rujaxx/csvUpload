const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
    account_name : {
        type : String
    },
    
})


module.exports = mongoose.model('Account', AccountSchema)