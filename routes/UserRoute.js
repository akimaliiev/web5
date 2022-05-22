const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router();
router.get('/', (req, res) => res.render('index.ejs'));
router.post('/', UserController.create);
router.get('/:email', UserController.findOne);
router.get('/', UserController.findAll);
router.delete('/:email', UserController.destroy)

module.exports = router
