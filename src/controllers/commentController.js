const Comment = require("../models/Comment");

exports.addComment = async (req, res) => {
  const comment = await Comment.create(req.body);
  req.app.get("io").emit("commentAdded", comment);
  res.json(comment);
};
