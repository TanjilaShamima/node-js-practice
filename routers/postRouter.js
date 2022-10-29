const router = require("express").Router();

const {
  getAllPost,
  getSinglePost,
  updateExitingPost,
  createNewPost,
  deleteExistingPost,
} = require("./postController");

router.get("/", getAllPost);

router.get("/:postId", getSinglePost);

router.post("/", createNewPost);

router.put("/:postId", updateExitingPost);

router.delete("/:postId", deleteExistingPost);

module.exports = router;
