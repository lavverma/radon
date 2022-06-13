const orderDocument=require("../models/orderDocument")
const userDetail=require("../models/userDocument")
const productDetail=require("../models/productDocument")

let order=async function(req,res){
    let data=req.body
    let userId=data.userId
    let productId=data.productID
    if (!userId){
        res.send({msg: "userID is require"})
    }
    const user=await userDetail.findById(userId)
    if(!user){
        res.send({msg: "user is invalid"})
    }
    if(!productId){
        res.send({msg:"product is require"})
    }
    const product=await productDetail.findById(productId)
    if(!product){
        res.send({msg: "productId is invalid"})
    }
    req.body.isFreeAppUser=req.headers["isFreeAppUser"]
    if (req.headers["isFreeAppUser"]===true){
        req.body.isFreeAppUser=true
        req.body.amount=0
    }else{
        req.body.isFreeAppUser=false
        // const productPrice=await productDetail.find({})
        
    }
    let saveData=await orderDocument.create(data)
    res.send({msg: saveData})
}

module.exports.order=order