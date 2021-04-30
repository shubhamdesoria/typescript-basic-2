"use strict";
exports.__esModule = true;
var point_1 = require("./point"); //importing from point.ts
// First log message
function log(message) {
    console.log(message);
}
var message = 'Hello Crownstack';
log(message);
//global and block scope
function globalScope() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally' + i);
}
function blockScope() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // I is not in the block hence can't be used.
    console.log('Finally' /* + i */);
}
// Variable Declaration
var count = 5;
// can't change the type of the variable if defined count = 'a';
//Variable Declaration with types
var a;
var b;
var c;
var d;
var e;
var f = [1, 2, 3];
var g = ['string', 2, true, null];
//Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var bgColor = Color.Red;
console.log(bgColor);
//Type Assertions
var msg;
msg = 'text';
// let endsWithC = (<string> msg).endsWith('t');
// let alternativeWay = (msg as string).endsWith('t');
//Arrow Functions
var doLog = function (message) { return console.log(message); };
//Custom Types
var drawPoint = function (point) {
    //...
};
drawPoint({
    x: 1,
    y: 2
});
var drawPointTwo = function (point) {
    //...
};
drawPointTwo({
    a: 3,
    b: 4
});
//Cohesion and Using Class
var Point1 = /** @class */ (function () {
    function Point1() {
    }
    Point1.prototype.draw = function () {
        console.log('X: ' + this.x + ',Y: ' + this.y);
    };
    Point1.prototype.getDistance = function (another) {
        //...
    };
    return Point1;
}());
var point = new Point1();
point.x = 1;
point.y = 2;
point.draw();
//Constructors
var Points = /** @class */ (function () {
    function Points(x, y) {
        this.x = 1;
        this.y = 2;
    }
    Points.prototype.draw = function () {
        console.log('X: ' + this.x + ',Y: ' + this.y);
    };
    return Points;
}());
var points = new Points();
points.x = 1;
points.y = 2;
// Access modifiers
// Adding module for these point to work at the top
var points2 = new point_1.Points2(5, 6);
point.x = 10;
point.draw();
