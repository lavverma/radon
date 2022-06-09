const express = require('express');
// const { route } = require('express/lib/application');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require("../controllers/publisherController")



router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBookData", bookController.getBookData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post('/createPublisher', publisherController.createPublisher)

module.exports = router;