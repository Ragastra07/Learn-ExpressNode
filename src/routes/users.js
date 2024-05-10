const express = require('express');
const UsersController = require('../controller/UsersController.js')
const router = express.Router();
 
// CREATE - POST
router.post('/', UsersController.CreateNewUsers);
// REED - GET
router.get('/', UsersController.getAllUsers);
// UPDATE - PATCH
router.patch('/:id', UsersController.UpdateUsers);
// DELETE - DELETE
router.delete('/:id', UsersController.DeleteUsers);




    module.exports = router;