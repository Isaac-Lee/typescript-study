var user = {
    name: 'kim',
    age: 23,
    birthYear: 2000,
    1: 'A',
    2: 'B'
};
user.age = 10;
user.gender = "male";
var add = function (x, y) {
    return x + y;
};
add(10, 20);
var a = function (age) {
    return age > 19;
};
var BMW = /** @class */ (function () {
    function BMW(color) {
        this.wheels = 4;
        this.color = color;
    }
    BMW.prototype.start = function () {
        console.log("go...");
    };
    return BMW;
}());
var bmw = new BMW('white');
console.log(bmw);
bmw.start();
var merc = {
    color: 'silver',
    wheels: 4,
    door: 4,
    start: function () {
        console.log("go...");
    },
    stop: function () {
        console.log('stop');
    }
};
