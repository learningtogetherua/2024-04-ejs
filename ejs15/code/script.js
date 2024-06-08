// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }


// for...of
// for (const iterator of object) {

// }

// let numbers = [23, 200, 123, 499, 5343];
// for (const numberItem of numbers) {
//     console.log(numberItem);
//     // різні дії
// }
// let strTest = "HTML";
// for (const strTestChar of strTest) {
//     console.log(strTestChar);
//     console.log(strTestChar.toLowerCase());
//     // різні дії
// }

// console.dir([]); 

// let numbers = [23, 200, 123, 499, 5343];

// iterableСтруктура.foreach(функція(поточнеЗначення, ітератор, iterableСтруктура){тіло функції}, thisЗначення)
// функція(поточнеЗначення) - Обов'язковий параметр в foreach

// поточнеЗначення - Обов'язковий параметр в функції яка є параметром d foreach - поточний елемент масиву
// ітератор - НЕобов'язковий в функції яка є параметром d foreach - індекс поточного елементу в масиві
// iterableСтруктура - НЕобов'язковий в функції яка є параметром d foreach - та iterableСтруктура до якої примінюється foreach

// thisЗначення - НЕобов'язковий параметр в foreach- значення яке буде представляти this під час виконання функції (без нього this буде undefined)

// let numbers = [23, 200, 123, 499, 5343];

// numbers.forEach(function(number){
//     console.log(`В масиві "numbers" є елемент зі значенням: ${number}`);
// })

// console.log('--------------------');

// numbers.forEach(function(number, i){
//     console.log(`В масиві "numbers" елемент ${i} має значенням: ${number}`);
// })

// function anyName(number){
//     console.log(`В масиві "numbers" є елемент зі значенням: ${number}`);
// }
// anyName(23)
// anyName(200)
// anyName(123)
// anyName(499)
// anyName(5343)


// let numbers = [23, 200, 123, 499, 5343];

// function anyName(number){
//     console.log(`В масиві "numbers" є елемент зі значенням: ${number}`);
// }

// for (let i = 0; i < numbers.length; i++) {
//     anyName(numbers[i]) 
// }


// const obj1 = { a: 1 };
// // const obj2 = { a: 1 };
// const obj3 = obj1;

// // console.log(obj1 === obj2); // false
// console.log(obj1 === obj3); // true

// const objA = { value: 42 };
// const objB = objA;
// const objC = { value: 42 };

// console.log(objA === objC); // false
// console.log(objA === objB); // true


// let x = 10
// let y = x
// console.log(x,y);
// x= 12
// console.log(x,y);

// let obj1 = { value: 10 }
// let obj2 = obj1
// console.log(obj1); 
// console.log(obj2); 
// obj2.value = 12
// console.log(obj1); 
// console.log(obj2); 

// const obj1 = { value: 10 }
// // obj1 = {} // TypeError: Assignment to constant variable.
// obj1.value = 32
// console.log(obj1);

// const array1 = [1, 2, 3];
// const array2 = array1;
// console.log(array1);
// console.log(array2);
// // array2.push(4)
// array1.push(4)
// console.log(array1);
// console.log(array2);


// const object1 = { a: 1, b: 2, c: 3 };
// const obj2 = {}

// for (const key in object1) {
//    obj2[key] = object1[key]
//    console.log(obj2);
// }
// console.log('-----');
// console.log(object1);
// console.log(obj2);

// object1.a = 1000
// console.log(object1);
// console.log(obj2);

// let objectAreEqual = true

// for (const key in object1) {
//  if(object1[key] !== obj2[key]){
//     objectAreEqual = false
//     break;
//  }
// }

// if (objectAreEqual) {
//     console.log('об\'єкти однакові');
// } else {
//     console.log('об\'єкти не однакові');
// }


// const array1 = [1, 2, 3, 4, 5];
// const array2 = [];

// for (let i = 0; i < array1.length; i++) {
//     array2[i] = array1[i];
// }
// console.log(array1);
// console.log(array2);

// let arraysAreEqual = true;
// if (array1.length !== array2.length) {
//     arraysAreEqual = false;
// } else {
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) {
//             arraysAreEqual = false;
//             break;
//         }
//     }
// }
// if (arraysAreEqual) {
//     console.log('Масиви однакові');
//   } else {
//     console.log('Масиви не однакові');
//   }