import connectDB from "@/config/db";
import FAQ from "@/models/FAQs";

export const dynamic = 'force-dynamic';

export const POST = async (request) => { 
    try {
        await connectDB();
        const {username, email, question} = await request.json();

        const newFAQ = new FAQ({
            username,
            email,
            question
        });

        await newFAQ.save();

        return new Response(JSON.stringify({message: 'FAQ success'}), {status: 200})
    } catch (error) {
        return new Response(JSON.stringify({message: 'FAQ failed'}), {status: 500})
    }
}