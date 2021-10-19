const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstname : {
        type : String
    },
    dob : {
        type: String
    },
    address:{
        type : String
    },
    phone :{
        type: String
    },
    state :{
        type: String
    },
    city :{
        type: String
    },
    zip :{
        type : String
    },
    email:{
        type : String
    },
    gender :{
        type : String
    },
    userType :{
        type : String
    },
    userId: {
        type : mongoose.Schema.Types.ObjectId,
    }
})


module.exports = mongoose.model('User', UserSchema)