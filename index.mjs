var express = require("express");
var router = express.Router();
import mongoose, { mongo } from "mongoose";
import { equal } from "assert";
import { assert } from "console";
var url =
  "mongodb+srv://<username>:445500@cluster0.nmgizsx.mongodb.net/ ?retryWrites=true&w=majority";
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});
router.get("/get-data", function (req, res, next) {
  var resultArray = [];
  mongo.connect(url, function (err, db) {
    equal(null, err);
    var cursor = db.collection("user-data").find();
    cursor.forEach(
      function (doc, err) {
        assert.equal(null, err);
        resultArray.push(doc);
      },
      function () {
        db.close();

        res.render("index", { items: resultArray });
      }
    );
  });
});

router.post("/insert", function (req, res, next) {
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  };
  mongo.connect(url, function (err, db) {
    assert.equal(null, err);
    db.collection("user-data").insertOne(item, function (err, result) {
      assert, equal(null, error);
      console.log("item inserted");
      db.close();
    });
  });
});
////////////////////////////////////////////////////////////////
