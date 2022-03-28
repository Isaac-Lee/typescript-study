var name_string = 'kim';
var name_array = ['kim', 'park'];
var name_object1 = { name: 'kim' };
var name_object2 = {};
var string_or_number = 123;
var my_type_var = "KIM";
function func(x) {
    return x + 1;
}
var john1 = [123, true];
var john2 = { name: 'kim', age: '34' };
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
// Literal Types
var userName1 = "Bob";
var userName2 = "Tom";
var user1 = {
    name: "Bob",
    job: "developer"
};
function getGift(gift) {
    console.log(gift.color);
    if (gift.name === "car") {
        gift.start();
    }
    else {
        gift.call();
    }
}
var myToyCar = {
    name: "car",
    start: function () { },
    color: "blue",
    price: 1000
};
