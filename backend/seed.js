const mongoose = require('mongoose');
require('dotenv').config();

const News = require('./models/News');
const Course = require('./models/Course');
const Recruiter = require('./models/Recruiter');
const Stats = require('./models/Stats');
const Faculty = require('./models/Faculty');
const Department = require('./models/Department');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Sample data from frontend
const newsData = [
    // News & Events
    { category: 'news', date: '2023-24', title: 'College Admission Application Form', link: '#' },
    { category: 'news', date: '17-06-2023', title: 'Fee Payment for College Account Number', link: '#' },
    { category: 'news', date: '07-12-2023', title: 'Student Transfer Information', link: '#' },
    { category: 'news', date: '25-03-2025', title: 'MCA MBA IV SEM REGISTRATION MARCH-2025', link: '#' },
    { category: 'news', date: '25-03-2025', title: 'MCA MBA IV SEM REGISTRATION MAY-2025', link: '#' },

    // Exams
    { category: 'exams', date: '12-02-2024', title: 'EXTERNAL TIMETABLE FOR-I MBA/MCA I SEM(R-23) MAR-2024', link: '#' },
    { category: 'exams', date: '03-02-2024', title: 'NOTIFICATION FOR-I MBA/MCA I SEM(R-23) MAR-2024', link: '#' },
    { category: 'exams', date: '08-01-2024', title: 'NOTIFICATION FOR-I B TECH I SEM(R-23) FEB-2024', link: '#' },
    { category: 'exams', date: '22-06-2020', title: 'MBA IV Semester Regular & Supply Exam 2020', link: '#' },
    { category: 'exams', date: '18-06-2020', title: 'B.Tech IV Year II Semester R15 Exams 2020', link: '#' },

    // Placements
    { category: 'placements', date: '28-01-2020', title: 'List of Gold Medalists for Batch 2015-2019', link: '#' },
    { category: 'placements', date: '11-02-2020', title: 'B.Tech III Year I Sem R15 Results Released', link: '#' },
    { category: 'placements', date: '30-01-2020', title: 'B.Tech IV Year I Sem R15 Results Released', link: '#' },
    { category: 'placements', date: '2024', title: 'Campus Placement Drive - TCS', link: '#' },
    { category: 'placements', date: '2024', title: 'Campus Placement Drive - Infosys', link: '#' },

    // Circulars
    { category: 'circulars', date: '25-03-2025', title: 'NOTIFICATION FOR PROJECT VIVO VOCE', link: '#' },
    { category: 'circulars', date: '25-03-2025', title: 'M. TECH. III SEM SUPPLY REGISTRATION', link: '#' },
    { category: 'circulars', date: '22-05-2020', title: 'JnanaBhumi Scholarships Ineligible List 2019-20', link: '#' },
    { category: 'circulars', date: '20-01-2020', title: 'M.Tech Academic Calendar 4th Sem (2018-19)', link: '#' },
    { category: 'circulars', date: '20-01-2020', title: 'B.Tech I Year II Semester Academic Calendar', link: '#' },
];

const coursesData = [
    // UG Courses
    { type: 'ug', name: 'CSE', fullName: 'Computer Science & Engineering', icon: 'Monitor', color: '#3B82F6' },
    { type: 'ug', name: 'CSE (AI)', fullName: 'CSE - Artificial Intelligence', icon: 'Brain', color: '#8B5CF6' },
    { type: 'ug', name: 'CSE (AI & ML)', fullName: 'CSE - AI & Machine Learning', icon: 'Cpu', color: '#EC4899' },
    { type: 'ug', name: 'Data Science', fullName: 'Data Science', icon: 'Database', color: '#10B981' },
    { type: 'ug', name: 'ECE', fullName: 'Electronics & Communication', icon: 'Radio', color: '#F59E0B' },
    { type: 'ug', name: 'EEE', fullName: 'Electrical & Electronics', icon: 'Zap', color: '#EF4444' },
    { type: 'ug', name: 'Mechanical', fullName: 'Mechanical Engineering', icon: 'Cog', color: '#6366F1' },
    { type: 'ug', name: 'Civil', fullName: 'Civil Engineering', icon: 'Building2', color: '#14B8A6' },

    // PG Courses
    { type: 'pg', name: 'MBA', fullName: 'Master of Business Administration', icon: 'Briefcase', color: '#8B6F47' },
    { type: 'pg', name: 'MCA', fullName: 'Master of Computer Applications', icon: 'GraduationCap', color: '#5D4E37' },
];

const recruitersData = [
    { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/200px-Tata_Consultancy_Services_Logo.svg.png', order: 1 },
    { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/200px-Infosys_logo.svg.png', order: 2 },
    { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/200px-Wipro_Primary_Logo_Color_RGB.svg.png', order: 3 },
    { name: 'Cognizant', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Cognizant%27s_logo.svg/200px-Cognizant%27s_logo.svg.png', order: 4 },
    { name: 'Tech Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Tech_Mahindra_New_Logo.svg/200px-Tech_Mahindra_New_Logo.svg.png', order: 5 },
    { name: 'HCL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/HCL_Technologies_logo.svg/200px-HCL_Technologies_logo.svg.png', order: 6 },
    { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/200px-Accenture.svg.png', order: 7 },
    { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Capgemini_201x_logo.svg/200px-Capgemini_201x_logo.svg.png', order: 8 },
];

const statsData = [
    { label: 'Recruiting Companies', value: '100+', icon: 'Building', order: 1 },
    { label: 'Placement Rate', value: '95%', icon: 'TrendingUp', order: 2 },
    { label: 'Highest Package', value: '₹12L', icon: 'Award', order: 3 },
    { label: 'Average Package', value: '₹4.5L', icon: 'DollarSign', order: 4 },
];

const facultyData = [
    // CSE Department
    {
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
    },
    {
        name: 'Dr. Priya Sharma',
        designation: 'Professor',
        department: 'CSE',
        qualification: 'Ph.D. in Software Engineering',
        specialization: 'Software Engineering & Cloud Computing',
        experience: 15,
        email: 'priya.sharma@kvsrit.edu.in',
        phone: '+91-9876543211',
        researchInterests: ['Cloud Computing', 'Software Architecture', 'DevOps'],
        publications: 38,
        isActive: true,
        order: 2
    },
    {
        name: 'Mr. Arun Patel',
        designation: 'Associate Professor',
        department: 'CSE',
        qualification: 'M.Tech in Computer Science',
        specialization: 'Database Management Systems',
        experience: 12,
        email: 'arun.patel@kvsrit.edu.in',
        phone: '+91-9876543212',
        researchInterests: ['Database Systems', 'Big Data', 'NoSQL'],
        publications: 22,
        isActive: true,
        order: 3
    },
    {
        name: 'Ms. Sneha Reddy',
        designation: 'Assistant Professor',
        department: 'CSE',
        qualification: 'M.Tech in Computer Science',
        specialization: 'Web Technologies & Cyber Security',
        experience: 8,
        email: 'sneha.reddy@kvsrit.edu.in',
        phone: '+91-9876543213',
        researchInterests: ['Cyber Security', 'Web Development', 'Blockchain'],
        publications: 15,
        isActive: true,
        order: 4
    },

    // CSE (AI) Department
    {
        name: 'Dr. Vikram Singh',
        designation: 'Professor',
        department: 'CSE (AI)',
        qualification: 'Ph.D. in Artificial Intelligence',
        specialization: 'Deep Learning & Neural Networks',
        experience: 16,
        email: 'vikram.singh@kvsrit.edu.in',
        phone: '+91-9876543214',
        researchInterests: ['Deep Learning', 'Neural Networks', 'Computer Vision'],
        publications: 52,
        isActive: true,
        order: 1
    },
    {
        name: 'Dr. Anita Desai',
        designation: 'Associate Professor',
        department: 'CSE (AI)',
        qualification: 'Ph.D. in Machine Learning',
        specialization: 'Natural Language Processing',
        experience: 11,
        email: 'anita.desai@kvsrit.edu.in',
        phone: '+91-9876543215',
        researchInterests: ['NLP', 'Text Mining', 'Sentiment Analysis'],
        publications: 28,
        isActive: true,
        order: 2
    },

    // Data Science Department
    {
        name: 'Dr. Suresh Iyer',
        designation: 'Professor',
        department: 'Data Science',
        qualification: 'Ph.D. in Data Science',
        specialization: 'Big Data Analytics & Visualization',
        experience: 14,
        email: 'suresh.iyer@kvsrit.edu.in',
        phone: '+91-9876543216',
        researchInterests: ['Big Data', 'Data Visualization', 'Predictive Analytics'],
        publications: 35,
        isActive: true,
        order: 1
    },
    {
        name: 'Ms. Kavita Nair',
        designation: 'Assistant Professor',
        department: 'Data Science',
        qualification: 'M.Tech in Data Science',
        specialization: 'Statistical Analysis & Machine Learning',
        experience: 7,
        email: 'kavita.nair@kvsrit.edu.in',
        phone: '+91-9876543217',
        researchInterests: ['Statistical Modeling', 'Machine Learning', 'Data Mining'],
        publications: 12,
        isActive: true,
        order: 2
    },

    // ECE Department
    {
        name: 'Dr. Ramesh Babu',
        designation: 'HOD',
        department: 'ECE',
        qualification: 'Ph.D. in Electronics',
        specialization: 'VLSI Design & Embedded Systems',
        experience: 20,
        email: 'ramesh.babu@kvsrit.edu.in',
        phone: '+91-9876543218',
        researchInterests: ['VLSI Design', 'Embedded Systems', 'IoT'],
        publications: 48,
        isActive: true,
        order: 1
    },
    {
        name: 'Dr. Lakshmi Devi',
        designation: 'Professor',
        department: 'ECE',
        qualification: 'Ph.D. in Communication Systems',
        specialization: 'Wireless Communication & Signal Processing',
        experience: 17,
        email: 'lakshmi.devi@kvsrit.edu.in',
        phone: '+91-9876543219',
        researchInterests: ['Wireless Networks', 'Signal Processing', '5G Technology'],
        publications: 42,
        isActive: true,
        order: 2
    },
    {
        name: 'Mr. Karthik Rao',
        designation: 'Associate Professor',
        department: 'ECE',
        qualification: 'M.Tech in Electronics',
        specialization: 'Digital Signal Processing',
        experience: 10,
        email: 'karthik.rao@kvsrit.edu.in',
        phone: '+91-9876543220',
        researchInterests: ['DSP', 'Image Processing', 'Audio Processing'],
        publications: 18,
        isActive: true,
        order: 3
    },

    // EEE Department
    {
        name: 'Dr. Venkatesh Murthy',
        designation: 'HOD',
        department: 'EEE',
        qualification: 'Ph.D. in Electrical Engineering',
        specialization: 'Power Systems & Renewable Energy',
        experience: 19,
        email: 'venkatesh.murthy@kvsrit.edu.in',
        phone: '+91-9876543221',
        researchInterests: ['Power Systems', 'Renewable Energy', 'Smart Grids'],
        publications: 40,
        isActive: true,
        order: 1
    },
    {
        name: 'Dr. Meena Krishnan',
        designation: 'Professor',
        department: 'EEE',
        qualification: 'Ph.D. in Power Electronics',
        specialization: 'Power Electronics & Drives',
        experience: 15,
        email: 'meena.krishnan@kvsrit.edu.in',
        phone: '+91-9876543222',
        researchInterests: ['Power Electronics', 'Electric Drives', 'Energy Storage'],
        publications: 36,
        isActive: true,
        order: 2
    },
    {
        name: 'Mr. Ravi Shankar',
        designation: 'Assistant Professor',
        department: 'EEE',
        qualification: 'M.Tech in Electrical Engineering',
        specialization: 'Control Systems',
        experience: 9,
        email: 'ravi.shankar@kvsrit.edu.in',
        phone: '+91-9876543223',
        researchInterests: ['Control Systems', 'Automation', 'Robotics'],
        publications: 14,
        isActive: true,
        order: 3
    },

    // Mechanical Department
    {
        name: 'Dr. Srinivas Reddy',
        designation: 'HOD',
        department: 'Mechanical',
        qualification: 'Ph.D. in Mechanical Engineering',
        specialization: 'Thermal Engineering & CFD',
        experience: 21,
        email: 'srinivas.reddy@kvsrit.edu.in',
        phone: '+91-9876543224',
        researchInterests: ['Thermal Engineering', 'CFD', 'Heat Transfer'],
        publications: 50,
        isActive: true,
        order: 1
    },
    {
        name: 'Dr. Geetha Rani',
        designation: 'Professor',
        department: 'Mechanical',
        qualification: 'Ph.D. in Manufacturing',
        specialization: 'Manufacturing & Automation',
        experience: 16,
        email: 'geetha.rani@kvsrit.edu.in',
        phone: '+91-9876543225',
        researchInterests: ['Manufacturing', 'Automation', 'Industry 4.0'],
        publications: 33,
        isActive: true,
        order: 2
    },
    {
        name: 'Mr. Prasad Kumar',
        designation: 'Associate Professor',
        department: 'Mechanical',
        qualification: 'M.Tech in Mechanical Engineering',
        specialization: 'Design & Analysis',
        experience: 11,
        email: 'prasad.kumar@kvsrit.edu.in',
        phone: '+91-9876543226',
        researchInterests: ['Machine Design', 'FEA', 'CAD/CAM'],
        publications: 20,
        isActive: true,
        order: 3
    },

    // Civil Department
    {
        name: 'Dr. Madhav Rao',
        designation: 'HOD',
        department: 'Civil',
        qualification: 'Ph.D. in Civil Engineering',
        specialization: 'Structural Engineering & Earthquake Engineering',
        experience: 22,
        email: 'madhav.rao@kvsrit.edu.in',
        phone: '+91-9876543227',
        researchInterests: ['Structural Engineering', 'Earthquake Engineering', 'Concrete Technology'],
        publications: 55,
        isActive: true,
        order: 1
    },
    {
        name: 'Dr. Sunita Verma',
        designation: 'Professor',
        department: 'Civil',
        qualification: 'Ph.D. in Environmental Engineering',
        specialization: 'Environmental Engineering & Water Resources',
        experience: 18,
        email: 'sunita.verma@kvsrit.edu.in',
        phone: '+91-9876543228',
        researchInterests: ['Environmental Engineering', 'Water Treatment', 'Sustainability'],
        publications: 44,
        isActive: true,
        order: 2
    },
    {
        name: 'Mr. Naveen Chandra',
        designation: 'Assistant Professor',
        department: 'Civil',
        qualification: 'M.Tech in Civil Engineering',
        specialization: 'Transportation Engineering',
        experience: 8,
        email: 'naveen.chandra@kvsrit.edu.in',
        phone: '+91-9876543229',
        researchInterests: ['Transportation', 'Traffic Engineering', 'Urban Planning'],
        publications: 11,
        isActive: true,
        order: 3
    },

    // MBA Department
    {
        name: 'Dr. Ashok Gupta',
        designation: 'HOD',
        department: 'MBA',
        qualification: 'Ph.D. in Management',
        specialization: 'Strategic Management & Marketing',
        experience: 20,
        email: 'ashok.gupta@kvsrit.edu.in',
        phone: '+91-9876543230',
        researchInterests: ['Strategic Management', 'Marketing', 'Business Analytics'],
        publications: 47,
        isActive: true,
        order: 1
    },
    {
        name: 'Dr. Rekha Menon',
        designation: 'Professor',
        department: 'MBA',
        qualification: 'Ph.D. in Finance',
        specialization: 'Financial Management & Investment',
        experience: 16,
        email: 'rekha.menon@kvsrit.edu.in',
        phone: '+91-9876543231',
        researchInterests: ['Finance', 'Investment', 'Risk Management'],
        publications: 39,
        isActive: true,
        order: 2
    },
    {
        name: 'Ms. Pooja Agarwal',
        designation: 'Assistant Professor',
        department: 'MBA',
        qualification: 'MBA, M.Phil',
        specialization: 'Human Resource Management',
        experience: 9,
        email: 'pooja.agarwal@kvsrit.edu.in',
        phone: '+91-9876543232',
        researchInterests: ['HRM', 'Organizational Behavior', 'Leadership'],
        publications: 16,
        isActive: true,
        order: 3
    },

    // MCA Department
    {
        name: 'Dr. Mohan Das',
        designation: 'HOD',
        department: 'MCA',
        qualification: 'Ph.D. in Computer Applications',
        specialization: 'Software Development & Mobile Computing',
        experience: 17,
        email: 'mohan.das@kvsrit.edu.in',
        phone: '+91-9876543233',
        researchInterests: ['Software Engineering', 'Mobile Computing', 'App Development'],
        publications: 41,
        isActive: true,
        order: 1
    },
    {
        name: 'Ms. Divya Pillai',
        designation: 'Associate Professor',
        department: 'MCA',
        qualification: 'M.Tech in Computer Applications',
        specialization: 'Web Technologies & Cloud',
        experience: 10,
        email: 'divya.pillai@kvsrit.edu.in',
        phone: '+91-9876543234',
        researchInterests: ['Web Technologies', 'Cloud Computing', 'Full Stack Development'],
        publications: 19,
        isActive: true,
        order: 2
    },
];

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
        name: 'CSE (AI)',
        fullName: 'CSE - Artificial Intelligence',
        code: 'CSEAI',
        description: 'Specialized program focusing on Artificial Intelligence, Deep Learning, and Neural Networks.',
        overview: 'The AI specialization prepares students for careers in machine learning, artificial intelligence, and data science with hands-on experience in cutting-edge AI technologies.',
        hodName: 'Dr. Vikram Singh',
        hodEmail: 'vikram.singh@kvsrit.edu.in',
        hodPhone: '+91-9876543214',
        email: 'cseai@kvsrit.edu.in',
        phone: '+91-8332-123457',
        icon: 'Brain',
        color: '#8B5CF6',
        facilities: [
            { name: 'AI Research Lab', description: 'Advanced GPU workstations for deep learning' },
            { name: 'Computer Vision Lab', description: 'Image processing and computer vision research' },
            { name: 'NLP Lab', description: 'Natural language processing and text analytics' }
        ],
        labs: [
            { name: 'Deep Learning Lab', description: 'GPU-enabled systems for neural networks', equipment: ['NVIDIA GPUs', 'TensorFlow', 'PyTorch', 'Keras'] },
            { name: 'Machine Learning Lab', description: 'ML algorithms and model training', equipment: ['Python', 'Scikit-learn', 'Jupyter Notebooks'] }
        ],
        totalStudents: 240,
        totalFaculty: 12,
        establishedYear: 2019,
        achievements: [
            { title: 'AI Hackathon Winners', description: 'Students won national AI competition', year: 2023 },
            { title: 'Research Publications', description: 'Over 50 papers in AI conferences', year: 2023 }
        ],
        accreditations: [
            { name: 'NBA', year: 2023 }
        ],
        programType: 'UG',
        duration: '4 Years',
        isActive: true,
        order: 2
    },
    {
        name: 'CSE (AI & ML)',
        fullName: 'CSE - AI & Machine Learning',
        code: 'CSEAIML',
        description: 'Comprehensive program combining Artificial Intelligence and Machine Learning technologies.',
        overview: 'This program offers in-depth knowledge of both AI and ML, preparing students for advanced careers in data science and intelligent systems.',
        email: 'cseaiml@kvsrit.edu.in',
        phone: '+91-8332-123458',
        icon: 'Cpu',
        color: '#EC4899',
        facilities: [
            { name: 'ML Research Center', description: 'Dedicated research facility for ML projects' },
            { name: 'Data Analytics Lab', description: 'Big data and analytics infrastructure' }
        ],
        labs: [
            { name: 'AI/ML Lab', description: 'Combined AI and ML development environment', equipment: ['High-end Workstations', 'Cloud Computing Access', 'ML Frameworks'] }
        ],
        totalStudents: 180,
        totalFaculty: 10,
        establishedYear: 2020,
        achievements: [
            { title: 'Industry Collaboration', description: 'Partnership with leading tech companies', year: 2023 }
        ],
        accreditations: [],
        programType: 'UG',
        duration: '4 Years',
        isActive: true,
        order: 3
    },
    {
        name: 'Data Science',
        fullName: 'Data Science',
        code: 'DS',
        description: 'Focused program on data analytics, big data technologies, and statistical modeling.',
        overview: 'The Data Science program equips students with skills in data mining, visualization, and predictive analytics using modern tools and technologies.',
        hodName: 'Dr. Suresh Iyer',
        hodEmail: 'suresh.iyer@kvsrit.edu.in',
        hodPhone: '+91-9876543216',
        email: 'ds@kvsrit.edu.in',
        phone: '+91-8332-123459',
        icon: 'Database',
        color: '#10B981',
        facilities: [
            { name: 'Big Data Lab', description: 'Hadoop and Spark cluster for big data processing' },
            { name: 'Visualization Lab', description: 'Advanced data visualization tools' }
        ],
        labs: [
            { name: 'Data Analytics Lab', description: 'Statistical analysis and data mining', equipment: ['R Studio', 'Python', 'Tableau', 'Power BI'] },
            { name: 'Big Data Lab', description: 'Distributed computing infrastructure', equipment: ['Hadoop', 'Spark', 'Hive', 'Kafka'] }
        ],
        totalStudents: 150,
        totalFaculty: 8,
        establishedYear: 2021,
        achievements: [
            { title: 'Data Science Competition', description: 'Top 10 in national data science challenge', year: 2023 }
        ],
        accreditations: [],
        programType: 'UG',
        duration: '4 Years',
        isActive: true,
        order: 4
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
            { name: 'Communication Lab', description: 'Wireless and optical communication systems' },
            { name: 'Embedded Systems Lab', description: 'Microcontroller and IoT development' }
        ],
        labs: [
            { name: 'Digital Electronics Lab', description: 'Digital circuits and logic design', equipment: ['Oscilloscopes', 'Function Generators', 'Logic Analyzers'] },
            { name: 'Microprocessor Lab', description: '8086, ARM, and embedded systems', equipment: ['Microprocessor Kits', 'Development Boards', 'Debuggers'] },
            { name: 'Communication Lab', description: 'Analog and digital communication', equipment: ['Signal Generators', 'Spectrum Analyzers', 'Communication Trainers'] }
        ],
        totalStudents: 360,
        totalFaculty: 18,
        establishedYear: 2006,
        achievements: [
            { title: 'NBA Accreditation', description: 'Successfully accredited by NBA', year: 2023 },
            { title: 'Research Excellence', description: 'Multiple patents filed', year: 2022 }
        ],
        accreditations: [
            { name: 'NBA', year: 2023 },
            { name: 'NAAC A+', year: 2023 }
        ],
        programType: 'UG',
        duration: '4 Years',
        isActive: true,
        order: 5
    },
    {
        name: 'EEE',
        fullName: 'Electrical & Electronics Engineering',
        code: 'EEE',
        description: 'Program focusing on power systems, renewable energy, and electrical drives.',
        overview: 'The EEE department offers comprehensive education in power generation, transmission, distribution, and modern renewable energy technologies.',
        hodName: 'Dr. Venkatesh Murthy',
        hodEmail: 'venkatesh.murthy@kvsrit.edu.in',
        hodPhone: '+91-9876543221',
        email: 'eee@kvsrit.edu.in',
        phone: '+91-8332-123461',
        icon: 'Zap',
        color: '#EF4444',
        facilities: [
            { name: 'Power Systems Lab', description: 'High voltage and power system analysis' },
            { name: 'Renewable Energy Lab', description: 'Solar and wind energy systems' },
            { name: 'Electrical Machines Lab', description: 'Motors, generators, and transformers' }
        ],
        labs: [
            { name: 'Electrical Circuits Lab', description: 'Circuit analysis and measurements', equipment: ['Multimeters', 'Power Supplies', 'Circuit Boards'] },
            { name: 'Power Electronics Lab', description: 'Converters and inverters', equipment: ['IGBT Modules', 'DSP Controllers', 'Power Analyzers'] },
            { name: 'Control Systems Lab', description: 'Automation and control', equipment: ['PLCs', 'SCADA Systems', 'Servo Motors'] }
        ],
        totalStudents: 300,
        totalFaculty: 15,
        establishedYear: 2007,
        achievements: [
            { title: 'Smart Grid Project', description: 'Implemented campus-wide smart grid', year: 2023 },
            { title: 'Solar Installation', description: '500kW solar plant on campus', year: 2022 }
        ],
        accreditations: [
            { name: 'NBA', year: 2023 }
        ],
        programType: 'UG',
        duration: '4 Years',
        isActive: true,
        order: 6
    },
    {
        name: 'Mechanical',
        fullName: 'Mechanical Engineering',
        code: 'MECH',
        description: 'Traditional and modern mechanical engineering with focus on design, manufacturing, and thermal systems.',
        overview: 'The Mechanical Engineering department combines classical mechanical principles with modern technologies like CAD/CAM, robotics, and Industry 4.0.',
        hodName: 'Dr. Srinivas Reddy',
        hodEmail: 'srinivas.reddy@kvsrit.edu.in',
        hodPhone: '+91-9876543224',
        email: 'mech@kvsrit.edu.in',
        phone: '+91-8332-123462',
        icon: 'Cog',
        color: '#6366F1',
        facilities: [
            { name: 'CAD/CAM Lab', description: 'Computer-aided design and manufacturing' },
            { name: 'Thermal Engineering Lab', description: 'Heat transfer and thermodynamics' },
            { name: 'Manufacturing Lab', description: 'CNC machines and 3D printing' }
        ],
        labs: [
            { name: 'Workshop', description: 'Hands-on training in machining', equipment: ['Lathe Machines', 'Milling Machines', 'Welding Equipment'] },
            { name: 'Fluid Mechanics Lab', description: 'Fluid flow and hydraulics', equipment: ['Flow Meters', 'Pumps', 'Turbines'] },
            { name: 'Metrology Lab', description: 'Precision measurement and quality control', equipment: ['CMM', 'Surface Roughness Tester', 'Hardness Tester'] }
        ],
        totalStudents: 320,
        totalFaculty: 16,
        establishedYear: 2008,
        achievements: [
            { title: 'BAJA SAE Competition', description: 'National level participation', year: 2023 },
            { title: 'Industry 4.0 Lab', description: 'Established smart manufacturing lab', year: 2022 }
        ],
        accreditations: [
            { name: 'NBA', year: 2023 }
        ],
        programType: 'UG',
        duration: '4 Years',
        isActive: true,
        order: 7
    },
    {
        name: 'Civil',
        fullName: 'Civil Engineering',
        code: 'CIVIL',
        description: 'Comprehensive civil engineering program covering structures, transportation, and environmental engineering.',
        overview: 'The Civil Engineering department focuses on sustainable infrastructure development, structural design, and modern construction technologies.',
        hodName: 'Dr. Madhav Rao',
        hodEmail: 'madhav.rao@kvsrit.edu.in',
        hodPhone: '+91-9876543227',
        email: 'civil@kvsrit.edu.in',
        phone: '+91-8332-123463',
        icon: 'Building2',
        color: '#14B8A6',
        facilities: [
            { name: 'Structural Engineering Lab', description: 'Testing of concrete and steel structures' },
            { name: 'Geotechnical Lab', description: 'Soil mechanics and foundation engineering' },
            { name: 'Survey Lab', description: 'Modern surveying instruments and GPS' }
        ],
        labs: [
            { name: 'Concrete Technology Lab', description: 'Concrete mix design and testing', equipment: ['Compression Testing Machine', 'Slump Cone', 'Vibrators'] },
            { name: 'Soil Mechanics Lab', description: 'Soil testing and analysis', equipment: ['Triaxial Test', 'CBR Test', 'Consolidation Test'] },
            { name: 'Highway Engineering Lab', description: 'Pavement design and materials', equipment: ['Marshall Stability Test', 'Aggregate Testing Equipment'] }
        ],
        totalStudents: 240,
        totalFaculty: 12,
        establishedYear: 2009,
        achievements: [
            { title: 'Green Building Certification', description: 'LEED certified campus buildings', year: 2023 },
            { title: 'Infrastructure Projects', description: 'Multiple government project collaborations', year: 2022 }
        ],
        accreditations: [
            { name: 'NBA', year: 2023 }
        ],
        programType: 'UG',
        duration: '4 Years',
        isActive: true,
        order: 8
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
            { name: 'Seminar Hall', description: 'Guest lectures and corporate interactions' },
            { name: 'Library', description: 'Extensive collection of business journals and books' }
        ],
        labs: [
            { name: 'Computer Lab', description: 'Business software and analytics tools', equipment: ['SPSS', 'Tableau', 'SAP', 'MS Office'] }
        ],
        totalStudents: 120,
        totalFaculty: 10,
        establishedYear: 2010,
        achievements: [
            { title: 'Best B-School Award', description: 'Recognized among top MBA colleges', year: 2023 },
            { title: 'Corporate Partnerships', description: 'MoUs with 20+ companies', year: 2023 }
        ],
        accreditations: [
            { name: 'AICTE', year: 2023 }
        ],
        programType: 'PG',
        duration: '2 Years',
        isActive: true,
        order: 9
    },
    {
        name: 'MCA',
        fullName: 'Master of Computer Applications',
        code: 'MCA',
        description: 'Postgraduate program in computer applications with focus on software development and emerging technologies.',
        overview: 'The MCA program provides advanced knowledge in software engineering, web technologies, mobile computing, and cloud computing.',
        hodName: 'Dr. Mohan Das',
        hodEmail: 'mohan.das@kvsrit.edu.in',
        hodPhone: '+91-9876543233',
        email: 'mca@kvsrit.edu.in',
        phone: '+91-8332-123465',
        icon: 'GraduationCap',
        color: '#5D4E37',
        facilities: [
            { name: 'Advanced Programming Lab', description: 'Latest development tools and frameworks' },
            { name: 'Project Development Center', description: 'Dedicated space for capstone projects' },
            { name: 'Cloud Computing Lab', description: 'AWS and Azure cloud infrastructure' }
        ],
        labs: [
            { name: 'Software Development Lab', description: 'Full-stack development environment', equipment: ['Modern IDEs', 'Version Control', 'CI/CD Tools'] },
            { name: 'Mobile App Lab', description: 'Android and iOS development', equipment: ['Android Studio', 'Xcode', 'Flutter', 'React Native'] }
        ],
        totalStudents: 90,
        totalFaculty: 8,
        establishedYear: 2011,
        achievements: [
            { title: 'App Development Contest', description: 'Winners of state-level hackathon', year: 2023 },
            { title: 'Industry Projects', description: 'Live projects with IT companies', year: 2023 }
        ],
        accreditations: [
            { name: 'AICTE', year: 2023 }
        ],
        programType: 'PG',
        duration: '2 Years',
        isActive: true,
        order: 10
    }
];

// Seed function
async function seedDatabase() {
    try {
        // Clear existing data
        console.log('🗑️  Clearing existing data...');
        await News.deleteMany({});
        await Course.deleteMany({});
        await Recruiter.deleteMany({});
        await Stats.deleteMany({});
        await Faculty.deleteMany({});
        await Department.deleteMany({});

        // Insert new data
        console.log('📝 Inserting news data...');
        await News.insertMany(newsData);

        console.log('📚 Inserting courses data...');
        await Course.insertMany(coursesData);

        console.log('🏢 Inserting recruiters data...');
        await Recruiter.insertMany(recruitersData);

        console.log('📊 Inserting stats data...');
        await Stats.insertMany(statsData);

        console.log('👨‍🏫 Inserting faculty data...');
        await Faculty.insertMany(facultyData);

        console.log('🏛️  Inserting departments data...');
        await Department.insertMany(departmentsData);

        console.log('✅ Database seeded successfully!');
        console.log(`   - ${newsData.length} news items`);
        console.log(`   - ${coursesData.length} courses`);
        console.log(`   - ${recruitersData.length} recruiters`);
        console.log(`   - ${statsData.length} stats`);
        console.log(`   - ${facultyData.length} faculty members`);
        console.log(`   - ${departmentsData.length} departments`);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
}

seedDatabase();
