import Product from "../Models/Product.js";

export async function createProduct(req,res){
    const newproductData = req.body

    const product = new Product(newproductData)

    try{
       await product.save();
          res.json({
            message : " product created"
          })
        
    }catch(error)
    {
        res.json({
            message :"Product not created"
              })
    }
}

export async function getProduct(req,res){
     try{
          const products = await Product.find({});
           res.json(products)
     }
     catch(error){
        res.json({
            message :"Product not fetched",
            error : message.error
        })
     }
}

