const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const router = require("./routes/authRoutes");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();

// Middlewares

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use("/" , router);

// Database Setup

mongoose.connect(process.env.MongoDB_Url , {})
.then(() => console.log("Database Connected"))
.catch((error) => console.log("MongoDB Error: " , error));


const port = 8000;



app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`);
})





