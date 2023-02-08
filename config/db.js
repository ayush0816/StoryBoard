const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI, () => {
    console.log("connected to mongo");
  });
};

module.exports = connectDB;
