const testMiddleware=function(req,res){
    let data=req.body
    res.send({msg: data})
}
module.exports.testMiddleware=testMiddleware