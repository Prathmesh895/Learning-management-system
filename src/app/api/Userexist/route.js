import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();
        const { email } = await req.json();
        const user = await User.findOne({ email }).select("_id");
        console.log("Existing user:",user);
         return NextResponse.json({user});
    } catch (error) {
        console.log("An error occurred:", error);
        return NextResponse.json({ message: "An error occurred while checking user existence." }, { status: 500 });
    }
}
