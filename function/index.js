"use strict";
exports.__esModule = true;
function isAdult(age) {
    return age > 19;
}
function hello(name) {
    return "Hello, ".concat(name || "world");
}
function helloTo(name, age) {
    if (age == undefined) {
        return "Hello, ".concat(name, ".");
    }
    return "Hello, ".concat(name, ". You are ").concat(age, ".");
}
console.log(hello());
console.log(hello('Sam'));
console.log(helloTo('Sam'));
console.log(helloTo('Sam', 23));
function add() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (result, num) { return result + num; }, 0);
}
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5, 6));
var Sam = {
    name: 'Sam',
    age: 23
};
function showName(age, gender) {
    console.log(this.name, age, gender);
}
var a = showName.bind(Sam);
a();
function join(name, age) {
    if (typeof age === "number") {
        return { name: name, age: age };
    }
    else {
        return "Enter the age as number.";
    }
}
var sam = join("Sam", 23);
var jane = join("Jane", "24");
