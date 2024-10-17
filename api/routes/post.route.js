import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post.controller.js";
import multer from "multer";

const router = express.Router();

// Configure Multer storage
const storage = multer.diskStorage({ 
  destination: function (req, file, cb) {
    cb(null, "../client/public"); // Pass the resolved path to Multer
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname); // Provide a unique name to avoid conflicts
  },
});

const upload = multer({ storage }).fields([
  { name: "pdf", maxCount: 1 },
  { name: "thumbnail", maxCount: 1 },
]);

// Routes
router.get("/getPosts", getPosts);
router.delete("/deletePost/:id", deletePost);
router.get("/:id", getPost)
router.post("/addPost", upload, addPost); // Handle single file upload
router.put("/updatePost/:id", upload , updatePost);

export default router;
 