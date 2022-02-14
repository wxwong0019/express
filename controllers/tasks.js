const Task = require('../models/Task')

const getAllTasks = async (req,res) =>{
    try{
        const task = await Task.find()
        res.status(200).json({task})
    }catch(error){
        res.status(500).json(error.message)
    }
}

const createTask = async (req,res) =>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }catch(error){
        res.status(500).json(error.message)
    }
    
    
}

const getTask = async (req,res) =>{
    try{
        const task = await Task.findOne({_id:req.params.id})
        if(!task){
            return res.status(404).json({msg: `id ${req.params.id} does not exist`})
        }
        res.status(200).json({task})
    }catch(error){
        res.status(500).json(error)
    }
    
}

const updateTask = async (req,res) =>{
    
    try {
        const task = await Task.findOneAndUpdate({_id:req.params.id}, req.body, {
            new:true,
            runValidators:true
        })
        if(!task) {
            return res.status(404).json({msg: `id ${req.params.id} does not exist`})
        }
        res.status(200).json({msg : `${task.name} successfully updated`})
    }catch(error){
        res.status(500).json(error)
    }
}

const deleteTask = async (req,res) =>{
    try {
        const task = await Task.findOneAndDelete({_id:req.params.id});
        if(!task) {
            return res.status(404).json({msg: `id ${req.params.id} does not exist`})
        }
        res.status(200).json({msg : `${task.name} successfully deleted`})
    }catch(error){
        res.status(500).json(error)
    }
}
module.exports = {
    getAllTasks,createTask,getTask, updateTask, deleteTask
}