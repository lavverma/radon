const express = require('express');
const router = express.Router();

const BookController= require("../controllers/Controller")

router.post("/createAuthor", BookController.createAuthor)
router.post("/createBook", BookController.createBook  )



router.get("/getBooksData", BookController.getAuthorBookData)
router.get("/updatedPriceBookAuthor", BookController.updatedPriceBookAuthor)
router.get("/authorName", BookController.authorName)

router.get("/bookByAuthorId/:author_id", BookController.bookByAuthorId)


router.get("/authorAndAge", BookController.authorAndAge)



module.exports = router;