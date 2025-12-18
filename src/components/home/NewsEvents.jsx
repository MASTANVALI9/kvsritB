import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Newspaper, ClipboardList, Briefcase, FileText, Calendar, ExternalLink, ChevronRight } from 'lucide-react'
import './NewsEvents.css'

const tabs = [
    { id: 'news', label: 'News & Events', icon: Newspaper },
    { id: 'exams', label: 'Examinations', icon: ClipboardList },
    { id: 'placements', label: 'Placements', icon: Briefcase },
    { id: 'circulars', label: 'Circulars', icon: FileText },
]

const newsData = {
    news: [
        { date: '2023-24', title: 'College Admission Application Form', link: '#' },
        { date: '17-06-2023', title: 'Fee Payment for College Account Number', link: '#' },
        { date: '07-12-2023', title: 'Student Transfer Information', link: '#' },
        { date: '25-03-2025', title: 'MCA MBA IV SEM REGISTRATION MARCH-2025', link: '#' },
        { date: '25-03-2025', title: 'MCA MBA IV SEM REGISTRATION MAY-2025', link: '#' },
    ],
    exams: [
        { date: '12-02-2024', title: 'EXTERNAL TIMETABLE FOR-I MBA/MCA I SEM(R-23) MAR-2024', link: '#' },
        { date: '03-02-2024', title: 'NOTIFICATION FOR-I MBA/MCA I SEM(R-23) MAR-2024', link: '#' },
        { date: '08-01-2024', title: 'NOTIFICATION FOR-I B TECH I SEM(R-23) FEB-2024', link: '#' },
        { date: '22-06-2020', title: 'MBA IV Semester Regular & Supply Exam 2020', link: '#' },
        { date: '18-06-2020', title: 'B.Tech IV Year II Semester R15 Exams 2020', link: '#' },
    ],
    placements: [
        { date: '28-01-2020', title: 'List of Gold Medalists for Batch 2015-2019', link: '#' },
        { date: '11-02-2020', title: 'B.Tech III Year I Sem R15 Results Released', link: '#' },
        { date: '30-01-2020', title: 'B.Tech IV Year I Sem R15 Results Released', link: '#' },
        { date: '2024', title: 'Campus Placement Drive - TCS', link: '#' },
        { date: '2024', title: 'Campus Placement Drive - Infosys', link: '#' },
    ],
    circulars: [
        { date: '25-03-2025', title: 'NOTIFICATION FOR PROJECT VIVO VOCE', link: '#' },
        { date: '25-03-2025', title: 'M. TECH. III SEM SUPPLY REGISTRATION', link: '#' },
        { date: '22-05-2020', title: 'JnanaBhumi Scholarships Ineligible List 2019-20', link: '#' },
        { date: '20-01-2020', title: 'M.Tech Academic Calendar 4th Sem (2018-19)', link: '#' },
        { date: '20-01-2020', title: 'B.Tech I Year II Semester Academic Calendar', link: '#' },
    ],
}

const NewsEvents = () => {
    const [activeTab, setActiveTab] = useState('news')
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    return (
        <section id="events" className="events-section">
            <div className="container mx-auto px-4 md:px-6" ref={containerRef}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="events-header"
                >
                    <h2 className="section-title title-underline inline-block">Latest Updates</h2>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {/* Tabs - Centered */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="tabs-container"
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`tab-button ${activeTab === tab.id ? 'active' : 'inactive'}`}
                            >
                                <tab.icon size={18} strokeWidth={2} />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="events-card"
                            >
                                {/* Header with icon */}
                                <div className="events-card-header">
                                    <div className="events-header-overlay" />
                                    <h3 className="events-card-title">
                                        <span className="events-icon-bg">
                                            {(() => {
                                                const Icon = tabs.find((t) => t.id === activeTab)?.icon
                                                return Icon ? <Icon size={20} strokeWidth={2} /> : null
                                            })()}
                                        </span>
                                        {tabs.find((t) => t.id === activeTab)?.label}
                                    </h3>
                                </div>

                                {/* Items */}
                                <div className="events-list">
                                    {newsData[activeTab].map((item, index) => (
                                        <motion.a
                                            key={index}
                                            href={item.link}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="news-item group"
                                        >
                                            {/* Date Badge */}
                                            <div className="news-date-badge-wrapper">
                                                <div className="news-date-badge">
                                                    <Calendar size={16} className="text-[var(--color-primary)]" strokeWidth={2} />
                                                    <span className="news-date-text">
                                                        {item.date}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <p className="news-title">
                                                {item.title}
                                            </p>

                                            {/* Link Icon */}
                                            <div className="news-link-icon">
                                                <ExternalLink
                                                    size={20}
                                                    strokeWidth={2}
                                                    className="text-[var(--color-primary)]"
                                                />
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>

                                {/* View More */}
                                <div className="view-more-container">
                                    <a
                                        href="#all-news"
                                        className="view-more-link"
                                    >
                                        View all {tabs.find((t) => t.id === activeTab)?.label}
                                        <ChevronRight size={16} strokeWidth={2} />
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div >
        </section >
    )
}

export default NewsEvents
