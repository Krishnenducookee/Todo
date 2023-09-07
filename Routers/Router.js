const { Router, response } = require("express");
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
        res.status(500).json({ success: false, error: true, data: response });
      });
  });
}

// router.post("/addTask", async (req, taskFunction, res) => {
//   await taskFunction(req)
//     .then((respone) => {
//       return res.status(200).json({
//         success: true,
//         error: false,
//         data: result,
//         messege: "success",
//       });
//     })
//     .catch((error) => {
//       res.status(500).json({ success: false, error: true, messege: "Error" });
//     });
// });

// router.get("/viewallTask", async (req, res) => {
//   try {
//     if (data) {
//       return res
//         .status(200)
//         .json({ success: true, error: false, data: data, messege: "Success" });
//     }
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ success: false, error: true, messege: "error" });
//   }
// });

// router.get("/completedTask", async (req, res) => {
//   try {
//     const data = await taskmodel.find({ taskstatus: "Done" });
//     if (data) {
//       return res
//         .status(200)
//         .json({ success: true, error: false, data: data, messege: "Success" });
//     }
//     console.log(data);
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ success: false, error: true, messege: "error" });
//   }
// });

// router.get("/editTaskOld/:id", async (req, res) => {
//   try {
//     console.log("h", oldData);
//     return res.status(200).json({
//       success: true,
//       error: false,
//       data: oldData,
//       messege: "Success",
//     });
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ success: false, error: true, messege: "error" });
//   }
// });

// router.post("/editTask", async (req, res) => {
//   try {
//     if (result) {
//       return res.status(200).json({
//         success: true,
//         error: false,
//         data: result,
//         messege: "success",
//       });
//     }
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ success: false, error: true, messege: "error" });
//   }
// });
// router.post("/done/:id", async (req, res) => {
//   try {
//     if (result) {
//       return res.status(200).json({
//         success: true,
//         error: false,
//         messege: "Done",
//       });
//     }
//   } catch (error) {}
// });
module.exports = router;
