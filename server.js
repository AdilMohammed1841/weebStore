const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
const arangojs = require('arangojs');
const mongoose = require('mongoose');
const getMedia = require('./api/controller/getMediaHandler')

mongoose.connect(
    "mongodb://127.0.0.1:27017/",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (!err) {
        console.log("db connected");
      } else {
        console.log(err,"db error");
      }
    }
  );

var cors = require("cors");
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/getmedia',getMedia)

app.listen(port, (e) => {
    console.log(e);
  });
  