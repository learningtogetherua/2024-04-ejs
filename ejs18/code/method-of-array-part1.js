// ІТЕРАТОРИ FOREACH, MAP, FILTER, FIND, FINDINDEX, EVERY, SOME, REDUCE, REDUCERIGHT

// масив.методГрупиІтераторів(параметр-стрілкова або анонімна функція)
// класично - функція яка є аргументом методу - має три аргументи 1 о та 2 нео:
// 1 елемент масива (юзається найчастіше тільки він)
// 2 - ітератор
// 3 - масив

//FOREACH
// array.forEach((element, index, array) => {});
// const users1 = [
//     { name: 'Олег', age: 25 },
//     { name: 'Марія', age: 30 }
// ]
// console.log(users1);

// users1.forEach((user, i, users1) => {
//     console.log('Ім\'я користувача:', `із запису під номером ${i+1}`, user.name);
//     console.log('Вік користувача:', `із запису під номером ${i+1}`, user.age);
//     users1[i].ticketNumber = i+3
// });

// console.log(users1);

// const numbers1 = [1, 2, 3, 4, 5];
// console.log('Приклад 1: Друк елементів масиву');

// // numbers1.forEach(function (item, index) {
//     numbers1.forEach((item, index) => {
//     console.log(`Елемент з індексом ${index} має значення ${item}`);
// });

// const numbers2 = [1, 2, 3, 4, 5];
// const doubled = [];

// console.log('\nПриклад 2: Зберігання результатів у новому масиві');

// numbers2.forEach(function (item, index) {

// numbers2.forEach((item, index) => {
//     doubled[index] = item * 2;
// });

// console.log(numbers2);
// console.log(doubled);


// MAP
// const numbers2 = [1, 2, 3, 4, 5]
// const doubled = numbers2.map((item) => {
//     return item * 2
// })
// console.log(doubled);

// const numbers1 = [1, 2, , 4, 5];
// // Використання методу map
// const doubled = numbers1.map((item) => {
//     console.log(`на поточній ітерації працюємо зі значеннямЖ ${item}`);
//     return item * 2
// });
// console.log(doubled); // [2, 4, пусто, 8, 10]

// const persons = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 },
// ];

// const names = persons.map((person) => person.name);
// console.log(names);
// const ages = persons.map((person) => person.age);
// console.log(ages);

// FILTER
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);
// const numbers = [1, 2, , 4, 5, , 7, , 9, 10];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// const persons = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 },
//     { name: 'Diana', age: 28 }
// ];

// //   const personsOver30 = persons.filter(person => person.age >= 30);
// //   console.log("\nПриклад 2: Фільтрація людей за віком");
// //   console.log(personsOver30); 

// // const personsOver30 = persons.filter(person => person.age >= 30);
// // console.log(personsOver30);
// // const namesPersonsOver30 = personsOver30.map(item => item.name)
// // console.log(namesPersonsOver30); 


// const namesPersonsOver30 = persons.filter(person => person.age >= 30).map(item => item.name)
// console.log(namesPersonsOver30); 

// const sparse = [1, NaN, , 4, 5, , 7, , 0, 10];
// const dense = sparse.filter(()=>true)
// console.log(dense);
// const sparse = [1, null, , 4, 5, , undefined, , 0, 10];
// const dense = sparse.filter((item)=> item !== null && item !== undefined && item !== 0)
// console.log(dense);


// FIND ТА FINDINDEX
// const persons = [
//     { name: 'Charlie', age: 35 },
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//   ];
// //   const personOver30 = persons.find(person => person.age >= 30);
// //   console.log(personOver30);

// //   const person20 = persons.find(person => person.age <= 20); 
// //   console.log(person20); // undefined


//   const personOver30 = persons.findIndex(person => person.age >= 30);
//   console.log(personOver30);

//     const person20 = persons.findIndex(person => person.age <= 20); 
//   console.log(person20); // -1

// EVERY ТА SOME
// const numbers = [1, 2, 3, 3343, 5];
// const numbers = [1, 2, 3, 0, 5];
// const allPositive = numbers.every(num => num > 0);
// console.log("Приклад з every():");
// console.log(allPositive);


// const numbers = [-1, -2, -3, 3343, -5];
// const numbers = [-1, -2, -3, -3343, -5];

// const oneFromAllPositive = numbers.some(num => num > 0);
// console.log("Приклад з every():");
// console.log(oneFromAllPositive);

// REDUCE ТА REDUCERIGHT

// const numbers = [];
// const numbers = [11, 22, 33, 10, 55];
// const sum = numbers.reduce((acc, cur) => {
//     console.log(`acc: ${acc}`);
//     console.log(`cur: ${cur}`);
//     console.log(`-----`);
//     return acc + cur
//  }, 0)
// console.log(sum);

// const fruits = ['apple', 'banana', 'apple', 'banana', 'apple', 'orange'];
// const countFruits = fruits.reduce((acc, cur) => {
//     console.log(`acc: ${acc}`);
//     console.log(`cur: ${cur}`);
//     acc[cur] = (acc[cur] || 0) + 1
//     console.log(acc);
//     return acc
// }, {})