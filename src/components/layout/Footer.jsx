import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'
import './Footer.css'

const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Academics', href: '#academics' },
    { label: 'Departments', href: '#departments' },
    { label: 'Placements', href: '#placements' },
    { label: 'Campus Life', href: '#campus' },
]

const resources = [
    { label: 'Academic Calendar', href: '#calendar' },
    { label: 'Regulations & Syllabus', href: '#syllabus' },
    { label: 'Exam Cell', href: '#exam' },
    { label: 'IQAC', href: '#iqac' },
    { label: 'Scholarships', href: '#scholarships' },
    { label: 'RTI', href: '#rti' },
]

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="footer-section">
            {/* Main Footer */}
            <div className="footer-container">
                <div className="footer-grid">
                    {/* College Info */}
                    <div className="lg:col-span-1">
                        <div className="logo-container">
                            <div className="logo-circle">
                                <span className="logo-initial">K</span>
                            </div>
                            <div className="college-name-wrapper">
                                <h3 className="college-name">
                                    Dr. K.V. Subba Reddy<br />
                                    Institute of Technology
                                </h3>
                            </div>
                        </div>
                        <p className="college-description">
                            An intellectual destination that draws inspired scholars, keeping Dr.KVSRIT at the nexus of ideas that challenge and change the world.
                        </p>
                        <div className="accreditations">
                            <span className="accreditation-text">Affiliated to JNTUA</span>
                            <span className="accreditation-divider">|</span>
                            <span className="accreditation-text">NAAC A+</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="footer-heading">
                            Quick Links
                            <span className="heading-underline"></span>
                        </h4>
                        <ul className="footer-links-list">
                            {quickLinks.map((link, index) => (
                                <li key={index} className="footer-link-item">
                                    <a
                                        href={link.href}
                                        className="footer-link group"
                                    >
                                        <span className="link-dot"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="footer-heading">
                            Resources
                            <span className="heading-underline"></span>
                        </h4>
                        <ul className="footer-links-list">
                            {resources.map((link, index) => (
                                <li key={index} className="footer-link-item">
                                    <a
                                        href={link.href}
                                        className="footer-link group"
                                    >
                                        <span className="link-dot"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="footer-heading">
                            Contact Us
                            <span className="heading-underline"></span>
                        </h4>
                        <ul className="contact-list">
                            <li className="contact-item">
                                <MapPin size={18} className="contact-icon mt-1" />
                                <span className="contact-text">
                                    Dr. K.V. Subba Reddy Institute of Technology,<br />
                                    Kurnool, Andhra Pradesh, India
                                </span>
                            </li>
                            <li className="contact-item center-align">
                                <Phone size={18} className="contact-icon" />
                                <div className="contact-phone-block">
                                    <a href="tel:9704333789" className="contact-link-text">
                                        9704333789
                                    </a>
                                    <a href="tel:9440006717" className="contact-link-text">
                                        9440006717
                                    </a>
                                </div>
                            </li>
                            <li className="contact-item center-align">
                                <Mail size={18} className="contact-icon" />
                                <a href="mailto:drkvsr.principal@gmail.com" className="contact-link-text">
                                    drkvsr.principal@gmail.com
                                </a>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="social-links">
                            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="social-icon-link group"
                                >
                                    <Icon size={16} className="social-icon" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <div className="footer-bottom-flex">
                        <p className="copyright-text">
                            © {new Date().getFullYear()} Dr. K.V. Subba Reddy Institute of Technology. All Rights Reserved.
                        </p>
                        <p className="maintained-by-text">
                            Maintained By Dr. G. Sunkanna
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                className="scroll-top-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <ArrowUp size={20} />
            </motion.button>
        </footer>
    )
}

export default Footer
