const mongoose = require('mongoose')

const PolicySchema = new mongoose.Schema({
    policy_number :{
        type : String
    },
    policy_start_date :{
        type : String
    },
    policy_end_date :{
        type : String
    },
    policy_type :{
        type : String
    },
    userId: {
        type : mongoose.Schema.Types.ObjectId,
    }
})

module.exports = mongoose.model("Policy",PolicySchema)