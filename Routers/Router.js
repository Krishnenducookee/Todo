const express = require("express");
const taskmodel = require("../Models/Model");

const router = express.Router();

const routeArray = [
  { method: "post", routes: "/addTask" },
  { method: "get", routes: "/viewAllTask" },
  { method: "get", routes: "/viewCompletedTask" },
  { method: "get", routes: "/editTaskOld/:id" },
  { method: "post", routes: "/editTask" },
  { method: "post", routes: "/done/:id" },
];

//Task Body
const addTask = (req) => {
  const { task, date, description, workspace } = req.body;
  adddate = new Date();
  taskstatus = "Pending";
  const result = taskmodel.create({
    task,
    date,
    description,
    adddate,
    workspace,
    taskstatus,
  });
};

const viewAllTask = () => {
  const data = taskmodel.find({ taskstatus: "Pending" });
};

const viewCompletedTask = () => {
  const data = taskmodel.find({ taskstatus: "Done" });
};

const editTaskOld = (req) => {
  const id = req.params.id;

  const oldData = taskmodel.findOne({ _id: id });
};

const editTask = (req) => {
  const id = req.body._id;
  const data = {
    task: req.body.task,
    date: req.body.date,
    description: req.body.description,
    workspace: req.body.workspace,
  };
  const result = taskmodel.updateOne({ _id: id }, { $set: data });
};

const done = (req) => {
  const id = req.params.id;
  const updation = { taskstatus: "Done" };
  const result = taskmodel.updateOne({ _id: id }, { $set: updation });
};

//Main Router
router.post("/addTask", async (req, taskFunction, res) => {
  await taskFunction(req)
    .then((respone) => {
      return res.status(200).json({
        success: true,
        error: false,
        data: result,
        messege: "success",
      });
    })
    .catch((error) => {
      res.status(500).json({ success: false, error: true, messege: "Error" });
    });
});
