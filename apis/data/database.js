import mongoose from "mongoose";
import { config } from "dotenv";

config({ path: process.ENV });

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "projback",
    })
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));
};
