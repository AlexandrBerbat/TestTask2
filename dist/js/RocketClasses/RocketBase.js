"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RocketBase = void 0;
var RocketBase = (function () {
    function RocketBase() {
    }
    RocketBase.prototype.launch = function () {
        console.log("The " + this.name + " launched at " + new Date() + "!");
    };
    return RocketBase;
}());
exports.RocketBase = RocketBase;
