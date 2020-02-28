var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Models = require('./../Models/mongooseModels');
/* GET users listing. */
var uri = "mongodb+srv://root:S4kur4-007@testcluster-fkm78.gcp.mongodb.net/Heza?retryWrites=true&w=majority";
router.post('/', function(req, res, next) {
  mongoose.connect(uri, {useNewUrlParser: true});
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(err) {
    var query = Models.Person.find({});
    query.lean(true);
    query.exec(function (err, persons) {
      if (err) return handleError(err);
      console.log(persons);
      res.send({'Users':persons})
      mongoose.connection.close()
    });
  });
});
module.exports = router;
