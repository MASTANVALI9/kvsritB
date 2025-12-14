import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Search } from 'lucide-react'

const navItems = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'About Us',
        href: '/about',
        children: [
            { label: 'About Us', href: '/about#about' },
            { label: 'Vision & Mission', href: '/about#vision' },
            { label: 'Affiliation & Accreditation', href: '/about#accreditation' },
            { label: 'Management', href: '/about#management' },
            { label: 'Principal', href: '/about#principal' },
            { label: 'Administration', href: '/about#administration' },
        ],
    },
    {
        label: 'Admissions',
        href: '/admissions',
        children: [
            { label: 'Admission Procedure', href: '/admissions#admission-procedure' },
            { label: 'Criteria for Admission', href: '/admissions#criteria' },
            { label: 'Programs Offered', href: '/admissions#programs' },
            { label: 'Fee Structure', href: '/admissions#fee' },
            { label: 'Scholarships', href: '/admissions#scholarships' },
        ],
    },
    {
        label: 'Academics',
        href: '/academics',
        children: [
            { label: 'Academic Calendar', href: '/academics#calendar' },
            { label: 'Regulations & Syllabus', href: '/academics#syllabus' },
            { label: 'Exam Cell', href: '/academics#exam' },
            { label: 'R&D Cell', href: '/academics#rnd' },
            { label: 'IQAC', href: '/academics#iqac' },
            { label: 'Policies', href: '/academics#policies' },
        ],
    },
    {
        label: 'Departments',
        href: '/#courses',
        children: [
            { label: 'Computer Science & Engineering', href: '/department/CSE' },
            { label: 'CSE (AI & ML)', href: '/department/CSEAIML' },
            { label: 'Electronics & Communication', href: '/department/ECE' },
            { label: 'Electrical & Electronics', href: '/department/EEE' },
            { label: 'Mechanical Engineering', href: '/department/MECH' },
            { label: 'Civil Engineering', href: '/department/CIVIL' },
            { label: 'MBA', href: '/department/MBA' },
            { label: 'MCA', href: '/department/MCA' },
        ],
    },
    {
        label: 'Placements',
        href: '/placements',
        children: [
            { label: 'About T&P', href: '/placements#tp' },
            { label: 'Placement Record', href: '/placements#record' },
            { label: 'Internships', href: '/placements#internships' },
            { label: 'News & Events', href: '/placements#events' },
        ],
    },
    {
        label: 'Campus Life',
        href: '/campus-life',
        children: [
            { label: 'Facilities', href: '/campus-life#facilities' },
            { label: 'Infrastructure', href: '/campus-life#infrastructure' },
            { label: 'Events', href: '/campus-life#events' },
            { label: 'Gallery', href: '/campus-life#gallery' },
        ],
    },
    {
        label: 'Contact',
        href: '/contact',
    },
]

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleDropdownEnter = (index) => {
        setActiveDropdown(index)
    }

    const handleDropdownLeave = () => {
        setActiveDropdown(null)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Top Bar */}
            <div className="bg-[var(--color-primary-dark)] text-white py-2 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center gap-6">
                        <a href="tel:9704333789" className="flex items-center gap-2 hover:text-[var(--color-accent-light)] transition-colors">
                            <Phone size={14} />
                            <span>9704333789</span>
                        </a>
                        <a href="mailto:drkvsr.principal@gmail.com" className="flex items-center gap-2 hover:text-[var(--color-accent-light)] transition-colors">
                            <Mail size={14} />
                            <span>drkvsr.principal@gmail.com</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#alumni" className="hover:text-[var(--color-accent-light)] transition-colors">Alumni</a>
                        <span className="text-[var(--color-primary-light)]">|</span>
                        <a href="#grievance" className="hover:text-[var(--color-accent-light)] transition-colors">Grievance Cell</a>
                        <span className="text-[var(--color-primary-light)]">|</span>
                        <a href="#mandatory" className="hover:text-[var(--color-accent-light)] transition-colors">Mandatory Disclosures</a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <motion.nav
                className={`transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-3">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                                <span className="text-white font-bold text-xl font-['Outfit']">K</span>
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-lg font-bold text-[var(--color-text-primary)] leading-tight font-['Outfit']">
                                    Dr. K.V. Subba Reddy
                                </h1>
                                <p className="text-xs text-[var(--color-text-secondary)]">
                                    Institute of Technology
                                </p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => handleDropdownEnter(index)}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    <Link
                                        to={item.href}
                                        className={`touch-target flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all ${activeDropdown === index
                                            ? 'bg-[var(--color-primary)] text-white'
                                            : 'text-[var(--color-text-primary)] hover:bg-[var(--color-primary-light)]/20'
                                            }`}
                                    >
                                        {item.label}
                                        {item.children && (
                                            <ChevronDown
                                                size={14}
                                                className={`transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                                            />
                                        )}
                                    </Link>

                                    {/* Dropdown */}
                                    <AnimatePresence>
                                        {item.children && activeDropdown === index && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-[var(--color-border)] overflow-hidden z-50"
                                            >
                                                <div className="py-2">
                                                    {item.children.map((child, childIndex) => (
                                                        <Link
                                                            key={childIndex}
                                                            to={child.href}
                                                            onClick={() => setActiveDropdown(null)}
                                                            className="touch-target block px-4 py-2.5 text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-primary-light)]/20 hover:text-[var(--color-primary)] transition-colors"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-3">
                            {/* NAAC Badge */}
                            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary-light)] rounded-full">
                                <span className="text-xs font-bold text-[var(--color-text-primary)]">NAAC A+</span>
                            </div>

                            {/* Search Button */}
                            <button className="p-2 rounded-lg hover:bg-[var(--color-primary-light)]/20 transition-colors">
                                <Search size={20} className="text-[var(--color-text-primary)]" />
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                className="lg:hidden p-2 rounded-lg hover:bg-[var(--color-primary-light)]/20 transition-colors"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? (
                                    <X size={24} className="text-[var(--color-text-primary)]" />
                                ) : (
                                    <Menu size={24} className="text-[var(--color-text-primary)]" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white border-t border-[var(--color-border)]"
                        >
                            <div className="container mx-auto px-4 py-4 max-h-[70vh] overflow-y-auto">
                                {navItems.map((item, index) => (
                                    <div key={index} className="border-b border-[var(--color-border)] last:border-0">
                                        <Link
                                            to={item.href}
                                            className="touch-target block py-3 text-[var(--color-text-primary)] font-medium"
                                            onClick={() => !item.children && setIsMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                        {item.children && (
                                            <div className="pl-4 pb-2">
                                                {item.children.map((child, childIndex) => (
                                                    <Link
                                                        key={childIndex}
                                                        to={child.href}
                                                        className="touch-target block py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </header>
    )
}

export default Header
