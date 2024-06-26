// Import neccesary dependencies
const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const { validateRequest } = require('../middlewares/roomValidation');

// Create a new room
router.post('/create', validateRequest, roomController.createRoom);

// Retrieve all rooms
router.get('/all', roomController.getAllRooms);

// Retrieve a specific room by its ID
router.get('/:id', roomController.getRoomById);

// Update a specific room by its ID
router.patch('/:id', validateRequest, roomController.updateRoom);

//Delete a specific room by its ID
router.delete('/:id', roomController.deleteRoom);

module.exports = router;