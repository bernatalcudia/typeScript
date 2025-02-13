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
//Generic Constraints
interface Lengthwise {
    length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);

    return arg;
}
loggingIdentity({ length: 10, value: 3 });
//TypeScript Functions
//Typing Functions

//Function declaration with types:
function add(a: number, b: number): number {
    return a + b;
}
// Arrow function with types:
const multiply2 = (a: number, b: number): number => {
    return a * b;
}
//Function type:
let divide: (a: number, b: number) => number;

divide = (a, b) => {
    return a / b;
};
//Function Overloading
function add1(a: number, b: number): number;
function add1(a: string, b: string): string;

function add1(a: any, b: any): any {
    return a + b;
}
//Classes
//Constructor Params
class Example {
    constructor(private name: string, public age: number) {//Access Modifiers:public,private,protected
    }
}
//Abstract Classes
abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log("moving...")
    }
}
// Method Overriding

class Dog extends Animal {
    makeSound(): void {
        console.log("bark")
    }
}

//Inheritance vs Polymorphism
class Animal1 {
    makeSound(): void {
        console.log("animal making a sound")
    }
}
class Dog1 extends Animal1 {
    makeSound(): void {
        console.log("bark")
    }
}
class Cat extends Animal1 {
    makeSound(): void {
        console.log("meow")
    }
}
let animal = Animal1;
// Constructor Overloading
class Point {
    //Overloads
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {

    }
}
// Utility Types
//Partial
interface Three {
    seed: number,
    leaf: string,
    fruit: boolean
}

function createThree(three: Partial<Three>): Three {
    return {
        seed: 55,
        leaf: "dark",
        fruit: false,
        ...three,
    };
}
const newThree = createThree({ seed: 32 });
console.log(newThree);
//Pick
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPick = Pick<Todo, "title" | "completed">;

const todo: TodoPick = {
    title: "Order Room",
    completed: true,
};
//Omit
type TodoOmit = Omit<Todo, "title">;

const todo1: TodoOmit = {
    description: "back",
    completed: true,
};

//Readonly
const todo2: Readonly<Todo> = {
    title: "dark",
    description: "souls",
    completed: true,
};
//Record
interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Short" }
}
//Exclude
type T0 = Exclude<"a" | "b" | "c", "a">;//b | c
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;//c
type T2 = Exclude<string | number | (() => void), Function>; // string | number

//Extract
type T01 = Extract<"a" | "b" | "c", "a" | "f">;//=a

// Awaited
type A = Awaited<Promise<string>>;
//type A = string
type B = Awaited<Promise<Promise<number>>>;
//type B = number
type C = Awaited<boolean | Promise<number>>;
//type C = number | boolean

// Parameters
type text = Parameters<() => string>;
//type text = []
type textParam = Parameters<(s: string) => void>;
//type textParam = [s: string]
type textArg = Parameters<<T>(arg:T)=>T>;
//type textArg = [arg:unknown]
declare function f1(arg:{a:number,b:string}):void;
type numberString = Parameters<typeof f1>;
//type numberString = [arg:{
// a:number;
// b:string;
// }]
type anyParam = Parameters<any>;
//type anyParam = unknown[]
type neverParam = Parameters<never>;
//type neverParam = never

// Non Nullable
type noNull = NonNullable<string | number | undefined>;
// type noNull = string | number
type noNull1 = NonNullable<string[] | null | undefined>;
// type noNull1 = string[]

// ReturnType
type T20 = ReturnType<() => string>;
// type T0 = string

type T11 = ReturnType<(s: string) => void>;
// type T1 = void

// InstanceType
class CA {
X=0;
Y=0;
}
type CAs = InstanceType<typeof CA>;
//type  CAs = CA
type instanceAny = InstanceType<any>;
// type instanceAny = any

// Advanced Types

// Mapped Types
type Readonly1<T> = {
readonly[P in keyof T]:T[P];
};

let obj1 = {x:10,y:20};
let readonlyObj: Readonly1<typeof obj> = obj;