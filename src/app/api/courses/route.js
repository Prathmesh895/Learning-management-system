import mongoose from "mongoose";
import { connectMongoDB } from '@/lib/mongodb';
import Courses from "@/models/course";
import { NextResponse } from 'next/server';

export async function POST(req){
    try {
        const{title,description,category,price } = await res.json();
        await connectMongoDB();
        console.log("connection successfull");
        await Courses.create({title,description,category,price});
        return NextResponse.json({message:"Course Added Successfull"},{status:201})

    } catch (error) {
        console.error("Error while Adding Course :", error);
        return NextResponse.json({ message: "An error occurred while Course." }, { status: 500 });
    }
}