const mongoose = require('mongoose')

const AgentSchema = new mongoose.Schema({
    agent : {
        type : String
    }
})


module.exports = mongoose.model('Agent', AgentSchema)