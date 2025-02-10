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
//Intersection Types
// type typeAB = typeA & typeB;

//Type Aliases
type Name = string;
type Age = number;
type User = { name: Name, age: Age };
const user: User = { name: "Jhon", age: 30 };