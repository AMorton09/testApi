const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    bandName : String,

});


let Class = mongoose.model('Class', classSchema);

module.exports = Class;