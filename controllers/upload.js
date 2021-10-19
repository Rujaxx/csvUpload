const csv = require('fast-csv');
const mongoose = require('mongoose');
const Policy = require('../models/Policy');
const User = require('../models/User');
const Account = require('../models/Account');
const Agent = require('../models/Agent');
const Carrier = require('../models/Carrier');
const Category = require('../models/Category');

 
exports.post = function (req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
     
    let policyFile = req.files.file;
 
    let policies = [];         
    csv
     .parseFile(policyFile.tempFilePath,{
         headers: true,
         ignoreEmpty: true
     })
     .on("data", function(data){
         data['userId'] = new mongoose.Types.ObjectId();
          
         policies.push(data);
     })
     .on("end", function(){
        User.create(policies);
        Policy.create(policies);
        Account.create(policies);
        Agent.create(policies);
        Carrier.create(policies);
        Category.create(policies);
         
          
         res.send(policies.length + ' policies  have been successfully uploaded.');
     });
};