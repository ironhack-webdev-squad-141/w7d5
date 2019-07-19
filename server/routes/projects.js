const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

/* GET home page */
router.get("/", (req, res, next) => {
  //   get all projects
  // instead of res.render() -> res.json()
  Project.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
