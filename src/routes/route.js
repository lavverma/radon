const express = require('express');
const router = express.Router();

const BookController= require("../controllers/Controller")

router.post("/createAuthor", BookController.createAuthor)
router.post("/createBook", BookController.createBook  )



router.get("/getBooksData", BookController.getAuthorBookData)
router.get("/updatedPriceBookAuthor", BookController.updatedPriceBookAuthor)
router.get("/authorName", BookController.authorName)

router.get("/bookByAuthorId/1", BookController.bookByAuthorId1)
router.get("/bookByAuthorId/2", BookController.bookByAuthorId2)
router.get("/bookByAuthorId/3", BookController.bookByAuthorId3)

router.get("/authorAndAge", BookController.authorAndAge)



module.exports = router;