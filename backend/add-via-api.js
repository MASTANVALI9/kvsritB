// Add departments using the running backend API
// Make sure backend server is running on port 5000

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
    },
    {
        name: 'ECE',
        fullName: 'Electronics & Communication Engineering',
        code: 'ECE',
        description: 'Comprehensive program in electronics, communication systems, and embedded technologies.',
        overview: 'The ECE department provides excellent training in VLSI design, embedded systems, wireless communication, and signal processing.',
        hodName: 'Dr. Ramesh Babu',
        hodEmail: 'ramesh.babu@kvsrit.edu.in',
        hodPhone: '+91-9876543218',
        email: 'ece@kvsrit.edu.in',
        phone: '+91-8332-123460',
        icon: 'Radio',
        color: '#F59E0B',
        facilities: [
            { name: 'VLSI Design Lab', description: 'Advanced VLSI design and simulation tools' },
            { name: 'Communication Lab', description: 'Wireless and optical communication systems' }
        ],
        labs: [
            { name: 'Digital Electronics Lab', description: 'Digital circuits and logic design', equipment: ['Oscilloscopes', 'Function Generators', 'Logic Analyzers'] }
        ],
        totalStudents: 360,
        totalFaculty: 18,
        establishedYear: 2006,
        achievements: [
            { title: 'NBA Accreditation', description: 'Successfully accredited by NBA', year: 2023 }
        ],
        accreditations: [
            { name: 'NBA', year: 2023 }
        ],
        programType: 'UG',
        duration: '4 Years',
        isActive: true,
        order: 5
    },
    {
        name: 'MBA',
        fullName: 'Master of Business Administration',
        code: 'MBA',
        description: 'Postgraduate management program with specializations in Marketing, Finance, HR, and Operations.',
        overview: 'The MBA program develops future business leaders with strong analytical, strategic, and leadership skills through case studies and industry interaction.',
        hodName: 'Dr. Ashok Gupta',
        hodEmail: 'ashok.gupta@kvsrit.edu.in',
        hodPhone: '+91-9876543230',
        email: 'mba@kvsrit.edu.in',
        phone: '+91-8332-123464',
        icon: 'Briefcase',
        color: '#8B6F47',
        facilities: [
            { name: 'Business Analytics Lab', description: 'Data analytics for business decisions' },
            { name: 'Seminar Hall', description: 'Guest lectures and corporate interactions' }
        ],
        labs: [
            { name: 'Computer Lab', description: 'Business software and analytics tools', equipment: ['SPSS', 'Tableau', 'SAP', 'MS Office'] }
        ],
        totalStudents: 120,
        totalFaculty: 10,
        establishedYear: 2010,
        achievements: [
            { title: 'Best B-School Award', description: 'Recognized among top MBA colleges', year: 2023 }
        ],
        accreditations: [
            { name: 'AICTE', year: 2023 }
        ],
        programType: 'PG',
        duration: '2 Years',
        isActive: true,
        order: 9
    }
];

console.log('🚀 Starting to add departments via API...\n');
console.log('Make sure backend server is running on http://localhost:5000\n');

async function addDepartments() {
    let successCount = 0;
    let failCount = 0;

    for (const dept of departmentsData) {
        try {
            console.log(`📝 Adding ${dept.name}...`);

            const response = await fetch('http://localhost:5000/api/departments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dept)
            });

            if (response.ok) {
                const data = await response.json();
                console.log(`✅ Successfully added ${dept.name} (${dept.fullName})`);
                successCount++;
            } else {
                const errorText = await response.text();
                console.error(`❌ Failed to add ${dept.name}:`);
                console.error(`   Status: ${response.status}`);
                console.error(`   Error: ${errorText.substring(0, 200)}`);
                failCount++;
            }
        } catch (error) {
            console.error(`❌ Error adding ${dept.name}:`, error.message);
            failCount++;
        }
    }

    console.log(`\n📊 Summary:`);
    console.log(`   ✅ Success: ${successCount}`);
    console.log(`   ❌ Failed: ${failCount}`);
    console.log(`\n🌐 Test the departments:`);
    console.log(`   http://localhost:5173/department/CSE`);
    console.log(`   http://localhost:5173/department/ECE`);
    console.log(`   http://localhost:5173/department/MBA`);
}

addDepartments();
