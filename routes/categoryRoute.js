const express = require('express');
const { getCategory, addCategory } = require('../controllers/categoryController');
const router = express.Router();

router.get('/', getCategory)
router.post('/add', addCategory)

module.exports = router;