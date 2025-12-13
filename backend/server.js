// importing packages
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

// importing routes 
import authRoutes from "./src/routes/auth.routes.js"
import sweetRoutes from "./src/routes/sweet.routes.js";

import {connectDB} from "./src/utils/db.js"

// configuring .env
dotenv.config();

// connecting to DB 
connectDB();

const app = express();
const PORT = process.env.PORT || 5000; 

// middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors(
    {
        origin: process.env.ORIGIN_URL,
        methods: ['GET','POST','PUT','PATCH','DELETE'],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials: true,
    }
));
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("This server is working");
})

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/sweets", sweetRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
