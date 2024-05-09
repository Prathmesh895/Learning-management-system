import { connectMongoDB } from '@/lib/mongodb';
import Courses from "@/models/course";
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';



export async function POST(req) {
    try {
        await connectMongoDB();
        const { id, decodedCategory } = await req.json();
        let response;
        
        if (id) {
            const CourseById = await Courses.findById({ _id: new ObjectId(id) });
            response = { CourseById };

        } else if (decodedCategory === "Web Design") {
            const DecodedCategory = await Courses.find({ category: { $in: ["HTML & CSS", "JAVASCRIPT", "Responsive_Design"] } });
            response = { DecodedCategory };

        }  else if (decodedCategory === "All Categories") {
            const DecodedCategory = await Courses.find({});
            response = { DecodedCategory };

        }else if (decodedCategory === "Price") {
            const DecodedCategory = await Courses.find({});
            response = { DecodedCategory };

        }else {
            const DecodedCategory = await Courses.find({ category: decodedCategory });
            response = { DecodedCategory };
            console.log("decodedCategory",decodedCategory);
        }
         
        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        console.error("An error occurred:", error);
        return NextResponse.json({ message: "An error occurred while getting course info." }, { status: 500 });
    }
}
