const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weathercontroller=require("../controllers/weatherController")
const memeController=require("../controllers/memeController")





router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/vaccinationSessions", CowinController.getSessions)

router.get("/weatherOfCity", weathercontroller.weatherOfCity)


router.get("/getSortTempCity",weathercontroller.getSortTempCity)

router.post("/createMeme", memeController.createMeme)


module.exports = router;