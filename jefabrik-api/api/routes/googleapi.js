var express = require('express');
const { runReport,runReport2 } = require('../controller/googleapi');
var router = express.Router();

/* GET users listing. */
router.get('/analytics-data', async function(req, res, next) {
  try{
    const response = await runReport();
    res.status(200).send(response);
  }catch(error){
    res.status(500).send(error);
  }
});

router.get('/analytics-data-countries', async function(req, res, next) {
  const response = await runReport2();
  res.status(200).send(response);
});

module.exports = router;
