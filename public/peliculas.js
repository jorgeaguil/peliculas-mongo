const peliculasList = document.getElementById('peliculas');

fetch('/peliculas')
  .then(response => response.json())
  .then(data => {
    data.forEach(pelicula => {
      const listItem = document.createElement('li');
      const peliculaText = document.createTextNode(`${pelicula.nombre} (${pelicula.año}) - ${pelicula.autor}`);
      listItem.appendChild(peliculaText);
      peliculasList.appendChild(listItem);
    });
  })
  .catch(error => console.error(error));
  
  //validar subir peliculas
const addMovieForm = document.getElementById("add-movie-form");

  addMovieForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener los valores de los campos del formulario
    const title = document.getElementById("title-input",).value;
    const director = document.getElementById("director-input").value;
    const year = document.getElementById("year-input").value;

    // Validar que los campos no estén vacíos
    if (title.trim() === "" || director.trim() === "" || year.trim() === "") {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Validar que el año sea numérico y esté dentro del rango de años aceptable
    if (isNaN(year) || year < 1900 || year > 2099) {
      alert("Por favor, ingrese un año válido.");
      return;
    }

    // Si todo está validado, crear un objeto de película con los valores del formulario
    // const movie = {
    //   title: title,
    //   director: director,
    //   year: year,
    // };

    // Aquí puedes enviar el objeto de película al servidor o hacer cualquier otra cosa que necesites hacer
    //console.log(movie);
    //fetch para enviar datos al servidor
    fetch('/peliculas/agregar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, director, year }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert("Pelicula agregada correctamente");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert("Error al agregar pelicula");
      });

  });