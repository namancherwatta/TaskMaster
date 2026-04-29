const mongoose = require("mongoose");

module.exports = mongoose.model("Project", new mongoose.Schema({
  name: String,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
}));
