function getSize<T>(arr: T[]):number {
  return arr.length;
}

const arr1 = [1,2,3];
console.log(getSize<number>(arr1))

const arr2 = ['1','2','3'];
console.log(getSize<string>(arr2))

const arr3 = [false,true,true];
console.log(getSize(arr3))

const arr4 = [{},{},{name: "TIM"}];
console.log(getSize(arr4))

interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

type Option1 = {
  color: string;
  coupon: boolean;
}

const m1: Mobile<Option1> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
}

const m2: Mobile<string> = {
  name: "s20",
  price: 900,
  option: "good"
}


interface NamedObj1 {
  name: string;
  numProp: number;
}

interface NamedObj2 {
  name: string;
  numProp: number;
}

interface UnNamedObj {
  numProp: number;
}

const named1: NamedObj1 = {name: "named1", numProp: 1}
const named2: NamedObj2 = {name: "named2", numProp: 2}
const unnamed: UnNamedObj = {numProp: 1}

function showName<T extends {name: string}>(data: T): string {
  return data.name;
}

console.log(showName(named1))
console.log(showName(named2))
// console.log(showName(unnamed)) : Error