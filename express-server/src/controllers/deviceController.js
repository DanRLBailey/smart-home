const express = require("express");
const router = express.Router();

/* Get a list of all the statuses of all the devices */
router.get("/", function (req, res) {
  res.status(200).send({
    lock: true,
    fridge: true,
  });
});

/* Get the status of the specified devices */
router.get("/:id", function (req, res) {
  const id = req.params["id"];

  res.status(200).send({ statusGet: id });
});

/* Update the status of the specified devices */
router.post("/:id", function (req, res) {
  const id = req.params["id"];

  res.status(200).send({ statusPost: id });
});

/* Register a new device */
router.post("/register", function (req, res) {
  const id = req.body.id;

  res.status(200).send({ register: id });
});

/* Deregister a device */
router.delete("/deregister", function (req, res) {
  const id = req.body.id;

  res.status(200).send({ deregister: id });
});

module.exports = router;
