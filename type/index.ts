let name_string: string = 'kim';
let name_array: string[] = ['kim', 'park'];
let name_object1: {name: string} = {name : 'kim'}
let name_object2: {name?: string} = { };
let string_or_number: string | number = 123;

type My_type = string | number;
let my_type_var: My_type = "KIM";

function func(x: number): number {
  return x + 1
}
// func(1): OK, func('1'): Error

type Member1 = [number, boolean];
let john1: Member1 = [123, true];

type Member2 = {
  [key: string] :string,
}
let john2:Member2 = {name:'kim', age:'34'};

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}