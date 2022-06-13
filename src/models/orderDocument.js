const mongoose = require('mongoose');
const objectId= mongoose.Schema.Types.ObjectId

const orderSchema=new mongoose.Schema({
    userId: {
        type: objectId,
        ref: "newUser"
    },
	productId: {
        type: objectId,
        ref : "Product"
    },
	amount: Number, 
	date: String,
    isFreeAppUser: Boolean
}, { timestamps: true })

module.exports= mongoose.model("Order",orderSchema)