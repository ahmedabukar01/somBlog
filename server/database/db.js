const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        const connected = await mongoose.connect(process.env.MONGOOSE);

        console.log(`db connected at : ${connected.connection.host}`.blue.underline)

    } catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;