## Оператор AND (`&&`)
Що буде виведено в консоль?

```javascript
let age = 25;
const hasDriverLicense = false;

if (age >= 18 && hasDriverLicense) {
  console.log("Ви можете отримати водійське посвідчення.");
} else {
  console.log("Ви не можете отримати водійське посвідчення.");
}
```

a) Ви можете отримати водійське посвідчення.  
**b) Ви не можете отримати водійське посвідчення.**  

Що буде виведено в консоль у наступному коді?

```javascript
let x = 5;
let y = null;
let arr = undefined;

let result = x && y && arr;
console.log(result);
```
a) 5  
**b) null**  
c) undefined  



## Оператор OR (`||`)
Що буде виведено в консоль?

```javascript
let isStudent = false;
let hasJob = true;

if (isStudent || hasJob) {
    console.log("Ви можете отримати кредит на навчання або роботу.");
} else {
    console.log("Ви не можете отримати кредит на навчання або роботу.");
}
```

**a) Ви можете отримати кредит на навчання або роботу.**  
b) Ви не можете отримати кредит на навчання або роботу.  

Що буде виведено в консоль у наступному коді?

```javascript
let x = null;
let y = 100;
let arr = [1,2];

let result = x || y || arr;
console.log(result);
```
a) null  
**b) 100**  
c) [1,2]  
d) undefined  


## Оператор NOT (`!`)
Що буде виведено в консоль у наступному коді?
```javascript
console.log(!200); 
console.log(!!200);
```
**a) false true**  
b) true false  
c) false false  
d) true true  

З огляду на наступне використання оператора NOT в JavaScript, що буде виведено?
```javascript
let haveMoney = false;

if (!haveMoney) {
    console.log('bad');
} else {
    console.log('good');
}
```
a) good  
**b) bad**  
