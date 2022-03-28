var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CarClass = /** @class */ (function () {
    function CarClass(color) {
        this.name = "car";
        this.color = color;
    }
    CarClass.prototype.start = function () {
        console.log("start");
    };
    return CarClass;
}());
var BmwClass = /** @class */ (function (_super) {
    __extends(BmwClass, _super);
    function BmwClass(color) {
        return _super.call(this, color) || this;
    }
    BmwClass.prototype.showName = function () {
        console.log(this.name);
    };
    return BmwClass;
}(CarClass));
var z4 = new BmwClass("blue");
z4.showName();
var Shape = /** @class */ (function () {
    function Shape(corner) {
        this.corner = corner;
    }
    return Shape;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(corner) {
        var _this = _super.call(this, corner) || this;
        _this.name = "Triangle";
        return _this;
    }
    Triangle.prototype.showName = function () {
        console.log(this.name);
    };
    return Triangle;
}(Shape));
var tri = new Triangle(3);
tri.showName();
