const mongoose = require('mongoose');

const moderatorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
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
