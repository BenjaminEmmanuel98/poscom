const express = require("express");
const {
  getAllContents,
  postContent,
  getSingleContent,
  updateContent,
  deleteContent,
} = require("../Controlla/content");

const router = express.Router();
router.get("/", getAllContents);
router.get("/:id", getSingleContent);
router.post("/", postContent);
router.put("/bbb/:id", updateContent);
router.delete("/xxx/:id", deleteContent);
module.exports = router;
