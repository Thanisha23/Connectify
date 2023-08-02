import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
export const app = express();

config({
  path: "./data/config.env",
});

//middleware
app.use(express.json());
//cookieparser..for importing the tokens after login so that user can take theiown info..in profile
app.use(cookieParser());
//using routes
app.use("/api/v1/users", userRouter);
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send("Nice working");
});
//using error middleware
app.use(errorMiddleware);
/*
app.post("/users/new", async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  
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
