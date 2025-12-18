import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, BookOpen, Briefcase, ArrowRight } from 'lucide-react'

const features = [
    {
        icon: Award,
        title: 'Credentials',
        description: 'DRKVSRIT is known for its quality initiatives which is amply reflected in accreditations. B.Tech programs (UG) in ECE & EEE accredited and CSE is re-accredited by National Board of Accreditation (NBA) and National Assessment and Accreditation Council (NAAC) with \'A+\' Grade in 1st Cycle 2022. The college got 100 rank in Higher Education Review.',
        link: '#accreditation',
        gradient: 'from-[var(--color-accent)] to-[var(--color-primary-light)]',
    },
    {
        icon: BookOpen,
        title: 'Teaching-Learning-Evaluation',
        description: 'The learning of a student at DrKVSRIT is a joyful journey transforming an aspiring young mind to an inspiring engineer responsive to societal and industrial needs. To bring the best out of a graduate, a well planned JNTUA curriculum along with innovative teaching and learning process is established for a successful career.',
        link: '#syllabus',
        gradient: 'from-[var(--color-primary)] to-[var(--color-primary-dark)]',
    },
    {
        icon: Briefcase,
        title: 'Training & Placements',
        description: 'The college is enabling students to realize their full potential and make the most of global opportunities. We plan and conduct a series of training programs for students to bridge the gap between campus teaching and industry requirement.',
        link: '#placements',
        gradient: 'from-[var(--color-primary-dark)] to-[#3D2914]',
    },
]

const WhyKVSR = () => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    return (
        <section id="about" className="section bg-[var(--color-surface)]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title title-underline">Why Dr. KVSRIT?</h2>
                    <p className="section-subtitle mt-6">
                        When it comes to academics, the college has highly Ph.D. qualified and experienced faculty
                        with expertise in various domains. The college follows choice-based credit system (CBCS)
                        with industry-oriented curriculum.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div
                    ref={containerRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                        >
                            <motion.div
                                whileHover={{ y: -8 }}
                                className="h-full bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Icon Header */}
                                <div className={`p-6 bg-gradient-to-r ${feature.gradient} flex justify-center`}>
                                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <feature.icon size={32} className="text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold mb-4 text-[var(--color-text-primary)] font-['Outfit'] group-hover:text-[var(--color-primary)] transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                                        {feature.description}
                                    </p>
                                    <a
                                        href={feature.link}
                                        className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium text-sm group/link hover:gap-3 transition-all"
                                    >
                                        Read More
                                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>

                                {/* Hover Decoration */}
                                <div className={`h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyKVSR
