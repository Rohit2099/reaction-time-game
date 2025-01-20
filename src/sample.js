// const { act } = require("react");

// let activities = [
//     ["Work", 9],
//     ["Eat", 1],
//     ["Commute", 2],
//     ["Play Game", 1],
//     ["Sleep", 7],
// ];

// console.log(activities);

// // Dynamic Element Addition: Write a function that prompts the user for activity and time, then adds it to the array.
// // Smart Insertion: Insert the activity dynamically based on time (e.g., sort in descending order of time).
// // Conditional Removal: Remove an element if it matches a specific condition (e.g., if time is below a threshold).
// // Efficient Updates: Update a specific activity's time by name if it exists, otherwise add it.

// function addActivity(activity, time) {
//     activities.push([activity, time]);
// }

// const comparatoFn = (a, b) => {
//     if (a[1] < b[1]) {
//         return 1;
//     } else {
//         return -1;
//     }
// };

// function insertActivity(activity, time) {
//     activities.push([activity, time]);
//     activities.sort(comparatoFn);
// }

// function removeLowTimeActivities(time) {
//     activities = activities.filter((activity) => {
//         return activity[1] >= time;
//     });
// }

// function updateActivity(activity, time) {
//     const found = activities.find((val) => {
//         return activity === val[0];
//     });

//     if (found) {
//         found[1] = time;
//     } else {
//         activities.push([activity, time]);
//     }
// }

// addActivity("Study", 2);
// insertActivity("Programming", 3);
// removeLowTimeActivities(2);
// updateActivity("Sleep", 8);

// console.log(activities);

// 1. timers()
// 2. Promises
// 3.
// nextTick()

// 1. Polymorphism
// 2. Abstraction
// 3. Inheritance
// 4. Encapsulation

// function add(a, b) {

// }

// sort the array in O(N) time without using space > O(constant)

// const students = [   { id: 1, name: "Alice", grade: "B" },   { id: 2, name: "Bob", grade: "C" },   { id: 3, name: "Carol", grade: "A" },   { id: 4, name: "Dave", grade: "C" },   { id: 5, name: "Eve", grade: "B" },   { id: 6, name: "Frank", grade: "A" },   { id: 7, name: "Grace", grade: "A" },   { id: 8, name: "Heidi", grade: "C" }, { id: 9, name: "Ivan", grade: "B" } ];

// [b,c,a,b,c,a]
//  1 2
// [b,c,b,b,c,a]
//    1
// [a,b,c,b,c,a]
//      1  2

// function swap(i, j) {
//     let temp = students[i];
//     students[i] = students[j];
//     students[j] = temp;
// }

// function sort() {
//     let first = 0, second = 1;

//     while (second < students.length) {
//         if (students[second].grade < students[first].grade) {
//             swap(first, second);
//             first++;
//         } else {
//             second++;
//         }
//     }
// }

// function shallowCopyObject(obj) {
//     return { ...obj };
//     }

//     const original = { x: 1, y: { z: 2 } };
//     const copy = shallowCopyObject(original);
//     copy.y.z = 10;

//     console.log(original.y.z);

// function deepCopyWithJSON(obj) {
//     return JSON.parse(JSON.stringify(obj));
//     }

//     const original = { a: 1, b: { c: 2 } };
//     const copy = deepCopyWithJSON(original);
//     copy.b.c = 42;

//     console.log(original.b.c);

// let person = {
//     name: "John Doe",
//     greet: function () {
//         return "Hi, I'm " + this.name;
//     },
// };
// let teacher = {
//     teach: function (subject) {
//         return "I can teach " + subject;
//     },
// };

// Object.setPrototypeOf(teacher, person);

// console.log(teacher.name);
// console.log(teacher.greet());

// let newFunc = function.bind(oContext, par1, par)
// newFunc(par3)

// function.apply(oContext, []);
// function.call(oContext, par 1,)

// hello dog,says woof

// let cat = { type: 'Cat', sound: 'Meow' };
// let dog = { type: 'Dog', sound: 'Woof' };

// function dot(greeting) {
//     return greeting + " " + this.type + " ,says " + this.sound;
// }

// dot.call(dog, "hello");

// let cart = [
//     { name: "Smartphone", qty: 2, price: 500, freeOfCharge: false },
//     { name: "Screen Protector", qty: 2, price: 5, freeOfCharge: true },
//     { name: "Tablet", qty: 1, price: 800, freeOfCharge: false },
// ];
// // calculate the total amount from the items in the cart. It ignores the free-of-charge items

// const total = cart.reduce((acc, item) => {
//     if (!item.freeOfCharge) {
//         return item.qty * item.price + acc;
//     } else {
//         return acc;
//     }
// }, 0);

// console.log(total);

// var obj1;
// var obj2;

// function x() {
//     obj1 = this; // GLOBAL
// }

// function y() {
//     obj2 = this; // GLOBAL
//     console.log(this);
// }

// x();
// y();

// console.log(obj1 === obj2); // GLOBAL === GLOBAL = true
// console.log(obj1 === this);
// console.log(this);
// console.log(globalThis);

// (() => {
//     console.log(this);
// })();
// console.log(this);

// let a = () => {
//     console.log(this);
// };

// a();
const obj = {
    num: 100,
};

// Setting "num" on globalThis to show how it gets picked up.
globalThis.num = 42;

// Arrow function
const add = (a, b, c) => this.num + a + b + c;

console.log(add.call(obj, 1, 2, 3)); // 48
console.log(add.apply(obj, [1, 2, 3])); // 48
const boundAdd = add.bind(obj);
console.log(boundAdd(1, 2, 3)); // 48
