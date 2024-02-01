const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      process.env.URL || "mongodb://127.0.0.1:27017/students"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

function disconnect() {
  return mongoose.disconnect();
}

module.exports = { connect, disconnect };
