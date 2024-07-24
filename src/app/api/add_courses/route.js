//to add new courses 
import { connectMongoDB } from '@/lib/mongodb';
import Courses from "@/models/course";
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req) {
    try {

        await connectMongoDB();
        const formData = await req.formData();
        const title = formData.get('title');
        const shortdes = formData.get('shortdes');
        const category = formData.get('category');
        const description = formData.get('description');
        const price = formData.get('price');
        const Level = formData.get('Level');
        const CourseUrl = formData.get('CourseUrl');
        const expiry = formData.get('expiry');
        const langauge = formData.get('langauge');
        const isfree = formData.get('isfree');
        const CreatedBy = formData.get('CreatedBy');
        const Iscertificate = formData.get('Iscertificate');
        const creatAs = formData.get('creatAs');
        const image = formData.get('image');

        const buffer = Buffer.from(await image.arrayBuffer());
        const fileName = image.name;
        const uploadDir = path.join(process.cwd(), 'public', 'courseImages');

        // Ensure the upload directory exists
        await fs.mkdir(uploadDir, { recursive: true });

        const filePath = path.join(uploadDir, fileName);

        // Save the file to the upload directory within the public directory
        await fs.writeFile(filePath, buffer);

        const newCourse = new Courses({
            title,
            description,
            shortdes,
            category,
            CreatedBy,
            Level,
            expiry,
            Iscertificate,
            price,
            isfree,
            CourseUrl,
            langauge,
            creatAs,
            image: fileName,
        });

        // await Courses.create();
        await newCourse.save();

        return NextResponse.json({ message: "Course Added Successfull" }, { status: 201 });
    } catch (error) {

        console.log("An error occurred while Course");
        return NextResponse.json({ message: "An error occurred while Course" }, { status: 500 });

    }
}

export async function GET(req) {
    try {
        await connectMongoDB();
        const courses = await Courses.find();
        return NextResponse.json({ courses }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Unable to fetch Coureses" }, { status: 500 });

    }
}