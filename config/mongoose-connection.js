const mongoose = require("mongoose")
const config = require("config")
const dbgr = require("debug")("development:mongoose")


mongoose
.connect(`${config.get("MONGODB_URI")}/final`)
.then(()=>{
    dbgr("connection succesfull");
    
})
.catch((err)=>{
 dbgr(err);
 
})

// async function main(){
//     await mongoose.connect("/final")
// }

module.exports = mongoose.connection