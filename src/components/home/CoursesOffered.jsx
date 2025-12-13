import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
    Monitor, Cpu, Radio, Zap, Cog, Building2,
    GraduationCap, Briefcase, Brain, Database, ArrowRight
} from 'lucide-react'

// Map course names to department codes
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

const courses = {
    ug: [
        {
            name: 'CSE',
            fullName: 'Computer Science & Engineering',
            icon: Monitor,
            color: '#3B82F6',
        },
        {
            name: 'CSE (AI)',
            fullName: 'CSE - Artificial Intelligence',
            icon: Brain,
            color: '#8B5CF6',
        },
        {
            name: 'CSE (AI & ML)',
            fullName: 'CSE - AI & Machine Learning',
            icon: Cpu,
            color: '#EC4899',
        },
        {
            name: 'Data Science',
            fullName: 'Data Science',
            icon: Database,
            color: '#10B981',
        },
        {
            name: 'ECE',
            fullName: 'Electronics & Communication',
            icon: Radio,
            color: '#F59E0B',
        },
        {
            name: 'EEE',
            fullName: 'Electrical & Electronics',
            icon: Zap,
            color: '#EF4444',
        },
        {
            name: 'Mechanical',
            fullName: 'Mechanical Engineering',
            icon: Cog,
            color: '#6366F1',
        },
        {
            name: 'Civil',
            fullName: 'Civil Engineering',
            icon: Building2,
            color: '#14B8A6',
        },
    ],
    pg: [
        {
            name: 'MBA',
            fullName: 'Master of Business Administration',
            icon: Briefcase,
            color: '#8B6F47',
        },
        {
            name: 'MCA',
            fullName: 'Master of Computer Applications',
            icon: GraduationCap,
            color: '#5D4E37',
        },
    ],
}

const CourseCard = ({ course, index, isInView }) => {
    const departmentCode = departmentCodeMap[course.name] || course.name.toUpperCase().replace(/[^A-Z]/g, '')

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.08, duration: 0.5 }}
        >
            <Link to={`/department/${departmentCode}`}>
                <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:border-transparent hover:shadow-xl transition-all duration-300 group h-full cursor-pointer"
                    style={{
                        '--card-color': course.color,
                    }}
                >
                    {/* Icon */}
                    <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${course.color}15` }}
                    >
                        <course.icon size={28} style={{ color: course.color }} />
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)] font-['Outfit'] mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                        {course.name}
                    </h3>

                    {/* Full Name */}
                    <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                        {course.fullName}
                    </p>

                    {/* Learn More */}
                    <div className="flex items-center gap-1 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: course.color }}>
                        Learn More
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Bottom accent */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                        style={{ backgroundColor: course.color }}
                    />
                </motion.div>
            </Link>
        </motion.div>
    )
}

const CoursesOffered = () => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    return (
        <section id="courses" className="section bg-[var(--color-background)]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title title-underline">Courses Offered</h2>
                    <p className="section-subtitle mt-6">
                        Experience excellence in education with our comprehensive range of undergraduate
                        and postgraduate programs designed to prepare you for a successful career.
                    </p>
                </motion.div>

                <div ref={containerRef}>
                    {/* UG Courses */}
                    <div className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
                                <GraduationCap className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] font-['Outfit']">
                                    Undergraduate Programs
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">B.Tech - 4 Years</p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {courses.ug.map((course, index) => (
                                <CourseCard key={course.name} course={course} index={index} isInView={isInView} />
                            ))}
                        </div>
                    </div>

                    {/* PG Courses */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary-light)] flex items-center justify-center">
                                <Briefcase className="text-[var(--color-text-primary)]" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] font-['Outfit']">
                                    Postgraduate Programs
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">MBA & MCA - 2 Years</p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {courses.pg.map((course, index) => (
                                <CourseCard
                                    key={course.name}
                                    course={course}
                                    index={index + courses.ug.length}
                                    isInView={isInView}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="text-center mt-12"
                >
                    <a
                        href="#programs"
                        className="btn btn-primary inline-flex items-center gap-2"
                    >
                        View All Programs
                        <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default CoursesOffered
