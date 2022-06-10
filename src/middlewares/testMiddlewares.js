
const mid= function ( req, res, next) {
    let data=req.body
    let timeStamp=new Date()
    let Ip= req.ip
    let route= req.path
    console.log(timeStamp,Ip,route)
    res.send({msg: data})

}

module.exports.mid= mid

