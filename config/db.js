const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connection create successfully");
  } catch (error) {
    console.error("mongodb conection feild", error)
  }
};

module.exports=connectDB