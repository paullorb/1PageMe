import mongoose from 'mongoose';

const connectDB = async (dbName = 'test') => {

  const username = encodeURIComponent(process.env.MONGO_USER || '');
  const password = encodeURIComponent(process.env.MONGO_PASS || '');
  const cluster = process.env.MONGO_CLUSTER || '';
  const db = process.env.MONGO_DB || '';
  const uri = `mongodb+srv://${username}:${password}@${cluster}/${db}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(uri, { dbName });
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error(err);
    }
    throw err;
  }
}

export default connectDB;