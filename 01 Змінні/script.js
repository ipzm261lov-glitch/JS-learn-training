"use strict";
alert('Hello');
// ===== 1. Оголошення змінних =====

// let — змінну можна перепризначати
let age = 33;
age = 34;
console.log("let age:", age);

// const — константа, перепризначити не можна
const PI = 3.14;
console.log("const PI:", PI);
// PI = 3; // ❌ TypeError: Assignment to constant variable

// var — старий спосіб, уникайте його у новому коді
var city = "Zhytomyr";
console.log("var city:", city);


// ===== 2. Типи даних =====

let userName = "Олег";        // string
let score = 17;             // number
let isStudent = true;         // boolean
let nothing = null;           // null (свідомо "порожньо")
let notDefined;               // undefined (значення не задано)
let id = 123456789012345678901234567890n; // bigint
let uniqueKey = Symbol("id"); // symbol

console.log(typeof userName);   // "string"
console.log(typeof score);      // "number"
console.log(typeof isStudent);  // "boolean"
console.log(typeof nothing);    // "object" (відома особливість JS)
console.log(typeof notDefined); // "undefined"
console.log(typeof id);         // "bigint"
console.log(typeof uniqueKey);  // "symbol"


// ===== 3. Складні типи =====

const fruits = ["яблуко", "груша", "слива"];  // масив
fruits.push("вишня");                         // const дозволяє змінювати вміст
console.log("Масив:", fruits);

const person = { name: "Олег", age: 33 };     // об'єкт
person.age = 34;
console.log("Об'єкт:", person);


// ===== 4. Область видимості (scope) =====

if (true) {
  let blockLet = "бачу тільки в блоці";
  var blockVar = "бачу всюди";
}
// console.log(blockLet); // ❌ ReferenceError
console.log(blockVar);    // ✅ "бачу всюди"


// ===== 5. Hoisting (підняття) =====

console.log(hoisted); // undefined (var піднімається)
var hoisted = "привіт";

// console.log(notHoisted); // ❌ ReferenceError (TDZ)
let notHoisted = "привіт";


// ===== 6. Шаблонні рядки та приведення типів =====

const greeting = `Привіт, ${userName}! Тобі ${age} років.`;
console.log(greeting);

console.log("5" + 3);      // "53" (конкатенація)
console.log("5" - 3);      // 2   (неявне приведення)
console.log(Number("42")); // 42
console.log(String(123));  // "123"
console.log(Boolean(0));   // false


// ===== 7. Іменування =====

let firstName = "Олег";     // camelCase — стандарт для змінних
const MAX_USERS = 100;      // UPPER_CASE — для "справжніх" констант
// let 1name = "x";         // ❌ не може починатися з цифри