const taskmodel = require("../Models/Model");

module.exports = {
  addTask: async (req, res) => {
    const { taskName, dueDate, taskDescription, isPersonal } = req.body;
    // const newTask = await taskmodel.create({
    //   taskName,
    //   dueDate,
    //   taskDescription,
    //   isPersonal,
    // });
    const newTask = new taskmodel({
      taskName,
      taskDescription,
      dueDate,
      isPersonal,
    });
    if (taskName !== " " && dueDate != " " && isPersonal !== " ") {
      return await newTask.save();
    }
  },
  viewPendingTasks: async (req, res) => {
    return await taskmodel.find({ isDone: false });
  },
  viewCompletedTask: async (req, res) => {
    return await taskmodel.find({ isDone: true });
  },
  getTaskData: async (req, res) => {
    const id = req.params.id;
    return await taskmodel.findOne({ _id: id });
  },
  editTask: async (req, res) => {
    const id = req.body._id;
    const existingTask = await taskmodel.findOne({ _id: id });
    if (existingTask) {
      existingTask.taskName = req.body.taskName;
      existingTask.dueDate = req.body.dueDate;
      existingTask.taskDescription = req.body.taskDescription;
      existingTask.isPersonal = req.body.isPersonal;
      return await existingTask.save();
    }

    // const data = {
    //   task: req.body.task,
    //   date: req.body.date,
    //   description: req.body.description,
    //   workspace: req.body.workspace,
    // };
    // const updatedTask = ["taskName"];
    // return (result = taskmodel.updateOne({ _id: id }, { $set: data }));
  },
  done: async (req, res) => {
    const id = req.params.id;
    const existingTask = await taskmodel.findOne({ _id: id });
    if (existingTask) {
      existingTask.isDone = true;
      return existingTask.save();
    }
    // const updation = { isDone: true };
    // const result = taskmodel.updateOne({ _id: id }, { $set: updation });
  },
};
