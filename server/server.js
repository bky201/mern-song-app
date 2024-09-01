import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { DATABASE } from "./config.js";
import songRoutes from "./routes/song.js"

const app = express();

// db
mongoose.set("strictQuery", false)
mongoose.connect(DATABASE).then(() => {console.log("Connected to mongodb")}).catch((err) => {console.log("Unable to connect to mongodb")});

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// routes middleware
app.use('/api', songRoutes)




app.listen(8000, () => console.log("server_running_on_port_8000"));