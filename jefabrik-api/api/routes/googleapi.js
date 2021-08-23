var express = require('express');
const { runReport, runReportCountries, runReportSessions, runReportConversions } = require('../controller/googleapi');
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
  try{
    const response = await runReportCountries();
    res.status(200).send(response);
  }catch(error){
    res.status(500).send(error);
  }
});

router.get('/analytics-data-sessions', async function(req, res, next) {
  try{
    const response = await runReportSessions();
    res.status(200).send(response);
  }catch(error){
    res.status(500).send(error);
  }
});

router.get('/analytics-data-conversions', async function(req, res, next) {
  try{
    const response = await runReportConversions();
    res.status(200).send(response);
  }catch(error){
    res.status(500).send(error);
  }
});

module.exports = router;
