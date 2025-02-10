const mongoose = require("mongoose")



const ownerschema = mongoose.Schema({
    
  fullname:{
    type:String
  },
  email:{
    type:String
  },
  password:{
    type:String
  },
  products:{
    type:Array,
    default:[]
  },
  picture:{
    type:String
  },
  gstin:{
    type:String
  }
})

const owner = mongoose.model("owner",ownerschema)

module.exports = owner