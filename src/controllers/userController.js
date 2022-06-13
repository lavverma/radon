const userDocument=require("../models/userDocument")

const user= async function(req,res){
    let data=req.body
    let saveData= await userDocument.create(data)
    res.send ({msg: saveData})
} 

module.exports.user=user