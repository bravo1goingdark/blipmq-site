import {lazy, useEffect, useState} from 'react';
import {Menu, X} from 'lucide-react';

const ComingSoonModal = lazy(() => import("../components/ComingSoonModal.tsx"));
import {Link} from 'react-router-dom';
import {trackEvent} from '../utils/analytics';
import {motion, AnimatePresence} from 'motion/react';
import {donors} from '../utils/donors.ts';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showDemoModal, setShowDemoModal] = useState(false);
    const [showComingSoonModal, setShowComingSoonModal] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [donorIndex, setDonorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDonorIndex((prev) => (prev + 1) % donors.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <nav
                className="sticky top-0 z-50 w-full bg-white/70 dark:bg-[rgba(18,18,18,100)] backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
                    {/* Left: Logo */}
                    <div className="flex-1">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                            <Link to="/">blipmq</Link>
                        </div>
                    </div>

                    {/* Center: Nav Links */}
                    <div className="hidden md:flex flex-1 justify-center space-x-8 text-sm font-medium">
                        <Link
                            to="/features"
                            onClick={() => trackEvent('click', 'navigation', 'features_link')}
                            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                        >
                            Features
                        </Link>

                        <button
                            onClick={() => {
                                trackEvent('click', 'navigation', 'docs_button');
                                setShowComingSoonModal(true);
                            }}
                            className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                        >
                            Docs
                        </button>

                        <a
                            href="https://github.com/bravo1goingdark/blipmq"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackEvent('click', 'navigation', 'github_link')}
                            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                        >
                            GitHub
                        </a>
                    </div>

                    {/* Right: Donor + CTA + Mobile Menu */}
                    <div className="flex-1 flex justify-end items-center space-x-4">
                        {/* Donor Block */}
                        <div
                            className="relative group w-[130px] text-center text-sm text-gray-700 dark:text-gray-300 font-medium cursor-pointer"
                            onClick={() => {
                                setShowTooltip(true);
                                setTimeout(() => setShowTooltip(false), 3000);
                            }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={donors[donorIndex]}
                                    initial={{y: 15, opacity: 0}}
                                    animate={{y: 0, opacity: 1}}
                                    exit={{y: -15, opacity: 0}}
                                    transition={{duration: 0.4}}
                                >
                                    💖 {donors[donorIndex]}
                                </motion.div>
                            </AnimatePresence>

                            {/* Tooltip */}
                            {(showTooltip || typeof window !== 'undefined') && (
                                <div
                                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 px-3 py-1.5 bg-black text-white text-xs rounded-md transition-opacity duration-200 whitespace-nowrap shadow-lg
                ${showTooltip ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                `}
                                >
                                    Thanks to these amazing folks, we got the domain ❤️ for 1 year
                                </div>
                            )}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <button
                                onClick={() => {
                                    trackEvent('click', 'cta', 'get_demo_button');
                                    setShowDemoModal(true);
                                }}
                                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-gray-200 transition"
                            >
                                Get Demo
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden text-gray-700"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div
                        className="md:hidden px-4 pb-4 pt-2 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 text-sm font-medium space-y-2">
                        <Link
                            to="/features"
                            onClick={() => {
                                trackEvent('click', 'navigation', 'features_link_mobile');
                                setIsOpen(false);
                            }}
                            className="block px-3 py-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition"
                        >
                            Features
                        </Link>

                        <button
                            onClick={() => {
                                trackEvent('click', 'navigation', 'docs_button_mobile');
                                setShowComingSoonModal(true);
                            }}
                            className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100"
                        >
                            Docs
                        </button>

                        <a
                            href="https://github.com/bravo1goingdark/blipmq"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackEvent('click', 'navigation', 'github_link_mobile')}
                            className="block px-3 py-2 rounded-md text-gray-700 dark:text-dark-muted hover:text-black dark:hover:text-dark-foreground hover:bg-gray-100 dark:hover:bg-dark-hover transition"
                        >
                            GitHub
                        </a>

                        <button
                            onClick={() => {
                                trackEvent('click', 'cta', 'get_demo_button_mobile');
                                setShowDemoModal(true);
                            }}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-card text-gray-800 dark:text-dark-foreground hover:bg-gray-100 dark:hover:bg-dark-hover hover:text-black dark:hover:text-dark-foreground transition"
                        >
                            Get Demo
                        </button>
                    </div>
                )}
            </nav>

            {/* Modals */}
            {showDemoModal && <ComingSoonModal onClose={() => setShowDemoModal(false)}/>}
            {showComingSoonModal && <ComingSoonModal onClose={() => setShowComingSoonModal(false)}/>}
        </>
    );
};

export default NavBar;
