const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const call_controller = require('../controllers/call.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', call_controller.calls_all);
router.post('/create', call_controller.call_create);
router.get('/:id', call_controller.call_details);
router.put('/:id/update', call_controller.call_update);
router.delete('/:id/delete', call_controller.call_delete);

module.exports = router;