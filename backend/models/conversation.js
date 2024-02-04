import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.ObjectId,
        ref : "User",
        required: true
    }],
    messages: [{
        type: mongoose.Schema.ObjectId,
        ref : "Message",
        default: []
    }]
});

const Conversation = mongoose.models.Conversation || mongoose.model('Conversation', conversationSchema);

export default Conversation;
