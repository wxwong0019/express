const mongoose = require('mongoose');

const CakeSchema = new mongoose.Schema({
    title:String,
    description: String,
    pic:String
})

module.exports = mongoose.model('Cake', CakeSchema);