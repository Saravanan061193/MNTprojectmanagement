const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const auth = require('../middleware/auth');

// Get all clients
router.get('/', auth, clientController.getClients);

// Create a new client
router.post('/', auth, clientController.createClient);

// Get single client
router.get('/:id', auth, clientController.getClientById);

module.exports = router;
