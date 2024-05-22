// let user = {
//     name: 'Ivan',
//     greet: function() {
//       console.log('Hello, ' + this.name);
//     }
//   };

//   user.greet(); // виведе: "Hello, Ivan"

// console.log(this);
// console.log(window);
// console.log(this === window);

// function Car(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   let myCar = new Car('Toyota', 'Corolla');

//   console.log(myCar);
//   console.log(myCar.make);

// let user = {
//     name: 'Ivan',
//     age: 30,
//     email: 'ivan@example.com',
//     sayHello: function() {
//       console.log('Hello, ' + this.name);
//     }
//   };

// user.sayHello();
// // user.email
// console.log(user.email);

// let user = {
//     name: 'Ivan',
//     // name: 'Ivan1',
//     age: 30,
//     email: 'ivan@example.com',
//     sayHello: function() {
//     //   console.log('Hello, ' + this.name);
//       return 'Hello, ' + this.name;
//     }
//   }
// //   user.sayHello();
// //   let methodResult = user.sayHello();
// //   console.log(methodResult);

//   let dataName = user.email
//   console.log(dataName) // ivan@example.com

//   let dataName1 = user['email']
//   console.log(dataName1) // ivan@example.com


// let propertyName = 'name';
// let userName = user[propertyName];
// console.log(userName); 
//   const key = "email"
//   let dataName2 = user[key]
//   console.log(dataName2) // ivan@example.com

// // console.log(user);

// let user = {
//     name: 'Ivan',
//     age: 30,
//     email: 'ivan@example.com',
//     sayHello: function() {
//     //   console.log('Hello, ' + this.name);
//       return 'Hello, ' + this.name;
//     }
//   }

// //   console.log(user.age);
// // user.age += 1
// user.age = user.age + 1
//   console.log(user.age);

//   user.haveCar = true
//   console.log(user);

// ЩО ЯКЩО CONST
// const user = {
//     name: 'Ivan',
//     age: 30,
//     email: 'ivan@example.com',
//     sayHello: function () {
//         //   console.log('Hello, ' + this.name);
//         return 'Hello, ' + this.name;
//     }
// }

// //   console.log(user.age);
// // user.age += 1
// user.age = user.age + 1 // зміна значення ключа - ок
// console.log(user.age);

// user.haveCar = true // створення нового ключа - ок
// console.log(user);

// user = {} // ERROR Assignment to constant variable

// const company = {
//     name: "TechCorp",
//     address: {
//       street: "Main Street",
//       number: 123,
//       city: "Kyiv"
//     },
//     employees: ["Anna", "Ivan", "Olha"]
//   };


// //   console.log(company);
//   console.log(company.name);
//   console.log(company.address);
//   console.log(company.address.street);
//   console.log(company.address.number);
//   console.log(company.address.city);
//   console.log(company.employees);

//   console.log(company.employees[0]);
//   console.log(company.employees[1]);
//   console.log(company.employees[2]);
//   console.log(company.employees['2']);

// const strangeKeysObject = {
//     "first name": "Oleksandr",
//     "123": "Це ключ, який є числом",
//     "!special@key#": "Ключ із спеціальними символами",
//     "complex key with spaces and symbols!": "Дуже складний ключ",
//     "Твоя улюблена страва": "Борщ"
//   };

//   console.log(strangeKeysObject['first name']);
//   console.log(strangeKeysObject['123']);
//   console.log(strangeKeysObject[`${120+3}`]);
//   console.log(strangeKeysObject['!special@key#']);
//   console.log(strangeKeysObject['complex key with spaces and symbols!']);
//   console.log(strangeKeysObject['Твоя улюблена страва']);

//   const борщ = 1
//   console.log(борщ);

