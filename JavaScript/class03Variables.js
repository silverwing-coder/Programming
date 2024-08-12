"use strict";

// let name = "Sam";
// console.log(name);

// const count = 17;
// const size = 17.1;
// console.log(`value: ${count}, type: ${typeof count}`);
// console.log(`value: ${size}, type: ${typeof count}`);

// const infinity = 1 / 0;
// const negativeInfinity = -1 / 0;
// const nAn = "not a number" / 2;
// console.log(infinity);
// console.log(negativeInfinity);
// console.log(nAn);

// const bigInt = 123456789012345678901234567890123456789012345678901234567890n;
// console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
// console.log(Number.MAX_SAFE_INTEGER);

// const char = "c";
// console.log(`value: ${char}, type: ${typeof char}`);
// const brendan = "brendon";
// const greeting = "hello " + brendan;
// console.log(`value: ${greeting}, type: ${typeof greeting}`);
// const helloBob = `hi ${brendan}!`; //template literals(string)
// console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// const canRead = true;
// const test = 3 < 1;
// console.log(`value: ${canRead}, type: ${typeof canRead}`);
// console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol
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

let text = "hello";
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "4" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0));

const sam = { name: "SAM", age: 55 };
console.log(sam);
console.log(sam.name);
sam.age = 20;
console.log(sam);
