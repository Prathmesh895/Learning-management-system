
import { connectMongoDB } from '@/lib/mongodb';
import Courses from "@/models/course";
import { NextResponse } from 'next/server';

export async function POST(req){
    try {
        const{title,description,category,price,Level,CourseUrl,expiry,langauge,isfree,CreatedBy } = await req.json();
        await connectMongoDB();
        console.log("connection successfull");
        await Courses.create({title,description,category,price,Level,CourseUrl,expiry,langauge,isfree,CreatedBy});
        return NextResponse.json({message:"Course Added Successfull"},{status:201})

    } catch (error) {
        console.error("Error while Adding Course :", error);
        return NextResponse.json({ message: "An error occurred while Course." }, { status: 500 });
    }
}

export async function GET(req){
    try {
        await connectMongoDB();
        const courses =await Courses.find({});
        return NextResponse.json({ courses }, { status: 200 });    } catch (error) {
        return NextResponse.json({message:"Unable to fetch Coureses"},{status:500});
  
    }
}