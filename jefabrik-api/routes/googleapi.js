var express = require('express');
const { runReport } = require('../controller/googleapi');
var router = express.Router();

/* GET users listing. */
router.get('/analytics-data', async function(req, res, next) {
  const response = await runReport();
  res.status(200).send(response);
});

module.exports = router;
