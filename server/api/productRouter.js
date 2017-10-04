const express = require('express');
const db = require('./dbconnection');
const router = express.Router();

router.get('/product/:id', function (req, res) {
res.json({productId:req.params.id});
});

router.post('/product/:id', function (req, res) {

});

module.exports = router;