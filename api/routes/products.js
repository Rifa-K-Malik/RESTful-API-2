const express = require('express');
const router = express();
const mongooose = require('mongoose')

const Product = require('./models/products')

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message:' Handling GET request to /products'
    });
});

router.post('/', (req, res, next) =>{
   const product = new Product ({
       _id: new mongooose.Types.ObjectId(),
       name: req.body.name,
       price: req.body.price
   });
   product.save().then(result => {
       console.log(result);
   })
   .catch(err => console.log(err));
   res.status(201).json({
       message: 'Handling POST request to /products',
       createdProduct : product
   });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message:' you discover special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message:' you passed an ID',
        });
    }
});

router.patch('/:productId', (req, res, next) => {
     res.status(200).json({
            message:'Updated products',
        });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
           message:'Deleted products',
       });
});

module.exports = router