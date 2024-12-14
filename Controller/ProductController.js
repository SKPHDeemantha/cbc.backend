import Product from "../Models/Product.js";

export async function createProduct(req,res){
    const newproductData = req.body

    const product = new Product(newproductData)

    try {
        await product.save();
        res.status(201).json({
            message: "Product created"
        });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({
            message: "Product not created",
            error: error.message
        });
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
            error : error.message
        })
     }
}

