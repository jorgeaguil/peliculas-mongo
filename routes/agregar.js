/*const express = require('express');
const router = express.Router();
const Pelicula = require('../models/pelicula');

router.post('/', async (req, res) => {
  const { title, director, year } = req.body;
  const pelicula = new Pelicula({ title, director, year });
  try {
    await pelicula.save();
    res.json({ message: 'Película agregada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al agregar la película' });
  }
});

module.exports = router;
*/
