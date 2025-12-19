const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculator.controller');

router.post('/add', calculatorController.add);
router.post('/sub', calculatorController.sub);
router.post('/mul', calculatorController.mul);
router.post('/div', calculatorController.div);
router.post('/puissance', calculatorController.puissance);

module.exports = router;
