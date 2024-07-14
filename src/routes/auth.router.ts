import express from "express";

let Auth = express.Router();

Auth.post("/", function (req, res, next) {
  res.send({
    title: "Login!",
    data: "Login API"
  });
});

export default Auth;
