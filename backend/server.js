import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import dotenv from "dotenv";
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';



dotenv.config();

console.log("JWT Secret Key:", process.env.JWT_SECRET); // Debugging log





// App Config
const app= express()
const port = process.env.PORT || 4000
console.log("🔹 MONGODB_URI:", process.env.MONGODB_URI);

connectDB()
connectCloudinary()


//middleware
app.use(express.json())
app.use(cors())

//api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);




app.get ('/', (req,res) => {
    res.send ("API working")
})



app.listen (port, ()=>{
    console.log ('Server started on PORT :' +port)
})
















