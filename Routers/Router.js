const { Router } = require("express");
const {
  addTask,
  viewCompletedTask,
  viewPendingTasks,
  done,
  editTask,
  getTaskData,
} = require("../Controller/Task_body");

const router = Router();

const routeArray = [
  { method: "post", route: "/addTask", routeController: addTask },
  {
    method: "get",
    route: "/viewAllTask",
    routeController: viewPendingTasks,
  },
  {
    method: "get",
    route: "/viewCompletedTask",
    routeController: viewCompletedTask,
  },
  {
    method: "get",
    route: "/editTaskOld/:id",
    routeController: getTaskData,
  },
  { method: "post", route: "/editTask", routeController: editTask },
  { method: "post", route: "/done/:id", routeController: done },
];

//Main Router
for (const eachroute of routeArray) {
  router[eachroute.method](eachroute.route, async (req, res) => {
    eachroute
      .routeController(req, res)
      .then((response) => {
        res.status(200).json({
          success: true,
          error: false,
          data: response,
          messege: "success",
        });
      })
      .catch((error) => {
        res.status(500).json({ success: false, error: true, messege: error });
      });
  });
}

module.exports = router;
