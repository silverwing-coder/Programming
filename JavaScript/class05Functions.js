// function printHello() {
//     console.log("Hello");
// }

// printHello();

// function log(message) {
//     console.log(message);
// }

// log("Hello@");
// log(12345);

// function changeName(obj) {
//     obj.name = "coder";
// }

// const sam = { name: "sam" };
// changeName(sam);
// console.log(sam.name);

// function showMessage(message, from='unknown') {
//     // if (from === undefined) {
//     //     from = "unknown";
//     // }
//     console.log(`${message} by ${from}`);
// }
// showMessage("Hi");

// function printAll(...args) {
//     for (let i = 0; i < args.length; i++) {
//         console.log(args[i]);
//     }
// }
// printAll("dream", "coding", "ellie");

// let globalMessage = "global";
// function printMessage() {
//     let message = "hello";
//     console.log(message);
//     console.log(globalMessage);
//     function printAnother() {
//         console.log(message);
//         let childMessage = "hello";
//     }
//     // console.log(childMessage);
// }
// printMessage();

// function sum(a, b) {
//     return a + b;
// }
// const result = sum(1, 2);
// console.log(`sum: ${result}`);

/////

// console.log(sum(1, 2));
// function sum(a, b) {
//     return a + b;
// }

// print(); // error
// const print = function () {
// function print() {
//     //anonymous function
//     console.log("print");
// }
// print();
// const printAgain = print;
// printAgain();

// const sumAgain = sum;
// console.log(sumAgain(1, 3));

/////
// function randomQuiz(answer, printYes, printNo) {
//     if (answer === "love you") {
//         printYes();
//     } else {
//         printNo();
//     }
// }

// // const printYes = function () {
// function printYes() {
//     console.log("yes");
// }
// const printNo = function print() {
//     console.log("no");
// };

// randomQuiz("wrong", printYes, printNo);

// randomQuiz("love you", printYes, printNo);

// const simplePrint = function () {
//     console.log("simplePrint!");
// };

// const simplerPrint = () => console.log("simplerPrint!");
// simplePrint();
// simplerPrint();

// const add = (a, b) => a + b;
// console.log(add(2, 4));

(function hello() {
    console.log("IIFE");
})();
