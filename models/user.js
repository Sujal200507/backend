const mongoose = require("mongoose")

const userschema = mongoose.Schema({
    
  fullname:{
    type:String
  },
  email:{
    type:String
  },
  password:{
    type:String
  },
  cart:{
    type:Array,
    default:[]
  },
  orders:{
    type:Array,
    default:[]
  },
  picture:{
    type:String
  },
  contact:{
    type:Number
  }
})

const user = mongoose.model("user",userschema)

module.exports = user