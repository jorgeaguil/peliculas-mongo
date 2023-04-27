const express = require('express'); // Importamos el módulo Express para crear el servidor
const mongoose = require('mongoose'); // Importamos el módulo Mongoose para interactuar con la base de datos
const peliculasRoutes = require('./routes/peliculas'); // Importamos el archivo de rutas para las películas
//importar ruta de peliculas/agregar
//const agregarRoutes = require('./routes/agregar');
//app.use('/peliculas/agregar', agregarRoutes);


const app = express(); // Creamos la aplicación de Express
const PORT = 3000; // Definimos el puerto en el que se ejecutará el servidor

// Conectamos a la base de datos con Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/bd_peliculas',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexión exitosa a la base de datos')) // Si la conexión es exitosa, mostramos un mensaje en la consola
  .catch(error => console.error('Error al conectar a la base de datos', error)); // Si la conexión falla, mostramos un mensaje de error en la consola

app.use(express.json()); // Middleware para interpretar las peticiones con formato JSON
app.use(express.urlencoded({ extended: true })); // Middleware para interpretar las peticiones con formato URL-encoded

app.use('/peliculas', peliculasRoutes); // Establecemos las rutas para las películas

app.use(express.static('public')); // Establecemos la carpeta pública para servir archivos estáticos (como CSS, JS e imágenes)

app.listen(PORT, () => { // Iniciamos el servidor en el puerto definido
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
