var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ppc');
mongoose.Promise = global.Promise;