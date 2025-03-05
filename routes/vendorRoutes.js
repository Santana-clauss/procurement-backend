const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController.js');
// const authMiddleware = require('../middlewares/authMiddleware.js');

// Get all vendors
router.get('/', /*authMiddleware,*/ vendorController.getAllVendors);

// Create a new vendor
router.post('/', /*authMiddleware,*/ vendorController.createVendor);

// Update a vendor
router.put('/:id', /*authMiddleware,*/ vendorController.updateVendor);

// Delete a vendor
router.delete('/:id', /*authMiddleware,*/ vendorController.deleteVendor);

module.exports = router;
