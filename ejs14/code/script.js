// ... оператор spread (для функцій - rest)

// копіювання та комбінування масивів
// let arr1 = [10,20,30]
// let arr2 = [100,200,300]


// // let combinedArray = [...arr1]
// // console.log(combinedArray);
// // let combinedArray = [...arr1, ...arr2]
// let combinedArray = [...arr2, ...arr1]
// console.log(combinedArray);

// Використання Рядків як Масивів Символів:
// let str = "Hello";
// let charsArray = [...str];
// console.log(charsArray); // ['H', 'e', 'l', 'l', 'o']


// Array.of()
// let arr1 = Array.of()
// console.log(arr1);
// let arr2 = Array.of(7)
// let arr2 = Array.of('test')
// console.log(arr2);
// let arr3 = Array.of('test', 34, {}, true)
// console.log(arr3);

// // Array.from()

// let str = "Hello";
// // let charsArray = Array.from(str)
// // console.log(charsArray); // ['H', 'e', 'l', 'l', 'o']
// let charsArray = Array.from(str) // може мати  другий параиетр (функцію яка буде виконувати певну дію з кодним елементом, як метод map)
// console.log(charsArray); // ['H', 'e', 'l', 'l', 'o']

// let arrayLike = {length:3, 0: 'apple', 1: 'banana', 2:'cherry'}
// console.log(arrayLike);
// let result = Array.from(arrayLike)
// console.log(result);

// let count = 10
// let fruits = ['apple', 'banana', 'cherry'];
// // let firstFruit = fruits[0];
// // let firstFruit = fruits[10-10];
// let firstFruit = fruits[count-8];
// console.log(firstFruit); // 'apple'

// // fruits[ВИРАЗ ЯКИЙ РЕЗУЛЬТАТОМ МАЄ НЕВІД'ЄМНЕ ЦІЛОЧИСЛЕНЬНЕ ЗНАЧЕННЯ]

// let numbers = [100, 200, 300, 400, 500]
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element); 
// }
// for (let i = 0,  quant= numbers.length; i < quant; i++) {
//     const element = numbers[i];
//     console.log(element); 
// }
// const quant = numbers.length
// for (let i = 0; i < quant; i++) {
//     const element = numbers[i];
//     console.log(element);
// }


// let numbers = [100, , 300, , 500]
// // for (let i = 0; i < numbers.length; i++) {
// //     const element = numbers[i];
// //     console.log(element); 
// // }
// for (let i = 0; i < numbers.length; i++) {
//     if (i in numbers) {
//         const element = numbers[i];
//         console.log(element);
//     } else {
//         console.log(`Значення під індексом  ${i} відстутнє в масиві`);
//     }



// }

// console.log(0 in numbers);
// console.log(1 in numbers);
// console.log(2 in numbers);
// console.log(3 in numbers);
// console.log(4 in numbers);


// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] !== undefined) {
//         const element = numbers[i];
//         console.log(element);
//     } else {
//         console.log(`Значення під індексом  ${i} відстутнє в масиві`);
//     }



// }

// let numbers = [5, 10, 15, 20];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// //   sum += numbers[i];
//   console.log(`після ітерації ${i+1} сума ${sum}`);
// }
// console.log(sum);

// let numbers = [12, 45, 3, 29, 88];
// let max = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];

//   }
//   console.log(`на ${i} ітерації максимальним є ${max}`);
// }
// console.log(max);

// console.log(window);

// window.alert()

// alert('Привіт')
// let returnAlert = alert('Привіт')
// console.log(returnAlert);

// confirm('Are your OK?')
// let statusMess = confirm('Are your OK?')
// console.log(statusMess);
// if(statusMess) {
//     console.log('its good');
// } else {
//     console.log('its not very good');
// }



// let userName = prompt('Введіть Ваше ім\'я', 'тільки великими літерами')
// console.log(userName);
let userAge = + prompt('Введіть Ваш вік', 'число')
console.log(userAge);
console.log(typeof userAge);


