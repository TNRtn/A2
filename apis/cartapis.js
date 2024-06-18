const cart=require("../model/Cart")
const call=async(req,res)=>{
	try{
		const cinfo=await cart.find()
		console.log("cart information send by server")
		res.status(200).json(cinfo)
	}
	catch(error){
		console.log("fetch error in cart :-",error)
		res.status(400).json({"message":error})
	}
}


const newcart=async(req,res)=>{
	const k=new cart({
		p_id:req.body.pid,
		p_name:req.body.pname,
		p_img:req.body.ppwd,
		p_qunt:req.body.pquant,
		u_name:req.body.uname
	})
	console.log(k)
	try{
		const ncart=await k.save()
		console.log("cart inserted")
		res.status(200).send(ncart)
	}
	catch(error){
		console.log("error at cat insertion")
		res.status(400).send(error)
	}
}

const cartupdate=async(req,res)=>{
	let p_id=req.body.pid
	const k={
		p_name:req.body.pname,
		p_qunt:req.body.pqunt
	}
	console.log(k)
	try{
		const update=await cart.updateOne({p_id},k)
		if(update.modifiedCount!=0){
			console.log("cart updates")
			res.status(200).send({"update":"success"})
		}
		else{
			console.log("product not updated")
			res.send({"update":"record not found"})
		}
	}
	catch(error){
		//console.log("cart not updated")
		res.status(400).send({"message":error})
	}

}
const cartdelete=async(req,res)=>{
	let p_id=req.body.pid

	try{
		const deletec=await cart.deleteOne({p_id})
		if(deletec.deletedCount!=0){
			console.log("product deleted")
			res.status(200).send({"delete":"success"})
		}
		else{
			console.log("product not deleted")
			res.send({"delete":"failed"})
		}
	}
	catch(error){
		res.status(400).send({"message":error})
	}
}
module.exports={call,newcart,cartupdate,cartdelete}