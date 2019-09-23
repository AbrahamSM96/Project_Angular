'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

module.exports =mongoose.model('Project', ProjectSchema)
// Project == projects(llamada asi en la base de datos) en la base de datos de mongo --> guarda los documentos en la coleccion
