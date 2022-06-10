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
    let books = await bookModel.find().populate(['author','publisher'])
    res.send({data: books})
}


const updateBook=async function(req,res){
    let updatedBook=await bookModel.updateMany(
        {publisher: req.param.id},
        {$set: {isHardCover: req.body.isHardCover}},
        {new:true, upsert:true}
    )
    res.send({data:updatedBook})
}


const updatePrice=async function(req,res){
    let authorRating=await authorModel.find({rating:{$gt:3.5}})
    let updatedPrice=await bookModel.updateMany(
        {author:authorRating[0]._id},
        {$set:{$inc:{price:10}}}
    )
    res.send({data:updatedPrice})
}








module.exports.updatePrice=updatePrice
module.exports.updateBook=updateBook
module.exports.createBook= createBook
module.exports.getBookData= getBookData

