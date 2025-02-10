const mongoose = require("mongoose")


const productschema = mongoose.Schema({
    
  image:{
    type:String
  },
  name:{
    type:String
  },
  price:{
    type:Number
  },
  discount:{
    type:Number,
    default:0
  },
  bgcolor:{
    type:String
  },
  panelcolor:{
    type:String,
  },
  textcolor:{
    type:String
  }
})

const product = mongoose.model("product",productschema)

module.exports = product