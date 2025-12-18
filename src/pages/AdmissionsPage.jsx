import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import {
    FileText, CheckSquare, BookOpen, IndianRupee, Award,
    ArrowRight, Calendar, Users, GraduationCap
} from 'lucide-react'

const AdmissionsPage = () => {
    const location = useLocation()

    useEffect(() => {
        const hash = location.hash.replace('#', '')
        if (hash) {
            const element = document.getElementById(hash)
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }, 100)
            }
        } else {
            window.scrollTo(0, 0)
        }
    }, [location])

    const admissionSteps = [
        { step: 1, title: 'Online Application', description: 'Fill out the online application form with required details' },
        { step: 2, title: 'Document Submission', description: 'Upload necessary documents and certificates' },
        { step: 3, title: 'Entrance Exam / Counseling', description: 'Appear for AP EAPCET / ICET counseling' },
        { step: 4, title: 'Seat Allotment', description: 'Get seat allotment through counseling process' },
        { step: 5, title: 'Fee Payment', description: 'Pay the admission fee and confirm enrollment' },
        { step: 6, title: 'Document Verification', description: 'Submit original documents for verification' }
    ]

    const eligibilityCriteria = {
        btech: [
            'Must have passed 10+2 or equivalent with PCM',
            'Minimum 45% aggregate marks (40% for reserved categories)',
            'Valid AP EAPCET / JEE Main score',
            'Age limit as per JNTUA norms'
        ],
        mba: [
            'Bachelor\'s degree in any discipline',
            'Minimum 50% aggregate marks',
            'Valid AP ICET / CAT / MAT score',
            'Relevant work experience preferred'
        ],
        mca: [
            'Bachelor\'s degree with Mathematics at 10+2 or graduation level',
            'Minimum 50% aggregate marks',
            'Valid AP ICET score'
        ]
    }

    const programs = [
        { name: 'B.Tech - CSE', duration: '4 Years', intake: 180 },
        { name: 'B.Tech - CSE (AI & ML)', duration: '4 Years', intake: 60 },
        { name: 'B.Tech - ECE', duration: '4 Years', intake: 120 },
        { name: 'B.Tech - EEE', duration: '4 Years', intake: 60 },
        { name: 'B.Tech - Mechanical', duration: '4 Years', intake: 60 },
        { name: 'B.Tech - Civil', duration: '4 Years', intake: 60 },
        { name: 'MBA', duration: '2 Years', intake: 120 },
        { name: 'MCA', duration: '2 Years', intake: 60 }
    ]

    const feeStructure = [
        { program: 'B.Tech (All Branches)', category: 'Convenor Quota', fee: '₹35,000/year' },
        { program: 'B.Tech (All Branches)', category: 'Management Quota', fee: '₹95,000/year' },
        { program: 'MBA', category: 'Convenor Quota', fee: '₹32,000/year' },
        { program: 'MBA', category: 'Management Quota', fee: '₹85,000/year' },
        { program: 'MCA', category: 'Convenor Quota', fee: '₹30,000/year' }
    ]

    const scholarships = [
        { name: 'Merit Scholarship', description: 'For students with 90%+ in qualifying exam', value: 'Up to 50% fee waiver' },
        { name: 'SC/ST/BC Scholarship', description: 'Government scholarship for reserved categories', value: 'Full tuition fee' },
        { name: 'EBC Scholarship', description: 'For economically backward students', value: 'Partial fee waiver' },
        { name: 'Sports Scholarship', description: 'For national/state level sports achievers', value: 'Up to 25% fee waiver' }
    ]

    return (
        <div className="min-h-screen bg-[var(--color-background)] pt-32 pb-16">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-4">
                        Admissions
                    </h1>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Begin your journey to excellence. Apply now for the upcoming academic session.
                    </p>
                </motion.div>

                {/* Admission Procedure */}
                <motion.section
                    id="admission-procedure"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
                            <FileText className="text-white" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">
                            Admission Procedure
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {admissionSteps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                                className="bg-[var(--color-background)] rounded-xl p-5 relative flex flex-col items-center text-center"
                            >
                                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold mb-3">
                                    {item.step}
                                </div>
                                <h4 className="font-semibold text-[var(--color-text-primary)] mb-2">{item.title}</h4>
                                <p className="text-sm text-[var(--color-text-secondary)]">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Eligibility Criteria */}
                <motion.section
                    id="criteria"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary-light)] flex items-center justify-center">
                            <CheckSquare className="text-[var(--color-text-primary)]" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">
                            Eligibility Criteria
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-[var(--color-background)] rounded-xl p-6">
                            <h3 className="font-semibold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                                <GraduationCap size={20} /> B.Tech Programs
                            </h3>
                            <ul className="space-y-2">
                                {eligibilityCriteria.btech.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                                        <ArrowRight size={14} className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-[var(--color-background)] rounded-xl p-6">
                            <h3 className="font-semibold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                                <GraduationCap size={20} /> MBA
                            </h3>
                            <ul className="space-y-2">
                                {eligibilityCriteria.mba.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                                        <ArrowRight size={14} className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-[var(--color-background)] rounded-xl p-6">
                            <h3 className="font-semibold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                                <GraduationCap size={20} /> MCA
                            </h3>
                            <ul className="space-y-2">
                                {eligibilityCriteria.mca.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                                        <ArrowRight size={14} className="text-[var(--color-primary)] mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Programs Offered */}
                <motion.section
                    id="programs"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
                            <BookOpen className="text-white" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">
                            Programs Offered
                        </h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-[var(--color-background)]">
                                    <th className="text-left p-4 font-semibold text-[var(--color-text-primary)]">Program</th>
                                    <th className="text-left p-4 font-semibold text-[var(--color-text-primary)]">Duration</th>
                                    <th className="text-left p-4 font-semibold text-[var(--color-text-primary)]">Intake</th>
                                </tr>
                            </thead>
                            <tbody>
                                {programs.map((program, index) => (
                                    <tr key={index} className="border-b border-[var(--color-border)]">
                                        <td className="p-4 text-[var(--color-text-primary)]">{program.name}</td>
                                        <td className="p-4 text-[var(--color-text-secondary)]">{program.duration}</td>
                                        <td className="p-4 text-[var(--color-text-secondary)]">{program.intake} seats</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.section>

                {/* Fee Structure */}
                <motion.section
                    id="fee"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary-light)] flex items-center justify-center">
                            <IndianRupee className="text-[var(--color-text-primary)]" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">
                            Fee Structure
                        </h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-[var(--color-background)]">
                                    <th className="text-left p-4 font-semibold text-[var(--color-text-primary)]">Program</th>
                                    <th className="text-left p-4 font-semibold text-[var(--color-text-primary)]">Category</th>
                                    <th className="text-left p-4 font-semibold text-[var(--color-text-primary)]">Annual Fee</th>
                                </tr>
                            </thead>
                            <tbody>
                                {feeStructure.map((item, index) => (
                                    <tr key={index} className="border-b border-[var(--color-border)]">
                                        <td className="p-4 text-[var(--color-text-primary)]">{item.program}</td>
                                        <td className="p-4 text-[var(--color-text-secondary)]">{item.category}</td>
                                        <td className="p-4 text-[var(--color-primary)] font-semibold">{item.fee}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.section>

                {/* Scholarships */}
                <motion.section
                    id="scholarships"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl p-8 border border-[var(--color-border)]"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
                            <Award className="text-white" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">
                            Scholarships
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {scholarships.map((scholarship, index) => (
                            <div key={index} className="bg-[var(--color-background)] rounded-xl p-6 flex flex-col items-center text-center">
                                <h4 className="font-semibold text-[var(--color-text-primary)] mb-2">{scholarship.name}</h4>
                                <p className="text-sm text-[var(--color-text-secondary)] mb-3">{scholarship.description}</p>
                                <span className="inline-block px-3 py-1 bg-[var(--color-accent-light)] text-[var(--color-text-primary)] text-sm rounded-full font-medium">
                                    {scholarship.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    )
}

export default AdmissionsPage
