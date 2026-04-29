const mongoose = require("mongoose");

module.exports = mongoose.model("Task", new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, default: "OPEN" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" }
}, { timestamps: true }));
