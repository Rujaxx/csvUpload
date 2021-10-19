const mongoose = require('mongoose');
const Policy = require('../models/Policy');
const User = require('../models/User');

exports.get = async(req,res) => {
     const {username} = req.body;
    const user = await User.findOne({firstname : username})

    if(!user){
        res.status(404).json({ success : false, message : "User not Found"})
    }

    let userId = user.userId

    const policy = await Policy.findOne({userId})

    res.status(200).json({ success : true , data : policy})
}