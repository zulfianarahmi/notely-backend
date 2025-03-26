import express from "express";
import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/note.controller";

const router = express.Router();

// Gunakan langsung untuk endpoint GET dan POST
router.get("/", getNotes);
router.post("/", createNote);

// Gunakan middleware wrapper untuk PUT dan DELETE
router.put("/:id", function (req, res, next) {
  updateNote(req, res).catch(next);
});

router.delete("/:id", function (req, res, next) {
  deleteNote(req, res).catch(next);
});

export default router;
