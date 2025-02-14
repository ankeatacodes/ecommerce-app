import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
    mongoose.connection.on("connected", () => {
        console.log("DB Connected");
    });
};

export default connectDB;
// This file is used to connect to the MongoDB database. The connectDB function is an async function that connects to the MongoDB database using the MONGODB_URI environment variable. It then logs a message to the console when the connection is successful.