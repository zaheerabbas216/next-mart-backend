require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://ZaheerDBUser:zahir%40216@cluster0.gnt9x.mongodb.net/?retryWrites=true&w=majority",
    {
      dbName: "NextMart",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(
        "===========================APP Connected and Started========================================"
      );
    });
  })
  .catch((error) => {
    console.log("error", error);
  });

app.get("/ping", (req, res) => {
  res.send("PONG!!");
});
