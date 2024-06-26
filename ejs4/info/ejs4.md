# Тип даних Number - аномалії та особливості. Тип даних BigInt.

## Заборонені математикою операції

Арифметичні операції типа даних `Number` з операндами такого самого типу та більшості інших типів, не призводять до помилок коду (крім операцій за участю типа даних BigInt). Замість того, щоб викликати помилку, JavaScript намагається обробити будь-яку операцію та повернути значення (в деяких випадках такі специфічні значення як `Infinity` або `NaN`)

```javascript
1 * "five"; // NaN при спробі множення числа на рядок
1000 / 0; // Infinity при неприпустимій в математиці операції ділення на 0
0 / 0; // NaN
```

## Природа Infinity, -Infinity та -0

Значення за межами діапазону ±(2 в -1074 ступені до 2 в 1024 ступені) автоматично конвертуються:

- Додатні значення, більші за `Number.MAX_VALUE`, перетворюються на `+Infinity`.
- Додатні значення, менші за `Number.MIN_VALUE`, перетворюються на `+0`.
- Від'ємні значення, менші за `-Number.MAX_VALUE`, перетворюються на `-Infinity`.
- Від'ємні значення, більші за `-Number.MIN_VALUE`, перетворюються на `-0`.

## НЕ число - NaN

`NaN` і його поведінка не придумана JavaScript. Його семантика в арифметиці з плаваючим роздільником (включно з NaN !== NaN) визначена стандартом **IEEE 754**

### П’ять типів операцій, які повертають NaN:

- Помилка перетворення чисел (наприклад, явні, як-от `parseInt("blabla")`, `Number(undefined)` або неявні, як-от `Math.abs(undefined)`)
- Математична операція, результат якої не є дійсним числом (наприклад `Math.sqrt(-1)`)
- Невизначена форма (наприклад `0 * Infinity`, `1 ** Infinity`, `Infinity / Infinity`, `Infinity - Infinity`)
- Метод або вираз, операнд якого примусово виконується NaN (наприклад `7 ** NaN`, `7 * "blabla"`)
- Інші випадки, коли недійсне значення подається як число (наприклад, недійсна дата new `Date("blabla").getTime()` , `"".charCodeAt(1)`)

## Тип даних BigInt

Тип `BigInt` - це числовий примітив у JavaScript, який може представляти цілі числа довільної величини. З `BigInt` ви можете безпечно зберігати та оперувати великими цілими числами навіть за межею безпечного цілого (`Number.MAX_SAFE_INTEGER`) для `Number`. BigInt створюється додаванням `n` до кінця цілого числа або викликом функції `BigInt()`.

```javascript
const bigNumberLiteral = 900719925474099n;
const anotherBigInt = BigInt(900719925474099); // Еквівалентно 900719925474099n
const anotherBigInt = BigInt("900719925474099"); // Еквівалентно 900719925474099n
```

### BigInt та арифметичні операції

- Типова несумісність: BigInt не може бути неявно скомбінованим зі звичайними числами типу Number
```javascript
let bigIntValue = 10n; // BigInt тип
let numberValue = 5; // Number тип
console.log(bigIntValue + numberValue); // TypeError: Cannot mix BigInt and other types

```
- Ділення на нуль: На відміну від Number, де ділення на нуль повертає Infinity, ділення на нуль з BigInt призведе до помилки
```javascript
console.log(10n / 0n); // RangeError: Division by zero

```
- Від'ємний показник ступеня: Використання від'ємного показника при піднесенні BigInt до ступеня призведе до помилки
```javascript
console.log(10n ** -2n); // RangeError: BigInts have no negative exponents

```

## Окремі корисні методи

Дивіться у [файлі з посиланнями](./ejs4-links.md)

## Резюме за темою

1. Number:
- Арифметичні операції з Number можуть виводити спеціальні значення як Infinity або NaN, але зазвичай не викликають помилок коду.
- NaN виникає в результаті нечітких математичних операцій або некоректного приведення типів, його поведінка визначена стандартом IEEE 754.
2. BigInt:
- BigInt дозволяє безпечно оперувати з цілими числами довільної величини.
- Виникають помилки при спробах виконати операції змішування BigInt та Number, а також при діленні BigInt на нуль або використанні від'ємного показника ступеня.