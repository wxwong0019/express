const Cake = require('../models/Cake');


const getAllCakes = async (req,res) =>{
    try{
        const cakes = await Cake.find()
        res.status(200).json({cakes})
    }catch(error){
        res.status(500).json(error.message)
    }
}

const createCake = async (req,res) =>{
    try{
        const cakes = await Cake.create(req.body)
        res.status(201).json({cakes})
    }catch(error){
        res.status(500).json(error.message)
    }
}
module.exports = {getAllCakes, createCake}