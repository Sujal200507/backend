const express = require("express")
const app = express()
const user = require("./models/user")
const product = require("./models/product")
const owner = require("./models/owners")
const mongooseconnection = require("./config/mongoose-connection")
const ownerroute = require("./routes/ownersroute")
const userroute = require("./routes/userroute")
const productroute = require("./routes/productroute")

const cookieParser = require("cookie-parser")
const path = require("path")



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")

app.use("/owner",ownerroute)
app.use("/user",userroute)
app.use("/product",productroute)

app.listen(3000,()=>{
    console.log("port is listening");
    
})