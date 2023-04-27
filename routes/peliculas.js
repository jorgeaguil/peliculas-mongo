const express = require('express');
const router = express.Router();
const Pelicula = require('../models/pelicula');

// Maneja la solicitud POST en la ruta '/peliculas/agregar'
router.post('/agregar', async (req, res) => {
  // Obtiene los datos de la pelicula del cuerpo de la solicitud POST
  const { nombre, autor, año } = req.body;
  try {
    // Crea una nueva pelicula utilizando el modelo Pelicula y los datos obtenidos de la solicitud POST
    const pelicula = new Pelicula({ nombre, autor, año });
    // Guarda la pelicula en la base de datos
    await pelicula.save();
    // Envía una respuesta con un código de estado 200 si la pelicula se guardó correctamente
    res.status(200).json({ mensaje: 'Pelicula guardada correctamente' });
  } catch (error) {
    console.error(error);
    // Envía una respuesta con un código de estado 500 si hubo un error al guardar la pelicula
    res.status(500).json({ mensaje: 'Error al guardar la pelicula' });
  }
});

//module.exports = router;
router.get('/', async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
});

module.exports = router;
