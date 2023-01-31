const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

const Order = model('Order', orderSchema);

module.exports = Order;