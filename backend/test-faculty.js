const mongoose = require('mongoose');
require('dotenv').config();
const Faculty = require('./models/Faculty');

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('✅ MongoDB connected');

        try {
            // Clear existing
            await Faculty.deleteMany({});
            console.log('🗑️  Cleared faculty data');

            // Try to insert one faculty member
            const testFaculty = {
                name: 'Dr. Rajesh Kumar',
                designation: 'HOD',
                department: 'CSE',
                qualification: 'Ph.D. in Computer Science',
                specialization: 'Machine Learning & Data Mining',
                experience: 18,
                email: 'rajesh.kumar@kvsrit.edu.in',
                phone: '+91-9876543210',
                researchInterests: ['Machine Learning', 'Data Mining', 'Artificial Intelligence'],
                publications: 45,
                isActive: true,
                order: 1
            };

            const result = await Faculty.create(testFaculty);
            console.log('✅ Successfully inserted:', result.name);

            process.exit(0);
        } catch (error) {
            console.error('❌ Error:', error.message);
            console.error('Full error:', error);
            process.exit(1);
        }
    })
    .catch(err => {
        console.error('❌ Connection error:', err);
        process.exit(1);
    });
