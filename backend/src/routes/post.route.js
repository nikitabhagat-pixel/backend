import express from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.route("/create").post(createPost);
router.route("/get-posts").get(getPosts);
router.route("/update/:id").patch(updatePost);
router.route("/delete/:id").delete(deletePost);

export default router;
