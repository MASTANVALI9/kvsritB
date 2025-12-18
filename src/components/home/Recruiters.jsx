import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Briefcase } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Recruiters.css'

const recruiters = [
    { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1200px-Tata_Consultancy_Services_Logo.svg.png' },
    { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
    { name: 'Cognizant', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg' },
    { name: 'Tech Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Tech_Mahindra_New_Logo.svg' },
    { name: 'HCL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/HCLTech_new_logo.svg/1024px-HCLTech_new_logo.svg.png' },
    { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
    { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg' },
]

const placementStats = [
    { value: '100+', label: 'Recruiting Companies' },
    { value: '95%', label: 'Placement Rate' },
    { value: '₹12L', label: 'Highest Package' },
    { value: '₹4.5L', label: 'Average Package' },
]

const RecruiterLogo = ({ recruiter, index }) => {
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="recruiter-card"
        >
            {!error ? (
                <img
                    src={recruiter.logo}
                    alt={recruiter.name}
                    className={`recruiter-logo ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setLoaded(true)}
                    onError={() => setError(true)}
                />
            ) : (
                <span className="recruiter-name-fallback">
                    {recruiter.name}
                </span>
            )}
            {!loaded && !error && <div className="recruiter-skeleton skeleton rounded-lg" />}
        </motion.div>
    )
}

const Recruiters = () => {
    const containerRef = useRef(null)
    const scrollRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    /* AUTO SCROLL (unchanged) */
    useEffect(() => {
        const el = scrollRef.current
        if (!el) return

        const interval = setInterval(() => {
            if (el.scrollLeft >= el.scrollWidth / 2) {
                el.scrollLeft = 0
            } else {
                el.scrollLeft += 1
            }
        }, 20)

        return () => clearInterval(interval)
    }, [])

    return (
        <section id="recruiters" className="recruiters-section">

            {/* SAME CENTERING LOGIC AS UNDERGRADUATE PROGRAMS */}
            <div ref={containerRef} className="recruiters-container">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="recruiters-header"
                >
                    <h2 className="recruiters-title title-underline">
                        Our Key Recruiters
                    </h2>
                    <p className="recruiters-description">
                        Leading companies trust Dr. KVSRIT for hiring talented and industry-ready graduates.
                    </p>
                </motion.div>

                {/* AUTO-SCROLL (NOW PERFECTLY CENTERED) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="recruiters-scroll-wrapper"
                >
                    <div
                        ref={scrollRef}
                        className="recruiters-scroll-container"
                    >
                        {[...recruiters, ...recruiters].map((r, i) => (
                            <RecruiterLogo key={`${r.name}-${i}`} recruiter={r} index={i} />
                        ))}
                    </div>
                </motion.div>

                {/* SPACER */}
                <div className="h-16" />

                {/* STATS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="recruiters-stats-grid"
                >
                    {placementStats.map((stat, i) => (
                        <div
                            key={i}
                            className="stat-card"
                        >
                            <p className="stat-value">
                                {stat.value}
                            </p>
                            <p className="stat-label">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* SPACER */}
                <div className="h-16" />

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="recruiters-cta-wrapper"
                >
                    <Link
                        to="/placements"
                        className="btn btn-outline recruiters-cta-btn"
                    >
                        <Briefcase size={24} strokeWidth={1.5} />
                        View Placement Record
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}

export default Recruiters
