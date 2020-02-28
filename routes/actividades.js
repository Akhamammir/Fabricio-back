var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Models = require('../Models/mongooseModels');
var uri = "mongodb+srv://root:S4kur4-007@testcluster-fkm78.gcp.mongodb.net/tutorias?retryWrites=true&w=majority";
router.post('/', function(req, res, next) {
  mongoose.connect(uri, {useNewUrlParser: true});
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(err) {
    let usr = "root";
    var query = Models.Activity.find({Done:false});
    query.lean(true);
    query.exec(function (err, person) {
      if (err) return handleError(err);
      console.log(person);
      res.send({'User':person})
      mongoose.connection.close()
    });
  });
});

module.exports = router;
