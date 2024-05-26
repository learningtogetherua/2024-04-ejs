// const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020,
//     startEngine: function() {
//       console.log("Двигун запущено!");
//     },
//     stopEngine: function() {
//       console.log("Двигун вимкнено!");
//     }
//   };
//   car.startEngine()
//   console.log(car.model);
//   car.stopEngine()

// const musicPlayer = {
//     brand: "Sony",
//     model: "Walkman",
//     songs: ["Song1", "Song2", "Song3"],
//     play: function() {
//       console.log("Відтворення пісні...");
//     },
//     skip: function() {
//       console.log("Перехід до наступної пісні!");
//     }
//   };

// const book = {
//     title: "1984",
//     author: "George Orwell",
//     pageCount: 328,
//     read: function() {
//       console.log(`Читаємо книгу "${this.title}" автора ${this.author}`);
//     },
//     summary: function() {
//       console.log(`"${this.title}" це дистопічний роман про суспільство під тотальним контролем.`);
//     }
//   };


// Об'єктний літерал {}
// const testObj = {}

// Створення рядкового об'єкта
// const str = new String('приклад');

// // Створення числового об'єкта
// const num = new Number(42);

// // Створення булевого об'єкта
// const bool = new Boolean(true);

// // Створення функції
// const func = new Function('x', 'y', 'return x + y');

// // Створення об'єкта дати
// const today = new Date();

// // Створення HTML5 аудіоелемента
// const audio = new Audio('шлях/до/файлу.mp3');

// // Створення об'єкта зображення
// const image = new Image();
// image.src = 'шлях/до/зображення.png';

// // Створення об'єкта регулярного виразу
// const pattern = new RegExp('\\d+');

// Створення об'єкта помилки
// const err = new Error('Повідомлення про помилку');
// console.log(err);
// console.dir(err);
// console.error(err);

// Створення множини
// const set = new Set([1, 2, 3]);

// // Створення карти
// const map = new Map([['ключ', 'значення']]);

// // Створення промісу
// const promise = new Promise((resolve, reject) => { /* ... */ });

// // Запит на потік медіаданих (аудіо та відео)
// new MediaStream()

// // Синтез мови
// const utterance = new SpeechSynthesisUtterance('Привіт, світе!');

// Створення масивів
// const testArray = new Array(1,10,20)
// const testArray = [1,10,20]

// Створення порожнього об'єкта
// const testObj1 = new Object()
// console.log(testObj1);
// // const testObj2 = {}
// // console.log(testObj2);

// testObj1.name = 'Орест'
// console.log(testObj1);
// testObj1['age'] = 59
// console.log(testObj1);
// testObj1.greet = function () {
//     return `Привіт, мене звати ${this.name}`
// }
// console.log(testObj1);
// console.log(testObj1.greet());


// ПОМИЛКИ ДОСТУПУ ДО ВЛАСТИВОСТЕЙ ОБ'ЄКТА

// Невизначена властивість
// let obj1 = {name: 'Ivan'}
// console.log(obj1.age); // undefined

// let obj2 = {}
// console.log(obj2.property); // undefined

// // let obj3 = null
// let obj3 = document.getElementById('text')
// console.log(obj3);
// // console.log(obj3.text_content); // TypeError: Cannot read properties of null (reading 'text_content')

// let obj4;
// console.log(obj4);
// console.log(obj4.content); // TypeError: Cannot read properties of undefined (reading 'content')

// try {
//     console.log('працює try');
//     console.log(obj4.content)
// } catch (error) {
//     console.log(typeof error);
//     console.log(error);
//     console.dir(error);
//     console.error(error);
// }
// console.log('працює код після try-catch');

// try {
//     console.log('працює try');
//     console.log(obj3.text_content)
// } catch (error) {
//     console.log(typeof error);
//     console.log(error);
//     console.dir(error);
//     console.error(error);
// }
// console.log('працює код після try-catch');

// ОПЕРАТОР УМОВНОГО ДОСТУПУ ?.
// let user = {
//     name: "Іван",
//     address: {
//       city: "Київ",

//     }
//   };
//   console.log(user.address.newPost); // undefined
// //   console.log(user.address.newPost.digNumber); // TypeError: Cannot read properties of undefined (reading 'digNumber')
//   console.log(user.address.newPost?.digNumber); // TypeError: Cannot read properties of undefined (reading 'digNumber')


//   const foo = null ?? 'default string';
// console.log(foo);
// // Expected output: "default string"

// const baz = 0 ?? 42;
// console.log(baz);
// // Expected output: 0


// ВИДАЛЕННЯ ВЛАСТИВОСТЕЙ ТА АЛЬТЕРНАТИВИ
let profile = {
    name: 'Олег',
    age: 30,
    height: 180
};
// console.log(profile);
// delete profile.height
// console.log(profile);

// Object.defineProperty(profile, 'name', { writable: false })
// console.log(profile);
// profile.name = 'Oleg'
// console.log(profile);

// Object.defineProperty(profile, 'name', { configurable: false })
// console.log(profile);
// delete profile.name
// console.log(profile);

// profile.age = null
// console.log(profile);
// profile.age =  undefined
// console.log(profile);

