//Primitive Types
//booleans
let isTrue: boolean = true;
let isFalse: boolean = false;
//numbers
let intValue: number = 44;
let floatValue: number = 3.14;
//string
let stringValue: string = 'Bernat Alcudia';
//function void not return value
function voidFunction(): void {
    return;
}
//function multiply number
function multiply(numberOne: number, numberTwo: number) {
    return numberOne * numberTwo;
}
//function undefined and null
function doSomething(stringOrNull: string | null) {
    if (stringOrNull === null) {
        //do nothing
    } else {
        console.log('Hello, ' + stringOrNull.toUpperCase());
    }
}
//function any
function anyFunction(anyParam: any) {
    console.log('Any type: ' + anyParam)
}
//----------------------------------------------------------------------------
// Object types
//Interface person
interface Person {
    name: string;
    age: number;
}
function greet(person: Person) {
    return 'Hello ' + person;
}
//Class car
class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;

    }

    drive() {
        console.log("Driving my" + this.year + this.make + this.model);
    }
}
//Enum
enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}
//Array
const numbers: number[] = [1, 2, 3, 4];
//Tuple
type stringNumberPair = [string, number];

const pair: stringNumberPair = ["hi", 7];

const first = pair[0];
const second = pair[1];
//Any
let obj: any = { x: 0 };
//Never
function error(message: string): never {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop(): never {
    while (true) {

    }
}
//Assertions
//As type
let someValue: any = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;

console.log(strLength);
//As any
let anyValue: any = 42;

anyValue = "Hello, world";
anyValue = true;
//As Const
const colors = ["red", "green", "blue"] as const;

//Non null assertion
let name2: string | null = null;
let nameLength = name2!.length;

//Union Types
function combine(input1: string | number, input2: string | number) {

}
//Combining Types
//Intersection Types
// type typeAB = typeA & typeB;

//Type Aliases
type Name = string;
type Age = number;
type User = { name: Name, age: Age };
const user: User = { name: "Jhon", age: 30 };
//keyof Operator
interface User2 {
    name: string;
    age: number;
    location: string;
}
type UserKeys = keyof User2;
const key: UserKeys = "name";
//Type Guards
//instanceof operator
class Bird {
    age: number;
    wings: string;
    constructor(age: number, wings: string) {
        this.age = age;
        this.wings = wings;
    }
    fly() {
        console.log("flying...");
    }
    layEggs() {
        console.log("laying eggs...")
    }
}
const pet = new Bird(15, "black");

if (pet instanceof Bird) {
    pet.fly();
} else {
    console.log("pet is not a bird")
}
//typeof Operator
let value: string | number = "hi";
if (typeof value === "string") {
    console.log("value is a string");
} else {
    console.log("value is a number");
}
//Equality
function example(x: string | number, y: string | boolean) {
    if (x === y) {
        x.toUpperCase();
        y.toLowerCase();
    } else {
        console.log(x);
        console.log(y);
    }
}
//Truthiness
function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
        return `There are ${numUsersOnline} online now!`;
    }
    return "Nobodys here:(";
}
//Type Predicates
function isString(value: unknown): value is string {
    return typeof value === "string";
}
function example1(x: unknown) {
    if (isString(x)) {
        x.toUpperCase();
    } else {
        console.log(x);
    }
}
//Interfaces
//Extending Interfaces
interface Shape {
    width: number;
    height: number;
}
interface Square extends Shape {
    sideLength: number;
}
let Square = {
    with: 10,
    height: 10,
    sideLength: 10,
};
//Hybrid Types
type StringOrNumber = string | number;
type Education = {
    degree: string;
    school: string;
    year: number;
};
type User3 = {
    name: string;
    age: number;
    email: string;
    education: Education;
}
//Generics
//Generic Types
function identity<T>(arg: T): T {
    return arg;
}
let output = identity<string>("Hello");
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};