const user=require("../model/User")
const bcrypt=require("bcrypt")
const uall=async(req,res)=>{
	try{
		const uinfo=await user.find()
		console.log("Data sent by server for user")
		res.json(uinfo)
	}
	catch(error){
		console.log("Error in fetching :-",error)
		res.json({"message ":error})
	}
}

const ulogin=async(req,res)=>{
	try{
		uname =req.body.uname
		upwd =req.body.upwd
		console.log(uname,upwd)
		//console.log(uname,upwd)
		let userinfo=await user.findOne({u_name:uname});
		console.log(userinfo)
		if(!userinfo){
			res.status(400).json({"message":"user not found"})
		}
		else{

			let k=await user.findOne({u_name:uname,u_pwd:upwd})
			console.log(k)
			if(!k){
				res.status(400).json({"message":"invalid username and password"})
			}
			else{
				res.status(200).json({"message":"login success"})
			}
		}
		}
	catch(error){
		console.log("error occured :- ",error)
		res.json({"message ": error})
	}
}

const newuser=async(req,res)=>{
	const u=new user({
		u_name:req.body.uname,
		u_pwd:req.body.upwd
	})
	try{
		const nuser= await u.save()
		console.log("user inserted")
		res.status(200).send(nuser)
	}
	catch(error){
		console.log("error found",error)
		res.status(400).send(error)
	}
}


module.exports={uall,ulogin,newuser}