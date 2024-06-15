// let str1 = 'Hi Ivan'
// str1 = str1.toUpperCase()
// console.log(str1);

// // місце ОГОЛОШЕННЯ функції
// function name1(params) {
//     // дії які виконує функція
//     // або
//     // виконувати дії та повертати їх результат (return)

// }

// // код
// // код
// // код
// // код
// // код

// //виклик функції за іменем
// name1(params)
// // код
// // код
// // код
// // код
// // код

// //виклик функції за іменем
// name1(params)


// 1. Оголошення функції (Function Declaration)
// function name(params) {

// }

// function myFunctionDeclaration(param1, param2) {
//     // console.log(param2-param1);
//     return param1 + param2;
//   }

//   const resultDeclaration1 = myFunctionDeclaration(2,45)
//   console.log(resultDeclaration1);
//   const resultDeclaration2 = myFunctionDeclaration(1334,450)
//   console.log(resultDeclaration2);

// Перероблено без return (процедура)
// function myFunctionDeclarationWithoutReturn(param1, param2) {
//     const result = param1 + param2;
//     console.log('Result from Function Declaration without return:', result); // 15
//   }

//   myFunctionDeclarationWithoutReturn(5, 10);


// 2. Функціональний вираз (Function Expression)
// оголошення змінної = анонімна функція(без імені) з або без параметрів та з тілом

// const myFunctionExpression = function (param1, param2) {
//     return param1 + param2;
// };
// const resultExpression = myFunctionExpression(5, 10); // 15
// console.log('Result from Function Expression:', resultExpression); // 15

// Перероблено без return
// const myFunctionExpressionWithoutReturn = function (param1, param2) {
//     const result = param1 + param2;
//     console.log('Result from Function Expression without return:', result); // 15
// };
// myFunctionExpressionWithoutReturn(5, 10);


// порівняння перших 2 варіантів створення функцій
// function myFunctionDeclaration(param1, param2) {
//     return param1 + param2;
// }
// const res1 = myFunctionDeclaration(2,4)
// console.log(res1);


// const myFunctionExpression = function (param1, param2) {
//     return param1 + param2;
// };
// const res2 = myFunctionExpression(2,4)
// console.log(res2);


// 3. Стрілкові функції (Arrow Functions)
// (params) => {
//     // дії які виконує функція
// }

// const myArrowFunction = (param1, param2) => {
//    return param1 + param2  // 15
// };
// const myArrowFunction = (param1, param2) => {
//    param1 + param2  // undefined
// };
// const myArrowFunction = (param1, param2) => {param1 + param2}; // undefined
// const myArrowFunction = (param1, param2) => param1 + param2; // 15
// const resultArrow = myArrowFunction(5, 10);
// console.log('Result from Arrow Function:', resultArrow); // 15

// const divideBy3 = (num) => { num / 3 } // не працює
// const divideBy3 = (num) => { return num / 3 } // працює
// const divideBy3 = (num) => num / 3 // працює
// const divideBy3 = num => num / 3 // працює
// const result1 = divideBy3(45)
// const result2 = divideBy3(34)
// const result3 = divideBy3(232323)
// const result4 = divideBy3(4511)

// console.log(result1, result2, result3, result4);


// // Функція без параметрів, яка повертає стрічку
// function getMessage() {
//     return 'Це повідомлення повернуто з функції!';
//   }
//   const message = getMessage();
//   console.log(message); // Виведе в консоль: 'Це повідомлення повернуто з функції!'

//   function greet() {
//     console.log('Вітаємо у JavaScript!');
//   }
//   greet(); // Виведе в консоль: 'Вітаємо у JavaScript!'

// Функція, яка приймає масив чисел і повертає їх суму
// function sumNumbers(numbersArray) {
//     let sum = 0;
//     for (const number of numbersArray) {
//         sum += number;
//         console.log(sum);
//     }
//     return sum;
// }

// const myNumbers1 = [10, 20, 30];
// const total1 = sumNumbers(myNumbers1);
// console.log('Сума чисел з першого масиву:', total1); // 60

// const myNumbers2 = [5, 5, 5, 5];
// const total2 = sumNumbers(myNumbers2);
// console.log('Сума чисел з другого масиву:', total2); // 20

// const myNumbers3 = [1, 2, 3, 4, 5];
// const total3 = sumNumbers(myNumbers3);
// console.log('Сума чисел з третього масиву:', total3); // 15

// Функція, яка приймає масив об'єктів користувачів і виводить їх імена
// function printUserNames(usersArray) {
//     usersArray.forEach((user)=>{
//             console.log('Ім\'я користувача:', user.name);
//             console.log('Вік користувача:', user.age);
//     });
//   }
  
//   const users1 = [
//     { name: 'Олег', age: 25 },
//     { name: 'Марія', age: 30 }
//   ];
//   printUserNames(users1); // Виведе імена Олег та Марія

// const users2 = [
//     { name: 'Віталій', age: 22 },
//     { name: 'Юлія', age: 28 },
//     { name: 'Ірина', age: 33 }
//   ];
//   printUserNames(users2); // Виведе імена Віталій, Юлія та Ірина
  
//   const users3 = [
//     { name: 'Сергій', age: 40 }
//   ];
//   printUserNames(users3); // Виведе ім'я Сергій


// Функція calculateExpenses: Приймає масив з витратами за місяць (наприклад, комунальні послуги, продукти) і повертає їх загальну суму. Помагає контролювати домашній бюджет.
// function calculateExpenses(expenses) {
//     let total = 0;
//     for (const expense of expenses) {
//       total += expense;
//     }
//     return total;
//   }
// const monthlyExpenses = [1000, 200, 150, 300];
// // const total = calculateExpenses(monthlyExpenses);
// // console.log('Загальні витрати за місяць:', total);
// console.log('Загальні витрати за місяць:', calculateExpenses(monthlyExpenses));

