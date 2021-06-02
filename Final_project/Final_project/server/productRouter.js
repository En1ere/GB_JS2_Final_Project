const express = require('express');
const fs = require('fs');
const router = express.Router();
const handleProduct = require('./handleProduct');

router.get('/api/product', (req, res) => {
    console.log(`pass`)
    fs.readFile('./server/db/currentProduct.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
            console.log(`pass!`)
        } else {
            res.send(data);
            console.log(`Nope`)
        }
    });
});

router.post('/api/product', (req, res) => {
    handleProduct(req, res);
});

module.exports = router;