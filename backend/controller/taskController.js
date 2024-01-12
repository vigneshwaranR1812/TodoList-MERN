const { Task } = require("../model/TaskSchema");

const getAllTask = async (req, res) => {
  const { userId } = req;
  const task = await Task.find({ createdBy: userId });
  return res.json(task).status(200);
};
const getAllCompletedTask = async (req, res) => {
  const { userId } = req;
  const task = await Task.find({
    createdBy: userId,
    completedTime: { $ne: null },
  });
  return res.json(task).status(200);
};
const getAllDeadLineTask = async (req, res) => {
  const { userId } = req;
  const currentTime = new Date();
  const deadLineTask = await Task.find({
    deadLineTime: { $lt: currentTime },
    createdBy: userId,
  });
  return res.json(deadLineTask).status(200);
};
const createTask = async (req, res) => {
  const { userId } = req;
  const { name, description, completedTime, deadLineTime, status } = req.body;
  const newTask = new Task({
    name,
    description,
    createdBy: userId,
    completedTime,
    deadLineTime,
    status,
  });
  await newTask.save();
  return res.json({ msg: "Successfully Added!" }).status(200);
};

const updateTask = async (req, res) => {
  const { userId } = req;

  const { id, name, description, completedTime, deadLineTime, status } =
    req.body;
  const updatedDocument = await Task.findOneAndUpdate(
    { _id: id, createdBy: userId },
    { $set: { name, description, completedTime, deadLineTime, status } }, // Specify the field(s) you want to update
    { new: true } // Return the modified document instead of the original
  );
  return res.json({ msg: "Updated Successfully" }).status(200);
};
const deleteTask = async (req, res) => {
  const { userId } = req;
  const { taskId } = req.params;
  const task = await Task.findOne({ _id: taskId, createdBy: userId });
  if (!task) {
    return res.json({ msg: "No Task Found" }).status(404);
  } else {
    await Task.deleteOne({ _id: taskId, createdBy: userId });
    return res.json({ msg: "Successfully Deleted" }).status(200);
  }
};
const getTaskById = async (req, res) => {
  const { userId } = req;
  const { taskId } = req.params;
  const task = await Task.findOne({ _id: taskId, createdBy: userId });
  if (!task) {
    return res.json({ msg: "No Task Found" }).status(404);
  } else {
    return res.json(task).status(200);
  }
};

module.exports = {
  getAllTask,
  getAllCompletedTask,
  getAllDeadLineTask,
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
};
