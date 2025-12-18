import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import './ContactSection.css'

const ContactSection = () => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    const contactItems = [
        {
            icon: MapPin,
            iconBg: 'bg-[var(--color-primary)]/10',
            iconColor: 'text-[var(--color-primary)]',
            title: 'Address',
            lines: [
                'Dr. K.V. Subba Reddy Institute of Technology,',
                'Kurnool District, Andhra Pradesh, India'
            ]
        },
        {
            icon: Phone,
            iconBg: 'bg-[var(--color-accent)]/10',
            iconColor: 'text-[var(--color-accent)]',
            title: 'Phone',
            lines: [
                { text: '9704333789', href: 'tel:9704333789' },
                { text: '9440006717', href: 'tel:9440006717' },
                { text: '766 000 3356 / 3357', href: 'tel:7660003356' },
                { text: 'TPO: 766 000 3345', small: true }
            ]
        },
        {
            icon: Mail,
            iconBg: 'bg-[var(--color-success)]/10',
            iconColor: 'text-[var(--color-success)]',
            title: 'Email',
            lines: [
                { text: 'drkvsr.principal@gmail.com', href: 'mailto:drkvsr.principal@gmail.com' }
            ]
        },
        {
            icon: Clock,
            iconBg: 'bg-[var(--color-primary-light)]/20',
            iconColor: 'text-[var(--color-primary)]',
            title: 'Office Hours',
            lines: [
                'Mon - Sat: 9:00 AM - 5:00 PM',
                'Sunday: Closed'
            ]
        }
    ]

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container" ref={containerRef}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="contact-header-wrapper"
                >
                    <h2 className="contact-title title-underline">Contact Us</h2>
                    <p className="contact-description">
                        Have questions? We'd love to hear from you. Get in touch with us.
                    </p>
                </motion.div>

                <div className="contact-grid">
                    {/* Contact Info - LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h3 className="contact-info-title">
                            Get in Touch
                        </h3>

                        <div className="contact-cards-list">
                            {contactItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="contact-card"
                                >
                                    {/* Icon - LARGER SIZE */}
                                    <div className={`contact-icon-wrapper ${item.iconBg}`}>
                                        <item.icon className={item.iconColor} size={32} strokeWidth={1.5} />
                                    </div>

                                    {/* Content */}
                                    <div className="contact-card-content">
                                        <h4 className="contact-card-title">{item.title}</h4>
                                        <div className="contact-lines">
                                            {item.lines.map((line, lineIdx) => (
                                                typeof line === 'string' ? (
                                                    <p key={lineIdx} className="contact-line">
                                                        {line}
                                                    </p>
                                                ) : line.href ? (
                                                    <a
                                                        key={lineIdx}
                                                        href={line.href}
                                                        className={`contact-link ${line.small ? 'small' : ''}`}
                                                    >
                                                        {line.text}
                                                    </a>
                                                ) : (
                                                    <p key={lineIdx} className="contact-note-small">
                                                        {line.text}
                                                    </p>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form - RIGHT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="contact-form-container">
                            <h3 className="contact-form-title">
                                Send us a Message
                            </h3>

                            <form className="contact-form">
                                <div className="form-row">
                                    <div>
                                        <label className="form-label">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="form-label">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-input"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="form-label">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-input"
                                        placeholder="+91 9876543210"
                                    />
                                </div>

                                <div>
                                    <label className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        rows={5}
                                        className="form-textarea"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="btn btn-primary form-submit-btn"
                                >
                                    <Send size={22} />
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="contact-map-wrapper"
                >
                    <div className="contact-map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.6399089686574!2d78.0566!3d15.8167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKurnool%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="College Location"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactSection
