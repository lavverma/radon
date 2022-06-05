const UserModel= require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

const createBookData=async function(req,res){
    let bookData=req.body
    let savedData=await UserModel.create(bookData)
    res.send({msg: savedData})
}

const getBookData=async function(req,res){
    let allBookData=await UserModel.find()
    res.send({msg : allBookData})
}

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData

module.exports.createBookData= createBookData
module.exports.getBookData=getBookData