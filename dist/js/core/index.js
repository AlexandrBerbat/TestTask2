"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StartPort_1 = require("./StartPort");
var start = new StartPort_1.StartPort();
var RocketArr = start.getAllRockets();
for (var i = 0; i < RocketArr.length; i++) {
    console.log("\nPrepare to the next launch #" + (i + 1));
    RocketArr[i].launch();
}
