import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    if(connected){
        console.log('already connected to db...');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        connected = true;

        console.log('MongoDB Connected...');
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;