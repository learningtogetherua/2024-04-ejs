// Number()
// console.log(Number());
// console.log(Number(12));
// console.log(Number("red"));
// console.log(Number("123"));
// console.log(Number("10.5"));
// console.log(Number("10,5"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number([]));
// console.log([]);
// console.log(Number(["test", 2323]));
// console.log(Number({}));
// console.log({});

// new Number()

// console.log(typeof Number());

// let x = new Number()
// console.log(x);
// console.log(typeof x);

// let test = 5
// console.log(test.toString());
// console.log(typeof test.toString());

// console.log(new Number(12));
// console.log(new Number("red"));
// console.log(new Number("123"));


// const binaryString = '1010'
// // const binaryNumber = parseInt(binaryString)
// // console.log(binaryNumber);
// // const binaryNumber = parseInt(binaryString, 2)
// // console.log(binaryNumber);
// // const binaryNumber = parseInt(binaryString, 16)
// // console.log(binaryNumber);
// const binaryNumber = parseInt(binaryString, 16)
// console.log(binaryNumber);


// Boolean
// let x = true
// let y = false

// let x = 10
// let y = 5
// // let isXGreater = x > y // true
// // console.log(isXGreater);
// // let isXGreater = x === y // false порівнюються значення та тип даних
// // let isXGreater = x == y // false порівнюються тільки значення 
// // let isXGreater = x < y // false
// // x <= y 
// // x >= y 
// // x != y 
// // x !== y 

// console.log(isXGreater);

// let x = true
// let y = false

// let resultAnd = x && y // false
// console.log(resultAnd);
// let resultOr = x || y // true
// console.log(resultOr);
// // let resultNot = !x
// // console.log(resultNot); // false
// let resultNot = !y
// console.log(resultNot);

// new Boolean()

// console.log(new Boolean());
// console.log(new Boolean(23));

// Boolean() 
// концепція перетворення на false

// console.log(Boolean()); // false
// console.log(Boolean(false)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(-0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean("")); // false

// console.log(Boolean([])); // true
// console.log(Boolean({})); // true

// function test() {
//     return 0
// }
// console.log(Boolean(test)); // true


// String
let string0 = '' // пустий рядок "" ``

let string1 = 'Це рядок в одинарні лапки'
let string2 = "Це рядок в подвійних лапках"
let string3 = `Це рядок в одинарні лапки`
// console.log(string1);
// console.log(string2);
// console.log(string3);

let string4 = 'кав"ярня' // викликає помилку варіант 'кав'ярня'
let string5 = 'кав\'ярня' // екранування
let string6 = "'кав\"ярня'"
console.log(string6);
let string7 = 'name="test"'
let string8 = '<a href="#" target="_blank">link</a>'

let age = 23
let string10 = `Мені ${age} роки`
console.log(string10);
let string11 = `В наступному році мені виповниться ${age + 1} роки`
console.log(string11);