"use strict";
	
const express = require("express");
const app = express();
const cors = require("cors");
//const routing = require("./routing/index");
//const bodyParser = require("body-parser");
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
//app.use(bodyParser.json());
//app.use(cors());
//app.use("/api", routing);
app.get("/", (req, res)=>{
  res.json("Hello i am calling2222222222222222");
})
const serverless = require("serverless-http");
module.exports.hello = serverless(app);
