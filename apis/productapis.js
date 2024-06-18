const product=require("../model/Product")
const pall=async(req,res)=>{
	try{
		const pro=await product.find()
		console.log("Data sent by server")
		res.json(pro)
	}
	catch(error){
		console.log("fetch error :-",error)
		res.json({"message :-":error})
	}
}

module.exports={pall}