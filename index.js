import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import productRouter from './Routes/ProductRouter.js';


const app =express();

const mongourl ="mongodb+srv://Admin:1234@cluster0.xbgyb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongourl,{})

const connection =mongoose.connection;

connection.once("open",
    ()=>{
        console.log("Database Connected");
    })

app.use("/api/products",productRouter)


    app.listen(
        5000,
        ()=>{
            console.log("Server is running on port 5000");
        }
    )