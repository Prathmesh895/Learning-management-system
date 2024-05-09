//to add new courses 
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
        // const Id = await req.json() 
        await connectMongoDB();
        const courses =await Courses.find({});
        // const CourseById =await Courses.find({_id: Id});
        // const Coureses=await Courses.find({category:"HTML & CSS"})
        return NextResponse.json({ courses }, { status: 200 });    } catch (error) {
        return NextResponse.json({message:"Unable to fetch Coureses"},{status:500});
  
    }
}
