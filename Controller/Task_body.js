const taskmodel = require("../Models/Model");

module.exports = {
  addTask: async (req, res) => {
    const { taskName, dueDate, taskDescription, workSpace } = req.body;
    // const newTask = await taskmodel.create({
    //   taskName,
    //   dueDate,
    //   taskDescription,
    //   workSpace,
    // });
    const newTask = new taskmodel({
      taskName,
      taskDescription,
      dueDate,
      workSpace,
    });

    if (taskName !== " " && dueDate != " " && workSpace !== " ") {
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
    //   existingTask.taskName = req.body.taskName;
    //   existingTask.dueDate = req.body.dueDate;
    //   existingTask.taskDescription = req.body.taskDescription;
    //   existingTask.workSpace = req.body.workSpace;
    //   return await existingTask.save();
    // }

    const data = {
      taskName: req.body.taskName,
      dueDate: req.body.dueDate,
      taskDescription: req.body.taskDescription,
      workSpace: req.body.workSpace,
    };
    // const updatedTask = ["taskName"];
     return (result = taskmodel.updateOne({ _id: id }, { $set: data }));
  }},
  done: async (req, res) => {
    const id = req.params.id;
    const existingTask = await taskmodel.findOne({ _id: id });
    if (existingTask) {
    //   existingTask.isDone = true;
    //   return existingTask.save();
    // }
     const updation = { isDone: true };
     return result = taskmodel.updateOne({ _id: id }, { $set: updation });
  }},
};
