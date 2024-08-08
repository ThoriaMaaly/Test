import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1/note_project")
    .then(() => {
      console.log("Database is Running........!");
    })
    .catch(() => {
      console.log("Error in Connectin........");
    });
};
