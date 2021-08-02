var express = require('express');
var router = express.Router();

const { StartPort } = require("../../core/StartPort");
let rocketsArr = new StartPort().getAllRockets();

let IfRocketExists = (rocketsArr: any[], currentRocketName: any) => {
  let result: boolean = false;

  rocketsArr.forEach(item => {
    if (currentRocketName === item.name) {
      result = true
    }
  });

  return result;
}


router.get('/list', (req, res, next) => {
  rocketsArr.sort((a, b) => a.name > b.name ? 1 : -1);

  let resultArrStr: string = "";

  rocketsArr.forEach((item) => {
    resultArrStr += `<li>${item.name}</li>`;
  })

  res.send(`<ul>${resultArrStr}</ul>`)
});

router.get('/:name', (req, res, next) => {

  let reqName: string = req.params.name;
  let resultJson: any = {};
  let correctName: boolean = false;

  if (reqName == "list") {
    res.sendStatus(400)
  } else {

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
      res.sendStatus(404)
    } else {
      res.json(resultJson)
    }
  }


});

router.post("/add", (req, res, next) => {
  console.log(req.body);
  if (IfRocketExists(rocketsArr, req.body.name) || req.body.name === "list") {
    res.sendStatus(409);
  }
  else {
    rocketsArr.push({ "name": req.body.name })
    console.log("Added successfully!");
    res.sendStatus(200);

  }
})


module.exports = router;
