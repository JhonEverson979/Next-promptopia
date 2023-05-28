import mongoose from "mongoose";

let isConnect = false; // track the connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnect) {
    console.log("MongoDB is already connect");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnect = true;

    console.log("MongoDB connect");
  } catch (error) {
    console.log(error);
  }
};
