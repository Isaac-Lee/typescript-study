function getSize(arr) {
    return arr.length;
}
var arr1 = [1, 2, 3];
console.log(getSize(arr1));
var arr2 = ['1', '2', '3'];
console.log(getSize(arr2));
var arr3 = [false, true, true];
console.log(getSize(arr3));
var arr4 = [{}, {}, { name: "TIM" }];
console.log(getSize(arr4));
var m1 = {
    name: "s21",
    price: 1000,
    option: {
        color: "red",
        coupon: false
    }
};
var m2 = {
    name: "s20",
    price: 900,
    option: "good"
};
var named1 = { name: "named1", numProp: 1 };
var named2 = { name: "named2", numProp: 2 };
var unnamed = { numProp: 1 };
