const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


//route handler of creating user post api
const createUser = async function (req, res) {

  let data = req.body;
  let savedData = await userModel.create(data);
 
  res.send({ msg: savedData });
};



//route handler of login user post api
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
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
  res.send({ status: true, token: token });
};



//route handler of fetching user data get api
const getUserData = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user)
    return res.send({ status: false, msg: "No such user exists" });
  

  res.send({ status: true, data: user });
};


//route handler of update user data put api
const updateUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
 
  if (!user) {
    return res.send({status: false, msg: "No such user exists" });
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new: true});
  res.send({ status: true, data: updatedUser });
};



//route handler for creating a delete flag of delete api
const deleteData = async function(req,res){

    let userId=req.params.userId;
    let user=await  userModel.findById(userId);
    if(!user){
      return res.send({status: false, msg: "No such user exists"});
    };
   
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {isDelete:true},{new:true});
    const updatedData=await userModel.find()
    res.send({ status: true, data: updatedData }); 
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteData=deleteData
