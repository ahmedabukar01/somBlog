const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
},
    {
         timestamps: true
    }
)

module.exports = mongoose.model('Post',postSchema);