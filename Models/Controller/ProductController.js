import Product from "../Product.js";

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
            message :"Product not created",
            error : message.error
        })
    }
}