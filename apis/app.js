import express from "express";
import userRouter from "./routes/user.js";
import chatRouter from "./routes/chat.js";
import messageRouter from "./routes/message.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
export const app = express();

// config({
//   path: "./data/config.env",
// });

config({ path: process.ENV });

//middleware
app.use(express.json());
// app.use(cors());
//cookieparser..for importing the tokens after login so that user can take theiown info..in profile
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Access-Control-Allow-Origin",
    ],
  })
);
//using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/chat", chatRouter);
app.use("/api/v1/message", messageRouter);
app.get("/", (req, res) => {
  res.send("Nice working");
});
//using error middleware
app.use(errorMiddleware);

// app.post("/users/new", async (req, res) => {
//   const { name, email, password } = req.body;
//   await User.create({
//     name,
//     email,
//     password,
//   })
// );
/*
//   await User.create({
//     name: "Thanisha",
//     email: "tanu@gmail.com",
//     password: "tanuSai",
//   });
  
  res.status(201).cookie("tempi", "lol").json({
    success: true,
    message: "Registered Successfully",
  });
});
*/
/*
app.get("/users/all", async (req, res) => {
  const users = await User.find({});
  //   console.log(req.query);

  res.json({
    success: true,
    users,
  });
});
*/
/*
app.get("/userid", async (req, res) => {
  //idahr req,body nahi..req.query likha hain!
  const { id } = req.query;
  const user = await User.findById(id);

  res.json({
    success: true,
    user,
  });
});
*/
