// console.log(Number.MAX_SAFE_INTEGER); // 9 007 199 254 740 991
// console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// let x = 10 // ціле число
// let y = 3.14 // десяткове

// console.log(0.1 + 0.2);
// console.log(1/3);

// const result = 0.1 + 0.2
// const expected = 0.3
// const tolerance = 0.0001 // Припустима похибка

// // console.log(result-expected);
// // console.log(Math.abs(result-expected));

// if(Math.abs(result-expected) < tolerance) {
//     console.log('Результат в межах припустимої похибки');
// } else {
//     console.log('Результат за межами припустимої похибки');
// }

// let num1 = 1.23e6 // 1.23 * 10^6 = 1230000
// let num2 = 0.00000123 // 1.23e-6
// console.log(1.23e-6); 

// _ 
// let num3 = 1_000_000 // 1000000
// // let num4 = 1_234.567_89
// let num4 = 1_234.56_789
// console.log(num3, num4);

// let sum = 2 + 3 // sum = 5
// let difference = 5 - 2 // difference = 3

// let product = 2 * 3 // product = 6
// let quotient = 6 / 2  //  quotient = 3

// let remainder1 = 10 % 3 // remainder1 = 1
// 10 = 3+3+3+1
// 10 = 9+1

// 5%4 // 1
// 6%4 // 2
// 7%4 // 3
// 8%4 // 0
// 9%4 // 1

// let power1 = 2 ** 3
// console.log(power1);
// let power2 = 2 ** 10
// console.log(power2);
// let power3 = 5 ** 2
// console.log(power3);

// let d = 3
// d++
// console.log(d);
// let f = 3
// f--
// console.log(f);

// Math
// console.log(typeof Math);
// // console.log(Math);
// console.dir(Math);


// const floatNumber = 3.4
// const floatNumber = 3.00000001
// const floatNumber = 3.99
// const floatNumber = 3.5

// const roundedNumber = Math.ceil(floatNumber)
// console.log(roundedNumber);

// const roundedNumber1 = Math.floor(floatNumber)
// console.log(roundedNumber1);

// const roundedNumber2 = Math.round(floatNumber)
// console.log(roundedNumber2);

// const maxNumber = Math.max(34, 12, 2, 100, 1)
// console.log(maxNumber);
// const minNumber = Math.min(34, 1, 12, 2, 100)
// console.log(minNumber);

// const randomValue = Math.random()
// console.log(randomValue);
// const randomValue1 = Math.random()
// console.log(randomValue1);
// const randomValue2 = Math.random()
// console.log(randomValue2);


const randomValue2 = Math.random()*22
console.log(randomValue2);

console.log(Math.floor(randomValue2));
console.log(Math.floor(randomValue2)+1);
console.log(Math.ceil(randomValue2));
