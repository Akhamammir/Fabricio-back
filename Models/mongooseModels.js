var mongoose = require('mongoose');

var kittySchema = new mongoose.Schema({usr:String, act:String, content:{} });

module.exports = {
    Person : mongoose.model('UserList', new mongoose.Schema({}), 'Users' ),
    Client : mongoose.model('Clients', new mongoose.Schema({}), 'Clients' ),
    Activity : mongoose.model('Actividades', new mongoose.Schema({}), 'Actividades' ),
    
}