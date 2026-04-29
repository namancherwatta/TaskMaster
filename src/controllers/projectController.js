const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  const project = await Project.create(req.body);
  res.json(project);
};
