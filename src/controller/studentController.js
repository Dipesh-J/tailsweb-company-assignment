const studentModel = require("../model/studentModel")
const adminModel = require('../model/adminModel')


module.exports = {
    createStudent : async (req,res) => {
        return res.status(201).send({message:"Success",data: await studentModel.create(req.body)})
    },
    getStudent : async (req,res) => {
        let { name, subject} = req.query
        const finalFilters = { isActiveStudent: true }
        if(name) finalFilters.name = name
        if(subject) finalFilters[performance.subject] = subject

        if(Object.keys(req.query).length === 0) return res.status(200).send({data: await studentModel.find()})

        const students = await studentModel.find(finalFilters)
        if(!students) return res.status(404).send({message:"No Students found with this query"})
        return res.status(200).send({data:students})
    },
    updateStudent : async (req,res) => {
        if(!req.params.admissionNumber) return res.status(400).send({message:"Please provide admission number of the student in params"})
        const checkStudent = await studentModel.findOne(req.params.admissionNumber)
        if(!checkStudent) return res.status(404).send({message:"Student not found"})

        let {name,standard,subject,marks} = req.body
        if(Object.keys(req.body).length === 0) return res.status(400).send({message:"Please provide some data inside body"})
        
        if(subject){
            
        }
    }
}