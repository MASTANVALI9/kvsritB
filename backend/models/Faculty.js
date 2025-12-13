const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    designation: {
        type: String,
        required: true,
        enum: ['Professor', 'Associate Professor', 'Assistant Professor', 'HOD', 'Principal', 'Lecturer']
    },
    department: {
        type: String,
        required: true,
        enum: ['CSE', 'CSE (AI)', 'CSE (AI & ML)', 'Data Science', 'ECE', 'EEE', 'Mechanical', 'Civil', 'MBA', 'MCA', 'General']
    },
    qualification: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true,
        min: 0
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        default: ''
    },
    researchInterests: [{
        type: String
    }],
    publications: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true
    },
    order: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

// Index for efficient queries
facultySchema.index({ department: 1, order: 1 });
facultySchema.index({ isActive: 1 });

module.exports = mongoose.model('Faculty', facultySchema);
