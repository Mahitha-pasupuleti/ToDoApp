import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

import path from 'path'
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);

const app = express();

// Explore more about cors
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}));
// app.use(express.static("public"))
app.use(express.static(path.join(__dirname, '../../frontend/dist')));
app.use(cookieParser())

// console.log(__dirname);
console.log(path.join(__dirname, '../../frontend/dist'));

// routes import
import userRouter from './routes/user.routes.js'
import errorHandler from "./middlewares/errorHandler.middleware.js";

// routes declaration
app.use("/api/v1/users", userRouter)

// global error handler
app.use(errorHandler)

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../frontend/dist/index.html')))

export { app }