const mongoose = require("mongoose");

module.exports = mongoose.model("Comment", new mongoose.Schema({
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
  message: String
}, { timestamps: true }));
