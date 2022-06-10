
const testMiddleware1=function(req,res){
    let data=req.body
    res.send({msg: data})
}
module.exports.testMiddleware1=testMiddleware1


const testMiddleware2=function(req,res){
    let data=req.body
    res.send({msg: data})
}
module.exports.testMiddleware2=testMiddleware2

const testMiddleware3=function(req,res){
    let data=req.body
    res.send({msg: data})
}
module.exports.testMiddleware3=testMiddleware3

const testMiddleware4=function(req,res){
    let data=req.body
    res.send({msg: data})
}
module.exports.testMiddleware4=testMiddleware4