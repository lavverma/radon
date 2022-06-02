const express = require('express');
const _=require('lodash');
const externalModule = require('../logger/logger');
const {date,month,info}=require('../util/helper');
const {trim,lower,upper}=require('../validator/formatter');

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log(externalModule.welcome());
    console.log(date());
    console.log(month());
    console.log(info());
    console.log(trim());
    console.log(lower());
    console.log(upper());
    res.send('My first ever api!')
});

router.get('/hello',function(req,res){
    const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
console.log(_.chunk(monthNames,4));

const oddNumbers=[1,3,5,7,9,11,13,15,17,19];
console.log(_.tail(oddNumbers,9));

const arr1=[11,26,33,4];
const arr2=[31,26,3,54];
const arr3=[1,20,3,40];
const arr4=[11,20,1,4];
const arr5=[1,31,4,8];
console.log(_.union(arr1,arr2,arr3,arr4,arr5));

console.log(_.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]))
res.send('this is testing apis')
});



module.exports = router;
// adding this comment for no reason