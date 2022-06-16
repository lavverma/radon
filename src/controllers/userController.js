const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


//route handler of creating user post api
const createUser = async function (req, res) {
try{
  let data = req.body;
  if(Object.keys(data)!= 0){
  let savedData = await userModel.create(data);
  res.status(201).send({ msg: savedData });
  }else res.status(400).send({msg: "BAD Request"})
}
catch(err){
  console.log("this is error :" , err.message);
  res.status(500).send({msg: "server error", error: err.message})
}
};



//route handler of login user post api
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  try{
    if(Object.keys(req.body)) return res.status(400).send({msg: "Bad Request"})
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(403).send({
      status: false,
      msg: "username or the password is not corerct",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.status(201).send({ status: true, token: token });
  }
  catch(err){
    res.status(500).send({msg: "server error", error: err.message})
  }
};



//route handler of fetching user data get api
const getUserData = async function (req, res) {
try{
  let userId = req.params.userId;
  // if(!userId) return res.status(400).send({msg: "Bad Request"})
  let user = await userModel.findById(userId);
  if (!user)
    return res.status(401).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: user });
}
catch(err){
  res.status(500).send({msg: "server error", error: err.message})
}
};


//route handler of update user data put api
const updateUser = async function (req, res) {

  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
 
  if (!user) {
    return res.status(401).send({status: false, msg: "No such user exists" });
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new: true});
  res.status(200).send({ status: true, data: updatedUser });
}
catch(err){
  res.status(500).send({msg: "server error", error: err.message})
}
};



//route handler for creating a delete flag of delete api
const deleteData = async function(req,res){

  try{
    let userId=req.params.userId;
    let user=await  userModel.findById(userId);
    if(!user){
      return res.status(401).send({status: false, msg: "No such user exists"});
    };
   
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {isDelete:true},{new:true});
    const updatedData=await userModel.find()
    res.status(200).send({ status: true, data: updatedData }); 
  }
  catch(err){
    res.status(500).send({msg: "server error", error: err.message})
  }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteData=deleteData
