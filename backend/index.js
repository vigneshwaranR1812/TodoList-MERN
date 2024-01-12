const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./database/Connector");
const userRouter = require("./routes/userRoute");
const taskRouter = require("./routes/taskRoute");
const CORS = require("cors");
dotenv.config();
if (!connectDB()) {
  console.log("Error Occured!!!");
  return;
}
app.use(CORS());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);
app.listen(5000, () => {
  console.log("Server Started!!!!!");
});
