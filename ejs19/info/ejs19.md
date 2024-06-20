# Методи масивів - продовження

## push()

Додає один або декілька елементів на кінець масиву і повертає нову довжину масиву.

```javascript
const fruits = ["apple", "banana"];
fruits.push("mango"); // 3
console.log(fruits); // Output: ['apple', 'banana', 'mango']
console.log(fruits.push("plum")); // 4
```

## pop()

Видаляє останній елемент масиву і повертає його.

```javascript
const fruits = ["apple", "banana", "mango"];
const lastFruit = fruits.pop();
console.log(lastFruit); // Output: 'mango'
console.log(fruits); // Output: ['apple', 'banana']
```

## unshift()

Додає один або декілька елементів на початок масиву і повертає нову довжину масиву.

```javascript
const fruits = ["apple", "banana"];
fruits.unshift("mango"); // 3
console.log(fruits); // Output: ['mango', 'apple', 'banana']
console.log(fruits.unshift("plum")); // 4
```

## shift()

Видаляє перший елемент масиву і повертає його.

```javascript
const fruits = ["apple", "banana"];
fruits.unshift("mango"); // 3
console.log(fruits); // Output: ['mango', 'apple', 'banana']
console.log(fruits.unshift("plum")); // 4
```

## flat()

Створює новий масив, в якому всі вкладені підмасиви "випрямлені" на вказану глибину. За замовчуванням глибина дорівнює 1.

```javascript
// Приклад 1: Однорівневе "випрямлення"
const nestedArray = [1, [2, 3], [4, [5]]];
const flattenedArray = nestedArray.flat();
console.log("Приклад 1: Однорівневе 'випрямлення'");
console.log(flattenedArray); // Output: [1, 2, 3, 4, [5]]

// Приклад 2: "Випрямлення" на декілька рівнів
// Метод flat() приймає аргумент, який вказує на глибину "випрямлення".
const deeplyNestedArray = [1, [2, [3, [4, 5]]]];
const deeplyFlattenedArray = deeplyNestedArray.flat(2);
console.log("Приклад 2: 'Випрямлення' на декілька рівнів");
console.log(deeplyFlattenedArray); // Output: [1, 2, 3, 4, 5]
```

## flatMap()

Виконує функцію на кожному елементі масиву і "випрямляє" вихідний масив.

```javascript
// Подвоєння кожного елемента
const numbers = [1, 2, 3];
const doubledNumbers = numbers.flatMap((number) => [number, number]);
console.log(doubledNumbers); // Output: [1, 1, 2, 2, 3, 3]
```

## concat()

Використовується для об'єднання двох або більше масивів або значень в один новий масив. Оригінальні масиви при цьому не змінюються.

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined3 = array1.concat(array2, 6, 7);

console.log(combined3); // Output: [1, 2, 3, 4, 5, 6, 7]
```

## slice()

Використовується для вибору підмножини елементів з масиву. Він повертає новий масив, який містить копії елементів оригінального масиву, що були вибрані засобами індексів, переданих як аргументи.

```javascript
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// Приклад 1: Вибір елементів з індексу 1 до 4 (не включно)
const selectedFruits1 = fruits.slice(1, 4);
console.log("Приклад 1: Вибір елементів з індексу 1 до 4 (не включно)");
console.log(selectedFruits1); // Output: ['banana', 'cherry', 'date']

// Приклад 2: Вибір елементів з кінця масиву
const selectedFruits2 = fruits.slice(-2);
console.log("\nПриклад 2: Вибір елементів з кінця масиву");
console.log(selectedFruits2); // Output: ['date', 'elderberry']
```

## splice()

Використовується для додавання, видалення або заміни елементів у масиві. Відмінність від методу `slice()` полягає в тому, що `splice()` модифікує оригінальний масив.

```javascript
// Початковий масив
let nums = [1, 2, 3, 4, 5];

// Приклад 1: Видалення елементів
// 1-ий аргумент: Початковий індекс (1) - позиція, з якої почнеться видалення.
// 2-ий аргумент: Кількість елементів для видалення (2) - кількість елементів, які буде видалено, починаючи з індексу зазначеного першим аргументом.
const removed1 = nums.splice(1, 2);
console.log("Приклад 1: Видалення елементів");
console.log("Видалені елементи:", removed1);
console.log("Оновлений масив:", nums);
```

```javascript
// Початковий масив
let nums = [1, 2, 3, 4, 5];

// Приклад 2: Додавання елементів
// 1-ий аргумент: Початковий індекс (1) - позиція, на якій додавати нові елементи.
// 2-ий аргумент: Кількість елементів для видалення (0) - нуль означає, що видалення не відбуватиметься.
// 3-ій і наступні аргументи: Елементи для додавання (6, 7) - ці значення буде додано на позицію, зазначену першим аргументом.
nums.splice(1, 0, 6, 7);
console.log("\nПриклад 2: Додавання елементів");
console.log("Оновлений масив:", nums);
```

```javascript
// Початковий масив
let nums = [1, 2, 3, 4, 5];

// Приклад 3: Заміна елементів
// 1-ий аргумент: Початковий індекс (3) - позиція, на якій відбудеться заміна.
// 2-ий аргумент: Кількість елементів для видалення (1) - кількість елементів, які буде видалено і замінено новими, починаючи з індексу, зазначеного першим аргументом.
// 3-ій і наступні аргументи: Елементи для заміни (8) - це значення замінить елемент, який був видалений.
nums.splice(3, 1, 8);
console.log("\nПриклад 3: Заміна елементів");
console.log("Оновлений масив:", nums);
```

## fill()

Замінює всі елементи в масиві на статичне значення, починаючи від заданого індексу і закінчуючи заданим індексом, але не включаючи його. Метод змінює та повертає масив.

```javascript
// Заповнення масиву між двома індексами
// Метод fill замінює елементи масиву на 0, починаючи з індексу 1 і закінчуючи індексом 3 (не включно)
const arr3 = [1, 2, 3, 4];
arr3.fill(0, 1, 3);
console.log("Заповнення масиву між двома індексами");
console.log(arr3); // Виведе: [1, 0, 0, 4]
```

## copyWithin()

Копіює частину масиву на іншу позицію всередині того ж масиву, не змінюючи його довжину.

```javascript
// Копіювання елементів з індексу 1 по індекс 3 на позицію, що починається з індексу 3
// Метод copyWithin копіює елемент 2 на позицію, що починається з індексу 3
const arr3 = [1, 2, 3, 4, 5];
arr3.copyWithin(3, 1, 2);
console.log("Приклад 3: Копіювання елементів з обмеженням за індексом");
console.log(arr3); // Виведе: [1, 2, 3, 2, 4]
```

## indexOf()

Повертає перший індекс, на якому дана значення може бути знайдена у масиві, або -1, якщо такого значення немає.

```javascript
// Приклад 1: Пошук елементу в масиві
const nums1 = [1, 2, 3, 4, 5];
const index1 = nums1.indexOf(3);
console.log("Приклад 1: Пошук елементу 3 в масиві");
console.log("Індекс елементу:", index1); // Виведе: 2

// Приклад 2: Пошук елементу, якого немає в масиві
const nums2 = [1, 2, 3, 4, 5];
const index2 = nums2.indexOf(6);
console.log("Приклад 2: Пошук елементу 6 в масиві");
console.log("Індекс елементу:", index2); // Виведе: -1

// Приклад 3: Пошук з певного індексу
const nums3 = [1, 2, 3, 4, 3, 5];
const index3 = nums3.indexOf(3, 3);
console.log("Приклад 3: Пошук елементу 3 в масиві, починаючи з індексу 3");
console.log("Індекс елементу:", index3); // Виведе: 4
```

## lastIndexOf()

Функціонує подібно до `indexOf`, але починає пошук з кінця масиву, а не з початку. Він повертає індекс останнього знаходження шуканого елемента або -1, якщо елемент не знайдений.

```javascript
// Приклад 1: Пошук останнього знаходження елемента в масиві
const nums1 = [1, 2, 3, 3, 4, 5];
const index1 = nums1.lastIndexOf(3);
console.log("Приклад 1: Пошук останнього знаходження елемента 3 в масиві");
console.log("Індекс останнього знаходження:", index1); // Виведе: 3

// Приклад 2: Пошук елемента, якого немає в масиві
const nums2 = [1, 2, 3, 4, 5];
const index2 = nums2.lastIndexOf(6);
а;
console.log("Приклад 2: Пошук останнього знаходження елемента 6 в масиві");
console.log("Індекс останнього знаходження:", index2); // Виведе: -1

// Приклад 3: Пошук з певного індексу
const nums3 = [1, 2, 3, 4, 3, 5];
const index3 = nums3.lastIndexOf(3, 3);
console.log(
  "Приклад 3: Пошук останнього знаходження елемента 3 в масиві, починаючи з індексу 3"
);
console.log("Індекс останнього знаходження:", index3); // Виведе: 3
```

## includes()

Використовується для перевірки наявності елемента в масиві. Цей метод повертає `true`, якщо масив містить заданий елемент, та `false` — якщо не містить.

```javascript
// Приклад 1: Елемент є в масиві
const nums1 = [1, 2, 3, 4, 5];
const hasThree1 = nums1.includes(3);
console.log("Приклад 1: Елемент 3 є в масиві");
console.log("Масив містить 3:", hasThree1); // Виведе: true

// Приклад 2: Елементу немає в масиві
const nums2 = [1, 2, 4, 5];
const hasThree2 = nums2.includes(3);
console.log("Приклад 2: Елемент 3 відсутній в масиві");
console.log("Масив містить 3:", hasThree2); // Виведе: false

// Приклад 3: Пошук з певного індексу
const nums3 = [1, 2, 3, 4, 5];
const hasThree3 = nums3.includes(3, 3);
console.log("Приклад 3: Пошук елемента 3 в масиві, починаючи з індексу 3");
console.log("Масив містить 3:", hasThree3); // Виведе: false
```

## sort()

Використовується для сортування елементів масиву. За замовчуванням, цей метод сортує елементи як рядки, що може призвести до несподіваного поведінки

```javascript
// Приклад 1: Сортування чисел як рядків
const nums1 = [10, 5, 3, 40, 25];
nums1.sort();
console.log("Приклад 1: Сортування чисел як рядків");
console.log("Відсортований масив:", nums1); // Output: [10, 25, 3, 40, 5]

// Приклад 2: Сортування чисел за допомогою порівняльної функції
const nums2 = [10, 5, 3, 40, 25];
nums2.sort((a, b) => a - b);
console.log("Приклад 2: Сортування чисел за допомогою порівняльної функції");
console.log("Відсортований масив:", nums2); // Output: [3, 5, 10, 25, 40]

// Приклад 3: Сортування рядків
const words = ["banana", "apple", "grape"];
words.sort();
console.log("Приклад 3: Сортування рядків");
console.log("Відсортований масив:", words); // Output: ['apple', 'banana', 'grape']
```

## reverse()

Використовується для інвертування порядку елементів масиву

```javascript
// Приклад 1: Інвертування порядку чисел у масиві
const nums1 = [1, 2, 3, 4, 5];
nums1.reverse();
console.log("Приклад 1: Інвертування порядку чисел у масиві");
console.log("Інвертований масив:", nums1); // Output: [5, 4, 3, 2, 1]

// Приклад 2: Інвертування порядку рядків у масиві
const words = ["banana", "apple", "grape"];
words.reverse();
console.log("Приклад 2: Інвертування порядку рядків у масиві");
console.log("Інвертований масив:", words); // Output: ['grape', 'apple', 'banana']

// Приклад 3: Інвертування порядку елементів у масиві об'єктів
const persons = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

persons.reverse();
console.log("Приклад 3: Інвертування порядку елементів у масиві об'єктів");
console.log("Інвертований масив:", persons);
```

## Array.isArray()

Використовується для перевірки, чи є передана структура масивом.

```javascript
// Приклад 1: Перевірка наявності масиву
const arr1 = [1, 2, 3];
console.log("Приклад 1: Перевірка наявності масиву");
console.log("Чи є arr1 масивом?", Array.isArray(arr1)); // Output: true

// Приклад 2: Перевірка наявності об'єкту
const obj = { key: "value" };
console.log("Приклад 2: Перевірка наявності об'єкту");
console.log("Чи є obj масивом?", Array.isArray(obj)); // Output: false

// Приклад 3: Перевірка наявності рядка
const str = "Hello, world!";
console.log("Приклад 3: Перевірка наявності рядка");
console.log("Чи є str масивом?", Array.isArray(str)); // Output: false
```

## Оператор `spread (...)` з об'єктами

Оператор розширення `...` використовується як у масивах, так і в об'єктах, але його поведінка відрізняється в залежності від контексту.

```javascript
// Згадаємо про масиви
// Копіювання масивів:
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2); // Виведе [1, 2, 3]
// Об'єднання масивів:
const arr1 = [1, 2, 5];
const arr2 = [2, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Виведе [1, 2, 5, 2, 5, 6]
```

```javascript
// Копіювання об'єктів
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };
console.log(obj2); // Виведе { a: 1, b: 2 }
// Об'єднання об'єктів
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combined = { ...obj1, ...obj2 };
console.log(combined); // Виведе { a: 1, b: 2, c: 3, d: 4 }
// Перезапис значень:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combined = { ...obj1, ...obj2 };
console.log(combined); // Виведе { a: 1, b: 3, c: 4 }
```

## Object.assign()

Використовується для копіювання значень всіх власних перелічуваних властивостей з одного або кількох об'єктів-джерел до цільового об'єкта. Метод повертає цільовий об'єкт.

```javascript
// Копіювання властивостей між об'єктами
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); // { a: 1, b: 3, c: 4 }

// Зливання об'єктів з однаковими властивостями
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 3, c: 4 };
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); // { a: 3, b: 2, c: 4 }

// Використання в якості "клонування"
const obj1 = { a: 1, b: 2 };
const obj2 = Object.assign({}, obj1);
console.log(obj2); // { a: 1, b: 2 }
```

## Тип даних `Symbol`

Це спеціальний незмінний тип даних, який може бути використаний як ідентифікатор для властивостей об'єктів. Кожен символ є унікальним, незалежно від його опису. `SYMBOL()` НЕ Є ФУНКЦІЄЮ-КОНСТРУКТОРОМ!

Кожен Symbol унікальний. Два символи, створені незалежно один від одного, завжди будуть вважатися різними, навіть якщо їх описи однакові.

```javascript
const symbol1 = Symbol("description");
const symbol2 = Symbol("description");
console.log(symbol1 === symbol2); // Outputs: false
```

Символьні властивості об'єктів не перебираються у циклі `for...in` і не враховуються методом `Object.keys()`.

```javascript
const mySymbol = Symbol("name");
const person = { [mySymbol]: "John" };
console.log(Object.keys(person)); // Outputs: []
```

Якщо вам відомий сам символ, ви можете звернутися до властивості об'єкта напряму:

```javascript
const mySymbol = Symbol("name");
const person = {
  [mySymbol]: "John",
};
console.log(person[mySymbol]); // Outputs: 'John'
```

### Використання Reflect.ownKeys()

Об'єкт `Reflect` в JavaScript — це вбудований об'єкт, який надає методи для виконання низки операцій над об'єктами. `Reflect` не є функціональним об'єктом, тобто ви не може створити екземпляр `Reflect` за допомогою оператора new.

`Reflect.ownKeys()` повертає масив всіх власних властивостей об'єкта, включаючи символьні ключі.

```javascript
const mySymbol = Symbol("name");
const person = {
  [mySymbol]: "John",
  age: 30,
};
const keys = Reflect.ownKeys(person);
console.log(keys); // Outputs: [ 'age', Symbol(name) ]
```
### Використання Object.getOwnPropertySymbols()

Повертає масив всіх символьних властивостей даного об'єкта.

```javascript
const mySymbol = Symbol('name');
const anotherSymbol = Symbol('age');
const person = {
  [mySymbol]: 'John',
  [anotherSymbol]: 30
};
const symbols = Object.getOwnPropertySymbols(person);
console.log(symbols);  // Outputs: [ Symbol(name), Symbol(age) ]
```
