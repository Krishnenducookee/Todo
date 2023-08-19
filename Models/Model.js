const { Schema, model } = require("mongoose");

const schema = Schema;

const taskschema = new schema(
  {
    taskName: { type: String, required: true },
    dueDate: { type: Date, required: true },
    isPersonal: { type: String, required: true },
    taskDescription: { type: String, default: " " },
    isDone: { type: Boolean, default: false },
  },
  { timestamp: true }
);

const taskmodel = model("task_tb", taskschema);

module.exports = taskmodel;
