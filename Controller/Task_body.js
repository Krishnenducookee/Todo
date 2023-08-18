module.exports[
  ((addTask = async (req) => {
    const { taskName, dueDate, taskDescription, isPersonal } = req.body;
    const result = await taskmodel.create({
      taskName,
      dueDate,
      taskDescription,
      isPersonal,
    });
    // const newTask=new ;
    return result;
  }),
  (viewPendingTasks = async () => {
    return (result = await taskmodel.find({ isDone: true }));
  }),
  (viewCompletedTask = async () => {
    return (result = await taskmodel.find({ isDone: false }));
  }),
  (getTaskData = async (req) => {
    const id = req.params.id;

    return (result = await taskmodel.findOne({ _id: id }));
  }),
  (editTask = async (req) => {
    const id = req.body._id;
    const existingTask = await taskmodel.findOne({ _id: id });
    if (existingTask) {
      existingTask.taskName = req.body.taskName;
      existingTask.dueDate = req.body.dueDate;
      existingTask.taskDescription = req.body.taskDescription;
      existingTask.isPersonal = req.body.isPersonal;
      const result = existingTask.save();
      return result;
    }

    // const data = {
    //   task: req.body.task,
    //   date: req.body.date,
    //   description: req.body.description,
    //   workspace: req.body.workspace,
    // };
    // const updatedTask = ["taskName"];
    // return (result = taskmodel.updateOne({ _id: id }, { $set: data }));
  }),
  (done = (req) => {
    const id = req.params.id;
    const updation = { isDone: true };
    const result = taskmodel.updateOne({ _id: id }, { $set: updation });
  }))
];
