const express=require("express")
const bd=require("body-parser")
const cors=require("cors")
const mg=require("mongoose")
let url=require('./url')
let app=express()
app.use(bd.json())
app.use(bd.urlencoded({extended:false}))
app.use(cors())
mg.connect(url,{dbName:"cproject"}).then(()=>{
	console.log("conncetion success")
},
(errRes)=>{
	console.log("connection failed ",errRes)
})
const routes=require("./router/router.js")
app.use("/",routes)

const port = process.env.PORT || 8080;
app.listen(port,()=>{
	console.log("server listinging port...")
})