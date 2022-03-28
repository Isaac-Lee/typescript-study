var usrKey1 = "id";
// const usrKey2: UserKey = "anykey"; : Error
// Partial<T>
var admin1 = {
    id: "1",
    name: "Admin"
};
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
var admin3 = {
    id: "3",
    name: "Admin",
    age: 23
};
// let admin4: UserInterface = {
//   id: "4", 
//   name: "Admin", 
// } : Error
// Readonly<T>
var admin5 = {
    id: "5",
    name: "Admin",
    age: 23
};
var score = {
    '1': 'A',
    '2': 'B',
    '3': 'C',
    '4': 'F'
};
function isVaild(user) {
    var result = {
        id: user.id !== undefined,
        name: user.name !== "",
        age: user.age > 0
    };
    return result;
}
