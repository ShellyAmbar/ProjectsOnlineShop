const express = require("express");
const app = express();
var data = require("./projects.json");
const port = 5000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/products", function (req, res, next) {
  res.send(data.products);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
