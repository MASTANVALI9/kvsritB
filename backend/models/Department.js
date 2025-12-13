const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    code: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        uppercase: true
    },
    description: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    hodName: {
        type: String,
        trim: true
    },
    hodEmail: {
        type: String,
        lowercase: true,
        trim: true
    },
    hodPhone: {
        type: String,
        trim: true
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
    icon: {
        type: String,
        default: 'GraduationCap'
    },
    color: {
        type: String,
        default: '#3B82F6'
    },
    facilities: [{
        name: String,
        description: String
    }],
    labs: [{
        name: String,
        description: String,
        equipment: [String]
    }],
    totalStudents: {
        type: Number,
        default: 0
    },
    totalFaculty: {
        type: Number,
        default: 0
    },
    establishedYear: {
        type: Number
    },
    achievements: [{
        title: String,
        description: String,
        year: Number
    }],
    accreditations: [{
        name: String,
        year: Number
    }],
    programType: {
        type: String,
        enum: ['UG', 'PG', 'Both'],
        default: 'UG'
    },
    duration: {
        type: String,
        default: '4 Years'
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
departmentSchema.index({ code: 1 });
departmentSchema.index({ isActive: 1, order: 1 });

module.exports = mongoose.model('Department', departmentSchema);
