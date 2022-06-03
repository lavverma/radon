const express = require('express');
const router = express.Router();

let players=[
    {
        "name": "rohit",
"dob": "1/1/1995",
"gender": "male",
"city": "jalandhar",
"sports": ["swimming"]
    },
    {
        "name": "ramesh",
"dob": "1/10/1993",
"gender": "male",
"city": "indor",
"sports": ["cricket"]
    },
    {
        "name": "anita",
"dob": "1/4/1996",
"gender": "female",
"city": "delhi",
"sports": ["music"]
    }
]

router.post('/players', function (req, res) {
    const newPlayer=req.body;
    let playerPresent=false;
    for(let i=0; i<players.length;i++){
       if(players[i]["name"]==newPlayer.name){
           playerPresent=true;
       }
    }
    if(playerPresent==true){
       res.send("This player is already present")
    }else{
        players.push(newPlayer);
    
        res.send(  { data: players , status: "Done" } )
    }
    
})


module.exports = router;