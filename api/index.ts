const express = require("express");

const router = express.Router();

const app = express();

router.use((req: any, res: any, next: any) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

router.post("/track-data", (res: any, req: any) => {
  console.log("Stored data!", req.body.data);
  res.status(200).json({ message: "Success!" });
});

module.exports = {
  path: "/api",
  handler: router
};
