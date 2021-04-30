"use strict";
exports.__esModule = true;
exports.Points2 = void 0;
var Points2 //exporting
 = /** @class */ (function () {
    function Points2(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Points2.prototype.draw = function () {
        console.log('X: ' + this._x + ',Y: ' + this._y); //using underscore to use 'x' in future for better clarification.
    };
    Object.defineProperty(Points2.prototype, "x", {
        //Properties
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("value can't be less then 0");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Points2;
}());
exports.Points2 = Points2;
