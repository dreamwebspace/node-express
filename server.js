const express = require("express");
const app = express();

app.get("/", function (req, res, next) {
  res.json({
    "status": "Success!"
  });

}); 

app.listen(5500, function(){
  console.log("Listening...")
});
