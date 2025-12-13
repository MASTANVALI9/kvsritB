import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    Monitor, Cpu, Radio, Zap, Cog, Building2, Brain, Database,
    GraduationCap, Briefcase, ArrowLeft, Mail, Phone, User,
    Award, Calendar, CheckCircle, BookOpen, Users, Building
} from 'lucide-react'

const iconMap = {
    Monitor, Cpu, Radio, Zap, Cog, Building2, Brain, Database, GraduationCap, Briefcase
}

const DepartmentDetail = () => {
    const { code } = useParams()
    const navigate = useNavigate()
    const [department, setDepartment] = useState(null)
    const [faculty, setFaculty] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchDepartmentData = async () => {
            try {
                setLoading(true)

                // Fetch department details
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
                setError(err.message)
                setLoading(false)
            }
        }

        fetchDepartmentData()
    }, [code])

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

    return (
        <div className="min-h-screen bg-[var(--color-background)]">
            {/* Header */}
            <div className="bg-white border-b border-[var(--color-border)]">
                <div className="container mx-auto px-4 py-8">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] mb-6 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </button>

                    <div className="flex items-start gap-6">
                        <div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${department.color}15` }}
                        >
                            <Icon size={40} style={{ color: department.color }} />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-4xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-2">
                                {department.fullName}
                            </h1>
                            <p className="text-lg text-[var(--color-text-secondary)] mb-4">
                                {department.description}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-[var(--color-primary)]" />
                                    <span className="text-[var(--color-text-secondary)]">
                                        Established: {department.establishedYear || 'N/A'}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users size={16} className="text-[var(--color-primary)]" />
                                    <span className="text-[var(--color-text-secondary)]">
                                        {department.totalStudents} Students
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User size={16} className="text-[var(--color-primary)]" />
                                    <span className="text-[var(--color-text-secondary)]">
                                        {department.totalFaculty} Faculty Members
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Overview */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl p-6 border border-[var(--color-border)]"
                        >
                            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-4">
                                Overview
                            </h2>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                {department.overview}
                            </p>
                        </motion.section>

                        {/* Facilities */}
                        {department.facilities && department.facilities.length > 0 && (
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-2xl p-6 border border-[var(--color-border)]"
                            >
                                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-4">
                                    Facilities
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {department.facilities.map((facility, index) => (
                                        <div key={index} className="flex gap-3">
                                            <Building className="text-[var(--color-primary)] flex-shrink-0 mt-1" size={20} />
                                            <div>
                                                <h3 className="font-semibold text-[var(--color-text-primary)]">
                                                    {facility.name}
                                                </h3>
                                                <p className="text-sm text-[var(--color-text-secondary)]">
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
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-2xl p-6 border border-[var(--color-border)]"
                            >
                                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-4">
                                    Laboratories
                                </h2>
                                <div className="space-y-4">
                                    {department.labs.map((lab, index) => (
                                        <div key={index} className="border-l-4 pl-4" style={{ borderColor: department.color }}>
                                            <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">
                                                {lab.name}
                                            </h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                                                {lab.description}
                                            </p>
                                            {lab.equipment && lab.equipment.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {lab.equipment.map((eq, i) => (
                                                        <span
                                                            key={i}
                                                            className="text-xs px-2 py-1 rounded-full bg-[var(--color-background)] text-[var(--color-text-secondary)]"
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
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
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

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* HOD Info */}
                        {department.hodName && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-2xl p-6 border border-[var(--color-border)]"
                            >
                                <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-4">
                                    Head of Department
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <User size={18} className="text-[var(--color-primary)]" />
                                        <span className="text-[var(--color-text-primary)] font-medium">
                                            {department.hodName}
                                        </span>
                                    </div>
                                    {department.hodEmail && (
                                        <div className="flex items-center gap-3">
                                            <Mail size={18} className="text-[var(--color-primary)]" />
                                            <a
                                                href={`mailto:${department.hodEmail}`}
                                                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors"
                                            >
                                                {department.hodEmail}
                                            </a>
                                        </div>
                                    )}
                                    {department.hodPhone && (
                                        <div className="flex items-center gap-3">
                                            <Phone size={18} className="text-[var(--color-primary)]" />
                                            <a
                                                href={`tel:${department.hodPhone}`}
                                                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors"
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
                            className="bg-white rounded-2xl p-6 border border-[var(--color-border)]"
                        >
                            <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-4">
                                Contact Information
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Mail size={18} className="text-[var(--color-primary)]" />
                                    <a
                                        href={`mailto:${department.email}`}
                                        className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors"
                                    >
                                        {department.email}
                                    </a>
                                </div>
                                {department.phone && (
                                    <div className="flex items-center gap-3">
                                        <Phone size={18} className="text-[var(--color-primary)]" />
                                        <a
                                            href={`tel:${department.phone}`}
                                            className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] text-sm transition-colors"
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
                            className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl p-6 text-white"
                        >
                            <h3 className="text-lg font-bold font-['Outfit'] mb-4">
                                Program Details
                            </h3>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <BookOpen size={18} />
                                    <span className="text-sm">Type: {department.programType}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} />
                                    <span className="text-sm">Duration: {department.duration}</span>
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
