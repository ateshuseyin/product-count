const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbpool');
const mysql = require('mysql');
const router = express.Router();

const SELECT_PRODUCT = "SELECT * FROM product WHERE barcode = ?";
const UPDATE_QUANTITY = "UPDATE product SET quantity_count = ? WHERE barcode = ?"

router.use(bodyParser.json());

router.get('/product/:barcode', function (req, res) {
  const query = mysql.format(SELECT_PRODUCT, [req.params.barcode]);
  db.query(query, function (error, results) {
    if (error) {
      res.status(500).send({message: error.message});
      return;
    }

    if (results.length === 0) {
      res.status(404).send({message: 'Ürün bulunamadı!'});
      return;
    }

    res.json(results[0]);
  });
});

router.post('/product/:barcode', function (req, res) {
  const query = mysql.format(UPDATE_QUANTITY, [req.body.quantity, req.params.barcode]);
  db.query(query, function (error) {
    if (error) {
      res.status(500).send({message: error.message});
      return;
    }
    res.json({
      message: 'Success'
    });
  });
});

module.exports = router;