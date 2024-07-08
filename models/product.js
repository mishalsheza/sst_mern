const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    product_name : {
        type : String,
        required : true
    },
    product_price :{
        type:String,
        required : true
    },
    isInStock :{
        type:Boolean,
        required:true
    },
    Category :{
        type:String,
        required:true
    }
})

module.exports = ProductModel = mongoose.model("products",productSchema);