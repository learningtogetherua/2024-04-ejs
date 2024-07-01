// Оператор умовного виклику (?.) та виклик функції

// Оголошення функції
// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }
// // Виклик функції
// greet('John');


// // Оголошення об'єкта з методом
// const person = {
//     name: 'John',
//     greet: function() {
//       console.log(`Hello, ${this.name}!`);
//     },
//     myFunction: function() {
//         console.log("Функція викликана");
//       }
//   };

// Виклик метода
//   person.greet();
//   greet(person.name);

  const functionsArray = [
    function() { console.log("Перша функція"); },
    null,
    // function() { console.log("Друга функція"); },
    function() { console.log("Третя функція"); }
  ];
//   functionsArray[0]
// console.log(functionsArray[0]);
  functionsArray[0]()
  functionsArray[1]?.()
  functionsArray[2]()

// Необов'язкові параметри
// function sayHello(name) { // "name" - це параметр
//     console.log(`Hello, ${name}!`);
//   }
//   sayHello('John'); 


// function sayHello(nameUser, age) {
//     // function sayHello() {
//     console.log(`Hello, ${nameUser}, you are ${age} years old.`);
// }
// // let nameUser = 'John'
// // let age
// sayHello('John');
// // sayHello();


// Стандартні значення параметрів
// function sayHello(nameUser, age = 21) {
//     console.log(`Hello, ${nameUser}, you are ${age} years old.`);
// }

// sayHello('John');
// function sayHello(nameUser = 'noNameUser', age = 21) {
//     console.log(`Hello, ${nameUser}, you are ${age} years old.`);
// }

// sayHello();
// sayHello('John');
// sayHello('John', 34);

// Rest Parameters
// function sayHello(nameUser = 'noNameUser', age = 21) {
//     console.log(`Hello, ${nameUser}, you are ${age} years old.`);
// }

// sayHello('John', 34, true);

// function sum(...numbers) {
// function sum(numbers) {
//     console.log(numbers);
//     let total = 0;
//     for (const number of numbers) {
//       total += number;
//     }
//     console.log(total);
//   }

// //   sum(1, 2, 3, 4); 
//   sum([1, 2, 3, 4]); 

// function sum1(dig1, ...numbers) {
//     // console.log(dig1);
//     console.log(numbers);
//     let total = [];
//     for (const number of numbers) {
//       total.push(dig1*number);
//     }
//     // console.log(total);
//   }

//   sum1(4, 255, 326, 445); 


// Arguments Object
// function sum2() {
//     console.log(arguments);
//     console.log([...arguments]);

//     // let total = 0;
//     // for (let i = 0; i < arguments.length; i++) {
//     //   total += arguments[i];
//     // }
//     // console.log(total);
//   }

//   sum2(1, 2, 3, 4); 
// let testArgsInArrow = ()=> console.log(arguments)
//   testArgsInArrow(1, 2, 3, 4); 


// Використання Spread оператора для виклику функції
// function sum(a, b, c) {
//     // console.log("Arguments object:", arguments); // Arguments object: { '0': 1, '1': 2, '2': 3 }
//     return a + b + c;
//   }
//   const numbers = [12, 24, 36];
//   const result = sum(...numbers);

//   console.log("Result:", result);  // Виведе: 72


// Деструктуризація аргументів в параметри
// const user = {
//   name: 'John',
//   age: 30,
//   email: 'john@example.com'
// };

// function displayUserInfo({ name, age, email }) {
//   console.log(name);
//   console.log(age);
//   console.log(email);
//   console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
// }
// displayUserInfo(user);

// const numbers = [15, 222, 35, 42];

// function displayNumbers([first, second]) {
//   console.log(`First: ${first}, Second: ${second}`);
// }

// displayNumbers(numbers);

// function displayInfo({ name = 'Unknown', age = 0, email = 'N/A' } = {}) {
//   console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
// }

// displayInfo();
// const user = {
//   name: 'John',
//   age: 30,
//   email: 'john@example.com'
// };
// displayInfo(user);

// function displayInfo( [f = 'Unknown', s = 0, th = 'N/A']  = []) {
//   console.log(f);
//   console.log(s);
//   console.log(th);
// }

// displayInfo();

// Вкладені функції

// Зовнішня функція

// function outerFunction(outerVariable) {
//   console.log('Зовнішня функція: ', outerVariable);

//   // Вкладена (внутрішня) функція
//   function innerFunction(innerVariable) {
//     console.log('Вкладена функція: ', innerVariable);
//     // console.log('Доступ до зовнішньої змінної: ', outerVariable);
//   }
//   // innerFunction('внутрішній параметр'); // Виклик вкладеної функції


// }

// outerFunction('зовнішній параметр'); // Виклик зовнішньої функції
// // innerFunction('внутрішній параметр'); // Виклик вкладеної функції


// let box
// function outerFunction(outerVariable) {

//   box = function (innerVariable) {
//     console.log('Вкладена функція: ', innerVariable);

//   }

// }
// outerFunction('зовнішній параметр'); 
// box()

// First-class citizen
// 1. Функції можна присвоювати змінним
// const myFunction = function () {
//   console.log("1: Привіт");
// };
// myFunction();

// // 2. Функції можна передавати як аргументи
// function executeFunc(fn) {
//   fn();
// }
// executeFunc(function () {
//   console.log("2: Привіт");
// }); // Виведе "2: Привіт"

// // 3. Функції можна повертати з інших функцій
// function getFunction() {
//   return function () {
//     console.log("3: Привіт");
//   };
// }
// const newFunction = getFunction();
// newFunction(); // Виведе "3: Привіт"

//  // 4. Функції можна зберігати в структурах даних
//  const myArray = [
//   function() {
//     console.log("4: Привіт");
//   },
//   function() {
//     console.log("4: Світ");
//   },
// ];
// myArray[0](); // Виведе "4: Привіт"
// myArray[1](); // Виведе "4: Світ"

// Область видимості

// console.log(window);
// console.log(this);
// var test1
// let test2
// const test3 = 1

// // Оголошення глобальної змінної
// let globalVar = "I'm global";
// function showGlobalVar() {
//   // Доступ до глобальної змінної в середині функції
//   console.log(globalVar);
// }
// showGlobalVar(); // Виведе: "I'm global"


// function setGlobalVar() {
//   globalVar = "I'm global";
// }
// setGlobalVar();
// console.log(globalVar); // Виведе: "I'm global"

// if (condition) {
//   // блок коду
// }
// while (condition) {
//   // блок коду
// }
// function name(params) {
//   // блок коду
// }

// if (true) {
//   let insideIf = "I'm inside the IF block";
//   console.log(insideIf); // Виведе: "I'm inside the IF block"
// }
// console.log(insideIf); // ReferenceError: insideIf is not defined
// if (true) {
//   const insideIf = "I'm inside the IF block";
//   console.log(insideIf); // Виведе: "I'm inside the IF block"
// }
// console.log(insideIf); // ReferenceError: insideIf is not defined

// function nameTest() {
//   if (true) {
//     const insideIf = "I'm inside the IF block";
//     console.log(insideIf); // Виведе: "I'm inside the IF block"
//   }
//   console.log(insideIf);
// }
// nameTest()

// function nameTest() {
//   if (true) {
//     var insideIf = "I'm inside the IF block";
//     console.log(insideIf); // Виведе: "I'm inside the IF block"
//   }
//   console.log(insideIf);
// }
// nameTest()
// console.log(insideIf); // ReferenceError: insideIf is not defined
