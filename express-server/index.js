const device = require("./src/controllers/deviceController.js");
const notification = require("./src/controllers/notificationController.js");

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const PORT = 2309;

app.listen(PORT, (error) => {
  if (!error) console.log("Server is running on port " + PORT);
  else console.log("Error: ", error);
});

app.use("/device", device);
app.use("/notification", notification);
