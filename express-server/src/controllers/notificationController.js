const express = require("express");
const router = express.Router();

/* Send a notification */
router.post("/", function (req, res) {
  const message = req.params["message"];

  res.status(200).send({ notificationMessage: message });
});

/* Toggle notifications on/off */
router.post("/toggle", function (req, res) {
  const id = req.params["id"];

  res.status(200).send({ notificationToggle: id });
});

/* Set notifications on/off */
router.post("/update", function (req, res) {
  const id = req.params["id"];
  const toggle = req.params["toggle"];

  res.status(200).send({ notificationToggle: id, toggleStatus: toggle });
});

module.exports = router;
