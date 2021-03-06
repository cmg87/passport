const express = require("express");
const router = express.Router();
const Factory = require("../models/schema");

//Post, Create Factory
router.post("/api/createFactory", (req, res) => {
  if (req.body.children.length !== 0) {
    let newFactory = {
      FactoryName: req.body.name,
      Children: req.body.children
    };
    Factory.create(newFactory)
      .then(data => res.json(data))
      .catch(err => res.send(err));
  } else {
    res.json({ Error: "Must have at least one Child Node" });
  }
});

//Get route
router.get("/api/getFactory", (req, res) => {
  Factory.find({})
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

//Delete one factory
router.delete("/api/deleteFactory", (req, res) => {
  let id = req.body.id;
  Factory.findByIdAndDelete(id)
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

//Delete All
router.delete("/api/deleteAll", (req, res) => {
  Factory.deleteMany({})
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

//Update One Factory
router.put("/api/updateFactory/:id", (req, res) => {
  Factory.findOneAndUpdate(
    {
      _id: req.params.id
    },
    { FactoryName: req.body.name, Children: req.body.children },
    { new: true }
  )
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

module.exports = router;
