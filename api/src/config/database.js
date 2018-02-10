const mongoose = require('mongoose');
// Api de promise do mongose está depreciada
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost/todo');
