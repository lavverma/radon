const express = require('express');
// const { route } = require('express/lib/application');
const router = express.Router();

const authorController = require("../controllers/authorController")
const bookController = require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")



router.post("/createAuthor", authorController.createAuthor)


router.post("/createBook", bookController.createBook)

router.get("/getBookData", bookController.getBookData)

router.post('/createPublisher', publisherController.createPublisher)

router.put("/books/:id", bookController.updateBook)

router.put("/updatePrice/:rating", bookController.updatePrice)

module.exports = router;