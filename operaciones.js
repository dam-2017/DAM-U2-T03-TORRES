"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Opera = (function () {
    function Opera() {
    }
    Opera.prototype.suma = function (num, num2) {
        return num + num2;
    };
    Opera.prototype.resta = function (num, num2) {
        return num - num2;
    };
    Opera.prototype.primo = function (num) {
        var i = 1;
        while (i < num) {
            if (num % i == 0 && i != 1) {
                return "No es primo";
            }
            i++;
        }
        return "Es primo";
    };
    Opera.prototype.factorial = function (num) {
        if (num == 0)
            return 1;
        else
            return (num * this.factorial(num - 1));
    };
    return Opera;
}());
exports.Opera = Opera;
