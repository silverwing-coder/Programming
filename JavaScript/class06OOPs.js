"use strict";

// class Person {
//     constructor(name, age) {
//         this.name = name; // property, field
//         this.age = age;
//     }
//     // method
//     speak() {
//         console.log(`${this.name}: hello!`);
//     }

//     get age() {
//         return this.age;
//     }
//     set age(value) {
//         if (value >= 0) {
//             this.age = value;
//         } else {
//             console.log("error set age.");
//         }
//     }
// }

// const sam = new Person("sam", 32);
// console.log(sam.name);
// console.log(sam.age);
// sam.speak();

// class Person {
//     constructor(fname, lname, age) {
//         this.firstname = fname; // property, field
//         this.lastname = lname; // property, field
//         this.age = age;
//     }
//     // to prevent closing callstack, we change field name in getter /setter.
//     get age() {
//         return this._age;
//     }
//     set age(value) {
//         // if (value < 0) {
//         //     throw Error("age cannot be negative.");
//         // } else {
//         //     this._age = value;
//         // }
//         this._age = value < 0 ? 0 : value;
//     }
// }

// const user = new Person("Steve", "Job", -1);
// console.log(user.age);

// class Experiment {
//     publicField = 0;
//     #privateField = 1;
// }

// const experiment = new Experiment();
// console.log(experiment.publicField);
// console.log(experiment.privateField);

// class Article {
//     static publisher = "Dream Coding";
//     constructor(articleNumber) {
//         this.articleNumber = articleNumber;
//     }

//     static printPublisher() {
//         console.log(Article.publisher);
//     }
// }

// const article1 = new Article(1);
// const article2 = new Article(2);
// console.log(article1.publisher);
// Article.printPublisher();

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
