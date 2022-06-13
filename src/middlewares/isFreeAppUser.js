const isFreeAppUser= function(req,res,next){
    if(!req.headers["isFreeAppUser"]){
        res.send({error: "mandatory header is missing"})
    }else{
        
        next ()
    }
}
module.exports.isFreeAppUser=isFreeAppUser