const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    adminName:{
        type:String,
        required:true,
        index:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        min:8,
        max:15
    }
})
// DB.tailsweb-company-assignment.admin.createIndex( { adminName : 1 }, function(err, result) {
//     console.log(result);
//     callback(result);
// })
module.exports = mongoose.model("admin",adminSchema)