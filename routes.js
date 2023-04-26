const express = require('express');
const router = express.Router();
const Pelicula = require('../models/pelicula');

router.get('/', async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.render('index', { peliculas });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las películas');
  }
});

router.get('/buscar', async (req, res) => {
  const busqueda = req.query.q;
  try {
    const peliculas = await Pelicula.find({ $text: { $search: busqueda } });
    res.render('index', { peliculas });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al buscar las películas');
  }
});


router.post('/agregar', async (req, res) => {
  const { nombre, autor, año } = req.body;
  try {
    const pelicula = new Pelicula({ nombre, autor, año });
    await pelicula.save();
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al guardar la película');
  }
});

module.exports = router;
