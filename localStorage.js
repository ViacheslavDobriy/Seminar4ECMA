// localStorage.setItem // сохраняет в локальном хранилище пару ключ значение
// localStorage.removeItem // удаляет пару ключ значение из локального хранилища
// localStorage.length // посмотреть длину
// localStorage.key // получить ключ по заданной позиции
// localStorage.getItem // получить пару ключ значение
// localStorage.clear // очистить локал сторадж

localStorage.setItem('name', 'Slava');
localStorage.setItem('pass', 1234);
localStorage.setItem('login', true);

localStorage.removeItem('pass');

console.log(localStorage.key(0));

const data = localStorage.getItem('login');
console.log(data);

localStorage.user = JSON.stringify({ name: false });
const user = JSON.parse(localStorage.user);
console.log(user);

// localStorage.clear();

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(key);
}