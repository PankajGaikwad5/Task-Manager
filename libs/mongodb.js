import mongoose from 'mongoose';

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('connected to mongodb');
  } catch (error) {
    console.log(`error : not connected`);
  }
};

export default connectMongoDB;
