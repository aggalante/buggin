const ProjectTracking = require("./projectsTracking");
const errorHandler = require("../common/errorHandler");

ProjectTracking.methods(["get", "post", "put", "delete"]);
ProjectTracking.updateOptions({ new: true, runValidators: true });
ProjectTracking.after("post", errorHandler).after("put", errorHandler);

ProjectTracking.route("get", (req, res, next) => {
  ProjectTracking.find({}, (error, docs) => {
    if (!error) {
      res.json(docs);
    } else {
      res.status(500).json({ errors: [error] });
    }
  });
});

ProjectTracking.route("count", (req, res, next) => {
  ProjectTracking.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] });
    } else {
      res.json({ value });
    }
  });
});

module.exports = ProjectTracking;
