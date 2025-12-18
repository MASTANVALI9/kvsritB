import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Calendar, BookOpen, FileText, Lightbulb, Award, Shield, CheckCircle } from 'lucide-react'

const AcademicsPage = () => {
    const location = useLocation()

    useEffect(() => {
        const hash = location.hash.replace('#', '')
        if (hash) {
            const element = document.getElementById(hash)
            element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            window.scrollTo(0, 0)
        }
    }, [location])

    const academicCalendar = [
        { event: 'Classes Start', sem1: 'July', sem2: 'December' },
        { event: 'Mid Exams', sem1: 'September', sem2: 'February' },
        { event: 'End Exams', sem1: 'November', sem2: 'April-May' }
    ]

    const examServices = ['Internal Exams', 'University Registration', 'Results', 'Revaluation', 'Certificates']
    const rndAreas = ['AI & ML', 'IoT', 'Cloud Computing', 'Cyber Security', 'Renewable Energy']
    const iqacItems = ['Academic Audits', 'FDPs', 'Curriculum Enhancement', 'Student Feedback', 'Quality Benchmarking']

    return (
        <div className="min-h-screen bg-[var(--color-background)] pt-32 pb-16">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-4">Academics</h1>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">Comprehensive academic programs designed for excellence</p>
                </motion.div>

                {/* Calendar */}
                <motion.section id="calendar" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
                            <Calendar className="text-white" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">Academic Calendar</h2>
                    </div>
                    <table className="w-full">
                        <thead><tr className="bg-[var(--color-background)]">
                            <th className="text-left p-4">Event</th><th className="text-left p-4">Odd Sem</th><th className="text-left p-4">Even Sem</th>
                        </tr></thead>
                        <tbody>{academicCalendar.map((item, i) => (
                            <tr key={i} className="border-b border-[var(--color-border)]">
                                <td className="p-4">{item.event}</td><td className="p-4 text-[var(--color-text-secondary)]">{item.sem1}</td><td className="p-4 text-[var(--color-text-secondary)]">{item.sem2}</td>
                            </tr>
                        ))}</tbody>
                    </table>
                </motion.section>

                {/* Syllabus */}
                <motion.section id="syllabus" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary-light)] flex items-center justify-center">
                            <BookOpen className="text-[var(--color-text-primary)]" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">Regulations & Syllabus</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        {['R20 (2020+)', 'R19 (2019)', 'R17 MBA/MCA'].map((reg, i) => (
                            <div key={i} className="bg-[var(--color-background)] rounded-xl p-6 text-center">
                                <BookOpen className="mx-auto mb-2 text-[var(--color-primary)]" size={24} />
                                <h4 className="font-semibold">{reg}</h4>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Exam Cell */}
                <motion.section id="exam" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
                            <FileText className="text-white" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">Examination Cell</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">{examServices.map((s, i) => (
                        <span key={i} className="bg-[var(--color-background)] px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                            <CheckCircle size={14} className="text-[var(--color-success)]" />{s}
                        </span>
                    ))}</div>
                </motion.section>

                {/* R&D */}
                <motion.section id="rnd" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary-light)] flex items-center justify-center">
                            <Lightbulb className="text-[var(--color-text-primary)]" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">R&D Cell</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">{rndAreas.map((a, i) => (
                        <div key={i} className="bg-[var(--color-background)] rounded-xl p-4 text-center text-sm font-medium">{a}</div>
                    ))}</div>
                </motion.section>

                {/* IQAC */}
                <motion.section id="iqac" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
                            <Award className="text-white" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">IQAC</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">{iqacItems.map((item, i) => (
                        <span key={i} className="bg-[var(--color-background)] px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                            <Award size={14} className="text-[var(--color-primary)]" />{item}
                        </span>
                    ))}</div>
                </motion.section>

                {/* Policies */}
                <motion.section id="policies" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary-light)] flex items-center justify-center">
                            <Shield className="text-[var(--color-text-primary)]" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">Policies</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Academic Integrity', 'Anti-Ragging', 'Grievance Redressal', 'IT Usage', 'Library', 'Examination'].map((p, i) => (
                            <div key={i} className="bg-[var(--color-background)] rounded-xl p-4 flex items-center gap-3">
                                <Shield size={18} className="text-[var(--color-primary)]" />
                                <span className="text-sm font-medium">{p} Policy</span>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    )
}

export default AcademicsPage
