const BugTracking = require("./bugTracking");
const errorHandler = require("../common/errorHandler");

BugTracking.methods(["get", "post", "put", "delete"]);
BugTracking.updateOptions({ new: true, runValidators: true });
BugTracking.after("post", errorHandler).after("put", errorHandler);

BugTracking.route("get", (req, res, next) => {
  BugTracking.find({}, (error, docs) => {
    if (!error) {
      res.json(docs);
    } else {
      res.status(500).json({ errors: [error] });
    }
  });
});

BugTracking.route("count", (req, res, next) => {
  BugTracking.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] });
    } else {
      res.json({ value });
    }
  });
});

module.exports = BugTracking;
