import { Router } from "express";
import * as noteController from "./note.controller.js";
import { auth } from "../../middelware/auth.js";
const router = Router();

router.use(auth);

router
  .route("/notes")
  .post(noteController.addNote)
  .get(noteController.getAllNotes);
router
  .route("/notes/:id")
  .put(noteController.updateNote)
  .delete(noteController.deleteNote);

export default router;
