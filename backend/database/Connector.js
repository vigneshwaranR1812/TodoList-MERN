const mongoose = require("mongoose");
const connectDB = async () => {
  console.log("Hello");
  await mongoose
    .connect(
      "mongodb://vicky:vicky@ac-lncsnzl-shard-00-00.bgvfsy6.mongodb.net:27017,ac-lncsnzl-shard-00-01.bgvfsy6.mongodb.net:27017,ac-lncsnzl-shard-00-02.bgvfsy6.mongodb.net:27017/?ssl=true&replicaSet=atlas-tketg8-shard-0&authSource=admin&retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Connected!");
      return true;
    })
    .catch((err) => {
      console.log("Doesn't connect!", err);
      return false;
    });
};

module.exports = connectDB;
