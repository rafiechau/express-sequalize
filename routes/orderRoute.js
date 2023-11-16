const express = require('express');
const { getOrders, addOrder } = require('../controllers/orderController');

const router = express.Router();

router.get('/', getOrders);
router.post('/add', addOrder);

module.exports = router;