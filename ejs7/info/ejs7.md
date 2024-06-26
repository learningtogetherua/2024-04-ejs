# Імутабельність елементарних типів, особливості іменування, оголошення та ініціалізації змінних, трансформація типів даних, альтернативні арифметичні оператори

## Мутабельність та іммутабельність

Це поняття, що стосується змінності об'єктів і даних в JavaScript. Мутабельні значення/структури можуть бути змінені без створення нового екземпляра даних з новими значеннями. Іммутабельні значення/структури створюють новий екземпляр зі зміненими значеннями, замість того, щоб модифікувати оригінальний.

## Приведення типів

Перетворення типів (або приведення типів) означає перенесення даних від одного типу даних до іншого. Неявне перетворення відбувається, коли компілятор (для скомпільованих мов) або середовище виконання (для мов скриптів, таких як JavaScript) автоматично перетворює типи даних.

```javascript
// Explicit Type Conversion
String(true);
console.log(typeof String(true));

// Implicit Type Conversion
let x = 5;
let y = "10";

let result = x + y;
console.log(typeof result);
```

## camelCase та snake_case

У стилі `Camel Case` кожне слово починається з великої літери, за винятком першого слова. Всі слова без пробілів з'єднуються разом, зберігаючи регістр для першої букви кожного нового слова.

У стилі `Snake Case` кожне слово розділяється підкресленням \_. Всі літери зазвичай знаходяться у нижньому регістрі.

## Альтернативні арифметичні оператори

```javascript
//  альтернативні оператори
let digit1 = 45;
digit1 += 5; // 50
// digit1 -= 5 // 40
// digit1 *= 5 // 225
// digit1 /= 5 // 9
// digit1 %= 5 // 0
// digit1 %= 4 // 1
// digit1 **= 2 // 2025
```

## Оператори ++ та --
Оператор `інкременту (++)` збільшує (додає одиницю до) свого операнда і повертає значення до або після інкременту, залежно від того, де розміщено оператор.

Оператор `декременту (--)` зменшує (віднімає одиницю) операнд і повертає значення до або після декременту, залежно від того, де розміщено оператор.

## Резюме за темою

Урок охоплює мутабельність та іммутабельність даних, приведення типів, стилі іменування змінних, та використання арифметичних операторів. 

Мутабельні структури дозволяють змінювати дані без створення нових екземплярів, тоді як іммутабельні створюють нові екземпляри при змінах. Типи даних можуть бути перетворені як неявно, так і явно. 

Основні стилі іменування включають camelCase та snake_case.