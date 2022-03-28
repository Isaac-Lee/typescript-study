interface UserInterface {
  id: string;
  name: string;
  age: number;
}


// keyof
type UserKey = keyof UserInterface;

const usrKey1: UserKey = "id";
// const usrKey2: UserKey = "anykey"; : Error


// Partial<T>
let admin1: Partial<UserInterface> = {
  id: "1",
  name: "Admin"
}
// let admin2: UserInterface = {
//   id: "2", 
//   name: "Admin"
// } : Error

// let admin3: Partial<UserInterface> = {
//   id: "3", 
//   name: "Admin", 
//   job: "JOB"
// } : Error

// Required<T>
let admin3: Required<UserInterface> = {
  id: "3", 
  name: "Admin", 
  age: 23
}
// let admin4: UserInterface = {
//   id: "4", 
//   name: "Admin", 
// } : Error


// Readonly<T>
let admin5: Readonly<UserInterface> = {
  id: "5", 
  name: "Admin", 
  age: 23
}
// admin.id = "100" : Error


// Record<K,T>
// interface ScoreInterface {
//   '1': 'A' | 'B' | 'C' | 'F';
//   '2': 'A' | 'B' | 'C' | 'F';
//   '3': 'A' | 'B' | 'C' | 'F';
//   '4': 'A' | 'B' | 'C' | 'F';
// }
// const score: ScoreInterface = {
//   '1': 'A',
//   '2': 'B',
//   '3': 'C',
//   '4': 'F',
// }

type Grd = '1' | '2' | '3' | '4'
type Scr = 'A' | 'B' | 'C' | 'F'

const score: Record<Grd,Scr> = {
  '1': 'A',
  '2': 'B',
  '3': 'C',
  '4': 'F',
}

function isVaild(user: UserInterface) {
  const result: Record<keyof UserInterface, boolean> = {
    id: user.id !== undefined,
    name: user.name !== "",
    age: user.age > 0,
  };
  return result;
}


// Pick<T,K>
const admin6: Pick<UserInterface, "id" | "name"> = {
  id: "6",
  name: "Tim"
}


// Omit<T,K>
const admin7: Omit<UserInterface, "age"> = {
  id: "7",
  name: "Tim"
}


// Exclude<T1,T2>
type T1 = string | number | boolean
type T2 = Exclude<T1, number> // string | boolean


// NonNullable<T>
type T3 = string | null | undefined | void
type T4 = NonNullable<T3> // string | void