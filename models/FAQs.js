import {Schema, model, models} from 'mongoose';

const FAQSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    question: {
        type: String,
        required: [true, 'Question is required'],
    },
    answer: {
        type: String,
    },
    question_taker: {
        type: String,
    },
    date_recieved: {
        type: Date,
        default: Date.now
    },
    date_answered: {
        type: Date,
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const FAQ = models.FAQ || model('FAQ', FAQSchema);

export default FAQ;