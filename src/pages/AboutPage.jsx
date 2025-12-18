import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import {
    Building, Target, Award, Users, User, Shield, BookOpen,
    CheckCircle, Star, Globe, Calendar
} from 'lucide-react'

const sections = {
    'about': {
        title: 'About Us',
        icon: Building,
        content: `Dr. K.V. Subba Reddy Institute of Technology (KVSRIT) was established in the year 2008, 
        approved by AICTE, New Delhi and affiliated to JNTUA, Ananthapuramu. The institute is 
        committed to imparting quality technical education and developing competent professionals 
        with ethical values. Located in Kurnool, Andhra Pradesh, the institute offers undergraduate 
        and postgraduate programs in various engineering and management disciplines.`
    },
    'vision': {
        title: 'Vision & Mission',
        icon: Target,
        vision: 'To be a premier institute of academic excellence, producing competent technocrats and entrepreneurs with ethical values to serve the society.',
        mission: [
            'To provide quality technical education with state-of-the-art infrastructure',
            'To develop industry-ready professionals through practical learning',
            'To promote research and innovation among students and faculty',
            'To inculcate ethical values and social responsibility',
            'To foster industry-academia collaboration for mutual growth'
        ]
    },
    'accreditation': {
        title: 'Affiliation & Accreditation',
        icon: Award,
        items: [
            { name: 'NAAC Accredited with A+ Grade', year: '2023' },
            { name: 'NBA Accredited Programs', year: '2022' },
            { name: 'Affiliated to JNTUA, Ananthapuramu', year: '2008' },
            { name: 'Approved by AICTE, New Delhi', year: '2008' }
        ]
    },
    'management': {
        title: 'Management',
        icon: Users,
        description: 'Our institution is guided by visionary leaders committed to educational excellence.',
        members: [
            { name: 'Dr. K.V. Subba Reddy', role: 'Chairman', description: 'Visionary leader with 30+ years in education' },
            { name: 'Sri K.V. Suresh Reddy', role: 'Vice Chairman', description: 'Driving infrastructure and growth' }
        ]
    },
    'principal': {
        title: 'Principal',
        icon: User,
        name: 'Dr. Principal Name',
        qualification: 'Ph.D., M.Tech',
        message: `Welcome to KVSRIT! Our institution is dedicated to nurturing future leaders and innovators. 
        We focus on holistic development, combining academic excellence with practical skills and ethical values.`
    },
    'administration': {
        title: 'Administration',
        icon: Shield,
        description: 'Efficient administrative structure ensuring smooth academic and operational functions.',
        departments: [
            'Academic Administration',
            'Examination Cell',
            'Finance & Accounts',
            'Human Resources',
            'Infrastructure & Maintenance',
            'Student Affairs'
        ]
    }
}

const AboutPage = () => {
    const location = useLocation()

    useEffect(() => {
        // Scroll to section if hash present
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
                        About KVSRIT
                    </h1>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Discover our legacy of excellence in technical education since 2008
                    </p>
                </motion.div>

                {/* About Section */}
                <motion.section
                    id="about"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
                            <Building className="text-white" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">
                            {sections.about.title}
                        </h2>
                    </div>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg text-center">
                        {sections.about.content}
                    </p>
                </motion.section>

                {/* Vision & Mission */}
                <motion.section
                    id="vision"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8"
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary-light)] flex items-center justify-center">
                            <Target className="text-[var(--color-text-primary)]" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">
                            Vision & Mission
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[var(--color-background)] rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3 flex items-center justify-center gap-2">
                                <Star size={20} /> Vision
                            </h3>
                            <p className="text-[var(--color-text-secondary)] text-center">{sections.vision.vision}</p>
                        </div>
                        <div className="bg-[var(--color-background)] rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3 flex items-center justify-center gap-2">
                                <Globe size={20} /> Mission
                            </h3>
                            <ul className="space-y-2">
                                {sections.vision.mission.map((item, index) => (
                                    <li key={index} className="flex items-start justify-center gap-2 text-[var(--color-text-secondary)]">
                                        <CheckCircle size={16} className="text-[var(--color-success)] mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Accreditation */}
                <motion.section
                    id="accreditation"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
                            <Award className="text-white" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">
                            Affiliation & Accreditation
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {sections.accreditation.items.map((item, index) => (
                            <div key={index} className="bg-[var(--color-background)] rounded-xl p-4 text-center">
                                <Award size={32} className="text-[var(--color-accent)] mx-auto mb-3" />
                                <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">{item.name}</h4>
                                <span className="text-sm text-[var(--color-text-secondary)]">Since {item.year}</span>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Management */}
                <motion.section
                    id="management"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
                            <Users className="text-white" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">
                            Management
                        </h2>
                    </div>
                    <p className="text-[var(--color-text-secondary)] mb-6">{sections.management.description}</p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {sections.management.members.map((member, index) => (
                            <div key={index} className="bg-[var(--color-background)] rounded-xl p-6 flex items-start gap-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center text-white font-bold text-xl">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--color-text-primary)]">{member.name}</h4>
                                    <p className="text-[var(--color-primary)] text-sm mb-1">{member.role}</p>
                                    <p className="text-sm text-[var(--color-text-secondary)]">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Principal */}
                <motion.section
                    id="principal"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary-light)] flex items-center justify-center">
                            <User className="text-[var(--color-text-primary)]" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">
                            Principal's Message
                        </h2>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center text-white font-bold text-3xl flex-shrink-0">
                            P
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-1">
                                {sections.principal.name}
                            </h3>
                            <p className="text-[var(--color-primary)] text-sm mb-4">{sections.principal.qualification}</p>
                            <p className="text-[var(--color-text-secondary)] italic leading-relaxed">
                                "{sections.principal.message}"
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Administration */}
                <motion.section
                    id="administration"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-2xl p-8 border border-[var(--color-border)]"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
                            <Shield className="text-white" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">
                            Administration
                        </h2>
                    </div>
                    <p className="text-[var(--color-text-secondary)] mb-6">{sections.administration.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {sections.administration.departments.map((dept, index) => (
                            <div key={index} className="bg-[var(--color-background)] rounded-xl p-4 flex items-center gap-3">
                                <CheckCircle size={18} className="text-[var(--color-success)]" />
                                <span className="text-[var(--color-text-primary)] text-sm font-medium">{dept}</span>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    )
}

export default AboutPage
