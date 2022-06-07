const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}
module.exports.createBook= createBook



const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}
module.exports.createAuthor=createAuthor



const getAuthorBookData= async function (req, res) {
    let author=req.query.author_name
    let getBooksOfAuthor= await authorModel.find({author_name:author})
    let bookList=await bookModel.find({author_id:getBooksOfAuthor[0].author_id})
    res.send({msg: bookList})

}
module.exports.getAuthorBookData=getAuthorBookData



const updatedPriceBookAuthor=async function(req,res){
    let bookName=req.query.bookName
    let updatePrice=await bookModel.findOneAndUpdate(
        {name:bookName},
        {$set: {price: 100}},
        {new :true}
    )
    let updatedPriceAuthor=await authorModel.find({author_id:updatePrice.author_id}).select({author_name:1})
    res.send({msg: updatedPriceAuthor})

}
module.exports.updatedPriceBookAuthor=updatedPriceBookAuthor



const authorName=async function(req,res){
    let books= await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1})
    let booksName=books.map(obj=>obj.author_id)
    let author_id=[...new Set(booksName)]
    let author=await authorModel.find({author_id:author_id}).select({author_name:1,author_id:1,_id:0})
    res.send({msg:author})
}
module.exports.authorName=authorName
