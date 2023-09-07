const { Schema, model } = require("mongoose");

const schema = Schema;

const taskschema = new schema(
  {
    taskName: { type: String, required: [true, "Task Name is required"] },
    dueDate: {
      type: Date,
      required: [true, "Task Due Date is required"],
      min: new Date(),
    },
    workSpace: { type: String, required: [true, "Workspace is required"] },
    taskDescription: { type: String, default: " " },
    isDone: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const taskmodel = model("task_tb", taskschema);

module.exports = taskmodel;
