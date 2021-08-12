var express = require('express');
const { runReport2 } = require('../controller/googleapi');
var router = express.Router();

/* GET users listing. */
router.get('/analytics-data-countries', async function(req, res, next) {
  const response = await runReport2();
  res.status(200).send(response);
});

module.exports = router;