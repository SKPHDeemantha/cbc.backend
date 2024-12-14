import mongoose from "mongoose";

const productSchema =mongoose.Schema({
    ProductId :{
        type : String,
     //   required :true,
        unique : true
    },
    ProductName :{
        type : String,
     //   required :true
    },
    altNames : [{
        type : String,
    }],
    price : {
        type : Number,
    //    required : true,
    },
    lastPrice : {
        type :Number,

    },stock : {
        type :Number,
    },
    description :{
        type : String,
    },
    images : [{
        type : String
    }] 
})

const Product = mongoose.model("Products",productSchema)

export default Product