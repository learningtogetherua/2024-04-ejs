# Object - частина 3

## Варіанти створення об'єктів

```javascript
// Об'єктний літерал
const testObj = {}

// Використання функції та ключового слова `new`
const testObj1 = new Object()
```

## Помилки доступу до властивостей об'єкта

```javascript
// Невизначена властивість
let obj1 = {name: 'Ivan'}
console.log(obj1.age); // undefined

let obj3 = document.getElementById('text') // null
console.log(obj3.text_content); // TypeError: Cannot read properties of null (reading 'text_content')

```
Рішення проблеми: блок try...catch та оператор ?. Читайте про ці варіанти [в файлі з посиланнями](./ejs12-links.md) 

## Видалення властивостей об'єкта або блокування
### Ключове слово delete
```javascript
let profile = {
    name: 'Олег',
    age: 30,
    height: 180
};
delete profile.height

```
### Метод defineProperty
```javascript
Object.defineProperty(profile, 'name', { writable: false })

profile.name = 'Oleg'
console.log(profile);

Object.defineProperty(profile, 'name', { configurable: false })
delete profile.name

```

## Резюме за темою
- Об'єкти можна створювати за допомогою `об'єктного літерала` або використовуючи функцію та ключове слово `new`.
- При доступі до невизначених властивостей або до властивостей об'єкта, який дорівнює `null`, виникають помилки. Рішення: використовувати блок `try...catch` або оператор `?.`.
- Властивості об'єктів можна видаляти за допомогою ключового слова `delete` або блокувати зміни та видалення властивостей методом `defineProperty`.
