const mg=require("mongoose")
const userSchema=new mg.Schema({
	 u_serid :Number,
     u_name  :String,
     u_pwd   :String,
     u_u_email:String,
     u_addr : String,
     u_contact :String
})

module.exports=mg.model('User',userSchema)