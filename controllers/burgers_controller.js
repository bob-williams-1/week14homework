
var express = require("express");
var router = express.Router();

//IMPORT THE MODEL (burger.js) to use its database function --
var burger = require("../models/burger.js");


router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burgerName, 0
  ], function() {
    res.redirect("/");
  });
});




  burger.update({
    devoured: req.body.devour
  }, condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
