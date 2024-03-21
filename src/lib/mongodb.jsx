import mongoose from 'mongoose';

export async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    return true; // Indicate successful connection
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}



