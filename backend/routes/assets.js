const express = require('express');
const router = express.Router();
const assetController = require('../controllers/assetController');
const auth = require('../middleware/auth');

// Get all assets (global view)
router.get('/', auth, assetController.getAllAssets);

// Get assets for a specific client
router.get('/client/:clientId', auth, assetController.getAssets);

// Create a new asset
router.post('/', auth, assetController.createAsset);

// Reveal asset credentials
router.get('/reveal/:id', auth, assetController.revealAsset);

// Update an asset
router.put('/:id', auth, assetController.updateAsset);

// Renew an asset
router.put('/renew/:id', auth, assetController.renewAsset);

module.exports = router;
