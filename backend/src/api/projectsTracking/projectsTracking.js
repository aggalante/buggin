const restful = require("node-restful");
const mongoose = restful.mongoose;

const bugSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    required: false,
    uppercase: true,
    enum: ["NEW", "TODO", "INPROGRESS", "BLOCKED", "DONE", "REMOVED"],
  },
});

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  bugs: [bugSchema],
});

module.exports = restful.model("ProjectTracking", projectSchema);
