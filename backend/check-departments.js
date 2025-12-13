const mongoose = require('mongoose');
require('dotenv').config();

const Department = require('./models/Department');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');

        const departments = await Department.find({});
        console.log('Departments found:', departments.length);
        departments.forEach(dept => {
            console.log(`- Name: ${dept.name}, Code: ${dept.code}, Active: ${dept.isActive}`);
        });

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

connectDB();
