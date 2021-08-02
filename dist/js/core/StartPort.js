"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartPort = void 0;
var SpaceXRocket_1 = require("./RocketClasses/SpaceXRocket");
var NasaRocket_1 = require("./RocketClasses/NasaRocket");
var MilitaryRocket_1 = require("./RocketClasses/MilitaryRocket");
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var rocketAmount = 10;
var StartPort = (function () {
    function StartPort() {
    }
    StartPort.prototype.getAllRockets = function () {
        var resultRocketArr = [];
        var typeNum = 0;
        for (var i = 0; i < rocketAmount; i++) {
            typeNum = getRandomInt(0, 3);
            if (typeNum === 0) {
                resultRocketArr.push(new SpaceXRocket_1.SpaceXRocket());
            }
            else if (typeNum === 1) {
                resultRocketArr.push(new NasaRocket_1.NasaRocket());
            }
            else {
                resultRocketArr.push(new MilitaryRocket_1.MilitaryRocket());
            }
        }
        return resultRocketArr;
    };
    return StartPort;
}());
exports.StartPort = StartPort;
