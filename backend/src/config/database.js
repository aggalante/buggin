const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
module.exports = mongoose.connect("mongodb://localhost/buggin", {
  useNewUrlParser: true,
});

mongoose.Error.messages.general.required = "Attribute '{PATH}' is required.";
mongoose.Error.messages.Number.min =
  "'{VALUE}' is under the minimum range of '{MIN}'.";
mongoose.Error.messages.Number.max =
  "'{VALUE}' is above the maximum range of '{MAX}'.";
mongoose.Error.messages.String.enum =
  "'{VALUE}' not valid for attribute '{PATH}'.";
