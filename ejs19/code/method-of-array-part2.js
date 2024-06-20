// // Метод reduceRight() також можна використовувати для реверсу масиву:
// const numbers = [1, 2, 3, 4, 5];
// const reversed = numbers.reduceRight((accumulator, currentValue) => {
//   accumulator.push(currentValue);
//   return accumulator;
// }, []);

// console.log("Приклад 2: Реверс масиву");
// console.log(reversed); // Output: [5, 4, 3, 2, 1]




// map(), filter(), forEach() та reduce()
// console.log(this);

// const multiplier = {
//     f: 2,
//     multiply: function (item) {
//         return item * this.f
//     }
// }
// let res = multiplier.multiply(34)
// console.log(res);

// const numbers = [10,20,30]
// const doubled = numbers.map(multiplier.multiply, multiplier)
// console.log(doubled);


// const fruits = ['apple', 'banana'];
// console.log(fruits);
// // fruits.push('mango');
// fruits.push('mango', 'papaya');
// console.log(fruits);

// const fruits = ['apple', 'banana', 'mango'];
// // fruits.pop();
// // console.log(fruits); 
// // const lastFruit = fruits.pop();
// console.log(fruits.pop()); 
// console.log(fruits); 

// const fruits = ['apple', 'banana'];
// // fruits.unshift('mango');
// fruits.unshift('mango', 'papaya');
// console.log(fruits);

// const fruits = ['apple', 'banana', 'mango'];
// const firstFruit = fruits.shift();
// console.log(firstFruit); // Output: 'apple'
// console.log(fruits); // Output: ['banana', 'mango']

// const fruits = ['apple', 'banana', 'mango'];
// // fruits.unshift([45, , 5656])
// fruits.unshift(...[45, , 5656])
// console.log(fruits);

// const nestedArray = [1, [2, 3], [4, [5]]];
// // const flattenedArray = nestedArray.flat();
// const flattenedArray = nestedArray.flat(2);
// console.log("Приклад 1: Однорівневе 'випрямлення'");
// console.log(flattenedArray);

// const arrayWithEmptySlots = [1, , , 4, 5];
// const withoutEmptySlots = arrayWithEmptySlots.flat();
// console.log("Приклад 3: Видалення порожніх місць");
// console.log(withoutEmptySlots); // Output: [1, 4, 5]
// console.log(arrayWithEmptySlots);


// const numbers = [1, 2, 3];
// const numbers = [1, [2], 3];
// const doubledNumbers = numbers.flatMap(number => [number, number]);
// console.log("Приклад 1: Подвоєння кожного елемента");
// console.log(doubledNumbers); // [1, 1, 2, 2, 3, 3]

// const words = ["apple", "orange"];
// const letters = words.flatMap(word => word.split(''));
// console.log("Приклад 2: Згладжування масиву рядків");
// console.log(letters);

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// // const combined1 = array1.concat(array2);
// // const combined1 = array1.concat(4, 5, 9);
// const combined1 = array1.concat(array2, 4, 5, 9);
// console.log("Приклад 1: Об'єднання двох масивів");
// console.log(combined1); // [1, 2, 3, 4, 5, 6]


// ПІДМАСИВИ SLICE, SPLICE, FILL, COPYwITHIN
// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// const selectedFruits1 = fruits.slice(1, 4);
// console.log("Приклад 1: Вибір елементів з індексу 1 до 4 (не включно)");
// console.log(selectedFruits1); // ['banana', 'cherry', 'date']

// const selectedFruits2 = fruits.slice(-2);
// console.log("\nПриклад 2: Вибір елементів з кінця масиву");
// console.log(selectedFruits2); // ['date', 'elderberry']
// console.log(fruits);


// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// const removed1 = fruits.splice(0,2)
// console.log(removed1);
// console.log(fruits);

// const removed1 = fruits.splice(0, 0, 'papaya')
// const removed1 = fruits.splice(0, 0, 'papaya', 'plum')
// const removed1 = fruits.splice(5, 0, 'papaya', 'plum')
// const removed1 = fruits.splice(2, 0, 'papaya', 'plum')
// console.log(fruits);

// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// // const removed1 = fruits.splice(3, 1, 'plum')
// // const removed1 = fruits.splice(3, 1, 'plum', 'papaya')
// const removed1 = fruits.splice(1, 4, 'plum', 'papaya')
// console.log(removed1);
// console.log(fruits);

// const arr1 = [1, 2, 3, 4];
// // arr1.fill('x');
// // arr1.fill('x', 3);
// arr1.fill('x', 1,3);
// console.log(arr1);

// const fruits = ['apple', 'banana','cherry', 'date', 'elderberry'];

// fruits.copyWithin(2)
// console.log(fruits); // ['apple', 'banana', 'apple', 'banana', 'cherry'] // -'date', 'elderberry'

// fruits.copyWithin(2,1)
// console.log(fruits); // ['apple', 'banana', 'banana', 'cherry', 'date']

// const arr1 = [10, 20, 30, 40, 50, 60, 70, 80];
// console.log('10, 20, 30, 40, 50, 60, 70, 80');
// arr1.copyWithin(2,1,3)
// console.log(arr1);


// ПОШУК ТА СОРТУВАННЯ INDEXOF, LASTINDEXOF, INCLUDES, SORT, REVERSE 
//  в конспекті


// const arr1 = [10, 20, 30]
// console.log(Array.isArray(arr1));

// const obj1 = {x:90, y:89}
// const obj2 = {0:'apple', 1:'plum', length: 2}
// const obj2 = {0:'apple', 1:'plum'}
// const obj2 = {str1:'apple', str2:'plum', length: 2}
// // console.log(Array.isArray(obj2));
// console.log(Array.from(obj2));

// const str = "Hello, world!";
// console.log(Array.isArray(str));


// const userName = 'John';
// const age = 30;

// const user = {
//     userName: userName,
//     age: age,
//     sayHello: function () {
//         console.log('Hello!')
//     }
// }
// console.log(user);


const userName = 'Orest';
const age = 35;
const user = {
    userName,
    age,
    sayHello() {
        console.log('Hello!') 
    }
}
console.log(user);
user.sayHello()
