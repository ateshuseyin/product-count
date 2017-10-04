const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbpool');
const router = express.Router();

const SELECT_PRODUCT = "SELECT * FROM product WHERE barcode = ?";
const UPDATE_QUANTITY = "UPDATE product SET quantity_count = ? WHERE barcode = ?"

router.use(bodyParser.json());

router.get('/product/:barcode', function (req, res) {
  db.query(SELECT_PRODUCT, [req.params.barcode], function (error, results) {
    if (error) {
      res.status(500).send({message: error.message});
      return;
    }

    if (results.length === 0) {
      res.status(404).send({message: 'Not found!'});
      return;
    }

    res.json(results[0]);
  });
});

router.post('/product/:barcode', function (req, res) {
  db.query(UPDATE_QUANTITY, [req.body.quantity, req.params.barcode], function (error, results) {
    if (error) {
      res.status(500).send({message: error.message});
      return;
    }
    if (results.changedRows === 1) {
      res.json({
        message: 'Success'
      });
    } else {
      res.status(404).send({message: 'Not found!'});
    }
  });
});

module.exports = router;