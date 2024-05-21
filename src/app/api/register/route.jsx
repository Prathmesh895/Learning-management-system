import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

//create new user 
export async function POST(req) {
  try {
    const { fname, lname, email, password, role } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectMongoDB();
    await User.create({ fname, lname, email, password: hashedPassword, role });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    console.error("Error registering user:", error);

    return NextResponse.json({ message: "An error occurred while registering the user." }, { status: 500 });
  }
}

//Get user list from database
export async function GET(req, res) {
  try {
    await connectMongoDB();
    const students = await User.find({ role: "student" });
    const Subadmin = await User.find({ role: "Subadmin" });
    const Instructor = await User.find({ role: "Instructor" });
    //   console.log("Student data:", students);
    //   console.log("Subadmin data:", Subadmin);
    return NextResponse.json({ students, Subadmin,Instructor});
  } catch (error) {
    console.log("Cannot fetch the data:", error);
    return NextResponse.json({ message: "An error occurred while fetching data." }, { status: 500 });
  }
}

//Delete the user Student||Subadmin
export async function DELETE(req) {
  try {
    const id = await req.json()
    await connectMongoDB();
    const deletedUser = await User.deleteOne({ _id: id });
    if (deletedUser.deletedCount === 0) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'User deleted successfully' }, { status: 200 });
  } catch (error) {
    console.log("Cannot Delete the User:", error);
    return NextResponse.json({ message: "An error occurred while Deleting User Account." }, 
    { status: 500 });
  }
}

// Update the user in the database
export async function PUT(req) {
  try {
    const { id, fname, lname} = await req.json();
    await connectMongoDB();
    const updatedUser = await User.findByIdAndUpdate(id, { fname, lname }, { new: true });

    if (!updatedUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    return NextResponse.json({ updatedUser });
  } catch (error) {
    console.log("Cannot Update the User:", error);
    return NextResponse.json({ message: "An error occurred while Updating User Account." }, { status: 500 });
  }
}
