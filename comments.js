// Create web server

// Import express
const express = require("express");
// Import express router
const router = express.Router();
// Import comments controller
const commentsController = require("../controllers/commentsController");
// Import auth controller
const authController = require("../controllers/authController");

// Handle get request for all comments
router.get(
  "/",
  authController.protect,
  authController.restrictTo("admin"),
  commentsController.getAllComments
);

// Handle get request for a comment
router.get(
  "/:id",
  authController.protect,
  authController.restrictTo("admin"),
  commentsController.getComment
);

// Handle post request for a comment
router.post(
  "/",
  authController.protect,
  authController.restrictTo("user"),
  commentsController.createComment
);

// Handle patch request for a comment
router.patch(
  "/:id",
  authController.protect,
  authController.restrictTo("user"),
  commentsController.updateComment
);

// Handle delete request for a comment
router.delete(
  "/:id",
  authController.protect,
  authController.restrictTo("user"),
  commentsController.deleteComment
);

// Export router
module.exports = router;