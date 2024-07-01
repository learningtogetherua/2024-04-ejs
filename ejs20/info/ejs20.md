# Функції - частина 2

## Оператор умовного доступу (?.) та виклик функції

```javascript
const functionsArray = [
  function () {
    console.log("Перша функція");
  },
  // function() { console.log("Друга функція"); },
  null,
  function () {
    console.log("Третя функція");
  },
];
functionsArray[0]();
functionsArray[1]?.();
functionsArray[2]();
```

## Необов'язкові параметри

```javascript
function sayHello(nameUser, age) {
  console.log(`Hello, ${nameUser}, you are ${age} years old.`);
}
sayHello("John"); // Hello, John, you are undefined years old.
sayHello(); // Hello, undefined, you are undefined years old.
```

## Стандартні значення параметрів

```javascript
function sayHello(nameUser = "noNameUser", age = 21) {
  console.log(`Hello, ${nameUser}, you are ${age} years old.`);
}

sayHello(); // Hello, noNameUser, you are 21 years old.
sayHello("John"); // Hello, John, you are 21 years old.
sayHello("John", 34); // Hello, John, you are 34 years old.
```

## Rest - збір зайвих аргументів в масив

```javascript
function sum(...numbers) {
  console.log(numbers); // [1, 2, 3, 4]
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  console.log(total); // 10 
}
sum(1, 2, 3, 4);
```
## Arguments Object

```javascript
function sum2() {
    console.log(arguments); // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    console.log([...arguments]); // [1, 2, 3, 4]
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    console.log(total);  // 10
  }

  sum2(1, 2, 3, 4);
```
## Використання spread-оператора для виклику функції

```javascript
function sum(a, b, c) {
       return a + b + c;
  }
  const numbers = [12, 24, 36];
  const result = sum(...numbers);

  console.log("Result:", result);  // 72
```
## Деструктуризація аргументів в параметри

```javascript
const user = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
};

function displayUserInfo({ name, age, email }) {
  console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
}
displayUserInfo(user);
```
## Вкладені функції

```javascript
// Зовнішня функція
function outerFunction(outerVariable) {
  console.log('Зовнішня функція: ', outerVariable);

  // Вкладена (внутрішня) функція
  function innerFunction(innerVariable) {
    console.log('Вкладена функція: ', innerVariable);
    console.log('Доступ до зовнішньої змінної: ', outerVariable);
  }
  innerFunction('внутрішній параметр'); // Виклик вкладеної функції


}

outerFunction('зовнішній параметр'); // Виклик зовнішньої функції
// innerFunction('внутрішній параметр'); // ReferenceError: innerFunction is not defined
```
## First-class функції

- Функції можна присвоювати змінним
- Функції можна передавати як аргументи
- Функції можна повертати з інших функцій
- Функції можна зберігати в структурах даних

## Область видимості

- var - функціональна або глобальна
- let та const - блочна 

## Резюме за темою

Цей код демонструє різні концепції роботи з функціями в JavaScript, зокрема, використання умовного доступу (?.), необов'язкових параметрів та стандартних значень параметрів, а також оператора rest для збору аргументів. Крім того, показано, як використовувати об'єкт arguments, spread-оператор для виклику функцій, деструктуризацію аргументів та вкладені функції. Також розглянуто поняття first-class функцій та область видимості змінних.