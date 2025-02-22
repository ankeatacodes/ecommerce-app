import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import dotenv from "dotenv";
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';




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





app.get ('/', (req,res) => {
    res.send ("API working")
})

app.post('/api/cart/add', async (req, res) => {
    // Handle cart addition logic here
    res.status(200).json({ message: 'Item added to cart' });
  });

app.listen (port, ()=>{
    console.log ('Server started on PORT :' +port)
})
















