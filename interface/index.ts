type Score = 'A' | 'B' | 'C' | 'F';

interface User {
  name :string;
  age :number;
  gender? :string;
  readonly birthYear :number;
  [grade:number] :Score;
}

let user : User = {
  name : 'kim',
  age : 23,
  birthYear : 2000,
  1 : 'A',
  2 : 'B'
}

user.age = 10;
user.gender = "male";


interface Add {
  (num1 :number, num2 :number) :number;
}

const add :Add = function(x, y) {
  return x + y;
}

add(10, 20);

interface IsAdult {
  (age :number) :boolean;
}

const a :IsAdult = (age) => {
  return age > 19;
}

interface Car {
  color :string;
  wheels :number;
  start() :void;
}

interface Merc extends Car {
  door :number;
  stop() :void;
}

class BMW implements Car {
  color;
  wheels = 4;

  constructor(color :string) {
    this.color = color;
  }

  start() {
    console.log("go...")
  }
}

const bmw = new BMW('white');
console.log(bmw)
bmw.start();

const merc :Merc = {
  color: 'silver',
  wheels: 4,
  door: 4,
  start() {
    console.log("go...")
  },
  stop() {
    console.log('stop');
  }
}

interface Toy {
  name :string;
}

interface ToyCar extends Car, Toy {
  price :number;
}