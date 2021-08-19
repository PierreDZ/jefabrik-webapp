var express = require('express');
const ClientController = require('../controller/client');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
    try{
        const response = await ClientController.getAllClients();
        res.status(response.code).send(response.data);
    }catch(error){
        res.status(500).send(error);
    }
});

/* GET user by ID. */
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id.toString();
        const response = await ClientController.getClientById(id);
        res.status(response.code).send(response.data);
    } catch (error) {
        res.status(500).send(error);
    }
  });

/* POST a new user. */
router.post('/', async (req, res) => {
    try{
        const response = await ClientController.createClient(req, res);
        res.status(response.code).send(response.data);
    }catch(error){
        res.status(500).send(error);
    }
});

/* DELETE user by ID. */
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id.toString();
        const response = await ClientController.deleteClientById(id);
        res.status(response.code).send(response.data);
    } catch (error) {
        res.status(500).send(error);
    }
  });

module.exports = router;
