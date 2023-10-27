import { app } from "./app.js";
import { connectDB } from "./data/database.js";

import { config } from "dotenv";

config({ path: process.ENV });

connectDB();
app.listen(process.env.PORT, () => {
  console.log(
    `Server is working om port : ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
