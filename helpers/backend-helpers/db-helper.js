import mongoose from 'mongoose';

const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.w0h7hr3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

export async function connectToDB() {
  const response = {};
  try {
    await mongoose.connect(DB_URL);
  } catch (err) {
    response.errorMessage =
      'Error occurred when trying to connect to Database';
  } finally {
    return response;
  }
}

export function serialize(data) {
  return JSON.parse(JSON.stringify(data));
}
