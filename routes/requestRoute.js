
const express = require('express');
const router = express.Router();
const requestController = require('../controllers/requestController.js');
const authMiddleware = require('../middlewares/authMiddleware.js');

router.get('/', authMiddleware, requestController.getAllRequests);
router.post('/', authMiddleware, requestController.createRequest);
router.put('/:id', authMiddleware, requestController.updateRequestStatus);
router.delete('/:id', authMiddleware, requestController.deleteRequest);

module.exports = router;