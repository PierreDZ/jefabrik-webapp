var express = require('express');
const { runReport } = require('../controller/googleapi');
var router = express.Router();

/* GET users listing. */
router.get('/analytics-data', function(req, res, next) {
  const response = runReport();
  res.send('google api get data');
});

module.exports = router;
