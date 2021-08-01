var express = require('express');
var router = express.Router();
var StartPort = require("../../core/StartPort").StartPort;
var rocketsArr = new StartPort().getAllRockets();
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
        rocketsArr.forEach(function (item) {
            if (reqName === item.name) {
                correctName = true;
                resultJson = {
                    "status": 200,
                    "data": {
                        "name": item.name,
                        "data": new Date().toISOString()
                    }
                };
            }
        });
        if (correctName == false) {
            res.sendStatus(404);
        }
        else {
            res.json(resultJson);
        }
    }
});
module.exports = router;
