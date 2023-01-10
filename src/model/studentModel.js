const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    standard:{
        type:Number,
        min:6,
        max:12
    },
    performance:[
        {
            subject:String,
            marks:Number
        }
    ],
    admissionNumber:{
        type:Number,
        required:true,
        unique: true
    },
    isActiveStudent:{
        type:Boolean,
        default:true
    }
})
module.exports = mongoose.model("student",studentSchema)