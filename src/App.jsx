import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import PageLoader from './components/layout/PageLoader'
import HeroSection from './components/home/HeroSection'
import WhyKVSR from './components/home/WhyKVSR'
import CoursesOffered from './components/home/CoursesOffered'
import Recruiters from './components/home/Recruiters'
import NewsEvents from './components/home/NewsEvents'
import Stats from './components/home/Stats'
import ContactSection from './components/home/ContactSection'
import DepartmentDetail from './components/DepartmentDetail'

function HomePage() {
    return (
        <main>
            <HeroSection />
            <Stats />
            <WhyKVSR />
            <CoursesOffered />
            <Recruiters />
            <NewsEvents />
            <ContactSection />
        </main>
    )
}

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [imagesLoaded, setImagesLoaded] = useState(false)

    useEffect(() => {
        // Simulate image preloading and show content after images load
        const loadImages = async () => {
            // Give images time to start loading
            await new Promise(resolve => setTimeout(resolve, 800))
            setImagesLoaded(true)

            // Then show full content
            await new Promise(resolve => setTimeout(resolve, 400))
            setIsLoading(false)
        }

        loadImages()
    }, [])

    return (
        <Router>
            <div className="min-h-screen bg-[var(--color-background)]">
                <AnimatePresence mode="wait">
                    {isLoading && (
                        <PageLoader key="loader" imagesLoaded={imagesLoaded} />
                    )}
                </AnimatePresence>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoading ? 0 : 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/department/:code" element={<DepartmentDetail />} />
                    </Routes>
                    <Footer />
                </motion.div>
            </div>
        </Router>
    )
}

export default App
