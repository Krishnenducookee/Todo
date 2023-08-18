const express = require("express");
const taskBody = require("../Controller/Task_body");
const router = express.Router();

const routeArray = [
  { method: "post", routes: "/addTask" },
  { method: "get", routes: "/viewAllTask" },
  { method: "get", routes: "/viewCompletedTask" },
  { method: "get", routes: "/editTaskOld/:id" },
  { method: "post", routes: "/editTask" },
  { method: "post", routes: "/done/:id" },
];

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
