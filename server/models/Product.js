const { Schema, model } = require('mongoose');

const productSchema = new Schema({

})

const Product = model('Product', productSchema)

module.exports = Product