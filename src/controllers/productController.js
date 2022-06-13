const productDocument= require("../models/productDocument")

const product= async function(req,res){
     let data=req.body
     let saveData= await productDocument.create(data)
     res.send({msg: saveData})
}

module.exports.product=product