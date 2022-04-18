const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var SubmissionSchema = new mongoose.Schema({
  fName: String,
  lName: String,
  email: String,
  phone: String,
  message: String,
  contacted: { type: String, default: "No" },
  submissionDate: { type: Date, default: Date.now },
});

var Submission = mongoose.model("Submission", SubmissionSchema);
mongoose.connect(process.env.prodDBConnection);

app.post("/submitForm", async (req, res) => {
  var new_submission = new Submission({
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  });
  await new_submission.save((err, doc) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(9000, () => {
  console.log("app running on port 9000");
});
