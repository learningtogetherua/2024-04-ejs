// const testMessage = 0
// console.log(testMessage);
// window.alert(testMessage);
// alert(testMessage);

// var susid // оголошення змінної
// let susid35 // оголошення змінної
// const susid12_3 = 'red hat' // оголошення та ініціалізація змінної (константи)

// susid = '46 років' // ініціалізація змінних
// susid35 = '2 метри' // ініціалізація змінних

// var age = 46 // оголошення та ініціалізація змінної 

// let x,y,z // оголошення трьох різних змінних
// let x = 100, y = 134, z = 0 // оголошення та ініціалізація трьох різних змінних

// оператор TYPEOF
console.log(typeof 27); // number
console.log(typeof '2 метри'); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
// var susid
// console.log(susid);
console.log(typeof null); // object для null
// console.log(document.body); // object body
// console.log(document.querySelector('h1')); // null
console.log(typeof 1234n); // bigint
console.log(typeof Symbol("any text")); // symbol

console.log(typeof {}); // object
console.log(typeof { mentor: "Ivan" }); // object

console.log(typeof []); // object для масиву
console.log(typeof [34, 'Lviv', false]); // object для масиву

console.log(typeof function anyName() { }); // function

// функція TYPEOF (ТЕ САМЕ ЯК ОПЕРАТОРНИЙ ВАРІАНТ)
console.log(typeof (27)); // number
console.log(typeof ('2 метри')); // string

// ТИПИ ДАНИХ
// number
const number1 = 42;
const number2 = 3.14;
const number3 = -10;
const number4 = 0;
const number5 = 123456789;
// string
const string1 = 'Hello';
const string2 = 'World';
const string3 = `I'm a string`;
const string4 = '12 3ewrwer';
const string5 = "JavaScript";
// boolean
const boolean1 = true;
const boolean2 = false;
const boolean3 = 10 > 5; // true
const boolean4 = 'Hello' === 'World'; // false
const boolean5 = !(3 < 1); // true
// undefined
let testMessage
// null
document.querySelector('h1'); // null якщо такий елемент не знайшли
// symbol
const symbol1 = Symbol();
const symbol2 = Symbol('description');
const symbol3 = Symbol(42);
const symbol4 = Symbol('foo');
const symbol5 = Symbol('bar');
// bigint
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber); // 1234567890123456789012345678901234567890n
const anotherBigNumber = BigInt('9876543210987654321098765432109876543210');
console.log(anotherBigNumber); // 9876543210987654321098765432109876543210n
// object
const person = {
    name: firstName,
    city: 'New York',
    mentor: "Ivan"
};

// array масив
const fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

// function функції
function addNumbers(a, b) {
    return a + b;
}

const result = addNumbers(5, 3);
console.log(result);