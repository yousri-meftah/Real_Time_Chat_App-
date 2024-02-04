const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    participant1: {
        type: mongoose.Schema.ObjectId,
        ref : "User",
        required: true
    },
    participant2: {
        type: mongoose.Schema.ObjectId,
        ref : "User",
        required: true
    },
    message: {
        type: String,
        required: true
    }
},{timestamps:true} 
);

const Message = mongoose.models.Message||mongoose.model('Message', messageSchema);

export default Message;
