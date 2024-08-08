import { noteModle } from "../../../DB/models/note.model.js";
import jwt from "jsonwebtoken";

export const addNote = async (req, res) => {
  const { title, desc, createdBy } = req.body;
  await noteModle.insertMany({ title, desc, createdBy });
  res.json({ message: "Success" });
};
export const updateNote = async (req, res) => {
  let x = await noteModle.findByIdAndUpdate(req.params.id, {
    title: "new title",
    desc: "new desc",
  });
  res.json({ message: "Success", x });
};

export const deleteNote = async (req, res) => {
  let note = await noteModle.findByIdAndDelete(req.params.id);
  if (!note) return res.json({ message: "Not Found" });
  res.json({ message: "Success", note });
};

export const getAllNotes = async (req, res) => {
  let note = await noteModle.find().populate("createdBy", "name email -_id");
  res.json({ message: "Success", note });
};
