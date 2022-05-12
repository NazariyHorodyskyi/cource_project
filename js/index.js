"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Скільки фільмів ви подивились');
        while (personalMovieDB.count == '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви подивились');
        }
    },

    rememberMyFilms: function() {

        for (let i = 0; i < 2; i++) {
            const lastWatchedMovie = prompt('Останній з переглянутих фільмів'),
                filmEvaluation = prompt('Оцінка товару');
            if (lastWatchedMovie !== null && filmEvaluation !== null && lastWatchedMovie !== '' &&
                filmEvaluation !== '' && lastWatchedMovie.length < 50) {
                personalMovieDB.movies[lastWatchedMovie] = filmEvaluation;
            } else {
                i--;
            }
        }
    },
    
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Переглянуто мало фільмів');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Ви непоганий глядач');
        } else if (personalMovieDB.count >= 30) {
            console.log('Ви кіноман');
        } else {
            console.log('Помилка');
        }
    },

    writeYourGenres: function() {
        
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш улюблений жанр ${i + 1}`);
            if(genre == '' || genre == null) {
                i--;
            } else {
                personalMovieDB.genres[i] = genre; 
            }
            
            }
            personalMovieDB.genres.forEach((item, index) => {
                console.log(`Улюблений жанр #${index + 1} - це ${item}`);
            });
    },

    showMyDB: function() {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    }
};



personalMovieDB.writeYourGenres();


