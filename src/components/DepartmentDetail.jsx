import { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    Monitor, Cpu, Radio, Zap, Cog, Building2, Brain, Database,
    GraduationCap, Briefcase, ArrowLeft, Mail, Phone, User,
    Award, Calendar, CheckCircle, BookOpen, Users, Building, Target, Eye, Lightbulb
} from 'lucide-react'

const iconMap = {
    Monitor, Cpu, Radio, Zap, Cog, Building2, Brain, Database, GraduationCap, Briefcase
}

// Static CSE Department Data
const cseStaticData = {
    code: 'CSE',
    name: 'Computer Science and Engineering',
    fullName: 'Department of Computer Science and Engineering',
    description: 'Empowering students with cutting-edge computer science education and research',
    icon: 'Monitor',
    color: '#3B82F6',
    establishedYear: 2007,
    totalStudents: 600,
    totalFaculty: 25,
    email: 'cse@drkvsrit.in',
    phone: '7660003345',
    hodName: 'Dr. G. Sunkanna',
    hodEmail: 'hod.cse@drkvsrit.in',
    hodPhone: '9704333789',
    programType: 'B.Tech & M.Tech',
    duration: '4 years / 2 years',
    overview: `The department of Computer Science and Engineering offers 4 year Degree which is established in the year 2007 with intake of 60 seats in CSE. It is approved by AICTE and Affiliated to JNTUA, Anantapur. In 2011 post graduate programe (M.Tech) in Computer Science & Engineering is introduced with an intake 18 seats. An additional intake of 6 seats was incorporated in 2013, total intake of M.Tech program reaches to 24 seats.

The course is flexible and has been structured to meet the evolving needs of the IT industry. Since the Management of this college includes the highly educated persons, it understands the value of the latest applications. The goal is to see that every student complete his/her B.Tech Degree in 4 years and go out of the college with one or two appointment orders in his/her hand so that they can earn some experience which help them to grow as employees or to turn as employers by taking up some entrepreneurial steps.

The department has qualified and experienced faculty members facilitate the students to enhance knowledge & skills in the academic given by JNTUA as well as co-curricular activities.

The CSE department has aesthetically designed Computer laboratories accommodating 600 Computer Systems. All laboratories are air conditioned with projectors, a power backup of 60KVA UPS and 125 KVA DG set to help uninterrupted functioning of the laboratories.`,
    vision: 'To be a Center for Academic Excellence in Computer Science and Engineering Education, Research and Consultancy Contributing Effectively to meet Industrial and Societal needs.',
    mission: [
        { id: 'M1', text: 'To Impart quality technical education with global standards.' },
        { id: 'M2', text: 'To Provide a platform for harnessing Industry oriented technical skills with inter-disciplinary research awareness.' },
        { id: 'M3', text: 'To Promote entrepreneurship and leadership qualities imbibed with professional ethics.' }
    ],
    psos: [
        { id: 'PSO1', text: 'Apply Software Engineering Principles and Practices to provide software solutions.' },
        { id: 'PSO2', text: 'Design and Develop Network and Mobile based applications.' },
        { id: 'PSO3', text: 'Design innovative algorithms and develop effective code for business applications.' }
    ],
    peos: [
        { id: 'PEO1', text: 'Strong fundamental knowledge in Computer Science & Engineering, technical competency and problem-solving skills to develop innovative solutions.' },
        { id: 'PEO2', text: 'Necessary domain knowledge and successful professional career in IT and allied fields of Computer Science & Engineering.' },
        { id: 'PEO3', text: 'Ability to pursue higher education and Entrepreneurship.' },
        { id: 'PEO4', text: 'Necessary skills for lifelong learning, teamwork and research to cater for real time needs of industry and society.' }
    ],
    pos: [
        { id: '1', title: 'Engineering knowledge', text: 'Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.' },
        { id: '2', title: 'Problem analysis', text: 'Identify, formulate, review research literature, and analyse complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.' },
        { id: '3', title: 'Design/development of solutions', text: 'Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.' },
        { id: '4', title: 'Conduct investigations of complex problems', text: 'Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.' },
        { id: '5', title: 'Modern tool usage', text: 'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.' },
        { id: '6', title: 'The engineer and society', text: 'Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.' },
        { id: '7', title: 'Environment and sustainability', text: 'Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.' },
        { id: '8', title: 'Ethics', text: 'Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.' },
        { id: '9', title: 'Individual and team work', text: 'Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.' },
        { id: '10', title: 'Communication', text: 'Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.' },
        { id: '11', title: 'Project management and finance', text: 'Demonstrate knowledge and understanding of the engineering and management principles and apply these to one\'s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.' },
        { id: '12', title: 'Life-long learning', text: 'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.' }
    ],
    navigationItems: [
        { name: 'About Department', section: 'about' },
        { name: 'Programs Offered', section: 'programs' },
        { name: 'Faculty', section: 'faculty' },
        { name: 'FDP', section: 'fdp' },
        { name: 'Conferences', section: 'conferences' },
        { name: 'Publications', section: 'publications' },
        { name: 'Patents', section: 'patents' },
        { name: 'Academic Committees', section: 'committees' },
        { name: 'Infrastructure', section: 'infrastructure' },
        { name: 'Campus Placements', section: 'placements' },
        { name: 'Professional Societies', section: 'societies' },
        { name: 'Industry Institute Interaction', section: 'industry' },
        { name: 'Research and Consultancy', section: 'research' },
        { name: 'Information Brochure', section: 'brochure' },
        { name: 'Accreditation and Achievements', section: 'accreditation' },
        { name: 'E-Resources', section: 'eresources' },
        { name: 'Self-Learning Resources', section: 'selflearning' },
        { name: 'Intellectual Property Rights', section: 'ipr' },
        { name: 'Innovation Teaching and Learning', section: 'innovation' },
        { name: 'Role of Honor', section: 'honor' },
        { name: 'Events and Fests', section: 'events' },
        { name: 'News Letter', section: 'newsletter' },
        { name: 'Magazines', section: 'magazines' },
        { name: 'Gallery', section: 'gallery' }
    ],
    facilities: [
        { name: 'Computer Labs', description: '600 computer systems with latest configurations' },
        { name: 'Air Conditioned Labs', description: 'All laboratories are fully air conditioned' },
        { name: 'Projectors', description: 'Every lab equipped with projectors for demonstrations' },
        { name: 'Power Backup', description: '60KVA UPS and 125 KVA DG set for uninterrupted power' }
    ],
    labs: [
        { name: 'Programming Lab', description: 'C, C++, Java, Python programming practice', equipment: ['Dell Workstations', 'Visual Studio', 'Eclipse IDE'] },
        { name: 'Database Lab', description: 'SQL, Oracle, MongoDB database management', equipment: ['Oracle 19c', 'MySQL Server', 'MongoDB'] },
        { name: 'Networking Lab', description: 'Network configuration and administration', equipment: ['Cisco Routers', 'Switches', 'Network Analyzers'] },
        { name: 'AI/ML Lab', description: 'Artificial Intelligence and Machine Learning research', equipment: ['High-end GPUs', 'TensorFlow', 'PyTorch'] },
        { name: 'Project Lab', description: 'Final year project development', equipment: ['Server Systems', 'Cloud Access', 'Development Tools'] }
    ],
    achievements: [
        { title: 'AICTE Approval', description: 'Approved by All India Council for Technical Education', year: '2007' },
        { title: 'JNTUA Affiliation', description: 'Affiliated to Jawaharlal Nehru Technological University Anantapur', year: '2007' },
        { title: 'M.Tech Program', description: 'Started M.Tech in Computer Science & Engineering', year: '2011' }
    ],
    accreditations: [
        { name: 'AICTE Approved', year: '2007' },
        { name: 'JNTUA Affiliated', year: '2007' }
    ]
}

// Static Civil Engineering Department Data
const civilStaticData = {
    code: 'CIVIL',
    name: 'Civil Engineering',
    fullName: 'Department of Civil Engineering',
    description: 'Building the infrastructure of tomorrow with sustainable engineering solutions',
    icon: 'Building2',
    color: '#F59E0B',
    establishedYear: 2009,
    totalStudents: 300,
    totalFaculty: 15,
    email: 'civil@drkvsrit.in',
    phone: '7660003346',
    hodName: 'Dr. Civil HOD',
    hodEmail: 'hod.civil@drkvsrit.in',
    hodPhone: '9704333790',
    programType: 'B.Tech & M.Tech',
    duration: '4 years / 2 years',
    overview: `The Department of Civil Engineering has been playing a vital role in producing quality engineers ever since it was established in the year 2009.

The Department has M.Tech programme with an Intake 12 along with its traditional B.Tech. programme in Civil Engineering with an intake 60.

The Department of Civil Engineering, one of the founding Departments of Dr KVSRIT, over the years, has grown tremendously. With its multifaceted faculty, it provides high quality teaching. We provide very attractive facilities and environment who joins the Department as Faculty or Student.

As the problems the society faces are multi-dimensional, so must be our efforts at combatting them. With this view in mind, since the inception of the Department, our goal is to do research in challenging engineering problems and provide efficient engineering solution in the various sub-disciplines of Civil Engineering.

The Department disseminates the knowledge gained from its high quality research through training programs and interacts with world renowned personalities through workshops and conferences.

As per the vision and mission, our aim is to deliver the best to our students, to the society and the nation.`,
    vision: 'To be a Center of Academic Excellence for imparting Quality Education, Research and Consultancy in Civil Engineering to meet Societal Needs with Credibility, Integrity and Ethical Standards.',
    mission: [
        { id: 'M1', text: 'To produce Technically Competent Civil Engineers with Best Practices of Teaching-Learning Process.' },
        { id: 'M2', text: 'To develop Wide Range of Skills in Cutting Edge Technology for Sustainable Development.' },
        { id: 'M3', text: 'To develop Entrepreneurial Spirit and Professional Ethics to serve the Society.' }
    ],
    psos: [
        { id: 'PSO1', text: 'Analyze and design Building and Transportation Systems.' },
        { id: 'PSO2', text: 'Identify and recommend Sustainable Materials and Technologies for alternate engineered solutions.' },
        { id: 'PSO3', text: 'Provide Solution to challenges in water supply and sewerage system.' }
    ],
    peos: [
        { id: 'PEO1', text: 'Practice Civil Engineering in Construction Industry, Public Sector Undertaking and as an Entrepreneur for a Successful Professional career.' },
        { id: 'PEO2', text: 'Pursue Higher Education for Professional Development.' },
        { id: 'PEO3', text: 'Exhibit leadership qualities with demonstrable attributes in lifelong learning to contribute to the Societal Needs.' }
    ],
    pos: [
        { id: '1', title: 'Engineering Knowledge', text: 'The student is capable of applying the principles of basic sciences and mathematics in learning the Civil Engineering subjects. Graduates will be proficient in the core principles of Civil Engineering as they pertain to the sub-fields of Environmental Engineering, Geo-Technical Engineering, Structural Engineering, Transportation Engineering, and Water Resources Engineering and will be able to apply these principles in engineering practice.' },
        { id: '2', title: 'Problem Analysis', text: 'The Graduates will possess critical thinking skills, problem solving abilities and familiarity with the computational procedures essential to the field.' },
        { id: '3', title: 'Design & Development of Solutions', text: 'The student is able to plan, analyze, design and look after the construction of various types of Civil Engineering structures with appropriate consideration for public health and safety, cultural, societal and environmental considerations.' },
        { id: '4', title: 'Conduct investigations of complex problems', text: 'The student will use research based methods to design, conduct experiments, to analyze and interpret experimental data.' },
        { id: '5', title: 'Modern Tool Usage', text: 'The student will get hands on training in the various modern Civil Engineering software and modern equipment.' },
        { id: '6', title: 'The Engineer and Society', text: 'The students will apply reasoning and uses appropriate knowledge to assess societal, health, safety, legal and cultural issues.' },
        { id: '7', title: 'Environment and Sustainability', text: 'As the students possess substantial knowledge in multi disciplinary subjects, they will be able to plan various projects keeping in view of its environmental effects on other related fields.' },
        { id: '8', title: 'Ethics', text: 'The student will apply ethical principles and commitment to profession and responsibilities of their profession.' },
        { id: '9', title: 'Individual and Team work', text: 'The graduate is capable of working productively as an individual, as a member or a leader in driver set teams.' },
        { id: '10', title: 'Communication', text: 'The student will possess mastery in good communication skills, expressing ideas, writing technical reports and effective managerial skills.' },
        { id: '11', title: 'Project Management and Finance', text: 'The graduates will acquire knowledge and understanding of the critical issues for professional practices such as the procurement of works, interaction with contractors during the construction phase of a project, financial and managerial capabilities.' },
        { id: '12', title: 'Life-Long learning', text: 'The student will have an awareness of contemporary issues and will contribute to the well being of the community with life-long learning in the broadest context of ever growing technology.' }
    ],
    navigationItems: [
        { name: 'About Department', section: 'about' },
        { name: 'Programs Offered', section: 'programs' },
        { name: 'Faculty', section: 'faculty' },
        { name: 'Academic Committees', section: 'committees' },
        { name: 'Infrastructure', section: 'infrastructure' },
        { name: 'Campus Placements', section: 'placements' },
        { name: 'Professional Societies', section: 'societies' },
        { name: 'Industry Institute Interaction', section: 'industry' },
        { name: 'Research and Consultancy', section: 'research' },
        { name: 'Information Brochure', section: 'brochure' },
        { name: 'Accreditation and Achievements', section: 'accreditation' },
        { name: 'E-Resources', section: 'eresources' },
        { name: 'Self-Learning Resources', section: 'selflearning' },
        { name: 'Intellectual Property Rights', section: 'ipr' },
        { name: 'Role of Honor', section: 'honor' },
        { name: 'Events and Fests', section: 'events' },
        { name: 'News Letters', section: 'newsletter' },
        { name: 'Gallery', section: 'gallery' }
    ],
    facilities: [
        { name: 'Survey Lab', description: 'Equipped with modern surveying instruments and equipment' },
        { name: 'Concrete Lab', description: 'Testing facilities for concrete and construction materials' },
        { name: 'CAD Lab', description: 'Computer-aided design and drafting facilities' },
        { name: 'Geotechnical Lab', description: 'Soil testing and analysis equipment' }
    ],
    labs: [
        { name: 'Surveying Lab', description: 'Land surveying and measurement techniques', equipment: ['Total Stations', 'Theodolites', 'Leveling Instruments'] },
        { name: 'Strength of Materials Lab', description: 'Testing mechanical properties of materials', equipment: ['UTM Machine', 'Compression Testing', 'Impact Testers'] },
        { name: 'Fluid Mechanics Lab', description: 'Study of fluid behavior and hydraulics', equipment: ['Flow Measurement', 'Pumps', 'Hydraulic Bench'] },
        { name: 'Environmental Engineering Lab', description: 'Water and wastewater analysis', equipment: ['pH Meters', 'BOD Incubators', 'Spectrophotometers'] },
        { name: 'Transportation Engineering Lab', description: 'Highway materials and pavement testing', equipment: ['Marshall Apparatus', 'CBR Machine', 'Aggregate Testing'] }
    ],
    achievements: [
        { title: 'AICTE Approval', description: 'Approved by All India Council for Technical Education', year: '2009' },
        { title: 'JNTUA Affiliation', description: 'Affiliated to Jawaharlal Nehru Technological University Anantapur', year: '2009' },
        { title: 'M.Tech Program', description: 'Started M.Tech in Structural Engineering', year: '2012' }
    ],
    accreditations: [
        { name: 'AICTE Approved', year: '2009' },
        { name: 'JNTUA Affiliated', year: '2009' }
    ]
}

// Static ECE Department Data
const eceStaticData = {
    code: 'ECE',
    name: 'Electronics and Communication Engineering',
    fullName: 'Department of Electronics and Communication Engineering',
    description: 'Advancing technology through innovation in electronics, communication, and embedded systems',
    icon: 'Radio',
    color: '#8B5CF6',
    establishedYear: 2007,
    totalStudents: 500,
    totalFaculty: 20,
    email: 'ece@drkvsrit.in',
    phone: '7660003347',
    hodName: 'Dr. ECE HOD',
    hodEmail: 'hod.ece@drkvsrit.in',
    hodPhone: '9704333791',
    programType: 'B.Tech & M.Tech',
    duration: '4 years / 2 years',
    overview: `The Department of Electronics and Communication Engineering has been playing a vital role in producing quality engineers ever since it was established in the year 2007. The department runs one under graduate program and two post graduate programs to cater to the ever-changing needs of technical excellence in all areas of Electronics and Communication Engineering such as VLSI & Embedded Systems, Telecommunications, Signal Processing etc. The intake for Under Graduate Program (B.Tech) is 120. The department also offers Post Graduation programs with specialization in Digital Electronics and Communication Systems (DECS) with an intake of 18 and VLSI & Embedded Systems Design with an intake of 24.

The Department headed by the Professors, Associate Professors, Assistant Professors who are experts in their respective disciplines. The department has got every facility to groom the students as per the demands of the industries and MNCs. The department has highly modernized laboratories with sophisticated equipment, which improves the practical working competency in the students and the confidence.

The Department aims at educating and training students with sound knowledge and awareness in the latest trends in Electronics and Communication Engineering. The regular interaction session with eminent Professors from reputed universities create awareness in the student about the latest developments in the field of science and technology.

The Department of ECE is having professional society memberships like ISTE & IEEE actively participates in conducting various events in association with the above-mentioned professional bodies periodically. The Department comprising of the faculty members and the student members organizes the co-curricular and extracurricular activities for the students in order to sharpen their creativity.

The Department of ECE has an excellent placement record. The Department nurtures students to enhance leadership skills, technical skills, and management abilities applicable to needs of Industries. Students have obtained prestigious placements with leading companies. A few are pursuing their higher studies at prestigious institutions in India and abroad as well.`,
    vision: 'To be a center of excellence in Electronics and Communication Engineering education and research, producing competent engineers who contribute to technological advancement and societal development.',
    mission: [
        { id: 'M1', text: 'To impart quality education in Electronics and Communication Engineering with emphasis on practical learning and innovation.' },
        { id: 'M2', text: 'To develop industry-ready professionals with strong technical foundation and problem-solving abilities.' },
        { id: 'M3', text: 'To promote research and development activities in emerging areas of electronics and communication.' },
        { id: 'M4', text: 'To inculcate professional ethics and lifelong learning skills in students.' }
    ],
    psos: [
        { id: 'PSO1', text: 'Design and develop electronic circuits, systems, and communication networks using modern tools and techniques.' },
        { id: 'PSO2', text: 'Apply knowledge of VLSI, embedded systems, and signal processing to solve real-world engineering problems.' },
        { id: 'PSO3', text: 'Demonstrate proficiency in telecommunications, wireless networks, and IoT applications.' }
    ],
    peos: [
        { id: 'PEO1', text: 'Excel in professional careers in electronics, communication, and allied industries with strong technical competence.' },
        { id: 'PEO2', text: 'Pursue higher education and research in specialized areas of Electronics and Communication Engineering.' },
        { id: 'PEO3', text: 'Demonstrate leadership, entrepreneurship, and commitment to ethical practices and societal welfare.' },
        { id: 'PEO4', text: 'Adapt to evolving technologies through continuous learning and professional development.' }
    ],
    pos: [
        { id: '1', title: 'Engineering Knowledge', text: 'Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems in electronics and communication.' },
        { id: '2', title: 'Problem Analysis', text: 'Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.' },
        { id: '3', title: 'Design/Development of Solutions', text: 'Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety.' },
        { id: '4', title: 'Conduct Investigations', text: 'Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.' },
        { id: '5', title: 'Modern Tool Usage', text: 'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities.' },
        { id: '6', title: 'The Engineer and Society', text: 'Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.' },
        { id: '7', title: 'Environment and Sustainability', text: 'Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate knowledge of sustainable development.' },
        { id: '8', title: 'Ethics', text: 'Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.' },
        { id: '9', title: 'Individual and Team Work', text: 'Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.' },
        { id: '10', title: 'Communication', text: 'Communicate effectively on complex engineering activities with the engineering community and with society at large.' },
        { id: '11', title: 'Project Management and Finance', text: 'Demonstrate knowledge and understanding of the engineering and management principles and apply these to manage projects and in multidisciplinary environments.' },
        { id: '12', title: 'Life-long Learning', text: 'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.' }
    ],
    navigationItems: [
        { name: 'About Department', section: 'about' },
        { name: 'Vision and Mission', section: 'vision' },
        { name: 'PEOs, PSOs and POs', section: 'programs' },
        { name: 'Programs Offered', section: 'programs' },
        { name: 'Faculty', section: 'faculty' },
        { name: 'FDP', section: 'fdp' },
        { name: 'Conferences', section: 'conferences' },
        { name: 'Publications', section: 'publications' },
        { name: 'Patents', section: 'patents' },
        { name: 'Academic Committees', section: 'committees' },
        { name: 'Infrastructure', section: 'infrastructure' },
        { name: 'Campus Placements', section: 'placements' },
        { name: 'Professional Societies', section: 'societies' },
        { name: 'Industry Institute Interaction', section: 'industry' },
        { name: 'Research and Consultancy', section: 'research' },
        { name: 'Information Brochure', section: 'brochure' },
        { name: 'Accreditation and Achievements', section: 'accreditation' },
        { name: 'E-Resources', section: 'eresources' },
        { name: 'Self-Learning Resources', section: 'selflearning' },
        { name: 'Intellectual Property Rights', section: 'ipr' },
        { name: 'Innovation Teaching and Learning', section: 'innovation' },
        { name: 'Role of Honor', section: 'honor' },
        { name: 'Events and Fests', section: 'events' },
        { name: 'News Letter', section: 'newsletter' },
        { name: 'Magazines', section: 'magazines' },
        { name: 'Gallery', section: 'gallery' }
    ],
    facilities: [
        { name: 'Electronics Labs', description: 'Well-equipped labs with modern electronic instruments and equipment' },
        { name: 'Communication Labs', description: 'Advanced communication systems and network analyzers' },
        { name: 'VLSI Lab', description: 'FPGA boards and VLSI design tools' },
        { name: 'Embedded Systems Lab', description: 'Microcontrollers, ARM processors, and development kits' }
    ],
    labs: [
        { name: 'Basic Electronics Lab', description: 'Fundamental electronics circuits and measurements', equipment: ['CROs', 'Function Generators', 'Multimeters'] },
        { name: 'Digital Electronics Lab', description: 'Digital circuits and logic design', equipment: ['Digital Trainers', 'Logic Analyzers', 'IC Testers'] },
        { name: 'Communication Systems Lab', description: 'Analog and digital communication systems', equipment: ['Spectrum Analyzers', 'Signal Generators', 'Antenna Trainers'] },
        { name: 'Microprocessors Lab', description: '8085, 8086 and ARM processor programming', equipment: ['Microprocessor Kits', 'ARM Development Boards', 'Emulators'] },
        { name: 'VLSI Design Lab', description: 'FPGA and ASIC design', equipment: ['Xilinx FPGA Boards', 'Cadence Tools', 'ModelSim'] }
    ],
    achievements: [
        { title: 'AICTE Approval', description: 'Approved by All India Council for Technical Education', year: '2007' },
        { title: 'JNTUA Affiliation', description: 'Affiliated to Jawaharlal Nehru Technological University Anantapur', year: '2007' },
        { title: 'M.Tech Programs', description: 'Started M.Tech in DECS and VLSI & Embedded Systems', year: '2011' }
    ],
    accreditations: [
        { name: 'AICTE Approved', year: '2007' },
        { name: 'JNTUA Affiliated', year: '2007' }
    ]
}

// Static EEE Department Data
const eeeStaticData = {
    code: 'EEE',
    name: 'Electrical and Electronics Engineering',
    fullName: 'Department of Electrical and Electronics Engineering',
    description: 'Delivering technically competent and professionally ethical electrical engineers',
    icon: 'Zap',
    color: '#F59E0B',
    establishedYear: 2007,
    totalStudents: 300,
    totalFaculty: 15,
    email: 'eee@drkvsrit.in',
    phone: '7660003346',
    hodName: 'Dr. EEE HOD',
    hodEmail: 'hod.eee@drkvsrit.in',
    hodPhone: '9704333790',
    programType: 'B.Tech',
    duration: '4 years',
    overview: `The department of EEE was established in 2007 with an intake of 60 students in the UG programme. The department has highly qualified and experienced faculty with Professors, Associate Professors and Assistant Professors. The department has good infrastructural facilitates and is equipped with full-fledged laboratories. The department also has audio-visual facilities with two LCD for effective teaching. The staff members are deputed to participate in workshops, conferences, and refresher courses to keep in pace with recent developments in the field of Electrical & Electronics Engineering.

We have a Departmental Library which caters to the needs of the students & staff. The Department has established the Department Association named as KITES. As a part of the curriculum, Internship programme is arranged for students of B.Tech in 2nd year II Semester.

The department has been organized National-conference on innovative research in engineering and technology in 2015. Department was organised many events like workshops, guest lecturer, seminars in regular intervals of academic years.

The department has organized a project expo on "Technovation-2K22" & "Technovation-2K24" in association with AEEE, organised a demo-cum-expo with many projects. The event was intended to showcase the variety, the quality and the standards of the projects taken up by the students of the EEE Department.`,
    vision: 'To be a Centre of Academic Excellence for imparting Professional Competence in the core Areas of Electrical and Electronics Engineering to contribute Value to the Knowledge Based Economy and Society.',
    mission: [
        { id: 'M1', text: 'To deliver Technically Competent and Professionally Ethical Electrical and Electronics Engineers.' },
        { id: 'M2', text: 'To Provide state of the art Laboratories with Modern Equipment for practical exposure to the students.' },
        { id: 'M3', text: 'To develop human potential to its fullest extent so that intellectuals capable of being an asset to the country can emerge.' },
        { id: 'M4', text: 'To advancement of the frontiers of knowledge in Electrical Engineering and to provide the students with a stimulating and rewarding Learning Experience.' }
    ],
    psos: [
        { id: 'PSO1', text: 'Measure, analyze, model and control the behavior of electrical quantities associated with constituents of energy and allied systems.' },
        { id: 'PSO2', text: 'Develop Models, analyze and assess the performance of different types of electrical machines, Generation, Transmission, Distribution and Protection Mechanisms in Power Systems.' },
        { id: 'PSO3', text: 'Design, develop, analyze electrical and electronics systems, deploy control strategies for power electronics related and other applications.' }
    ],
    peos: [
        { id: 'PEO1', text: 'Possess successful careers in Electrical Science and allied areas and pursue higher education with a broad knowledge in Engineering Principles.' },
        { id: 'PEO2', text: 'Utilize their technical, analytical knowledge for societal progress and enrich them to keep in pace with relevant advancements by engaging themselves in lifelong learning.' },
        { id: 'PEO3', text: 'Exhibit professionalism by displaying competence, leadership, dedication and commitment.' }
    ],
    pos: [
        { id: '1', title: 'Engineering Knowledge', text: 'Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.' },
        { id: '2', title: 'Problem Analysis', text: 'Identify, formulate, review research literature, and analyse complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.' },
        { id: '3', title: 'Design/Development of Solutions', text: 'Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.' },
        { id: '4', title: 'Conduct Investigations', text: 'Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.' },
        { id: '5', title: 'Modern Tool Usage', text: 'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.' },
        { id: '6', title: 'The Engineer and Society', text: 'Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.' },
        { id: '7', title: 'Environment and Sustainability', text: 'Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.' },
        { id: '8', title: 'Ethics', text: 'Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.' },
        { id: '9', title: 'Individual and Team Work', text: 'Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.' },
        { id: '10', title: 'Communication', text: 'Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.' },
        { id: '11', title: 'Project Management and Finance', text: 'Demonstrate knowledge and understanding of the engineering and management principles and apply these to one\'s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.' },
        { id: '12', title: 'Life-long Learning', text: 'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological content.' }
    ],
    navigationItems: [
        { name: 'About Department', section: 'about' },
        { name: 'Vision and Mission', section: 'vision' },
        { name: 'Programs Offered', section: 'programs' },
        { name: 'Faculty', section: 'faculty' },
        { name: 'Publications', section: 'publications' },
        { name: 'FDP', section: 'fdp' },
        { name: 'Academic Committees', section: 'committees' },
        { name: 'Infrastructure', section: 'infrastructure' },
        { name: 'Campus Placements', section: 'placements' },
        { name: 'Professional Societies', section: 'societies' },
        { name: 'Industry Institute Interaction', section: 'industry' },
        { name: 'Research and Consultancy', section: 'research' },
        { name: 'Information Brochure', section: 'brochure' },
        { name: 'Accreditation and Achievements', section: 'accreditation' },
        { name: 'E-Resources', section: 'eresources' },
        { name: 'Self-Learning Resources', section: 'selflearning' },
        { name: 'Intellectual Property Rights', section: 'ipr' },
        { name: 'Innovation Teaching and Learning', section: 'innovation' },
        { name: 'Role of Honor', section: 'honor' },
        { name: 'Events and Fests', section: 'events' },
        { name: 'News Letters', section: 'newsletter' },
        { name: 'Magazines', section: 'magazines' },
        { name: 'Gallery', section: 'gallery' }
    ],
    facilities: [
        { name: 'Electrical Machines Lab', description: 'AC and DC machines for practical learning' },
        { name: 'Power Electronics Lab', description: 'Modern power electronics equipment and converters' },
        { name: 'Control Systems Lab', description: 'PLC, SCADA and control system trainers' },
        { name: 'Measurements Lab', description: 'Electrical measurements and instrumentation' }
    ],
    labs: [
        { name: 'Electrical Machines Lab', description: 'AC/DC machines and transformers', equipment: ['DC Motors', 'AC Motors', 'Transformers', 'Alternators'] },
        { name: 'Power Electronics Lab', description: 'Power electronic converters and drives', equipment: ['Inverters', 'Converters', 'Choppers', 'SCR Trainers'] },
        { name: 'Control Systems Lab', description: 'Control system design and analysis', equipment: ['PLC Trainers', 'SCADA Systems', 'PID Controllers'] },
        { name: 'Electrical Measurements Lab', description: 'Electrical instrumentation and measurements', equipment: ['Multimeters', 'Energy Meters', 'CTs and PTs', 'Power Analyzers'] }
    ],
    achievements: [
        { title: 'AICTE Approval', description: 'Approved by All India Council for Technical Education', year: '2007' },
        { title: 'JNTUA Affiliation', description: 'Affiliated to Jawaharlal Nehru Technological University Anantapur', year: '2007' },
        { title: 'National Conference', description: 'Organized National Conference on Innovative Research in Engineering and Technology', year: '2015' },
        { title: 'Technovation', description: 'Organized project expo Technovation-2K22 and Technovation-2K24', year: '2024' }
    ],
    accreditations: [
        { name: 'AICTE Approved', year: '2007' },
        { name: 'JNTUA Affiliated', year: '2007' }
    ]
}

// Static MECH Department Data
const mechStaticData = {
    code: 'MECH',
    name: 'Mechanical Engineering',
    fullName: 'Department of Mechanical Engineering',
    description: 'Building globally competitive mechanical engineers with emphasis on sustainable technologies',
    icon: 'Cog',
    color: '#EF4444',
    establishedYear: 2011,
    totalStudents: 480,
    totalFaculty: 18,
    email: 'mech@drkvsrit.in',
    phone: '7660003345',
    hodName: 'Dr. MECH HOD',
    hodEmail: 'hod.mech@drkvsrit.in',
    hodPhone: '9704333789',
    programType: 'B.Tech',
    duration: '4 years',
    overview: `The Department of Mechanical Engineering at DRKVSRIT started functioning in the academic year 2011-12. The Department offers an under graduate program in mechanical engineering that covers a wide range of topics in the field of mechanical engineering such as thermal and fluid sciences, engineering design, dynamic and control, materials, manufacturing, modeling and simulation as per the JNTUA curriculum to suit the interests of students and meet the industry requirements.

The student capacity of the Department is 120. Teaching and learning activities at the Department are designed in such way as to stimulate intellectual curiosity, creativity and innovation in students. The Department has well qualified and experienced team of faculty members who have their specializations in different branches/areas of mechanical Engineering. The highly committed faculty with their innovative ideas guides the students with their projects and industry assignments.

The efforts of faculty, well experienced supporting staff, enable learning environment and availability of modern facilities are reflected in the excellent performance of the students. Efforts are underway to set up a Research & Development center to initiate research activities in the Department.

The Department frequently conducts theoretical and practical technical sessions, industrial visits for the benefit of the students and faculty under the ISTE students and faculty chapters. These chapters are actively involved in conducting technical talks and guest lectures by eminent personalities from the industry and academicians from reputed institutes like IISC, IITs and NITs.`,
    vision: 'To be a Center of Academic Excellence for Quality Education with Emphasis on Sustainable Technologies, Research, Consultancy and Entrepreneurship for Societal Development.',
    mission: [
        { id: 'M1', text: 'To Impart highest quality education to the students to build their capacity and enhance their skills to make them globally competitive mechanical engineers.' },
        { id: 'M2', text: 'To Integrate research facilities to provide collaborative environment that stimulates faculty and students with opportunities to create, analyze, apply and disseminate knowledge.' },
        { id: 'M3', text: 'To develop alliances with world class R&D Organizations, Educational Institutions, Industry and alumni for excellence in Teaching, Research and Consultancy Practices.' },
        { id: 'M4', text: 'To enrich the students with Academic Environment of Excellence, Leadership and Ethical Guidelines needed for a Productive Career.' }
    ],
    psos: [
        { id: 'PSO1', text: 'Demonstrate knowledge in the area of Design, Analysis and fabrication of Mechanical Systems.' },
        { id: 'PSO2', text: 'Apply learned Concepts and Management Skills to associate professionally in Industry or as an Entrepreneur.' }
    ],
    peos: [
        { id: 'PEO1', text: 'Graduates shall have successful Career as Mechanical Engineers, lead & manage Teams in the field of industries to meet Society\'s need with their knowledge.' },
        { id: 'PEO2', text: 'Graduates shall be professional in engineering Practice and socially responsible in design analysis and execution of Mechanical Systems.' },
        { id: 'PEO3', text: 'Graduates shall be pursuing Advanced Education, Research and engage in the process of life-long learning to formulate and solve Problems.' }
    ],
    pos: [
        { id: '1', title: 'Engineering Knowledge', text: 'Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.' },
        { id: '2', title: 'Problem Analysis', text: 'Identify, formulate, review research literature, and analyse complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.' },
        { id: '3', title: 'Design/Development of Solutions', text: 'Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety.' },
        { id: '4', title: 'Conduct Investigations', text: 'Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.' },
        { id: '5', title: 'Modern Tool Usage', text: 'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities.' },
        { id: '6', title: 'The Engineer and Society', text: 'Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.' },
        { id: '7', title: 'Environment and Sustainability', text: 'Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.' },
        { id: '8', title: 'Ethics', text: 'Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.' },
        { id: '9', title: 'Individual and Team Work', text: 'Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.' },
        { id: '10', title: 'Communication', text: 'Communicate effectively on complex engineering activities with the engineering community and with society at large.' },
        { id: '11', title: 'Project Management and Finance', text: 'Demonstrate knowledge and understanding of the engineering and management principles and apply these to manage projects.' },
        { id: '12', title: 'Life-long Learning', text: 'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.' }
    ],
    navigationItems: [
        { name: 'About Department', section: 'about' },
        { name: 'Vision and Mission', section: 'vision' },
        { name: 'Programs Offered', section: 'programs' },
        { name: 'Faculty', section: 'faculty' },
        { name: 'Academic Committees', section: 'committees' },
        { name: 'Infrastructure', section: 'infrastructure' },
        { name: 'Campus Placements', section: 'placements' },
        { name: 'Professional Societies', section: 'societies' },
        { name: 'Industry Institute Interaction', section: 'industry' },
        { name: 'Research and Consultancy', section: 'research' },
        { name: 'Information Brochure', section: 'brochure' },
        { name: 'Accreditation and Achievements', section: 'accreditation' },
        { name: 'E-Resources', section: 'eresources' },
        { name: 'Self-Learning Resources', section: 'selflearning' },
        { name: 'Intellectual Property Rights', section: 'ipr' },
        { name: 'Role of Honor', section: 'honor' },
        { name: 'Events and Fests', section: 'events' },
        { name: 'News Letters', section: 'newsletter' },
        { name: 'Gallery', section: 'gallery' }
    ],
    facilities: [
        { name: 'CAD/CAM Lab', description: 'Computer-aided design and manufacturing software' },
        { name: 'Thermal Engineering Lab', description: 'Heat transfer and thermodynamics equipment' },
        { name: 'Workshop', description: 'Comprehensive manufacturing workshop' },
        { name: 'Fluid Mechanics Lab', description: 'Fluid flow and hydraulics equipment' }
    ],
    labs: [
        { name: 'CAD/CAM Lab', description: 'Design and manufacturing software', equipment: ['AutoCAD', 'SolidWorks', 'CATIA', 'CNC Machines'] },
        { name: 'Thermal Engineering Lab', description: 'Heat engines and thermal systems', equipment: ['IC Engines', 'Boilers', 'Heat Exchangers', 'Refrigeration Units'] },
        { name: 'Fluid Mechanics Lab', description: 'Fluid dynamics and hydraulics', equipment: ['Wind Tunnel', 'Hydraulic Bench', 'Pumps', 'Flow Meters'] },
        { name: 'Metallurgy Lab', description: 'Material testing and analysis', equipment: ['Microscopes', 'Hardness Testers', 'Impact Testers', 'Furnaces'] },
        { name: 'Manufacturing Workshop', description: 'Hands-on manufacturing processes', equipment: ['Lathes', 'Milling Machines', 'Welding Equipment', 'Foundry Setup'] }
    ],
    achievements: [
        { title: 'AICTE Approval', description: 'Approved by All India Council for Technical Education', year: '2011' },
        { title: 'JNTUA Affiliation', description: 'Affiliated to Jawaharlal Nehru Technological University Anantapur', year: '2011' },
        { title: 'ISTE Chapter', description: 'Active ISTE students and faculty chapters', year: '2012' }
    ],
    accreditations: [
        { name: 'AICTE Approved', year: '2011' },
        { name: 'JNTUA Affiliated', year: '2011' }
    ]
}

// Static MBA Department Data
const mbaStaticData = {
    code: 'MBA',
    name: 'Master of Business Administration',
    fullName: 'Department of Master of Business Administration',
    description: 'Fostering high standards of Management Education with Innovation and Entrepreneurship',
    icon: 'Briefcase',
    color: '#6366F1',
    establishedYear: 2009,
    totalStudents: 240,
    totalFaculty: 12,
    email: 'mba@drkvsrit.in',
    phone: '7660003356',
    hodName: 'Dr. MBA HOD',
    hodEmail: 'hod.mba@drkvsrit.in',
    hodPhone: '9440006717',
    programType: 'MBA',
    duration: '2 years',
    overview: `The Department of Master of Business Administration discipline at KVSRIT dates back to 2009, with an initial intake of 60 students. This was increased to 120 from 2013. Even though the Department is very young; it has made a name for itself, among the top few colleges, at the university level, through its performance in the examinations and in placement.

The Department strives to develop long term relationships with industries and market the Students Talents effectively; the students are thus provided high level leads and career pathways that enable them to gain access to a broad range of high potential MBA Career Opportunities.

The mission of the department is to impart comprehensive managerial knowledge, entrepreneurial skills and provide corporate exposure through contemporary curriculum.

In order to meet the wide ranging, challenging and growing demands for professional Managers, in the recent times, from both the developing and the developed Nations, the Department of "Management Studies" was established in the College, as an exclusive Department and as a separate entity.`,
    vision: 'To be a Centre for Academic Excellence in fostering high standards of Management Education to Learners with Innovation and Entrepreneurship to cater for the Global Challenges in Industry, Government and Society.',
    mission: [
        { id: 'M1', text: 'To impart Comprehensive Managerial Knowledge and Entrepreneurial Skills with Contemporary instruction.' },
        { id: 'M2', text: 'To provide Leadership Abilities and Corporate Exposure with Research Awareness through Industry-Institute Interactions.' },
        { id: 'M3', text: 'To sensitize Learners towards Work Ethics, Social Responsibility and Positive Approach in endeavor of Business Tasks effectively.' }
    ],
    psos: [
        { id: 'PSO1', text: 'Apply analytical and critical thinking abilities for data-based decision making in business contexts.' },
        { id: 'PSO2', text: 'Demonstrate leadership and management skills to achieve organizational goals effectively.' }
    ],
    peos: [
        { id: 'PEO1', text: 'Graduates of the Program will have strong fundamental knowledge in Business Management and allied fields to develop Innovative Solutions for Contemporary Problems with changing business trends.' },
        { id: 'PEO2', text: 'Graduates of the Program will have employability in different Disciplines of Management appropriately.' },
        { id: 'PEO3', text: 'Graduates of the Program will have ability to adopt to the changing business needs with a focus on R & D and Business Incubation.' },
        { id: 'PEO4', text: 'Graduates of the Program will inculcate the qualities of Leadership and Innovation by exploring their own opportunities through Entrepreneurship and Professional Practice.' }
    ],
    pos: [
        { id: '1', title: 'Management Theories', text: 'Apply Knowledge of management theories and practices to solve business problems.' },
        { id: '2', title: 'Analytical Thinking', text: 'Foster Analytical and Critical thinking abilities for data-based decision making.' },
        { id: '3', title: 'Leadership', text: 'Ability to develop Value based Leadership ability.' },
        { id: '4', title: 'Business Ethics', text: 'Ability to understand, analyze and communication global, economic, legal and ethical aspects of business.' },
        { id: '5', title: 'Team Work', text: 'Ability to lead themselves and others in the achievement of organizational goals, contributing effectively to a team environment.' },
        { id: '6', title: 'Problem Solving', text: 'Utilize qualitative and quantitative methods to investigate and solve critical business problems.' },
        { id: '7', title: 'Functional Knowledge', text: 'Gain the knowledge of fundamentals and practical applications from multiple functional areas (i.e., finance, marketing, operations etc.,) and implement in daily job activities.' },
        { id: '8', title: 'Lifelong Learning', text: 'Engage in independent and lifelong learning by developing a habit of knowing and understanding advances taking place in the field of business and management.' }
    ],
    navigationItems: [
        { name: 'About Department', section: 'about' },
        { name: 'Vision and Mission', section: 'vision' },
        { name: 'Programs Offered', section: 'programs' },
        { name: 'Faculty', section: 'faculty' },
        { name: 'Academic Committees', section: 'committees' },
        { name: 'Infrastructure', section: 'infrastructure' },
        { name: 'Campus Placements', section: 'placements' },
        { name: 'Professional Societies', section: 'societies' },
        { name: 'Industry Institute Interaction', section: 'industry' },
        { name: 'Research and Consultancy', section: 'research' },
        { name: 'Information Brochure', section: 'brochure' },
        { name: 'Accreditation and Achievements', section: 'accreditation' },
        { name: 'E-Resources', section: 'eresources' },
        { name: 'Self-Learning Resources', section: 'selflearning' },
        { name: 'Intellectual Property Rights', section: 'ipr' },
        { name: 'Role of Honor', section: 'honor' },
        { name: 'Faculty Initiatives', section: 'initiatives' },
        { name: 'Events and Fests', section: 'events' },
        { name: 'News Letters', section: 'newsletter' },
        { name: 'Gallery', section: 'gallery' }
    ],
    facilities: [
        { name: 'Computer Lab', description: 'Modern computing facilities for business analytics' },
        { name: 'Case Study Room', description: 'Dedicated space for case study discussions' },
        { name: 'Library', description: 'Extensive collection of management books and journals' },
        { name: 'Seminar Hall', description: 'Well-equipped hall for presentations and guest lectures' }
    ],
    labs: [
        { name: 'Computer Lab', description: 'Business software and analytics tools', equipment: ['MS Office', 'Tally', 'SAP', 'SPSS'] },
        { name: 'Language Lab', description: 'Communication and soft skills development', equipment: ['Audio-Visual Equipment', 'GDPI Training Setup'] }
    ],
    achievements: [
        { title: 'AICTE Approval', description: 'Approved by All India Council for Technical Education', year: '2009' },
        { title: 'JNTUA Affiliation', description: 'Affiliated to Jawaharlal Nehru Technological University Anantapur', year: '2009' },
        { title: 'Intake Increase', description: 'Intake increased from 60 to 120 students', year: '2013' }
    ],
    accreditations: [
        { name: 'AICTE Approved', year: '2009' },
        { name: 'JNTUA Affiliated', year: '2009' }
    ]
}

const DepartmentDetail = () => {
    const { code } = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const [department, setDepartment] = useState(null)
    const [faculty, setFaculty] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [activeSection, setActiveSection] = useState('about')

    // Reset state and fetch data when department code changes
    useEffect(() => {
        // Reset all state when code changes
        setDepartment(null)
        setFaculty([])
        setError(null)
        setActiveSection('about')

        // Scroll to top immediately when changing departments
        window.scrollTo({ top: 0, behavior: 'instant' })

        const fetchDepartmentData = async () => {
            try {
                setLoading(true)

                // Check if it's CSE department - use static data
                if (code.toUpperCase() === 'CSE') {
                    setDepartment(cseStaticData)
                    setFaculty([])
                    setLoading(false)
                    return
                }

                // Check if it's Civil Engineering department - use static data
                if (code.toUpperCase() === 'CIVIL') {
                    setDepartment(civilStaticData)
                    setFaculty([])
                    setLoading(false)
                    return
                }

                // Check if it's ECE department - use static data
                if (code.toUpperCase() === 'ECE') {
                    setDepartment(eceStaticData)
                    setFaculty([])
                    setLoading(false)
                    return
                }

                // Check if it's EEE department - use static data
                if (code.toUpperCase() === 'EEE') {
                    setDepartment(eeeStaticData)
                    setFaculty([])
                    setLoading(false)
                    return
                }

                // Check if it's MECH department - use static data
                if (code.toUpperCase() === 'MECH') {
                    setDepartment(mechStaticData)
                    setFaculty([])
                    setLoading(false)
                    return
                }

                // Check if it's MBA department - use static data
                if (code.toUpperCase() === 'MBA') {
                    setDepartment(mbaStaticData)
                    setFaculty([])
                    setLoading(false)
                    return
                }

                // For other departments, fetch from API
                const deptResponse = await fetch(`http://localhost:5000/api/departments/code/${code}`)
                if (!deptResponse.ok) throw new Error('Department not found')
                const deptData = await deptResponse.json()
                setDepartment(deptData)

                // Fetch faculty for this department
                const facultyResponse = await fetch(`http://localhost:5000/api/faculty`)
                const facultyData = await facultyResponse.json()
                const filteredFaculty = facultyData.filter(f => f.department === deptData.name)
                setFaculty(filteredFaculty)

                setLoading(false)
            } catch (err) {
                // If API fails and it's CSE, still show static data
                if (code.toUpperCase() === 'CSE') {
                    setDepartment(cseStaticData)
                    setFaculty([])
                    setLoading(false)
                    return
                }
                // If API fails and it's Civil, still show static data
                if (code.toUpperCase() === 'CIVIL') {
                    setDepartment(civilStaticData)
                    setFaculty([])
                    setLoading(false)
                    return
                }
                // If API fails and it's ECE, still show static data
                if (code.toUpperCase() === 'ECE') {
                    setDepartment(eceStaticData)
                    setFaculty([])
                    setLoading(false)
                    return
                }
                // If API fails and it's EEE, still show static data
                if (code.toUpperCase() === 'EEE') {
                    setDepartment(eeeStaticData)
                    setFaculty([])
                    setLoading(false)
                    return
                }
                // If API fails and it's MECH, still show static data
                if (code.toUpperCase() === 'MECH') {
                    setDepartment(mechStaticData)
                    setFaculty([])
                    setLoading(false)
                    return
                }
                // If API fails and it's MBA, still show static data
                if (code.toUpperCase() === 'MBA') {
                    setDepartment(mbaStaticData)
                    setFaculty([])
                    setLoading(false)
                    return
                }
                setError(err.message)
                setLoading(false)
            }
        }

        fetchDepartmentData()
    }, [code])

    useEffect(() => {
        const hash = location.hash.replace('#', '')
        if (hash) {
            setActiveSection(hash)
            const element = document.getElementById(hash)
            element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [location])


    const scrollToSection = (section) => {
        setActiveSection(section)
        const element = document.getElementById(section)
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)]">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-[var(--color-text-secondary)]">Loading department details...</p>
                </div>
            </div>
        )
    }

    if (error || !department) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)]">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Department Not Found</h2>
                    <button onClick={() => navigate('/')} className="btn btn-primary">
                        <ArrowLeft size={18} />
                        Back to Home
                    </button>
                </div>
            </div>
        )
    }

    const Icon = iconMap[department.icon] || GraduationCap
    const hasStaticData = code.toUpperCase() === 'CSE' || code.toUpperCase() === 'CIVIL' || code.toUpperCase() === 'ECE' || code.toUpperCase() === 'EEE' || code.toUpperCase() === 'MECH' || code.toUpperCase() === 'MBA'

    return (
        <div className="department-page min-h-screen bg-[var(--color-background)] pt-40 md:pt-48">
            {/* Header */}
            <div className="bg-white border-b border-[var(--color-border)] shadow-sm">
                <div className="container mx-auto px-6 md:px-8 py-10 md:py-12">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] mb-8 transition-colors font-medium"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </button>

                    <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                        <div
                            className="w-24 h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                            style={{ backgroundColor: `${department.color}15` }}
                        >
                            <Icon size={48} style={{ color: department.color }} />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-3">
                                {department.fullName}
                            </h1>
                            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                                {department.description}
                            </p>
                            <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
                                <div className="flex items-center gap-2 bg-[var(--color-background)] px-4 py-2 rounded-full">
                                    <Calendar size={18} className="text-[var(--color-primary)]" />
                                    <span className="text-[var(--color-text-secondary)]">
                                        Established: <strong>{department.establishedYear || 'N/A'}</strong>
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 bg-[var(--color-background)] px-4 py-2 rounded-full">
                                    <Users size={18} className="text-[var(--color-primary)]" />
                                    <span className="text-[var(--color-text-secondary)]">
                                        <strong>{department.totalStudents}</strong> Students
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 bg-[var(--color-background)] px-4 py-2 rounded-full">
                                    <User size={18} className="text-[var(--color-primary)]" />
                                    <span className="text-[var(--color-text-secondary)]">
                                        <strong>{department.totalFaculty}</strong> Faculty Members
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-8 py-12 md:py-16">
                <div className="grid lg:grid-cols-4 gap-8 lg:gap-10">
                    {/* Sidebar Navigation - Only for departments with static data */}
                    {hasStaticData && department.navigationItems && (
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-2xl p-5 border border-[var(--color-border)] sticky top-28 shadow-sm"
                            >
                                <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-5 px-3 pb-3 border-b border-[var(--color-border)]">
                                    Quick Navigation
                                </h3>
                                <nav className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-2">
                                    {department.navigationItems.map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => scrollToSection(item.section)}
                                            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all ${activeSection === item.section
                                                ? 'bg-[var(--color-primary)] text-white font-medium shadow-md'
                                                : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-background)] hover:text-[var(--color-primary)] hover:pl-5'
                                                }`}
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </nav>
                            </motion.div>
                        </div>
                    )}

                    {/* Main Content */}
                    <div className={`${hasStaticData ? 'lg:col-span-2' : 'lg:col-span-2'} space-y-8 md:space-y-10`}>
                        {/* About Section */}
                        <motion.section
                            id="about"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-5 pb-4 border-b border-[var(--color-border)]">
                                About the Department
                            </h2>
                            <div className="text-[var(--color-text-secondary)] leading-relaxed md:leading-loose whitespace-pre-line text-base md:text-lg">
                                {department.overview}
                            </div>
                        </motion.section>

                        {/* Vision Section - Only for departments with static data */}
                        {hasStaticData && department.vision && (
                            <motion.section
                                id="vision"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 }}
                                className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-4 md:gap-5 mb-5 pb-4 border-b border-[var(--color-border)]">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center shadow-lg">
                                        <Eye className="text-white" size={28} />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] font-['Outfit']">
                                        Vision
                                    </h2>
                                </div>
                                <p className="text-[var(--color-text-secondary)] leading-relaxed md:leading-loose text-base md:text-lg pl-1">
                                    {department.vision}
                                </p>
                            </motion.section>
                        )}

                        {/* Mission Section - Only for departments with static data */}
                        {hasStaticData && department.mission && (
                            <motion.section
                                id="mission"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-4 md:gap-5 mb-5 pb-4 border-b border-[var(--color-border)]">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary-light)] flex items-center justify-center shadow-lg">
                                        <Target className="text-[var(--color-text-primary)]" size={28} />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] font-['Outfit']">
                                        Mission
                                    </h2>
                                </div>
                                <div className="space-y-4 md:space-y-5">
                                    {department.mission.map((item, index) => (
                                        <div key={index} className="flex gap-4 items-start p-4 md:p-5 bg-[var(--color-background)] rounded-xl hover:bg-opacity-80 transition-colors">
                                            <span className="bg-[var(--color-primary)] text-white text-sm font-bold px-3 py-1.5 rounded-lg shadow-sm flex-shrink-0">
                                                {item.id}
                                            </span>
                                            <p className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {/* PSOs Section - Only for departments with static data */}
                        {hasStaticData && department.psos && (
                            <motion.section
                                id="programs"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 }}
                                className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-4 md:gap-5 mb-5 pb-4 border-b border-[var(--color-border)]">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center shadow-lg">
                                        <Lightbulb className="text-white" size={28} />
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">
                                        Programme Specific Outcomes (PSOs)
                                    </h2>
                                </div>
                                <div className="space-y-4 md:space-y-5">
                                    {department.psos.map((item, index) => (
                                        <div key={index} className="flex gap-4 items-start p-4 md:p-5 bg-[var(--color-background)] rounded-xl hover:bg-opacity-80 transition-colors">
                                            <span className="bg-[var(--color-primary)] text-white text-sm font-bold px-3 py-1.5 rounded-lg shadow-sm flex-shrink-0">
                                                {item.id}
                                            </span>
                                            <p className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {/* PEOs Section - Only for departments with static data */}
                        {hasStaticData && department.peos && (
                            <motion.section
                                id="peos"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-4 md:gap-5 mb-5 pb-4 border-b border-[var(--color-border)]">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary-light)] flex items-center justify-center shadow-lg">
                                        <GraduationCap className="text-[var(--color-text-primary)]" size={28} />
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">
                                        Program Educational Objectives (PEOs)
                                    </h2>
                                </div>
                                <p className="text-[var(--color-text-secondary)] mb-5 font-medium text-base md:text-lg bg-green-50 px-4 py-3 rounded-lg border-l-4 border-green-500">Graduates of the Program will have:</p>
                                <div className="space-y-4 md:space-y-5">
                                    {department.peos.map((item, index) => (
                                        <div key={index} className="flex gap-4 items-start p-4 md:p-5 bg-[var(--color-background)] rounded-xl hover:bg-opacity-80 transition-colors">
                                            <span className="bg-green-500 text-white text-sm font-bold px-3 py-1.5 rounded-lg shadow-sm flex-shrink-0">
                                                {item.id}
                                            </span>
                                            <p className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {/* POs Section - Only for departments with static data */}
                        {hasStaticData && department.pos && (
                            <motion.section
                                id="pos"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                                className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-4 md:gap-5 mb-5 pb-4 border-b border-[var(--color-border)]">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center shadow-lg">
                                        <Award className="text-white" size={28} />
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">
                                        Program Outcomes (POs)
                                    </h2>
                                </div>
                                <p className="text-[var(--color-text-secondary)] mb-6 font-medium text-base md:text-lg bg-blue-50 px-4 py-3 rounded-lg border-l-4 border-[var(--color-primary)]">Engineering Graduates will be able to:</p>
                                <div className="space-y-5 md:space-y-6">
                                    {department.pos.map((item, index) => (
                                        <div key={index} className="border-l-4 border-[var(--color-primary)] pl-5 md:pl-6 py-3 hover:bg-[var(--color-background)] rounded-r-xl transition-colors">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="bg-[var(--color-primary)] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                                                    {item.id}
                                                </span>
                                                <h3 className="font-semibold text-[var(--color-text-primary)] text-base md:text-lg">{item.title}</h3>
                                            </div>
                                            <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed ml-11">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {/* Facilities */}
                        {department.facilities && department.facilities.length > 0 && (
                            <motion.section
                                id="infrastructure"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-6 pb-4 border-b border-[var(--color-border)]">
                                    Infrastructure & Facilities
                                </h2>
                                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                                    {department.facilities.map((facility, index) => (
                                        <div key={index} className="flex gap-4 p-5 bg-[var(--color-background)] rounded-xl hover:shadow-md transition-all hover:-translate-y-1">
                                            <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                                                <Building className="text-[var(--color-primary)]" size={24} />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-[var(--color-text-primary)] text-lg mb-1">
                                                    {facility.name}
                                                </h3>
                                                <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">
                                                    {facility.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {/* Labs */}
                        {department.labs && department.labs.length > 0 && (
                            <motion.section
                                id="labs"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35 }}
                                className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-6 pb-4 border-b border-[var(--color-border)]">
                                    Laboratories
                                </h2>
                                <div className="space-y-5 md:space-y-6">
                                    {department.labs.map((lab, index) => (
                                        <div key={index} className="border-l-4 pl-5 md:pl-6 py-4 hover:bg-[var(--color-background)] rounded-r-xl transition-colors" style={{ borderColor: department.color }}>
                                            <h3 className="font-semibold text-[var(--color-text-primary)] text-lg md:text-xl mb-2">
                                                {lab.name}
                                            </h3>
                                            <p className="text-sm md:text-base text-[var(--color-text-secondary)] mb-3 leading-relaxed">
                                                {lab.description}
                                            </p>
                                            {lab.equipment && lab.equipment.length > 0 && (
                                                <div className="flex flex-wrap gap-2 md:gap-3">
                                                    {lab.equipment.map((eq, i) => (
                                                        <span
                                                            key={i}
                                                            className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-[var(--color-background)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
                                                        >
                                                            {eq}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {/* Faculty */}
                        {faculty.length > 0 && (
                            <motion.section
                                id="faculty"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-white rounded-2xl p-6 border border-[var(--color-border)]"
                            >
                                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-6">
                                    Faculty Members
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {faculty.map((member, index) => (
                                        <div
                                            key={index}
                                            className="p-4 border border-[var(--color-border)] rounded-xl hover:border-[var(--color-primary)] transition-colors"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center text-white font-semibold flex-shrink-0">
                                                    {member.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-semibold text-[var(--color-text-primary)] truncate">
                                                        {member.name}
                                                    </h3>
                                                    <p className="text-sm text-[var(--color-primary)] mb-1">
                                                        {member.designation}
                                                    </p>
                                                    <p className="text-xs text-[var(--color-text-secondary)] mb-2">
                                                        {member.specialization}
                                                    </p>
                                                    <div className="flex items-center gap-3 text-xs text-[var(--color-text-secondary)]">
                                                        <span>{member.experience} years exp.</span>
                                                        {member.publications > 0 && (
                                                            <span>• {member.publications} publications</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        )}
                    </div>

                    {/* Right Sidebar */}
                    <div className="space-y-6 md:space-y-8">
                        {/* HOD Info */}
                        {department.hodName && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-2xl p-6 md:p-7 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-lg md:text-xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-5 pb-3 border-b border-[var(--color-border)]">
                                    Head of Department
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-3 bg-[var(--color-background)] rounded-xl">
                                        <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] bg-opacity-10 flex items-center justify-center">
                                            <User size={20} className="text-[var(--color-primary)]" />
                                        </div>
                                        <span className="text-[var(--color-text-primary)] font-semibold text-base">
                                            {department.hodName}
                                        </span>
                                    </div>
                                    {department.hodEmail && (
                                        <div className="flex items-center gap-4 p-3 hover:bg-[var(--color-background)] rounded-xl transition-colors">
                                            <Mail size={20} className="text-[var(--color-primary)]" />
                                            <a
                                                href={`mailto:${department.hodEmail}`}
                                                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm md:text-base transition-colors"
                                            >
                                                {department.hodEmail}
                                            </a>
                                        </div>
                                    )}
                                    {department.hodPhone && (
                                        <div className="flex items-center gap-4 p-3 hover:bg-[var(--color-background)] rounded-xl transition-colors">
                                            <Phone size={20} className="text-[var(--color-primary)]" />
                                            <a
                                                href={`tel:${department.hodPhone}`}
                                                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm md:text-base transition-colors"
                                            >
                                                {department.hodPhone}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-6 md:p-7 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-lg md:text-xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-5 pb-3 border-b border-[var(--color-border)]">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-3 hover:bg-[var(--color-background)] rounded-xl transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] bg-opacity-10 flex items-center justify-center">
                                        <Mail size={20} className="text-[var(--color-primary)]" />
                                    </div>
                                    <a
                                        href={`mailto:${department.email}`}
                                        className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm md:text-base transition-colors"
                                    >
                                        {department.email}
                                    </a>
                                </div>
                                {department.phone && (
                                    <div className="flex items-center gap-4 p-3 hover:bg-[var(--color-background)] rounded-xl transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] bg-opacity-10 flex items-center justify-center">
                                            <Phone size={20} className="text-[var(--color-primary)]" />
                                        </div>
                                        <a
                                            href={`tel:${department.phone}`}
                                            className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm md:text-base transition-colors"
                                        >
                                            {department.phone}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* Achievements */}
                        {department.achievements && department.achievements.length > 0 && (
                            <motion.div
                                id="accreditation"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-2xl p-6 border border-[var(--color-border)]"
                            >
                                <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-4">
                                    Achievements
                                </h3>
                                <div className="space-y-3">
                                    {department.achievements.map((achievement, index) => (
                                        <div key={index} className="flex gap-3">
                                            <Award size={18} className="text-[var(--color-primary)] flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-[var(--color-text-primary)] text-sm">
                                                    {achievement.title}
                                                </h4>
                                                <p className="text-xs text-[var(--color-text-secondary)]">
                                                    {achievement.description} ({achievement.year})
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Accreditations */}
                        {department.accreditations && department.accreditations.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white rounded-2xl p-6 border border-[var(--color-border)]"
                            >
                                <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-4">
                                    Accreditations
                                </h3>
                                <div className="space-y-2">
                                    {department.accreditations.map((accreditation, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <CheckCircle size={16} className="text-green-500" />
                                            <span className="text-sm text-[var(--color-text-primary)]">
                                                {accreditation.name} ({accreditation.year})
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Program Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl p-6 md:p-7 text-white shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-lg md:text-xl font-bold font-['Outfit'] mb-5 pb-3 border-b border-white/20">
                                Program Details
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-3 bg-white/10 rounded-xl">
                                    <BookOpen size={22} />
                                    <div>
                                        <span className="text-white/70 text-xs block">Program Type</span>
                                        <span className="text-base font-semibold">{department.programType}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-3 bg-white/10 rounded-xl">
                                    <Calendar size={22} />
                                    <div>
                                        <span className="text-white/70 text-xs block">Duration</span>
                                        <span className="text-base font-semibold">{department.duration}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DepartmentDetail
