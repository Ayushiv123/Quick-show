import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/quickshow`);

    mongoose.connection.on("connected", () => {
      console.log(" Database connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error(" Database connection error:", err);
    });
  } catch (error) {
    console.log(" DB connection failed:", error.message);
  }
};

export default connectDB;
