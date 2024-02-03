import mongoose   from 'mongoose';
import dotenv from 'dotenv';  
dotenv.config();
try {
  await mongoose.connect(process.env.MONGO_URI );
  console.log('Connection Successful');
} catch (error) {
  console.log(error); 
}