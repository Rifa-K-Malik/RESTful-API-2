const express = require('express');
const app = express();
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/order');


mongoose.connect('mongodb+srv://RifaKMalik:' + process.env.MONGO_ATLAS_PW + '@cluster0.acndi.mongodb.net/<dbname>?retryWrites=true&w=majority' , {
    useMongoClient: true
});

app.use('/products', productRoutes);
app.use('/order', orderRoutes);


module.exports = app