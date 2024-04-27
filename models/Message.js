import {Schema, model, models} from 'mongoose';

const MessageSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    subject: {
        type: String,
    },
    priority: {
        type: String,
    },
    message: {
        type: String,
        required: [true, 'Message is required']
    }
}, {
    timestamps: true
});

const Message = models.Message || model('Message', MessageSchema);

export default Message;