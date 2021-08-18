var express = require('express');
const ClientService = require('../controller/client');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    try{
        const response = /*await*/ ClientService.getAllClients();
        res.status(response.code).send(response.data);
    }catch(error){
        res.status(500).send(error);
    }
});

router.get('/:id', function(req, res, next) {
    try {
        const id = req.params.id.toString();
        const response = /*await*/ ClientService.getClientById(id);
        res.status(response.code).send(response.data);
    } catch (error) {
        res.status(500).send(error);
    }
  });

module.exports = router;
