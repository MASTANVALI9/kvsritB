const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: ['news', 'exams', 'placements', 'circulars']
    },
    date: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        default: '#'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('News', newsSchema);
