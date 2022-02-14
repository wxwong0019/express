const express = require('express');
const router = express.Router();
const {getAllCakes, createCake} = require('../controllers/cake');

router.route('/').get(getAllCakes)
router.route('/').post(createCake)

module.exports = router;