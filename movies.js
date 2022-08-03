// ************** INICIANDO EJERCICIO ***********

// Crear una carpeta llamada app-movies y dentro de ella crear un archivo movies.js el cual, debe contener un array de objetos literales. Cada objeto literal deberá tener las propiedades: id, title, rating, awards, length, price, genre. Asigne a cada propiedad al menos cinco (5) de sus películas favoritas, considerando al menos alguna con los siguientes géneros: Acción - Animación - Aventuras - Comedia - Ciencia Ficción - Suspenso.


let movies =
[
    {
        id : 1,
        title : "The Suicide Squad",
        rating : 3.7,
        awards : "Premios Satellite",
        length : 2,
        price : 185000000,
        genre : "Acción",
    },

    {    
        id : 2,
        title: "Como entrenar a tu dragon",
        rating: 4.8,
        awards: null,
        length: "1.38",
        price: 165000000, 
        genre: "Animacion"
    },

    {
        id : 3, 
        title : "La historia sin fin",
        rating : 4.1,
        awards : "Premio del Cine Alemán al Mejor Diseño de Producción",
        length : 1.42,
        price : 165000000,
        genre : "Aventura"
    },

    {
        id: 4,
        title: "Shrek",
        rating: 4.9,
        awards: ["Premio People's Choice al Actor Favorito de Comedia", "BAFTA al mejor guión adaptado", "Película Favorita"],
        length: 1.30,
        price: 60000000,
        genre: "Comedia"
    },

    {
        id : 5, 
        title : "Interestelar",
        rating : 4.9,
        awards : ["Oscar a mejores efectos visuales", "Empire a mejor pelicula","BAFTA a mejores efectos visuales","Critics a mejor pelicula","Critics MVP","Empire a mejor director"],
        length : 3,
        price : 165000000,
        genre : "Ciencia ficción"
    },

    {
        id : 6,
        title : "Drácula, de Bram Stoker",
        rating : 4.3,
        awards :  ["Premio Oscar al Mejor Maquillaje y Peinado", "Premio Óscar al Mejor Diseño de Vestuario", "Premio Óscar a la Mejor Edición de Sonido", "Premio Saturn al mejor director", "Saturn Award for Best Costume Design", "Fotogramas de Plata for Best Foreign Film"],
        length : 2.7,
        price : 40000000 ,
        genre : "Suspenso",
    },

]

module.exports = movies;