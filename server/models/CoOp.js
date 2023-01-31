const { Schema, model } = require('mongoose');

const coOpSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    users: [User.schema],
    inventory: [Product.Schema]
});

const CoOp = model('Co-Op', coOpSchema);

module.exports = CoOp;
