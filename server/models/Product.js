const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    // productId: {
    //     type: Schema.Types.ObjectId,
    //     default: () => new Types.ObjectId()
    // },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    stock: {
        type: Number,
        min: 0,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        min: 0.99
    },
    image: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
});

const Product = model('Product', productSchema)

module.exports = Product