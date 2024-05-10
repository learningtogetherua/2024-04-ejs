// console.log('початковий код');
// if (condition) {
//     дії які виконаються ЯКЩО умова дійсна
// }
// console.log('подальший код');

// console.log('початковий код');
// let num1 = 0, num2 = 4;
// if (num1 > num2) {
//     console.log('виконується тіло if');
// }
// console.log('виконується код після if');

// if (num1 < num2) {
//     console.log('виконується тіло if');
// }
// console.log('виконується код після if');

// let num1 = 3,
//   num2 = 3;
// if (num1 >= num2) {
//   console.log('виконується тіло if');
// }
// console.log('виконується код після if');

// let anyNumber = 234
// if (anyNumber) {
//     console.log('1 приклад','ok');
// }
// console.log("......... 1 приклад завершено");
// if (0) {
//     console.log('ok'); // не виконається
// }
// console.log("......... 2 приклад завершено");

// Boolean() 
// концепція перетворення на false
// console.log(Boolean(false)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(-0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean("")); // false

// && || !
// if (!0) {
//     console.log('ok'); // виконається
// }
// console.log("......... 3 приклад завершено");

// console.log(Boolean(!false)); // true
// console.log(Boolean(!0)); // true
// console.log(Boolean(!-0)); // true
// console.log(Boolean(!undefined)); // true
// console.log(Boolean(!null)); // true
// console.log(Boolean(!NaN)); // true
// console.log(Boolean(!"")); // true

// console.log(234); // 234
// console.log(!234); // false
// console.log(!!234); // true
// console.log(Boolean(234)); // true


// let x = 4

// if (x) {
//     console.log(`Значення ${x} більше 0`);
// }



// if (condition) {
//     дії які виконаються ЯКЩО умова дійсна
// } else {
//     дії які виконаються ЯКЩО умова НЕ Є дійсною
// }

// let x = 0

// if (x > 0) {
//     console.log(`Значення ${x} більше 0`);
//     // додаткові дії
// } else {
//     // console.log(`Значення ${x}  менше або = 0`);
//     // додаткові дії
//     if (x < 0) {
//         console.log(`Значення ${x}  менше  0`);
//     } else {
//         console.log(`Значення ${x} = 0`);
//     }
// }

// if (condition) {

// } else if(condition){

// }  else if(condition){

// }  else if(condition){

// }
// // ......
// else {}

// let x = 0
// // let x = 3
// // let x = -10

// if (x > 0) {
//     console.log(`Значення ${x} більше 0`);
//     // додаткові дії
// } else if (x < 0){
//     console.log(`Значення ${x}  менше 0`);
//     // додаткові дії
// } else {
//     console.log(`Значення ${x}  дорівнює 0`);
//     // додаткові дії
// }


// if([]) {
//     console.log('ок');
// }


// switch (key) {
//     case value:

//         break;
//     case value:

//         break;
//     case value:

//         break;

//     default:
//         break;
// }

// let x = 0
// let x = 1

// switch (x) {
//     case 0:
//         console.log(`Значення ${x}  дорівнює 0`);
//         // додаткові дії
//         break;

//     default:
//         console.log(`Значення ${x}  не дорівнює 0 (може бути більше або менше)`);
//         // додаткові дії
//         break;
// }

let apple = "green"
// let apple = "gre"

switch (apple) {
    // default:
    //     console.log(`${apple} is not valid color`);
    //     break;

    case "green":
        console.log(`apple is ${apple}`);
    // додаткові дії
    // break;
    case "yellow":
        console.log(`apple is ${apple}`);
    // break;
    case "red":
        console.log(`apple is ${apple}`);
    // break;
    default:
        console.log(`${apple} is not valid color`);
        break;
}

// >
// <
// >=
// <=

// == несуворе (без порівняння типів даних, тільки значення)
// === суворе (порівняння типів даних ТА значень)
// !=
// !==

// let digit = 345
// // let str = "345"
// let str = 345

// console.log(typeof digit);
// console.log(typeof str);

// if (digit == str) {
//     console.log('Значення однакові, Типи даних цих значень не перевірялись');
// }
// if (digit === str) {
//     console.log('Значення однакові, Типи даних цих значень теж однакові');
// } else {
//     console.log('Навіть якщо Значення однакові, Типи даних відрізняються');
// }
// if (digit != str) {
//     console.log('Значення однакові, Типи даних цих значень не перевірялись');
// }
// if (digit !== str) {
//     console.log('Значення однакові, Типи даних цих значень теж однакові');
// } else {
//     console.log('Навіть якщо Значення однакові, Типи даних відрізняються');
// }


// if (condition) {
//     // дії
//     if (condition) {

//     } else {

//     }
//     // дії

// } else {
//     // дії
// }


// let digit = 15
// let str = '12';

// if (digit == str) { // умова
//     console.log('несуворе порівняння надало результат true'); // дії для умови true
// } else {
//     console.log('несуворе порівняння надало результат false'); // дії для умови яка є false
// }

// умова ? дії для умови true : дії для умови яка є false
// (digit == str) ? console.log('несуворе порівняння надало результат true') : console.log('несуворе порівняння надало результат false');
// const result = (digit == str) ? 'несуворе порівняння надало результат true' : 'несуворе порівняння надало результат false';

// console.log(result);

// let x = 34
// let x = -1
// let x = 0

// const whatIsNumber = (x > 0)
//     ? `number ${x} більше за 0`
//     : ((x < 0)
//         ? `number ${x} менше за 0`
//         : `number ${x} дорівнює 0`)



// console.log(whatIsNumber);
