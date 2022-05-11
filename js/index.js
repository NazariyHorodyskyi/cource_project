"use strict";
const numberOfFilms = +prompt('Скільки фільмів ви подивились');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
};

const a = prompt('Останній з переглянутих фільмів'),
      b = prompt('Оцінка товару'),
      c = prompt('Останній з переглянутих фільмів'),
      d = prompt('Оцінка фільму');
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


