// 1. string concatenation
// console.log("test");
// console.log("my" + " cat");
// console.log("1" + 2);
// console.log("1" + "2");
// console.log(`string literals'
// ''''
// 1+2 = ${1 + 2}`); // back tag for line continuation

// console.log("'this is', \n line feed");

// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 4;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison opeators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical opeators: || (or), && (and), ! (not)
// const value1 = false;
// const value2 = 4 < 2;

// || or: heavy operations have to be at the last
// console.log(`or: ${value1 || value2 || check()}`);

// && and: heavy operations have to be at the last
// console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if(nullableObject != null){
//     nullableObject.something;
// }

// function check() {
//     for (let i = 0; i < 10; i++) {
//         console.log("test");
//     }
//     return true;
// }

// ! not
// console.log(!value1);

// 7. Equality
// const stringFive = "5";
// const numberfive = 5;

// == loosely equality, with type conversion
// console.log(stringFive == numberfive);
// console.log(stringFive != numberfive);

// === strictly equality, with no type conversion
// console.log(stringFive === numberfive);
// console.log(stringFive !== numberfive);

// object equality by reference
// const sam1 = { name: "sam" };
// const sam2 = { name: "sam" };
// const sam3 = sam1;
// console.log(sam1 == sam2);
// console.log(sam1 === sam2);
// console.log(sam1 === sam3);

// equality - puzzler
// console.log(0 == false);
// console.log(0 === false);
// console.log("" == false);
// console.log("" === false);
// console.log(null == undefined);
// console.log(null === undefined);
// console.log(null == false);
// console.log(null === false);

// 8. Conditional operators : if
// if, else if, else
const name = "sam";
if (name === "sam") {
    console.log("Welcome, Sam");
} else if (name === "coder") {
    console.log("You are amazing coder");
} else {
    console.log("unknown");
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "sam" ? "Weolcome sam" : "unknown");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
// must have 'break' in each case
// const browser = "IE";
// switch (browser) {
//     case "IE":
//         console.log("go away");
//         break;
//     case "chrome":
//     case "firefox":
//         console.log("love you");
//         break;
//     default:
//         console.log("same all");
//         break;
// }

// 11. Loops
// while loop: while condition is true, body code is executed
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop: body code is executed first then check the condition
i = 3;
do {
    console.log(`do-while: ${i}`);
    i--;
} while (i > 0);

// for loop: for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (i = 3; i > 0; i -= 2) {
    console.log(`for(-2): ${i}`);
}

// nested loops
// for (let i = 3; i < 10; i++) {
//     for (let j = 3; j < 10; j++) {
//         console.log(`for(inner): ${i}, ${j}`);
//     }
// }

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers(use continue)
// Q2. iterate from 0 to 10 and print number until reaching 8 (use break)
