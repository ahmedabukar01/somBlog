const mongoose = require('mongoose');

const trashSchema = mongoose.Schema({
    deletedBy: {
        moderator: mongoose.Schema.Types.ObjectId,
        required: [true, 'deleted by required']
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

module.exports = mongoose.model('Trash',trashSchema);