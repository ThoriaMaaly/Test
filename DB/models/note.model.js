import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: String,
    desc: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const noteModle = mongoose.model("Note", noteSchema);
