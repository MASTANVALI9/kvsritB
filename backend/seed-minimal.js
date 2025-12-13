const mongoose = require('mongoose');
require('dotenv').config();

const Department = require('./models/Department');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => {
        console.error('❌ MongoDB connection error:', err);
        process.exit(1);
    });

// Minimal CSE department data
const cseDepartment = {
    name: 'CSE',
    fullName: 'Computer Science & Engineering',
    code: 'CSE',
    description: 'The Department of Computer Science & Engineering offers cutting-edge education in software development, algorithms, and emerging technologies.',
    overview: 'Our CSE department is equipped with state-of-the-art laboratories and experienced faculty members who guide students through comprehensive theoretical and practical training in computer science.',
    email: 'cse@kvsrit.edu.in',
    icon: 'Monitor',
    color: '#3B82F6',
    programType: 'UG',
    duration: '4 Years',
    isActive: true,
    order: 1
};

async function seedMinimal() {
    try {
        console.log('🗑️  Clearing existing CSE department...');
        await Department.deleteMany({ code: 'CSE' });

        console.log('📝 Creating CSE department...');
        const dept = await Department.create(cseDepartment);

        console.log('✅ Department created successfully!');
        console.log('   Name:', dept.name);
        console.log('   Code:', dept.code);
        console.log('   ID:', dept._id);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error.message);
        if (error.errors) {
            console.error('Validation errors:');
            Object.keys(error.errors).forEach(key => {
                console.error(`  - ${key}: ${error.errors[key].message}`);
            });
        }
        process.exit(1);
    }
}

// Wait for connection before seeding
setTimeout(seedMinimal, 1000);
