const mongoose = require("mongoose");

const schema = mongoose.Schema;

const taskschema = new schema({
  taskName: { type: String, required: true },
  dueDate: { type: Date, required: true },
  isPersonal: { type: Boolean, default: true },
  taskDescription: { type: String, default: "" },
  isDone: { type: Boolean, default: false },
},
{ timrstamp:true});

const taskmodel = mongoose.model("task_tb", taskschema);

module.exports = taskmodel;
