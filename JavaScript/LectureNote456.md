##### _Update: 5-July-2022_

## JavaScript Lecture Notes

<br>
#### Class - 4. Operators / Loops

**4-1. Operators**

4-1-1. String concatenation

```js
console.log("test");
console.log("my" + " cat");
console.log("1" + 2);
console.log("1" + "2");
console.log(`string literals' 
'''' 
1+2 = ${1 + 2}`); // back tick for line continuation

console.log("'this is', \n line feed");
```

4-1-2. Numeric operators

```js
console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1);
console.log(5 % 2);
console.log(2 ** 3);
```

4-1-3. Increment and decrement operators

```js
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);
```

4-1-4. Assignment operators

```js
let x = 3;
let y = 4;
x += y;
x -= y;
x *= y;
x /= y;
```

4-1-5. Comparison operators

```js
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);
```

4-1-6. Logical opeators: **|| (or), && (and), ! (not)**

```js
const value1 = false;
const value2 = 4 < 2;

// || or: heavy operations have to be at the last
console.log(`or: ${value1 || value2 || check()}`);

// && and: heavy operations have to be at the last
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
if (nullableObject != null) {
    nullableObject.something;
}

function check() {
    for (let i = 0; i < 10; i++) {
        console.log("test");
    }
    return true;
}

// ! not
console.log(!value1);
```

4-1-7. Equality

```js
const stringFive = "5";
const numberfive = 5;

// == loosely equality, with type conversion
console.log(stringFive == numberfive);
console.log(stringFive != numberfive);

// === strictly equality, with no type conversion
console.log(stringFive === numberfive);
console.log(stringFive !== numberfive);

// object equality by reference
const sam1 = { name: "sam" };
const sam2 = { name: "sam" };
const sam3 = sam1;
console.log(sam1 == sam2);
console.log(sam1 === sam2);
console.log(sam1 === sam3);

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(null === undefined);
console.log(null == false);
console.log(null === false);
```

4-1-8. Conditional operators : if, else if, else

```js
const name = "sam";
if (name === "sam") {
    console.log("Welcome, Sam");
} else if (name === "coder") {
    console.log("You are amazing coder");
} else {
    console.log("unknown");
}
```

4-1-9. Ternary operator : condition ? value1 : value2;

```js
console.log(name === "sam" ? "Weolcome sam" : "unknown");
```

4-1-10. Switch statement

-   use for multiple if checks
-   use for enum-like value check
-   use for multiple type check in TS
-   must have **'break'** statement in each case block

```js
const browser = "IE";
switch (browser) {
    case "IE":
        console.log("go away");
        break;
    case "chrome":
    case "firefox":
        console.log("love you");
        break;
    default:
        console.log("same all");
        break;
}
```

**4-2. Loops**

4-2-1. while loop: while condition is true, body code is executed

```js
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}
```

4-2-2. do-while loop: body code is executed first, then check the condition

```js
i = 3;
do {
    console.log(`do-while: ${i}`);
    i--;
} while (i > 0);
```

4-2-3. for loop: for(begin; condition; step)

```js
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (i = 3; i > 0; i -= 2) {
    console.log(`for(-2): ${i}`);
}
```

4-2-4. nested loop

-   avoid if possible

```js
for (let i = 3; i < 10; i++) {
    for (let j = 3; j < 10; j++) {
        console.log(`for(inner): ${i}, ${j}`);
    }
}
```

4-2-5. break, continue in loops

-   Q1. iterate from 0 to 10 and print only even numbers(use continue)

```js

```

-   Q2. iterate from 0 to 10 and print number until reaching 8 (use break)

```js

```

<br>
#### Class - 5. Functions

**5-1. Functions**

1. fundamental building block on the program
2. function() ~ sub-program(): can be used multiple times
3. performs a task or calculates a value
4. Application Programming Interface: input(x) -> output(f(x))

-   **JavaScript is not a OOP language but a prototype based imperfect OOP**

5-1-1. function declaration

```
function name(param1, param2){
    body .... return;
}
```

1. one function executes one task
2. naming: doSomething, command, verb
   e.g) createCardAndPoint -> createCard, createPoint
3. **function is an object** in JavaScript

```js
function printHello() {
    console.log("Hello");
}

printHello();

function log(message) {
    console.log(message);
}

log("Hello@");
log(12345);
```

4. parameters
    - privitive parameter: passed by value
    - object parameter: passed by refernece

```js
function changeName(obj) {
    obj.name = "coder";
}

const sam = { name: "sam" };
changeName(sam);
console.log(sam.name);
```

5. default parameters (added in ES6)

```js
function showMessage(message, from = "unknown") {
    // if (from === undefined) {
    //     from = "unknown";
    // }
    console.log(`${message} by ${from}`);
}
showMessage("Hi");
```

6. rest parameters (added in ES6)

```js
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll("dream", "coding", "ellie");
```

5-1-2. function/variable scope

1. local scope: cannot see inside but can see outside

```js
let globalMessage = "global";
function printMessage() {
    let message = "hello";
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = "hello";
    }
    // console.log(childMessage); // error
}
printMessage();
print();
```

5-1-3. return a value

1. return type

```js
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${result}`);
```

2. no return == return undefined
3. early return, early exit

```js
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic....
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic....
}
```

5-1-4. first-class function / function expression

1. functions are treated like any other variable
2. can be assigned as a value to variable
3. can be assigned as an argument to other functions
4. can be returned by another function
5. a function declaration can be called earlier than it is defined. (hoisted)
6. a function expression is created when the executio reaches it

```js
console.log(sum(1, 2));
function sum(a, b) {
    return a + b;
}

// print(); // error
const print = function () {
    //anonymous function
    console.log("print");
};
print();
const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 3));
```

5-1-5. callback function using function expression

```js
function randomQuiz(answer, printYes, printNo) {
    if (answer === "love you") {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () {
    console.log("yes");
};
const printNo = function print() {
    console.log("yes");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);
```

5-1-6. named function vs. no-name function

1. named function is better debugging in debugger's stack traces
2. recursions

5-1-7. arrow function: always anonymous ~ one-line function

```js
const simplePrint = function () {
    console.log("simplePrint!");
};

const simplerPrint = () => console.log("simplerPrint!");
simplePrint();
simplerPrint();

const add = (a, b) => a + b;
console.log(add(2, 4));
```

5-1-8. IIFE: Immediately Invoked Function Expression

```js
(function hello() {
    console.log("IIFE");
})();
// hello();
```

**5-2. TypeScript intro.**

Refer to [TypeScript Playground](https://www.typescriptlang.org/play)

```ts
// Typescript code
function log(message: string): number {
    console.log(message);
    return 0;
}
```

```js
// JavaScript code: auto-casting
function log(message) {
    console.log(message);
    return 0;
```

Q1. function calculate(command, a, b)
command : add, substract, divide, multiply, remainder

```

```

<br>
#### Class - 6. Class vs. Object : OOP

**6-1. Class**

-   introducted in ES6
-   Systatical sugar over prototype-based inheritance
-   template, blueprint
-   declare once
-   no data in

**-> object**: instance of a class, created many times, data in

-   encapulation, inheritance, polymorphysm, ....

```js
class Person {
    constructor(name, age) {
        this.name = name; // property, field
        this.age = age;
    }
    // method
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const sam = new Person("sam", 32);
console.log(sam.name);
console.log(sam.age);
sam.speak();
```

6.1.1. get() / set() : getter/setter method for encapsulation

-   Consider call stack problem -> change variable name in getter and setter

```js
class Person {
    constructor(fname, lname, age) {
        this.firstname = fname; // property, field
        this.lastname = lname; // property, field
        this.age = age;
    }
    // to prevent closing callstack, we change field name in getter /setter.
    get age() {
        return this._age;
    }
    set age(value) {
        // if (value < 0) {
        //     throw Error("age cannot be negative.");
        // } else {
        //     this._age = value;
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user = new Person("Steve", "Job", -1);
console.log(user.age);
```

6.1.2. Fields of **private / public**

-   Not many browsers support -> may need to use BABEL

```js
class Experiment {
    publicField = 0;
    #privateField = 1;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
```

6.1.3. static

-   A code( property or method) reused frequently.
-   Follow class itself, not copied to an instance -> can save memory.

```js
class Article {
    static publisher = "Dream Coding";
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // 'undefined'
Article.printPublisher(); // static method
```

6.1.4. inheritance / polymorphism

```js
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of `);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        // overide
        console.log("triangle getArea()");
        super.draw();
    }
    getArea() {
        // overide
        return (this.width * this.height) / 2;
    }
    toString() {
        return `Triangle: color-${this.color}`;
    }
}

const rect = new Rectangle(20, 20, "blue");
rect.draw();
console.log(rect.getArea());
const tri = new Triangle(20, 20, "green");
tri.draw();
console.log(tri.getArea());

console.log(rect instanceof Rectangle);
console.log(tri instanceof Rectangle);
console.log(rect instanceof Shape);
console.log(tri instanceof Shape);
console.log(tri instanceof Object);
console.log(tri.toString());
```

6.1.5. instanceof() method and Object class

-   code: refer to **"above"**
-   Refer to [JavaScript MDN Reference page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)


