const express = require("express")
const router = express.Router()
const ownermodel = require("../models/owners")

router.get("/",(req,res)=>{

    res.send("hello")
})

console.log(process.env.NODE_ENV);


if (process.env.NODE_ENV === "development") {
    router.post("/create", async(req, res) => {

        let{fullname,email,password} = req.body

      let owners = await ownermodel.find()
      if(owners.length>0){
        return res.send("you don't have permission to create a new owner")
      }
      const owner1 = new ownermodel({
        fullname,
        email,
        password,
      })

      res.send(owner1)
    });
} else {
    console.log("Not in development mode, '/create' route will not be available.");
}



module.exports = router