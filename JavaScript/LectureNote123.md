##### _Update: 4-July-2022_

## JavaScript Lecture Notes

<br>
#### Class - 1. JavaScript history

**1-1. History of Javascript**

1-1-1. **BABEL**: toll developed to support compatability of different web-browser and JavaScript versions

<br>
#### Class - 2. async vs. defe

**2-1. `<scryptsrc= ""></script>>` location and `async`, `defer` keyword : prefered to use `defer`**

-   `<scrypt async ...>` vs. `<scrypt defer ... >`

2-1-1. Within `<head>` section: parcing HTML -> fetch and execute script -> continue parcing HTML

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src = "index.js"></script>
    <title>Document</title>
</head>
<body>
<div></div>

</body>
</html>
```

2-1-2. At the end of `<body>` section: parcing HTML to the end -> fetch and execute script

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<div></div>

<script src = "index.js"></script>
</body>
</html>
```

2-1-3. `asnyc` : parcing HTML -> asynchronously fetch script -> block parcing and execute script -> continue parcing HTML

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script async src = "index.js"></script>
    <title>Document</title>
</head>
<body>
<div></div>

</body>
</html>
```

2-1-4. `defer` : parcing HTML -> asynchronously fetch and execute script -> continue parcing HTML

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script defer src = "index.js"></script>
    <title>Document</title>
</head>
<body>
<div></div>

</body>
</html>
```

**2-2. `'use strict'` keyword**

-   JavaScript is a very flexible language which is very dangerous too.
-   `'use strict'` keyword requres to comply with strict programming rule and syntax of programming rule
-   added in ES5(ECMA Scrypt 5). not necessary to use in TypeScript

<br>
#### Class - 3. Data types

**3-1. Variable Types**

3-1-1. `let` vs. `var`

-   `let` : **cannot be used before variable declaration**.
    -   included in ES6 and **use this**.
-   `var` : can be assigned/used before variable declaration.
    -   **don't ever use this**.
    -   hoisting: move declaration from the bottom to the top.
    -   block scope not applied

3-1-2. `const` variable

-   mutable vs. immutable data type
-   **favor mutable data** type always for reasons of

    -   security
    -   thread safety
    -   reduce human mistakes

    ```js
    const daysInweek = 7;
    const maxNumber = 3;
    ```

**3-2 scope of variables**

```js
//1. Follow strict programming rules
"use strict";

//2. Variable: let (added in ES6)
// global scope
let globalName = "global name";

// block scope
{
    console.log(globalName);

    let name = "Sam";
    console.log(name);
    name = "Bob";
    console.log(name);
}

console.log(globalName);
console.log(name);
```

**3-3 Data types**

-   primitive : single item - number, string, boolean, null, undefined, symbol
-   object : box container
-   function : first class function - can be used as a varable, function parameter and function return type

```c
// c-programming
short a = 12;
int b = 123;
long c = 1234;
float d = 12.12f;
double e = 123.123;
return 0;
```

```js
// JavaScript-programming
// number data type
let a = 12;
let b = 123;
let c = 1234;
let d = 12.12;
let e = 123.123;

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof count}`);

// special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt: don't use yet
const bigInt = 123456789012345678901234567890123456789012345678901234567890n; // over (-2^53 ~ 2^53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
console.log(Number.MAX_SAFE_INTEGER);

// string
const char = "c";
console.log(`value: ${char}, type: ${typeof char}`);
const brendan = "brendon";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol: create unique identification for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1);
// console.log(`${symbol1}`);
console.log(symbol1 == symbol2);

symbol1 = Symbol.for("id");
symbol2 = Symbol.for("id");
console.log(symbol1);
// console.log(`${symbol1}`);
console.log(symbol1 == symbol2); // false

const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1);
// console.log(`${symbol1}`);
console.log(symbol1 == symbol2);

const gSymbol1 = Symbol.for("ida");
const gSymbol2 = Symbol.for("ida");
console.log(gSymbol1);
// console.log(`${symbol1}`);
console.log(gSymbol1 == gSymbol2); // true
console.log(
    `value: ${symbol1.description}, type: ${typeof gSymbol1.description}`
);

// object: real-life object, data structure
const sam = { name: "SAM", age: 55 };
console.log(sam);
console.log(sam.name);
sam.age = 20;
console.log(sam);
```

**3-4 Dynamic typing**

-   JavaScript : dynamic typed language vs. statically typed language(c, java, ...)

```js
let text = "hello";
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "4" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); //error -> TypeScript(BABEL)
```
