import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("🔹 Connecting to DB...");
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
        console.log("✅ DB Connected Successfully");

        mongoose.connection.on("error", (err) => {
            console.error("❌ DB Connection Error:", err);
        });

    } catch (error) {
        console.error("❌ Connection Failed:", error);
        process.exit(1);
    }
};

export default connectDB;

