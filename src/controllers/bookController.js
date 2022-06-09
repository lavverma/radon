const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId=book.author
    let publisherId=book.publisher
    if(!authorId){
        res.send({error:"Book detail is required"})
    }    
        const authorDetails=await authorModel.findById(authorId)
        if(!authorDetails){
            res.send({errror: "The author is not present"})
        }
            if(!publisherId){
                res.send({errror: "Publisher information is required"})
            }
        const publisherDetails=await publisherModel.findById(publisherId)
                if(!publisherDetails){
                    res.send({error: "Publisher is not present"})
                }
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}




const getBookData= async function (req, res) {
    let books = await bookModel.find().populate(['newAuthor', 'newPublisher'])
    res.send({data: books})
}



module.exports.createBook= createBook
module.exports.getBookData= getBookData

