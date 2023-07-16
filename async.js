// const myPromise = new Promise((resolve, reject) => {
//     // выполняются асинхронные действия
// });

// console.log(myPromise);
// myPromise
//     .then((value) => { // что то делаем если получили положительный ответ от сервера 
//         // действие в случае выполнения промиса
//     })
//     .catch((error) => {
//         // действие в случае отклонения промиса
//     });

// реальный пример

const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error.message));

// Упрощение - заготовка (Универсальная запись! Почти везде копипастим)

const getData = (url) =>
    new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => resolve(json))
            .catch((error) => reject(error));
    });

getData('https://jsonplaceholder.typicode.com/posts')
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));

// миграция на async await

const getData2 = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

try {
    const data = await getData2('https://rickandmortyapi.com/api/character');
    console.log(data);
} catch (error) {
    console.log(error.message);
}