const mongoose = require("mongoose");
const schema = mongoose.Schema;
const taskschema = new schema({
  task: { type: String },
  date: { type: String },
  adddate: { type: String },
  workspace: { type: String },
  description: { type: String },
  taskstatus: { type: String },
});
const taskmodel = mongoose.model("task_tb", taskschema);
module.exports = taskmodel;
