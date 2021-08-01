var express = require('express');
var router = express.Router();

const { StartPort } = require("../../core/StartPort");
let rocketsArr = new StartPort().getAllRockets();


router.get('/list', (req, res, next) => {
  rocketsArr.sort((a, b) => a.name > b.name ? 1 : -1);

  let resultArrStr: string = "";
  // rocketsArr.foreach(item => resultArrStr.push(`<li>${item.name}</li>`));

  rocketsArr.forEach((item) => {
    resultArrStr += `<li>${item.name}</li>`;
  })

  res.send(`<ul>${resultArrStr}</ul>`)

  // res.sendStatus(200);
});

router.get('/:name', (req, res, next) => {

  let reqName: string = req.params.name;
  let resultJson: any = {};
  let correctName: boolean = false;

  if (reqName == "list") {
    res.sendStatus(400)
  } else {

    rocketsArr.forEach(item => {
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
      res.sendStatus(404)
    }else {
      res.json(resultJson)
    }
  }


});

module.exports = router;
