import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import storyRoutes from './routes/stories.js'
import dotenv from 'dotenv'

const app = express();
mongoose.set("strictQuery", false);
app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));
app.use(cors());
app.use('/stories',storyRoutes)
dotenv.config()

const MONGO_URL =
  `mongodb+srv://${process.env.MONGO_URL_USER}:${process.env.MONGO_URL_PASS}@cluster0.5d5jnhi.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (err) {
    console.error("Something went wrong at connection", err.message);
  }
};

connectDB();
mongoose.connection.on("open", () => console.log("Connected to DB"));
mongoose.connection.on("error", (err) =>
  console.log(`${err} when trying to connect `)
);
