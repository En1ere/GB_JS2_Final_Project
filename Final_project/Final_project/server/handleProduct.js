const fs = require('fs');

const handleProduct = (req, res) => {
    fs.readFile('./server/db/currentProduct.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
        } else {
            const { id_product, product_name, price, img } = JSON.parse(data);
            const currentProduct = {
                id_product: id_product,
                product_name: product_name,
                price: price,
                img: img
            };
            fs.writeFile('./server/db/currentProduct.json', JSON.stringify(currentProduct), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    res.send('{"result": 1}');
                }
            })
        }
    });
};

module.exports = handleProduct;