const express = require("express");
const router = express.Router();
const {
  getAllTask,
  getAllCompletedTask,
  getAllDeadLineTask,
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
} = require("../controller/taskController");
const { authenticateTokenUser } = require("../middleware/jwtToken");

router.get("/getAllTask", authenticateTokenUser, getAllTask);
router.get("/getTaskById/:taskId", authenticateTokenUser, getTaskById);
router.get("/getAllCompletedTask", authenticateTokenUser, getAllCompletedTask);
router.get("/getAllDeadLineTask", authenticateTokenUser, getAllDeadLineTask);
router.post("/createTask", authenticateTokenUser, createTask);
router.post("/updateTask", authenticateTokenUser, updateTask);
router.delete("/deleteTask/:taskId", authenticateTokenUser, deleteTask);

module.exports = router;
