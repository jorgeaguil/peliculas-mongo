const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  autor: { type: String, required: true },
  año: { type: Number, required: true },
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema);

module.exports = Pelicula;
