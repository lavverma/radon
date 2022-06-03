const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
});

router.get('/sol1',function(req,res){
    const arr=[1,2,3,5,6,7];
    let sumofThisArrayElements=0;
    for(let i in arr){
        sumofThisArrayElements += arr[i];
    }
    const lastElemnts=arr.pop();
    const sumOfNumberSeries=lastElemnts*(lastElemnts+1)/2;
    const missingNumber=sumOfNumberSeries - sumofThisArrayElements;
    res.send({data: missingNumber});
});

router.get('/sol2',function(req,res){
    const arr=[33,34,35,37,38];
    let sumofThisArrayElements=0;
    const len=arr.length;
    for(let i in arr){
        sumofThisArrayElements +=arr[i];
    }
    const firstElement=arr[0];
    const lastElement=arr.pop();
    const sumOfConsecutiveElements=(len +1)*(firstElement + lastElement)/2;
    const missingNumber=sumOfConsecutiveElements - sumofThisArrayElements;
    res.send({data : missingNumber});
});

router.get ('/movies',function(req,res){
  const movies=["3 idiots","Age of ultron","Batman begins","The usual sespects"];
  res.send(movies);
});

router.get('/movies/:indexNumber',function(req,res){
    const movies=["3 idiots","Age of ultron","Batman begins","The usual sespects"];
    indexNumber=req.params.indexNumber;
    if(indexNumber<=movies.length){
        res.send(movies[indexNumber])
    }else{
        res.send("Please use a valid indexNumber");
    }
});

router.get('/films',function(req,res){
    const films=[{
            "id":1,
            "name":"3 idiots"
        },{
            "id":2,
            "name":"Age of ultron"
        },{
            "id":3,
            "name":"Batman begins"
        },{
            "id":4,
            "name":"The usual sespects"
        }];
    res.send(films);
});

router.get('/films/:filmId',function(req,res){
    const films=[{
        "id":1,
        "name":"3 idiots"
    },{
        "id":2,
        "name":"Age of ultron"
    },{
        "id":3,
        "name":"Batman begins"
    },{
        "id":4,
        "name":"The usual sespects"
    }];
    filmId=req.params.filmId;
if(filmId<=films.length){
    res.send(films[filmId])
}else{
    res.send("Soory..Flim not present of this id");
}
})


module.exports = router;
// adding this comment for no reason