// Insert CSE department via backend API
const departmentData = {
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

async function insertDepartment() {
    try {
        console.log('🚀 Inserting CSE department via API...\n');

        const response = await fetch('http://localhost:5000/api/departments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(departmentData)
        });

        if (response.ok) {
            const data = await response.json();
            console.log('✅ SUCCESS! CSE Department inserted!');
            console.log('   ID:', data._id);
            console.log('   Name:', data.name);
            console.log('   Code:', data.code);
            console.log('\n🌐 Test it now:');
            console.log('   http://localhost:5173/department/CSE');
        } else {
            const errorText = await response.text();
            console.error('❌ FAILED to insert department');
            console.error('   Status:', response.status);
            console.error('   Error:', errorText);
        }
    } catch (error) {
        console.error('❌ ERROR:', error.message);
    }
}

insertDepartment();
