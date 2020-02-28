var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Models = require('../Models/mongooseModels');
var uri = "mongodb+srv://dbBot:dbBot_777@tecmm-tut-3nki0.gcp.mongodb.net/tutorias?retryWrites=true&w=majority";
router.post('/', function(req, res, next) {
  mongoose.connect(uri, {useNewUrlParser: true});
  let db = mongoose.connection;
  var kittySchema = new mongoose.Schema({
    usr:String, act:String, content:{}
  });
    let usr = req.body.usr;
    let Kitten = mongoose.model('User', kittySchema, 'Users');
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function(err) {
    Kitten.findOneAndUpdate({_id:usr._id}, {name:req.statusMessage.name}, function(err, doc) {
      if (err) return res.send(500, {error: err});
      return res.send('Succesfully saved.');
    } )
  });
});

module.exports = router;
