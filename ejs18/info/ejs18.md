# Методи масивів - ітератори

## forEach()

Використовується для виконання заданої функції один раз для кожного елемента масиву

```javascript
Приклад 1: Друк елементів масиву
const numbers1 = [1, 2, 3, 4, 5];
console.log('Приклад 1: Друк елементів масиву');
numbers1.forEach(function (item, index) {
   console.log(`Елемент з індексом ${index} має значення ${item}`);
});
```

## map()

Повертає новий масив зі значеннями що поверене функція передана аргументом методу

```javascript
const numbers1 = [1, 2, 3, 4, 5];
const doubled = numbers1.map((item) => item * 2);
console.log("Приклад 1: Подвоєння елементів масиву");
console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

## filter()

Повертає новий масив з всіх або частини елементів вихідного масива, таких що повертають тру коли з кожним працює функція

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Приклад 1: Фільтрація парних чисел");
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
```

## find() та findindex()

Обидва методи використовуються для пошуку елементів в масиві, але є декілька ключових відмінностей:

- `find()`: Знаходить перший елемент масиву, який задовольняє умову, вказану в переданій функції, і повертає цей елемент. Якщо елемент не знайдено, повертає undefined.
- `findIndex()`: Знаходить індекс першого елемента масиву, який задовольняє умову, вказану в переданій функції. Якщо елемент не знайдено, повертає -1.

```javascript
const persons = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const personOver30 = persons.find((person) => person.age >= 30);

console.log("Приклад 1: Використання find()");
console.log(personOver30); // Output: { name: 'Bob', age: 30 }

const indexOver30 = persons.findIndex((person) => person.age >= 30);

console.log("\nПриклад 2: Використання findIndex()");
console.log(indexOver30); // Output: 1 (індекс елемента { name: 'Bob', age: 30 } у масиві)
```

## every() та some()

Ці два методи використовуються для тестування елементів масиву на відповідність певній умові.

Метод `every()` перевіряє, чи всі елементи масиву задовольняють умові, вказаній у колбек-функції. Якщо всі елементи задовольняють умову, метод повертає `true`; в іншому випадку — `false`.

```javascript
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every((num) => num > 0);
console.log("Приклад з every():");
console.log(allPositive); // Output: true
```

Метод `some()` перевіряє, чи хоча б один елемент масиву задовольняє умову, вказану в колбек-функції. Якщо хоча б один елемент задовольняє умову, метод повертає `true`; в іншому випадку — `false`.

```javascript
const numbers = [1, 2, 3, 4, 5];
const somePositive = numbers.some((num) => num > 3);
console.log("\nПриклад з some():");
console.log(somePositive); // Output: true (бо є числа 4 та 5, які більші за 3)
```

## reduce()

Використовується для обробки кожного елемента масиву з ліва на право, скорочуючи масив до єдиного значення.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
```

## reduceRight()

Працює аналогічно до `reduce()`, але ітерація по масиву відбувається в зворотньому порядку: від останнього до першого елементу. Сигнатура методу і аргументи колбек-функції такі ж самі, як і у метода `reduce()`.

```javascript
const numbers = [1, 2, 3, 4, 5];
const reversed = numbers.reduceRight((accumulator, currentValue) => {
  accumulator.push(currentValue);
  return accumulator;
}, []);

console.log(reversed); // Output: [5, 4, 3, 2, 1]
```
