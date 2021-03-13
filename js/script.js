"use strict";

// let number = 5;
// console.log(number);

// let und;
// console.log(und);

// const obj = {
//   name: "Roman",
//   age: 25,
//   isMarried: false,
// };

// console.log(obj.name);

// let arr = ["plum.png", "orange.jpg", 6, "apple.bmp", {}, []];
// console.log(arr[1]);

// const work = {
//   name: "metro",
//   time: 7,
// };

// console.log(work.name);

// let breek = ["Roman", 30, "line.jpg"];
// console.log(breek[1]);

// alert('hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Как выше имя?', '');
// answers[1] = prompt('Как Ваша фамилия?', '');
// answers[2] = prompt('Сколько Вам лет?', '');

// console.log(answers);


// const category = 'toys';

// console.log(`https://someurl.com/${category}/5/true`);

// const user = 'Roman';

// alert(`Привет, ${user}`);

// console.log('arr' + '-object');

// console.log(4 + '5');

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(2*4 === 8);

// const isChecked = false,
//       isClose = false;

// console.log(!isChecked && !isClose);


/* Задание на урок 12:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

const namberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
   count: namberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

// урок окончен
