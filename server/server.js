const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./database/db');

const app = express();
const PORT = process.env.PORT || 8000;
const postRoutes = require('./Routes/postRoutes');

// connect to database
connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/posts',postRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running at : ${PORT}`)
})