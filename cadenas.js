"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(cadena) {
        this.cadena = cadena;
    }
    Object.defineProperty(Cadena.prototype, "numpal", {
        get: function () {
            var c;
            c = this.cadena.split(" ");
            return c.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "numlet", {
        get: function () {
            return this.cadena.trim().length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "pali", {
        get: function () {
            if (this.cadena == this.cadena.split("").reverse().join(""))
                return "Es palindromo";
            else
                return "No es palindromo";
        },
        enumerable: true,
        configurable: true
    });
    return Cadena;
}());
exports.Cadena = Cadena;
