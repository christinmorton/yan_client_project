import {Schema, model, models} from 'mongoose';

const MessageSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists']
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
        required: [true, 'Message is required']
    }
}, {
    timestamps: true
});

const Message = models.message || model('Message', MessageSchema);

export default Message;