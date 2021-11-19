const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    stat: {
        type: Number,
        required: true
    },
    limit: {
        type: Boolean,
        required: true
    },
    passive: {
        type: Number,
        required: false
    }
}, {
    collection: 'items',
});

module.exports = mongoose.model('Items', itemSchema);