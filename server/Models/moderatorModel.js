const mongoose = require('mongoose');

const moderatorSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'email must be unique']
    },
    password:{
        type: String,
        unique: [true, 'phone number must be unique']
    },
    phone:{
        type: Number,
        unique: [true, 'phone number must be unique']
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Moderators',moderatorSchema);
