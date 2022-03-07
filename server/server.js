const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;
const postRoutes = require('./Routes/postRoutes');

// middlewares
app.use('/posts',postRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running at : ${PORT}`)
})