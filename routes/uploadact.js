var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var uri =
  "mongodb+srv://root:S4kur4-007@testcluster-fkm78.gcp.mongodb.net/tutorias?retryWrites=true&w=majority";
  var Models = require('./../Models/mongooseModels');
router.post("/", async function (req, res, next) {
  mongoose.connect(uri, { useNewUrlParser: true });
  let db = mongoose.connection;
  db.once("open", function (err) {
    console.log(mongoose.connection.readyState, typeof ({ ...req.body.usr }));
    delete req.body.act.usr
    let act_upload = new Models.ACT({
      usr: { ...req.body.usr },
      act:'FODA',
      content: { ...req.body.act },
    });
    console.log(act_upload);
    act_upload.save().then(() => {
      console.log("done!");
      mongoose.connection.close();
      res.send("Succesfully saved.");
    });
  });
});

module.exports = router;
