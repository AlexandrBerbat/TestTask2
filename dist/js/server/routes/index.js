var express = require('express');
var router = express.Router();
var StartPort = require("../../core/StartPort").StartPort;
var rocketsArr = new StartPort().getAllRockets();
var IfRocketExists = function (rocketsArr, currentRocketName) {
    var result = false;
    rocketsArr.forEach(function (item) {
        if (currentRocketName === item.name) {
            result = true;
        }
    });
    return result;
};
router.get('/list', function (req, res, next) {
    rocketsArr.sort(function (a, b) { return a.name > b.name ? 1 : -1; });
    var resultArrStr = "";
    rocketsArr.forEach(function (item) {
        resultArrStr += "<li>" + item.name + "</li>";
    });
    res.send("<ul>" + resultArrStr + "</ul>");
});
router.get('/:name', function (req, res, next) {
    var reqName = req.params.name;
    var resultJson = {};
    var correctName = false;
    if (reqName == "list") {
        res.sendStatus(400);
    }
    else {
        if (IfRocketExists(rocketsArr, reqName)) {
            correctName = true;
            resultJson = {
                "status": 200,
                "data": {
                    "name": reqName,
                    "data": new Date().toISOString()
                }
            };
        }
        if (correctName == false) {
            res.sendStatus(404);
        }
        else {
            res.json(resultJson);
        }
    }
});
router.post("/add", function (req, res, next) {
    console.log(req.body);
    if (IfRocketExists(rocketsArr, req.body.name) || req.body.name === "list") {
        res.sendStatus(409);
    }
    else {
        rocketsArr.push({ "name": req.body.name });
        console.log("Added successfully!");
        res.sendStatus(200);
    }
});
module.exports = router;
