const mongoose = require('mongoose')

const HouseSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,ref:'User',required:true
    },
    place:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    numberOfBeds:{
        type:Number,
        required:true
    },
    numberOfBathrooms:{
        type:Number,
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
    },
    hospitalsNearBy:{
        type:String
    },
    schoolsNearBy:{
        type:String
    }
})

module.exports = mongoose.model("House",HouseSchema)