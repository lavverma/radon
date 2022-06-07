const express = require('express');
const router = express.Router();

const BookController= require("../controllers/bookController")
router.post("/createBook", BookController.createBook  )
router.get("/getBooksData", BookController.getAuthorBookData)
router.get("/updatedPriceBookAuthor", BookController.updatedPriceBookAuthor)
router.get("/authorName", BookController.authorName)

router.post("/createAuthor", BookController.createAuthor)


module.exports = router;