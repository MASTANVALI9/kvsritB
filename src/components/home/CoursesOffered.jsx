import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Monitor, Cpu, Radio, Zap, Cog, Building2,
    GraduationCap, Briefcase, Brain, Database
} from 'lucide-react'
import './CoursesOffered.css'

const departmentCodeMap = {
    'CSE': 'CSE',
    'CSE (AI)': 'CSEAI',
    'CSE (AI & ML)': 'CSEAIML',
    'Data Science': 'DS',
    'ECE': 'ECE',
    'EEE': 'EEE',
    'Mechanical': 'MECH',
    'Civil': 'CIVIL',
    'MBA': 'MBA',
    'MCA': 'MCA'
}

// Updated data with gradients and light backgrounds
const courses = {
    ug: [
        {
            name: 'CSE',
            fullName: 'Computer Science & Engineering',
            icon: Monitor,
            color: '#3B82F6',
            gradient: 'linear-gradient(to right, #3B82F6, #60A5FA)',
            bg: '#EFF6FF'
        },
        {
            name: 'CSE (AI)',
            fullName: 'CSE - Artificial Intelligence',
            icon: Brain,
            color: '#8B5CF6',
            gradient: 'linear-gradient(to right, #8B5CF6, #A78BFA)',
            bg: '#F5F3FF'
        },
        {
            name: 'CSE (AI & ML)',
            fullName: 'CSE - AI & Machine Learning',
            icon: Cpu,
            color: '#EC4899',
            gradient: 'linear-gradient(to right, #EC4899, #F472B6)',
            bg: '#FDF2F8'
        },
        {
            name: 'Data Science',
            fullName: 'Data Science',
            icon: Database,
            color: '#10B981',
            gradient: 'linear-gradient(to right, #10B981, #34D399)',
            bg: '#ECFDF5'
        },
        {
            name: 'ECE',
            fullName: 'Electronics & Communication',
            icon: Radio,
            color: '#F59E0B',
            gradient: 'linear-gradient(to right, #F59E0B, #FBBF24)',
            bg: '#FFFBEB'
        },
        {
            name: 'EEE',
            fullName: 'Electrical & Electronics',
            icon: Zap,
            color: '#EF4444',
            gradient: 'linear-gradient(to right, #EF4444, #F87171)',
            bg: '#FEF2F2'
        },
        {
            name: 'Mechanical',
            fullName: 'Mechanical Engineering',
            icon: Cog,
            color: '#6366F1',
            gradient: 'linear-gradient(to right, #6366F1, #818CF8)',
            bg: '#EEF2FF'
        },
        {
            name: 'Civil',
            fullName: 'Civil Engineering',
            icon: Building2,
            color: '#14B8A6',
            gradient: 'linear-gradient(to right, #14B8A6, #2DD4BF)',
            bg: '#F0FDFA'
        }
    ],
    pg: [
        {
            name: 'MBA',
            fullName: 'Master of Business Administration',
            icon: Briefcase,
            color: '#8B6F47',
            gradient: 'linear-gradient(to right, #8B6F47, #A89060)',
            bg: '#FAF8F5'
        },
        {
            name: 'MCA',
            fullName: 'Master of Computer Applications',
            icon: GraduationCap,
            color: '#5D4E37',
            gradient: 'linear-gradient(to right, #5D4E37, #7E6B4F)',
            bg: '#F5F5F4'
        }
    ]
}

const CourseCard = ({ course, index }) => {
    const dept = departmentCodeMap[course.name]
    const Icon = course.icon

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="course-card-wrapper"
        >
            <Link
                to={`/department/${dept}`}
                className="course-link"
                style={{
                    '--card-color': course.color,
                    '--card-gradient': course.gradient,
                    '--icon-bg': course.bg
                }}
            >
                <div className="course-card">
                    <div className="course-icon-container">
                        <Icon size={28} strokeWidth={2} />
                    </div>

                    <div className="course-info">
                        <span className="course-short-name">{course.name}</span>
                        <span className="course-full-name">{course.fullName}</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

export default function CoursesOffered() {
    return (
        <section className="courses-section">
            <div className="courses-container">

                {/* Undergraduate Header */}
                <div className="courses-header-wrapper">
                    <div className="courses-header">
                        <GraduationCap size={28} color="#1a1a1a" />
                        <h3>Undergraduate Programs</h3>
                    </div>
                    <span className="course-subtitle-info">B.Tech – 4 Years</span>
                </div>

                {/* Undergraduate Grid */}
                <div className="courses-grid">
                    {courses.ug.map((c, i) => (
                        <CourseCard key={c.name} course={c} index={i} />
                    ))}
                </div>

                {/* Postgraduate Section */}
                <div className="pg-section">
                    <div className="courses-header-wrapper">
                        <div className="courses-header">
                            <Briefcase size={28} color="#1a1a1a" />
                            <h3>Postgraduate Programs</h3>
                        </div>
                        <span className="course-subtitle-info">MBA & MCA – 2 Years</span>
                    </div>

                    <div className="courses-grid pg-grid">
                        {courses.pg.map((c, i) => (
                            <CourseCard key={c.name} course={c} index={i} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
