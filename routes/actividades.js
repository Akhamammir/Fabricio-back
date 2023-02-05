var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Models = require('../Models/mongooseModels');
var uri = "mongodb+srv://root:S4kur4-007@testcluster-fkm78.gcp.mongodb.net/tutorias?retryWrites=true&w=majority";
var Models = require('./../Models/mongooseModels');
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
router.post('/get_results', function(req, res, next) {
  mongoose.connect(uri, {useNewUrlParser: true});
  let db = mongoose.connection;
  db.on('error', (err)=>console.log(err));
  db.once('open', function(err) {
    var query = Models.ACT.find({});
    query.lean(true);
    query.exec(function (err, person) {
      if (err) return console.log(err);
      console.log(person);
      res.send({'Activities':person})
      mongoose.connection.close()
    });
  });
});

module.exports = router;
