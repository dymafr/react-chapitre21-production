var express = require("express");
var path = require("path");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://jean:123@cluster0-urpjt.gcp.mongodb.net/chap21-react?retryWrites=true&w=majority",
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log("CONNEXION DB OK !");
  })
  .catch(err => {
    console.log("DB KO !");
  });

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../client-build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client-build/index.html"));
});

module.exports = app;
