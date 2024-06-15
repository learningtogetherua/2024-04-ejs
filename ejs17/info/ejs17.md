# Знайомство з функціями

## Function Declaration

```javascript
// оголошення функції з двома параметрами та поверненням суми аргументів переданих в параметри
function myFunctionDeclaration(param1, param2) {
  return param1 + param2;
}
// приклади виклику функції з передаванням двох аргументів та записом повернутого результата у змінну
const resultDeclaration1 = myFunctionDeclaration(2, 45);
console.log(resultDeclaration1); // 47

const resultDeclaration2 = myFunctionDeclaration(1334, 450);
console.log(resultDeclaration2); // 1784

// Оголошення такої самої функції але без return (процедура)
function myFunctionDeclarationWithoutReturn(param1, param2) {
  const result = param1 + param2;
  console.log("Result from Function Declaration without return:", result);
}
// приклад виклику функції але без return
myFunctionDeclaration(2, 45); // виведе в консоль Result from Function Declaration without return: 47
```

## Function Expression

```javascript
// оголошення змінної та призначення для неї значення у вигляді анонімної функції. Іменем функції для її виклику буде ім'я змінної
const myFunctionExpression = function (param1, param2) {
    return param1 + param2;
};
// приклад виклику функції з передаванням двох аргументів та записом повернутого результата у змінну
const resultExpression = myFunctionExpression(5, 10); // 15
console.log('Result from Function Expression:', resultExpression); // Result from Function Expression: 15
```

## Arrow function expressions

```javascript
// // оголошення змінної та призначення для неї значення у вигляді стрілкової функції. Іменем функції для її виклику буде ім'я змінної
const myArrowFunction = (param1, param2) => {
   return param1 + param2  
};
// приклад виклику функції з передаванням двох аргументів та записом повернутого результата у змінну
const resultArrow = myArrowFunction(5, 10);
console.log('Result from Arrow Function:', resultArrow); // 15

// синтаксичні варіанти стрілкової функції 
const myArrowFunction = (param1, param2) => {param1 + param2}; // некоректний (є {} але немає return)
const myArrowFunction = (param1, param2) => param1 + param2; // коректний (немає return але і немає{})
const divideBy3 = (num) => { return num / 3 } // коректний
const divideBy3 = num => num / 3 // коректний (приймає лише один аргумент тож () перед => не є обов'язковими)
```


## Резюме за темою
Знайомство з функціями включає три основні способи їх оголошення: `функціональні декларації`, `функціональні вирази` та `стрілкові функції`. Кожен з цих способів має свої особливості синтаксису та використання, але всі вони дозволяють створювати функції для обчислень і маніпуляцій з даними.