// Simple script to add departments via API
const departmentsData = [
    {
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
            { name: 'Software Development Lab', description: 'Modern IDEs and development tools' }
        ],
        labs: [
            { name: 'Programming Lab', description: 'Equipped with latest software and compilers', equipment: ['60 Computers', 'Visual Studio'] }
        ],
        totalStudents: 480,
        totalFaculty: 24,
        establishedYear: 2005,
        achievements: [
            { title: 'NAAC A+ Accreditation', description: 'Received highest grade', year: 2023 }
        ],
        accreditations: [
            { name: 'NBA', year: 2023 }
        ],
        programType: 'UG',
        duration: '4 Years',
        isActive: true,
        order: 1
    }
];

async function addDepartments() {
    for (const dept of departmentsData) {
        try {
            const response = await fetch('http://localhost:5000/api/departments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dept)
            });

            if (response.ok) {
                const data = await response.json();
                console.log(`✅ Added: ${dept.name}`);
            } else {
                const error = await response.text();
                console.error(`❌ Failed to add ${dept.name}:`, error);
            }
        } catch (error) {
            console.error(`❌ Error adding ${dept.name}:`, error.message);
        }
    }
}

addDepartments();
