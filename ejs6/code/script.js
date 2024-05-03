// String
// let string0 = '' // пустий рядок "" ``

// let string1 = 'Це рядок в одинарних лапках'
// let string2 = "Це рядок в подвійних лапках"
// let string3 = `Це рядок в зворотних лапках`
// // console.log(string1);
// // console.log(string2);
// // console.log(string3);

// let string4 = 'кав"ярня' // викликає помилку варіант 'кав'ярня'
// let string5 = 'кав\'ярня' // екранування
// let string6 = "'кав\"ярня'"
// console.log(string6);
// let string7 = 'name="test"'
// let string8 = '<a href="#" target="_blank">link</a>'

// let age = 23
// let string10 = `Мені ${age} роки`
// console.log(string10);
// let string11 = `В наступному році мені виповниться ${age + 1} роки`
// console.log(string11);

// let emoji = "🙌"
// console.log(emoji);

// let s = 'Привіт'
// let code1 = s.charCodeAt(0) // 1055
// let code2 = s.charCodeAt(1) // 1088
// let code3 = s.charCodeAt(2) // 1080
// console.log(code1);
// console.log(code2);
// console.log(code3);
// console.log(String.fromCharCode(code3));

// let multistring = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maiores unde minus atque perspiciatis
//  ea, hic dolorum. Quam, laudantium eius. Explicabo perspiciatis nemo assumenda quo ipsum expedita architecto voluptatibus facere."

// let multistring = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maiores unde minus atque perspiciatis
//  ea, hic dolorum. Quam, laudantium eius. Explicabo perspiciatis nemo assumenda quo ipsum expedita architecto voluptatibus facere.'

// let multistring = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maiores unde minus atque perspiciatis

//  ea, hic dolorum. Quam, laudantium eius. Explicabo perspiciatis nemo assumenda quo ipsum expedita architecto voluptatibus facere.`
//  console.log(multistring);
//  document.body.textContent = multistring


// let multistring = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maiores unde minus atque perspiciatis\
// ea, hic dolorum. Quam, laudantium eius. Explicabo perspiciatis nemo assumenda quo ipsum expedita architecto voluptatibus facere."
//  console.log(multistring);

// let multistring = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maiores unde minus atque perspiciatis ea, hic dolorum. \n\nQuam, laudantium eius. \n\nExplicabo perspiciatis nemo assumenda quo ipsum expedita architecto voluptatibus facere."
//  console.log(multistring);

//  керуючі послідовності
//  \'
//  \"
//  \n
//  \\
//  \t

// let message = "Це \"особливий\" рядок:\n\t*з новим рядком;\n\t*з табуляцією;\n\t*і з екранованими лапками "
// console.log(message);

// Конкатенація рядків

// +
// var str1 = "Hi, "
// var str2 = "World!"
// const resultStr = str1 + str2 // Hi, World!
// console.log(resultStr);
// console.log(str1);
// console.log(str2);

// .concat()
// var str1 = "Hi, "
// var str2 = "World!"
// const resultStr = str1.concat(str2) // Hi, World!
// console.log(resultStr);

// let age = 23
// // let string10 = `Мені ${age} роки`
// let string10 = "Мені " + age + " роки"
// console.log(string10);

// var message = "Привіт, світ!"
// console.log(message.length); // 13

// var string = ""
// var string = "test"
// console.log(string.length);
// if (string.length === 0) {
//     console.log('Рядок порожній');
// } else {
//     console.log('Рядок НЕ порожній');
// }

// var message = "Привіт, світ!"
// for (let i = 0; i < message.length; i++) {
//    console.log(`Символ на позиції ${i+1}: ${message[i]}`);
    
// }
// var message = "Привіт, світ!"
// console.log(message);
// console.log(typeof message);

// console.log([]);
// console.log({});

// new String()
// let strObj1 = new String()
// console.log(strObj1);
// let strObj2 = new String(34)
// console.log(strObj2);
// let strObj3 = new String(true)
// console.log(strObj3);
// let strObj4 = new String("Привіт, світ!")
// console.log(strObj4);


// String()
// let strObj1 = String()
// console.log(strObj1);
// console.log(strObj1.length);
// console.log(typeof strObj1);
// let strObj2 = String(34)
// console.log(strObj2);
// let strObj3 = String(true)
// console.log(strObj3);
// let strObj4 = String("Привіт, світ!")
// console.log(strObj4);

// console.log({});


// методи 
let s = "Hello, world"

// частина рядка
// console.log(s.substring());
// console.log(s.substring(3)); // до кінця рядка
// console.log(s.substring(1,4)); // діапазон індекчів не включаючи останній (4)

// console.log(s.slice());
// console.log(s.slice(3));
// console.log(s.slice(1,4));
// console.log(s.slice(-3)); // кількість символів з кінця рядку
// console.log(s.slice(-11));

// console.log(s.split()); // ['Hello, world']
// console.log(s.split('')); // ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd']
// console.log(s.split(' ')); // ['Hello,', 'world']

// пошук
// console.log(s.indexOf('o')); // 4 
// console.log(s.indexOf('o', 5)); // 8 
// console.log(s.lastIndexOf('o')); // 8 

// console.log(s.indexOf('oo')); // -1 
// console.log(s.lastIndexOf('oo')); // -1 

// console.log(s.indexOf('llo')); // 2
// console.log(s.lastIndexOf('llo')); // 2 

// булевський пошук
// console.log(s.startsWith('He')); // true
// console.log(s.endsWith('!')); // false
// console.log(s.includes(',')); // true
// console.log(s.includes(' ')); // true

// створення модифікації рядка
// let result = s.replace('ello', 'i')
// console.log(result);
// console.log(s);

// let result = s.toLocaleLowerCase()
// console.log(result);
// console.log(s);

// let result = s.toUpperCase()
// console.log(result);
// console.log(s);

// робота з символами
// console.log(s.charAt(0));
// console.log(s.charAt(11));
// console.log(s.charAt(s.length-1));

// let s = 'Привіт'
// let code1 = s.charCodeAt(0) // 1055 - 16bit
// let code2 = s.charCodeAt(1) // 1088 - 16bit
// let code3 = s.charCodeAt(2) // 1080 - 16bit
// console.log(code1);
// console.log(code2);
// console.log(code3);
// console.log(String.fromCharCode(code3));


// доповнення рядків
// console.log('result:', 'xyz'.padStart(7));
// let result = 'xyz'.padStart(7)
// console.log(result.length);
// let result = 'xyz'.padStart(7,"*")
// let result = '234'.padStart(5,"0")
// console.log(result);
// console.log(result.length);
// let result = '234'.padEnd(5,"0")
// console.log(result);
// console.log(result.length);

// видалення пропусків
// console.log("  test   ".length);
// console.log("  test   ".trim());
// console.log("  test   ".trim().length);

// console.log("  test   ".length);
// console.log("  test   ".trimStart());
// console.log("  test   ".trimStart().length);

// console.log("   test   ".length);
// console.log("   test   ".trimEnd());
// console.log("   test   ".trimEnd().length);

// // .concat()
// const resultStr = "Lesson is end".concat('!!!!!!!') // Lesson is end!!!!!!!
// console.log(resultStr);

// console.log("Hi".repeat(5));