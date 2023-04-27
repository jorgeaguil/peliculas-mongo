const express = require('express');
const router = express.Router();
const Pelicula = require('../models/pelicula');

// Maneja la solicitud GET en la ruta '/'
router.get('/', async (req, res) => {
  try {
    // Obtiene todas las peliculas de la base de datos
    const peliculas = await Pelicula.find();
    // Renderiza la vista 'index' y pasa el objeto peliculas como argumento
    res.render('index', { peliculas });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las películas');
  }
});

// Maneja la solicitud GET en la ruta '/buscar'
router.get('/buscar', async (req, res) => {
  // Obtiene la cadena de búsqueda de la solicitud GET
  const busqueda = req.query.q;
  try {
    // Busca peliculas que contienen la cadena de búsqueda utilizando MongoDB Text Search
    const peliculas = await Pelicula.find({ $text: { $search: busqueda } });
    // Renderiza la vista 'index' y pasa el objeto peliculas como argumento
    res.render('index', { peliculas });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al buscar las películas');
  }
});

// Maneja la solicitud POST en la ruta '/agregar'
router.post('/agregar', async (req, res) => {
  // Obtiene los datos de la pelicula del cuerpo de la solicitud POST
  const { nombre, autor, año } = req.body;
  try {
    // Crea una nueva pelicula utilizando el modelo Pelicula y los datos obtenidos de la solicitud POST
    const pelicula = new Pelicula({ nombre, autor, año });
    // Guarda la pelicula en la base de datos
    await pelicula.save();
    // Redirecciona a la ruta principal '/'
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al guardar la película');
  }
});

// Exporta el router para ser utilizado en la aplicación principal
module.exports = router;
