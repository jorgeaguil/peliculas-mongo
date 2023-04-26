const express = require('express');
const mongoose = require('mongoose');
const peliculasRoutes = require('./routes/peliculas');

const app = express();
const PORT = 3000;

//mongoose.connect('mongodb://localhost/bd_peliculas',
//conexion a la base de datos en la nube con uri
mongoose.connect('mongodb://127.0.0.1:27017/bd_peliculas',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch(error => console.error('Error al conectar a la base de datos', error));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/peliculas', peliculasRoutes);

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
