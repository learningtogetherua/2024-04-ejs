// let vehicles = [
//     {
//         model: "Toyota Camry",
//         type: "легковий автомобіль",
//         year: 2019,
//         isOperational: false
//     },
//     {
//         model: "Toyota Camry",
//         type: "легковий автомобіль",
//         year: 0,
//         isOperational: true
//     },
//     {
//         model: "Toyota Camry",
//         type: "легковий автомобіль",
//         year: 4,
//         isOperational: false
//     },
//     {
//         model: "Toyota Camry",
//         type: "легковий автомобіль",
//         year: 3,
//         isOperational: true
//     },
//     {
//         model: "Toyota Camry",
//         type: "легковий автомобіль",
//         year: 1,
//         isOperational: true
//     },
// ]

// for (let i = 0; i < vehicles.length; i++) {
//     const element = vehicles[i];
//     // console.log(element);
//     // console.log(element.model);
//     // console.log(element.type);
//     // console.log(element.year);
//     // console.log(element.isOperational);
//     console.log(`Avto ${element.model} 
//         - type ${element.type} 
//         - year ${element.year} 
//         - status ${element.isOperational}`);
// }

// for (let i = 0; i < vehicles.length; i++) {
//     const element = vehicles[i];

//     // if (element.isOperational) {
//     // if (element.isOperational === true) {
//     // if (!element.isOperational) {
//     if (element.isOperational === false) {
//         console.log(`Avto ${element.model} 
//             - type ${element.type} 
//             - year ${element.year} 
//             - status ${element.isOperational}`);
//     }
// }




// Деструктуруюче призначення
// З об'єктами
// const person = { nameUser: 'John', year: 1994 };
// const age = 2024 - person.year
// let  { nameUser, year } = person
// console.log(nameUser);
// nameUser = "Orest"
// console.log(nameUser);
// console.log(person);
// const age = 2024 - year
// console.log(age);
// let  { nameUser: firstName, year: yearBorn } = person
// console.log(firstName, yearBorn);

// З масивами
// const numbers = [1, 2, 3];
// const [x,y,z] = numbers
// console.log(x,y,z);

// // З рядками
// const str = 'Hello';
// const [firstChar, secondChar] = str;
// console.log(firstChar); // 'H'
// console.log(secondChar); // 'e'

// 1. Більше змінних, ніж властивостей в об'єкті:
// const obj1 = { a: 1 };
// const { a, b } = obj1;
// console.log(a); // 1
// console.log(b); // undefined
// b = 100 // TypeError: Assignment to constant variable.

// let test;
// console.log(test);
// const test;
// console.log(test);

// 2. Менше змінних, ніж властивостей в об'єкті:
// const obj2 = { a: 1, b: 2 };
// const { b: onlyB } = obj2;
// console.log(onlyB);

// Масиви:
// 1. Більше змінних, ніж елементів в масиві:
// const arr1 = [1000];
// const [first, second] = arr1;
// console.log(first); // 1000
// console.log(second); // undefined
// // 2. Менше змінних, ніж елементів в масиві:
// const arr2 = [10, 20];
// const [onlyFirst] = arr2;
// console.log(onlyFirst); 


// ... в ролі накопичувача (rest)
// З масивами:
// const [first, second, ...rest] = [1, 2, 3, 4];

// // console.log(first); // 1 - перший елемент масиву
// // console.log(rest); // [2, 3, 4] - масив з решти елементів

// console.log(first, second); // 1 та 2 
// console.log(rest); // [3, 4] - масив з решти елементів

// З об'єктами:
// const { a, ...others } = { a: 1, b: 2, c: 3 };
// console.log(a); // 1 - значення властивості 'a'
// console.log(others); // { b: 2, c: 3 } - об'єкт з решти властивостей

// console.log(Math);

// const {sin, cos, PI} = Math
// // console.log(sin, cos, PI);

// const angle = PI / 4 // 45 градусів в радіанах
// console.log(angle);
// console.log(sin(angle));
// console.log(cos(angle));



// let testArr = [14, 26, 31, 45]
// // console.log(testArr);

// for (const item of testArr) {
//     console.log(item);
// }
// for (const key in testArr) {
//     // console.log(key);
//     console.log(testArr[key]);


// }

// const person = {
//     nameUser: 'Ivan',
//     age: 30,
//     city: 'Kyiv'
// };

// for (const key in person) {
//     console.log(key);
//     console.log(person[key]);
// }

// for (const key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(`${key}: ${person[key]}`);
//     }
// }


// const animal = {
//     species: 'Dog'
// }

// const person = Object.create(animal)
// person.nameUser = 'Ivan'
// person.age = 30
// person.city = 'Kyiv'
// console.log(person);

// for (const key in person) {
//     // if (person.hasOwnProperty(key)) {
//     //     console.log(`${key}: ${person[key]}`);
//     // }

//         console.log(`${key}: ${person[key]}`);

// }



// const array = [10, 20, 30];
// // for (const index in array) {
// //     // console.log(index);
// //     // console.log(array[index]);
// //     console.log(`Index: ${index}, Value: ${array[index]}`);
// // }
// array.someProp = 'test'
// console.log(array);

// // for (const item of array) {
// //     console.log(item);
// // }

// for (const key in array) {
//     console.log(key);
//     console.log(`Index: ${key}, Value: ${array[key]}`);
// }

// Object.keys(anyObj) // повертає масив ключів об'єкту
// Object.values(anyObj) // повертає масив значень ключів об'єкту
// Object.entries(anyObj) // повертає масив масивів в коєному з яких є 2 елементи: ключ та значення


// const person = {
//     nameUser: 'Ivan',
//     age: 30,
//     city: 'Kyiv'
// };

// for (const item of Object.keys(person)) {
//     console.log(item);
// }
// for (const item of Object.values(person)) {
//     console.log(item);
// }
// for (const item of Object.entries(person)) {
//     console.log(item);
// }
// console.log(Object.entries(person));