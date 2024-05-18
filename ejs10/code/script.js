// continue
// for (let i = 0; i < 15; i++) {
//     // перевірка довільних умов для переривання поточної ітерації
//     if (i % 2 === 0) {
//         console.log("Поточна ітерація завершиться без вивода значення " + i);
//         continue; // переривання ПОТОЧНОЇ ітерації циклу
//     }
//     // основний код який виконується на кожній ітерації
//     console.log(i, "це одна з ітерацій циклу що не була перервана");
// }

// break
// for (let i = 1; i < 15; i++) {
//         // перевірка довільних умов для ВИХОДУ З ЦИКЛУ
//         if (i % 5 === 0) {
//             console.log("Поточна ітерація завершиться без вивода значення ТА ЦИКЛ НЕ БУДЕ ПРОДОВЖУВАТИ РОБОТУ " + i);
//             break; // зупинка поточної ітерації та зупинка циклу (вихід з цикла до наступних команд)
//         }
//         // основний код який виконується на кожній ітерації
//         console.log(i, "це одна з ітерацій циклу");
//     }
//     console.log('дія за межами циклу');

// вкладені цикли
// for (let i = 0; i < 3; i++) {
//     console.log(`Відкриваю коробку ${i + 1}`);
//     for (let j = 0; j < 4; j++) {
//         console.log(`\tВ коробці ${i + 1} протираю яблуко ${j + 1}`);

//     }
//     console.log(`Закриваю коробку ${i + 1}`);
// }


// for (let i = 0; i < 3; i++) {
//     console.log(`Відкриваю коробку ${i + 1}`);
//     for (let j = 0; j < 4; j++) {
//         if (i===1 && j===2) {
//             console.log('яблуко погане');
//             // continue
//             break;
//         }
//         console.log(`\tВ коробці ${i + 1} протираю яблуко ${j + 1}`);

//     }
//     console.log(`Закриваю коробку ${i + 1}`);
// }


// for (let i = 1; i++; i < 15 ) {
//     // перевірка довільних умов для перерривання поточної ітерації
//     if (i % 2 === 0) {
//         console.log("Поточна ітерація завершиться без вивода значення " + i);
//         continue; // переривання ПОТОЧНОЇ ітерації циклу
//     }
//     // основний код який виконується на кожній ітерації
//     console.log(i, "це одна з ітерацій циклу що не була перервана");
// }

// let i = 0
// while (i < 5) {
//     if (i == 3) {
//         i++
//         continue;
//     }
//     console.log(i);
//     i++

// }

// let i = 0
// while (i < 5) {
//     if (i == 3) {

//         break;
//     }
//     console.log(i);
//     i++

// }

// let i = 0
// while (i < 5) {
//     if (i != 3) {
//         console.log(i);
//         i++ 
//     }


// }


// object

// let testObj = {}
// console.log(testObj);
// console.log(typeof testObj);

// let car = {
//     color: 'red',
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2023,
//     drive: function () {
//         console.log('Driving...');
//     }
// }

// console.log(car);

// console.log(Math);
// console.log(typeof Math);

// console.dir(document.body);

// let user = {
//     name: 'Ivan',
//     age: 30,
//     email: 'ivan@example.com',
//     sayHello: function () {
//         console.log('Hello, ' + this.name);
//     }
// };

// user.sayHello()
// console.log(user.email);

// let book = {
//     title: 'The Hobbit',
//     author: 'J.R.R. Tolkien',
//     pages: 310,
//     read: false,
//     markAsRead: function () {
//         this.read = true;
//     }
// };
// console.log(book.read);
// book.markAsRead()
// console.log(book.read);

// let recipe = {
//     name: 'Borsch',
//     ingredients: ['beet', 'potato', 'carrot'],
//     // time: '1h 30m',
//     time: 90,
//     cook: function() {
//       console.log('Cooking ' + this.name);
//     }
//   };

// let students = {
//     name: 'Maria',
//     grade: 10,
//     subjects: ['Math', 'English', 'History'],
//     study: function() {
//       console.log(this.name + ' is studying');
//     }
//   };

