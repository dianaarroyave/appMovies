

const peliculas = require("./movies");

const moviesDH = {

// Ahora que el objeto literal moviesDH tiene todas las películas, es posible crear la funcionalidad listMovies. Esta tendrá la responsabilidad de retornar el listado de todas las películas existentes. Puedes utilizar cualquier método para recorrer los arrays, que desees. Para probar que la funcionalidad está correcta debes utilizar el comando que nos permite imprimir los resultados en nuestra terminal.

    listMovies: () => {
        for (let i = 0; i < peliculas.length; i++) {
            console.log(i + 1 + ". " + peliculas[i].title);
        }
        return "";
    },

// Crear la funcionalidad searchMovie que debe recibir por parámetro un id ó un title de la película. La responsabilidad de esta función será la de mostrar el detalle de alguna de las películas registradas en nuestro módulo movies, si la película no es encontrada entonces la función debe devolver null. 

    searchMovie : function(pelicula){
        return peliculas.find(e => e.title === pelicula || e.id === pelicula) ?? null
    },

// Crear la funcionalidad searchMoviesByGenre la misma debe recibir por parámetro algunos de los géneros asignados a las películas y la responsabilidad de esta función será la de devolver una lista (array) de todas aquellas películas que posean el género indicado, de no existir ninguna de ese género de retornar null.

    searchMoviesByGenre: (genero) => {
        let peliculasPorGenero = peliculas.filter((pelicula) => {
            return pelicula.genre === genero;
        });
        if (peliculasPorGenero.length === 0) {
            return "No hay películas con ese género";
        } else {
            return peliculasPorGenero;
        }
    },

// También nos pide que creemos una funcionalidad totalPrice que justamente nos devuelve la sumatoria del precio (price) de todas las películas registradas. Acá el único requerimiento técnico explícito es que utilices la función reduce

    totalPrice : (genero) => {
        let total = peliculas.reduce((acum, pelicula) => acum + pelicula.price, 0);
        return total
    },

// Por último, nuestro tech leader se da cuenta que algunas de las películas deben cambiar de género. Para esto nos pide que creemos una funcionalidad changeMovieGenre que reciba el id de una película y el nuevo género a cambiar. Para esto deberíamos utilizar funcionalidad ya existente (searchMovie) y cambiar el género de la película encontrada.

    changeMovieGenre: function (id, genero) {
        let cambioGenero = this.searchMovie(id)
        cambioGenero["genre"] = genero;
        return cambioGenero;
    }
}

console.log("***************Iniciaindo listado de peliculas**********************")
console.log(moviesDH.listMovies())
console.log("***************Iniciando Busqueda de peliculas**********************")
console.log(moviesDH.searchMovie("La historia sin fin"))
console.log("***************Buscar por Genero**********************")
console.log(moviesDH.searchMoviesByGenre("Acción"))
console.log("***************Precio Total**********************")
console.log(moviesDH.totalPrice())
console.log("***************Cambio de Genero**********************")
console.log(moviesDH.changeMovieGenre(2, "Aventura"))
