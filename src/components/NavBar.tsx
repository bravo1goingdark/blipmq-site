import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ComingSoonModal from './ComingSoonModal';
import { Link } from "react-router-dom";
import { trackEvent } from '../utils/analytics';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showDemoModal, setShowDemoModal] = useState(false);
    const [showComingSoonModal, setShowComingSoonModal] = useState(false);

    return (
        <>
            <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-gray-900 tracking-tight">
                        <Link to="/">blipmq</Link>
                    </div>

                    <div className="hidden md:flex space-x-8 text-sm font-medium">
                        <Link
                            to="/features"
                            onClick={() => trackEvent("click", "navigation", "features_link")}
                            className="text-gray-700 hover:text-black transition"
                        >
                            Features
                        </Link>

                        <button
                            onClick={() => {
                                trackEvent("click", "navigation", "docs_button");
                                setShowComingSoonModal(true);
                            }}
                            className="cursor-pointer text-gray-700 hover:text-black transition"
                        >
                            Docs
                        </button>

                        <a
                            href="https://github.com/bravo1goingdark/blipmq"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackEvent("click", "navigation", "github_link")}
                            className="text-gray-700 hover:text-black transition"
                        >
                            GitHub
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <button
                            onClick={() => {
                                trackEvent("click", "cta", "get_demo_button");
                                setShowDemoModal(true);
                            }}
                            className="cursor-pointer px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                        >
                            Get Demo
                        </button>
                    </div>

                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden px-4 pb-4 pt-2 bg-white/90 backdrop-blur-md border-t border-gray-200 text-sm font-medium space-y-2">
                        <Link
                            to="/features"
                            onClick={() => trackEvent("click", "navigation", "features_link_mobile")}
                            className="block px-3 py-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition"
                        >
                            Features
                        </Link>

                        <button
                            onClick={() => {
                                trackEvent("click", "navigation", "docs_button_mobile");
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
                            onClick={() => trackEvent("click", "navigation", "github_link_mobile")}
                            className="block px-3 py-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition"
                        >
                            GitHub
                        </a>

                        <button
                            onClick={() => {
                                trackEvent("click", "cta", "get_demo_button_mobile");
                                setShowDemoModal(true);
                            }}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 transition"
                        >
                            Get Demo
                        </button>
                    </div>
                )}
            </nav>

            {/* Modals */}
            {showDemoModal && <ComingSoonModal onClose={() => setShowDemoModal(false)} />}
            {showComingSoonModal && <ComingSoonModal onClose={() => setShowComingSoonModal(false)} />}
        </>
    );
};

export default NavBar;
