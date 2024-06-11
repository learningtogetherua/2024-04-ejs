# Destructuring assignment, for...in, властивості прототипа та методи об'єктів

## Destructuring assignment

Деструктуруюче присвоєння - це зручний спосіб отримання значень з об'єктів, масивів або рядків та їх присвоєння змінним.

```javascript
// З об'єктами:
const person = { name: "John", age: 30 };
const { name, age } = person;
console.log(name); // 'John'
console.log(age); // 30

// З масивами:
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// З рядками:
const str = "Hello";
const [firstChar, secondChar] = str;
console.log(firstChar); // 'H'
console.log(secondChar); // 'e'
```

Оператор розширення ('`...`') в лівій частині деструктуруючого присвоєння збирає всі невикористані властивості або елементи в новий об'єкт або масив, залежно від контексту (об'єкт чи масив).

```javascript
// З масивами:
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1 - перший елемент масиву
console.log(rest); // [2, 3, 4] - масив з решти елементів

// З об'єктами:
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a); // 1 - значення властивості 'a'
console.log(others); // { b: 2, c: 3 } - об'єкт з решти властивостей
```

## Цикл for...in

Цикл `for...in` використовується для перебору всіх перелічуваних властивостей об'єкта, включаючи ті, що успадковані через прототип.

```javascript
const person = {
  name: "Ivan",
  age: 30,
  city: "Kyiv",
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

## Цикл `for...of` та методи об'єкту `keys()`, `values()`, `entries()`

```javascript

const object = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

// Object.keys() повертає масив ключів об'єкта, і цикл for...of ітерується через кожний ключ, дозволяючи вам працювати з кожним ключем і відповідним значенням в об'єкті.
for (const key of Object.keys(object)) {
  console.log(`Key: ${key}, Value: ${object[key]}`);
}

// Object.values() повертає масив значень об'єкта, і цикл for...of ітерується через кожне значення.
for (const value of Object.values(object)) {
  console.log(`Value: ${value}`);
}

// Object.entries() з деструктуруючим розпакуванням
for (const [key, value] of Object.entries(object)) {
  console.log(`Key: ${key}, Value: ${value}`);
}
```

## Резюме за темою
Деструктуруюче присвоєння дозволяє зручно витягувати значення з об'єктів, масивів або рядків та присвоювати їх змінним. Цикл `for...in` перебирає всі перелічувані властивості об'єкта, включаючи успадковані через прототип. Методи об'єктів` keys()`, `values()`, `entries()` разом із циклом `for...of` дозволяють ітерувати через ключі, значення та пари ключ-значення об'єкта.
