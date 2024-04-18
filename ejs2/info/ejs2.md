# Місце для коду. Знайомство зі змінними з типами даних

## Де можна писати JS

- HTML-елемент script

```html
<!DOCTYPE html>
<html lang="en">
  <head></head>
  <body>
    <!-- Інший  код HTML -->
    <script>
      // код javascript
    </script>
  </body>
</html>
```

- Консоль браузера
- Файл з розширенням .js

```html
<!DOCTYPE html>
<html lang="en">
  <head></head>
  <body>
    <!-- Інший  код HTML -->
    <script src="./script.js"></script>
  </body>
</html>
```

## Виведення інформації з програми

- console.log()

```javascript
const testMessage = 0;
console.log(testMessage);
```

- window.alert()

```javascript
const testMessage = 0;
window.alert(testMessage);
alert(testMessage); // використання window необов'язкове
```

## Оголошення та ініціалізація змінних

- Що таке змінні

  Змінна - це іменоване посилання на значення. Таким чином, до певного значення можна отримати доступ через заздалегідь визначене ім'я.

- Оголошення var

```javascript
// оголошення змінної
var susid;
```

- Оголошення let

```javascript
// оголошення змінної
let susid;
```

- Оголошення const

```javascript
// оголошення та ініціалізація змінної (константи)
const susid = "висока людина";
```

- Іменування змінних ([Урок 1 - Ідентифікатори](../../ejs1/info/ejs1.md))

- Ініціалізація змінних

```javascript
susid = "46 років"; // ініціалізація змінної (за умови, що вони були оголошені раніше через var або let)
susid35 = "2 метри"; // ініціалізація змінної (за умови, що вони були оголошені раніше через var або let)
```

## Знайомство з типами даних

- Елементарні типи

    Сім елементарних типів даних: number, string, boolean, null, undefined, symbol, bigint
- Об'єктний тип

    Один тип: object
- Оператор визначення типу даних
```javascript
// оператор TYPEOF
console.log(typeof 27); // number
console.log(typeof '2 метри'); // string
// функція TYPEOF (ТЕ САМЕ ЯК ОПЕРАТОРНИЙ ВАРІАНТ)
console.log(typeof(27)); // number
console.log(typeof('2 метри')); // string
```

- Приклади для окремих типів даних ([файл script поточного уроку](../code/script.js))

## Резюме за темою
1. Створення JavaScript-коду: доступне в html-тегу script, консолі браузера та у окремому файлу з розширенням js
2. Виведення інформації: Функції для виведення інформації включають console.log() та alert().
3. Змінні: Оголошення змінних здійснюється за допомогою let і const. Змінні дозволяють зберігати та використовувати дані в коді.
4. Типи даних: JavaScript включає елементарні типи (наприклад, number, string) і об'єктний тип. Визначення типу можна виконати за допомогою оператора typeof.

