const { Schema, model } = require('mongoose');

const coOpSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    users: [{
        type: Schema.Type.ObjectId,
        ref: 'User'
    }],
    inventory: [{
        type: Schema.Type.ObjectId,
        ref: 'Product'
    }]
});

const CoOp = model('CoOp', coOpSchema);

module.exports = CoOp;
