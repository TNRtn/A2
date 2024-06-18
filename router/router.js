const express=require("express")
const router=express.Router()
const pfapi=require("../apis/productapis")
const ufapi=require("../apis/userapis")
const cfapi=require("../apis/cartapis")
router.get("/pfetch",pfapi.pall);
router.get("/ufetch",ufapi.uall)
router.post("/ulogin",ufapi.ulogin)
router.post("/nuser",ufapi.newuser)
router.get("/cfetch",cfapi.call)
router.post("/ncart",cfapi.newcart)
router.put("/ucart",cfapi.cartupdate)
router.delete("/dcart",cfapi.cartdelete)
module.exports=router