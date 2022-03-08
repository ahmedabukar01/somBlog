const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please add name"]
    },
    email: {
        type: String,
        required: [true, "please add email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "please add name"]
    }
},
 { timestamps: true }
);

module.exports = mongoose.model('Users',userSchema);