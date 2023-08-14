const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const router = require("./Routers/Router");
const server = express();

server.use(bodyparser());

server.use(express.urlencoded({ extended: true }));

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

server.use("/router", router);
const url =
  "mongodb+srv://krishnendhuk165836:krishnendhuk165836@cluster0.8jscmnw.mongodb.net/Todo?retryWrites=true&w=majority";
const port = 2000;
mongoose
  .connect(url)
  .then(() => {
    server.listen(port, () => {
      console.log("http://localhost:2000/");
    });
  })
  .catch((error) => {
    console.log("Something went wrong");
  });
