const express = require("express");
const taskmodel = require("../Models/Model");

const router = express.Router();

router.post("/addTask", async (req, res) => {
  try {
    const { task, date, description, workspace } = req.body;
    adddate = new Date();
    taskstatus = "Pending";
    const result = await taskmodel.create({
      task,
      date,
      description,
      adddate,
      workspace,
      taskstatus,
    });
    console.log("dsg", result);

    if (result) {
      return res.status(200).json({
        success: true,
        error: false,
        data: result,
        messege: "success",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: true, messege: "Error" });
  }
});

router.get("/viewallTask", async (req, res) => {
  try {
    const data = await taskmodel.find({ taskstatus: "Pending" });
    if (data) {
      return res
        .status(200)
        .json({ success: true, error: false, data: data, messege: "Success" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: true, messege: "error" });
  }
});

router.get("/completedTask", async (req, res) => {
  try {
    const data = await taskmodel.find({ taskstatus: "Done" });
    if (data) {
      return res
        .status(200)
        .json({ success: true, error: false, data: data, messege: "Success" });
    }
    console.log(data);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: true, messege: "error" });
  }
});

router.get("/editTaskOld/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const oldData = await taskmodel.findOne({ _id: id });
    console.log("h", oldData);
    return res.status(200).json({
      success: true,
      error: false,
      data: oldData,
      messege: "Success",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: true, messege: "error" });
  }
});

router.post("/editTask", async (req, res) => {
  try {
    const id = req.body._id;
    const data = {
      task: req.body.task,
      date: req.body.date,
      description: req.body.description,
      workspace: req.body.workspace,
    };
    const result = await taskmodel.updateOne({ _id: id }, { $set: data });
    if (result) {
      return res.status(200).json({
        success: true,
        error: false,
        data: result,
        messege: "success",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: true, messege: "error" });
  }
});
router.post("/done/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updation = { taskstatus: "Done" };
    const result = await taskmodel
      .updateOne({ _id: id }, { $set: updation })
      .then((response) => {
        return res.status(200).json({
          success: true,
          error: false,
          messege: "Done",
        });
      });
  } catch (error) {}
});
module.exports = router;
