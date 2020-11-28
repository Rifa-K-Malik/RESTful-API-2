const express = require('express');
const router = express();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        message:' Handling GET request to /products'
    });
});

router.post('/', (req, res, next) =>{
    res.status(200).json({
        message:' Handling POST request to /products'
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