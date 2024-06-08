# Перебір елементів масивів. Копіювання масивів та об'єктів

## Цикл `for...of`

Використовується для послідовного проходження елементів об'єктів, що ітеруються, таких як масиви, рядки тощо. Він дозволяє працювати з кожним елементом колекції в більш простий і читабельний спосіб.

```javascript
// Виведення елементів масиву
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number); // виведе 1, потім 2, потім 3, і так далі
}

Ітерація по символах рядка
let string = "JavaScript";
for (let character of string) {
  console.log(character); // виведе 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't'
}
```

## Метод forEach()

Метод forEach є частиною прототипу масиву та схожих на масив структур і він використовується для виконання заданої функції один раз для кожного елемента масиву.

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number, index) {
  console.log(`Елемент з індексом ${index} має значення ${number}`);
});
```

## Копіювання масивів та об'єктів
```javascript
const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;

console.log(obj1 === obj2); // false
console.log(obj1 === obj3); // true


const array1 = [1, 2, 3];
const array2 = array1;
// array1 і array2 посилаються на те саме місце в пам'яті
array1.push(4);
console.log(array2); // виведе [1, 2, 3, 4]
```

## Копіювання без прив'язки
```javascript
// Оголошуємо вихідний об'єкт
const object1 = { a: 1, b: 2, c: 3 };
// Оголошуємо об'єкт для копіювання
const object2 = {};
// Копіюємо всі властивості з object1 в object2
for (const key in object1) {
  object2[key] = object1[key]; // Присвоюємо значення кожної властивості
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [];
for (let i = 0; i < array1.length; i++) {
  array2[i] = array1[i];
}
```

## Резюме за темою
Цикл `for...of` та метод `forEach()` є зручними інструментами для перебору елементів масивів та інших ітерованих об'єктів. Також висвітлено важливість глибокого копіювання в порівнянні з поверхневим копіюванням, де глибоке копіювання виключає залежності між копією та оригіналом, в той час як поверхневе копіювання може призвести до спільного використання однієї пам'яті між оригіналом і його копією. 