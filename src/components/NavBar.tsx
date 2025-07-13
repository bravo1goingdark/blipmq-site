import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ComingSoonModal from './ComingSoonModal';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showDemoModal, setShowDemoModal] = useState(false);

    return (
        <>
            <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-gray-900 tracking-tight">blipmq</div>

                    <div className="hidden md:flex space-x-8 text-sm font-medium">
                        <a href="#features" className="text-gray-700 hover:text-black transition">Features</a>
                        <a href="#docs" className="text-gray-700 hover:text-black transition">Docs</a>
                        <a href="#github" className="text-gray-700 hover:text-black transition">GitHub</a>
                    </div>

                    <div className="hidden md:block">
                        <button
                            onClick={() => setShowDemoModal(true)}
                            className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
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
                        <a href="#features" className="block px-3 py-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition">Features</a>
                        <a href="#docs" className="block px-3 py-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition">Docs</a>
                        <a href="#github" className="block px-3 py-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition">GitHub</a>
                        <button
                            onClick={() => setShowDemoModal(true)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 transition"
                        >
                            Get Demo
                        </button>
                    </div>
                )}
            </nav>

            {/* Show Modal */}
            {showDemoModal && <ComingSoonModal onClose={() => setShowDemoModal(false)} />}
        </>
    );
};

export default NavBar;
