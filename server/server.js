const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./database/db');
const errorHandler = require('./Middlewares/errors');
const adminRoute = require('./Routes/adminRoute');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;
const postRoutes = require('./Routes/postRoutes');

// connect to database
connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: 'http://localhost:3000/',
    methods: ['GET', 'POST','PUT', 'DELETE']
}))

app.use('/posts',postRoutes);
app.use('/users', require('./Routes/userRoutes'));
app.use('/admin',adminRoute)
app.use('/moderators', require('./Routes/moderatorRoutes'));
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server is running at : ${PORT}`)
})