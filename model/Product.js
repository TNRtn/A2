const mg=require("mongoose")
const productSchema=new mg.Schema({
	p_id:Number,
	p_name:String,
	P_cost:Number,
	p_cat:String,
	p_desc:String,
	p_img:String
})
module.exports=mg.model("Product",productSchema)