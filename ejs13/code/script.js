// let profile = {
//     nameUser: 'Олег', // властивість (ключ: значення)
//     age: 30,
//     height: 180
// };
// console.log(profile);

// let profileArray =['Олег', 30, 180];// значення
// console.log(profileArray);

// let profileArray = [{ nameUser: 'Олег' }, { age: 30 }, { height: 180 }];
// console.log(profileArray);

// let profileArray = [ ['nameUser','Олег'] ,  ['age',30] ,  ['height',180] ];
// console.log(profileArray);


// let emptyArray = [] // пустий масив але з length 0
// console.log(emptyArray);

// let profileArray =['Олег', 30, 180, { height: 180 }, function name(params) {params++}]

// let profileArray = [ ['nameUser','Олег'] ,  ['age',30] ,  ['height',180] ]

// Array()
// let emptyArray = Array() // []  пустий масив але з length 0
// console.log(emptyArray);

// let arrayWithLength = Array(5)
// let arrayWithLength = new Array(5) // [] пустий масив але з length 5
// console.log(arrayWithLength);
// console.log(arrayWithLength[0]);
// console.log(arrayWithLength[4]);
// console.log(arrayWithLength[100]);

// let arrayWithValues = new Array('Олег', 30, 180) // ['Олег', 30, 180]
// console.log(arrayWithValues);

// let a = 10;
// let b = 20;
// let sum = a + b;

// let literalArray = [a, b, sum, b * a]
// console.log(literalArray);
// let arrayWithValues = new Array(a, b, sum, b * a)
// console.log(arrayWithValues);

// let array1 = [10, 20, 30, 40, 50];
// console.log(array1.length); // Виведе 5
// array1.length = 7
// console.log(array1.length); // Виведе 7
// console.log(array1); // Виведе [10, 20, 30, 40, 50, пусто × 2]
// console.log(array1[5]); // undefined
// console.log(array1[6]); // undefined

// array1.length = 2
// console.log(array1.length); // Виведе 2
// console.log(array1); 

// let tasks = ['t1','t2','t3','t4','t5']
// let taskToProcess = 3

// console.log(tasks);

// for (let i = tasks.length-1; i >= tasks.length - taskToProcess; i--) {
//     console.log(`Оброблено завдання ${tasks[i]}`);
// }
// tasks.length -= taskToProcess

// console.log(tasks);

// let sparseArrayLiteral = [10, , , 40, 50]
// console.log(sparseArrayLiteral.length);
// for (let i = 0; i < sparseArray.length; i++) {
//     console.log(`елемент ${i+1} має значення ${sparseArray[i]}`);

// }
// let sparseArrayConstructor = new Array(5)
// console.log(sparseArrayConstructor.length);
// console.log(sparseArrayConstructor);
// sparseArrayConstructor[3] = 333
// sparseArrayConstructor[10] = 111
// console.log(sparseArrayConstructor);

// let sparseArrayAnother = []
// console.log(sparseArrayAnother.length);
// sparseArrayAnother[3] = 'ffff'
// console.log(sparseArrayAnother);


// let profile = {
//     nameUser: 'Олег', // властивість (ключ: значення)
//     age: 30,
//     height: 180,
//     job: 'driver'
// };

// let array1 = [10, 20, 30, 40, 50,]

// let commaSeparateArray = [,,,,,,,]
// console.log(commaSeparateArray.length);
// console.log(commaSeparateArray);
// commaSeparateArray[0] = 'K'
// console.log(commaSeparateArray);
// commaSeparateArray[6] = 'E'
// console.log(commaSeparateArray);


// for (let i = 1; i < 7; i++ ) {
//     // перевірка довільних умов для перерривання поточної ітерації
//     if (i % 2 === 0) {
//         console.log("Поточна ітерація завершиться без вивода значення " + i);
//         continue; // переривання ПОТОЧНОЇ ітерації циклу
//     }
//     // основний код який виконується на кожній ітерації
//     console.log(i, "це одна з ітерацій циклу що не була перервана");
// }
// for (let i = 1; i < 7; i++ ) {
//     // перевірка довільних умов для перерривання поточної ітерації
//     if (i % 2 === 0) {
//         console.log("Поточна ітерація завершиться без вивода значення " + i);
//         break; // переривання ПОТОЧНОЇ ітерації циклу
//     }
//     // основний код який виконується на кожній ітерації
//     console.log(i, "це одна з ітерацій циклу що не була перервана");
// }

// label statement
// outerLoop: for (let i = 0; i < 4; i++) {
//     console.log(`Ітерація зовнішнього циклу: ${i+1}`);
//     for (let j = 0; j < 4; j++) {
//         if (i+1 === 3 && j+1 === 3) {
//             // continue outerLoop;
//             break outerLoop;
//         }
//         console.log(`\tІтерація внутрішнього циклу: ${j+1}`);
//     }
// }

// let peoples = [
//     ["Анна", 25],
//     ["Олександр", 30],
//     ["Марія", 35],
//     ["Віктор", 40],
//     ["Ірина", 45]
// ];

// for (let i = 0; i < peoples.length; i++) {
//     let person = peoples[i]
//     console.log(person);
//     for (let j = 0; j < person.length; j++) {
//         console.log(person[j]);
//     }
//     console.log('----');
// }