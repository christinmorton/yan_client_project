import connectDB from "@/config/db";
import Message from "@/models/Message";

export const dynamic = 'force-dynamic';

export const POST = async (request) => { 
    try {
        await connectDB();
        const {name, email, subject, priority, message} = await request.json();

        // console.log(formData);

        const newMessage = new Message({
            name,
            email,
            subject,
            priority,
            message
        });

        await newMessage.save();

        return new Response(JSON.stringify({message: 'Message success'}), {status: 200})
    } catch (error) {
        return new Response(JSON.stringify({message: 'Message failed'}), {status: 500})
    }
}