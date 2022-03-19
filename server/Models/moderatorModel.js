const mongoose = require('mongoose');

const moderatorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'email must be unique']
    },
    secretKey: {
        type: String,
        required: true,
        unique: [true, 'secret key must be unique']
    },
    phone:{
        type: Integer,
        required: [true, 'phone number required'] 
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Moderators',moderatorSchema);
