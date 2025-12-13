const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: ''
    },
    order: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Stats', statsSchema);
