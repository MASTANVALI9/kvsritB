const mongoose = require('mongoose');
require('dotenv').config();

const Department = require('./models/Department');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Single test department
const testDepartment = {
    name: 'CSE',
    fullName: 'Computer Science & Engineering',
    code: 'CSE',
    description: 'The Department of Computer Science & Engineering offers cutting-edge education in software development, algorithms, and emerging technologies.',
    overview: 'Our CSE department is equipped with state-of-the-art laboratories and experienced faculty members who guide students through comprehensive theoretical and practical training in computer science.',
    hodName: 'Dr. Rajesh Kumar',
    hodEmail: 'rajesh.kumar@kvsrit.edu.in',
    hodPhone: '+91-9876543210',
    email: 'cse@kvsrit.edu.in',
    phone: '+91-8332-123456',
    icon: 'Monitor',
    color: '#3B82F6',
    facilities: [
        { name: 'Advanced Computing Lab', description: 'High-performance workstations for complex computing tasks' },
        { name: 'Software Development Lab', description: 'Modern IDEs and development tools' },
        { name: 'Project Lab', description: 'Dedicated space for final year projects' }
    ],
    labs: [
        { name: 'Programming Lab', description: 'Equipped with latest software and compilers', equipment: ['60 Computers', 'Visual Studio', 'Eclipse', 'IntelliJ IDEA'] },
        { name: 'Database Lab', description: 'Database management and administration', equipment: ['Oracle', 'MySQL', 'MongoDB', 'PostgreSQL'] },
        { name: 'Network Lab', description: 'Networking and security infrastructure', equipment: ['Cisco Routers', 'Switches', 'Firewalls'] }
    ],
    totalStudents: 480,
    totalFaculty: 24,
    establishedYear: 2005,
    achievements: [
        { title: 'NAAC A+ Accreditation', description: 'Received highest grade in NAAC assessment', year: 2023 },
        { title: 'Best Department Award', description: 'Recognized by JNTUH for excellence', year: 2022 }
    ],
    accreditations: [
        { name: 'NBA', year: 2023 },
        { name: 'NAAC A+', year: 2023 }
    ],
    programType: 'UG',
    duration: '4 Years',
    isActive: true,
    order: 1
};

async function addTestDepartment() {
    try {
        // Clear existing CSE department
        await Department.deleteOne({ code: 'CSE' });
        console.log('🗑️  Cleared existing CSE department');

        // Insert test department
        const dept = new Department(testDepartment);
        await dept.save();
        console.log('✅ Test department added successfully!');
        console.log('   Department:', dept.name);
        console.log('   Code:', dept.code);
        console.log('   ID:', dept._id);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error adding department:', error);
        console.error('Error details:', error.message);
        if (error.errors) {
            Object.keys(error.errors).forEach(key => {
                console.error(`  - ${key}: ${error.errors[key].message}`);
            });
        }
        process.exit(1);
    }
}

addTestDepartment();
