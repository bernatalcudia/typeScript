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
}
