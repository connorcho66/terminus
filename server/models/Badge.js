const { Schema, model } = require('mongoose');

const badgeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    }
});

const Badge = model('Badge', badgeSchema);

module.exports = Badge