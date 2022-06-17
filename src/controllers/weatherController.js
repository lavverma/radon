let axios= require("axios")

let weatherOfCity=async function(req,res){
    try{
       let city=req.query.q
       let id=req.query.appid
       console.log(`query are:${city}${id}`)
       var options={
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
       }
        let result=await axios(options)
        console.log(result.data)
        res.status(200).send({msg: result.data.main.temp})
    }
    catch(err){
        res.status(500).send({error: err.message})
    }
}
module.exports.weatherOfCity=weatherOfCity


let getSortTempCity=async function(req, res){
    try{
        let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let tempCityObjArray=[]
        for(let i=0;i<cities.length;i++){
            let obj={city: cities[i]}
            let options={
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=081f752a7761c415c7607668290e4277`
            }
       let result= await axios(options)
            obj.temp=result.data.main.temp
            tempCityObjArray.push(obj)
        }
        let sortedTemp=tempCityObjArray.sort(function(a,b){return a.temp-b.temp})
        console.log(sortedTemp)
       res.status(200).send({msg:sortedTemp})
    }
    catch(err){
        res.status(500).send({error:err.message})
    }
}
module.exports.getSortTempCity=getSortTempCity