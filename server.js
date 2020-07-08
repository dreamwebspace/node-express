const express = require("express");
const app = express();
const port = 5500;

app.get("/", (req, res, next) => {
  res.send(
    `App listening at port ${port}`
  );

});

app.listen(port, () => {
  console.log("Listening...")
});