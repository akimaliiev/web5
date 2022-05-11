const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router();
router.get('/', (req, res) => res.render('index.ejs'));
router.post('/', UserController.create);
module.exports = router
