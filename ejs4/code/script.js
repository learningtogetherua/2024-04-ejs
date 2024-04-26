// 1 * 'five' // NaN
// 1000 / 0 // Infinity
// var result = 10 / 0;
// console.log(result); // Infinity

// 0.0000000000000000000000000000000000000000014 
// 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000049

// let zero = 0
// let negZero = -0
// console.log(zero, negZero);
// console.log(zero === negZero); // true
// console.log(1/zero); // Infinity
// console.log(1/negZero); // -Infinity
// console.log(1/zero === 1/negZero); // false
// Infinity результат ділення числа на 0

// NaN
// console.log(0 / 0);

// var result = 10 * "abc"; // NaN
// var result = 10 * "123"; // 1230
// var result = 4 / "123r"; // NaN

// var result1 = 10 * "abc"; // NaN
// var result2 = 4 / "123r"; // NaN
// console.log(result1 === result2);
// console.log(NaN === NaN);

// isNaN()

// console.log(isNaN(4 / "123r")); // true
// console.log(isNaN(23)); // false
// console.log(isNaN("abc")); // true

// let x = 123
// console.log(isNaN(x)); // false


// isFinite()  
// isInteger()


// BigInt
// const bigNumberLiteral = 1234567890123456789012345678901234567890n;
// console.log(bigNumberLiteral);

// const anotherBigInt = BigInt(900719925474099); // Еквівалентно 900719925474099n
// const anotherBigInt = BigInt("900719925474099"); // Еквівалентно 900719925474099n
// console.log(anotherBigInt);


// let result // undefined
// console.log(result);
// result = bigNumberLiteral + anotherBigInt // 1234567890132463988267086670424466891125n
// console.log(result); // 1234567890132463988267086670424466891125n

// const bigIntValue = 100000n
// const regularNumber = 100
// const result = bigIntValue + regularNumber // TypeError: Cannot mix BigInt and other types

// const bigIntValue = 1000n

// console.log(typeof(+'123')); // number
// console.log(typeof(+true)); // number
// // console.log(typeof(+bigIntValue));  // TypeError: Cannot convert a BigInt value to a number

// const convertedToNumber = Number(bigIntValue) // конвертація в number
// console.log(convertedToNumber); // 1000
// console.log(typeof convertedToNumber); // number

// const regularNumber = 100
// const result = convertedToNumber + regularNumber // без помилки
// console.log(result);  // 1100

// const convertedToBigInt = BigInt(regularNumber) // конвертація в BigInt
// console.log(convertedToBigInt); // 100n 
// const result2 = bigIntValue + convertedToBigInt // без помилки
// console.log(result2);  // 1100n

// parseInt()
// parseFloat()

// const stringWithoutText = '123434'
// const stringWitText1 = '123434drererer'
// const stringWitText2 = 'werwerwer123434'

// const res = parseInt(stringWithoutText) // 123434 number
// const res1 = parseInt(stringWitText1) // 123434 number
// const res2 = parseInt(stringWitText2) // NaN

// console.log(stringWithoutText, res); // 123434 number
// console.log(stringWitText1, res1); // 123434 number
// console.log(stringWitText2, res2); // NaN

// const stringWithoutTextFloat = '123.434dfdf'
// const stringWithoutText = '123434wwerwrew'
// const resFloat = parseFloat(stringWithoutTextFloat) // 123.434 number
// const resFloat1 = parseFloat(stringWithoutText) // 123434 number
// console.log(resFloat);
// console.log(resFloat1);


// null 
// undefined




