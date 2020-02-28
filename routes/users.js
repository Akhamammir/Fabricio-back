var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Models = require('./../Models/mongooseModels');
/* GET users listing. */
var uri = "mongodb+srv://root:S4kur4-007@testcluster-fkm78.gcp.mongodb.net/Heza?retryWrites=true&w=majority";
/*var UsrSchema = new mongoose.Schema({
  Name: String,
  Last_Name:String,
  Usr:String,
  Pwd:String
});*/

router.post('/', function(req, res, next) {
  mongoose.connect(uri, {useNewUrlParser: true});
  let db = mongoose.connection;
  //console.log(req.body.usr)
  /*
  var kittySchema = new mongoose.Schema({
    name: String
  });
  let Kitten = mongoose.model('Cat', kittySchema);
  let Snow = new Kitten({name:'Snow'});
  Snow.save()*/
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(err) {
    var query = Models.Person.findOne({Usr:req.body.usr});
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
