import { result } from "lodash";

function isAdult(age: number): boolean{
  return age > 19;
}

function hello(name?: string): string{
  return `Hello, ${name || "world"}`
}

function helloTo(name: string, age?: number): string {
  if (age == undefined)  {
    return `Hello, ${name}.`;
  }
  return `Hello, ${name}. You are ${age}.` ;
}

console.log(hello());
console.log(hello('Sam'));
console.log(helloTo('Sam'));
console.log(helloTo('Sam', 23));

function add(...nums) {
  return nums.reduce((result, num) => result + num, 0);
}

console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5, 6));

interface User {
  name: string;
  age: number
}

const Sam: User = {
  name: 'Sam',
  age: 23
}

function showName(this: User, age: number, gender: 'm'|'f') {
  console.log(this.name, age, gender);
}

const a = showName.bind(Sam);
a();

// function overload
function join(name: string, age: number): User;
function join(name: string, age: string): string;
function join(name: string, age: number | string): User | string{
  if (typeof age === "number") {
    return {name, age};
  } else {
    return "Enter the age as number."
  }
}

const sam: User = join("Sam", 23);
const jane: string = join("Jane", "24");