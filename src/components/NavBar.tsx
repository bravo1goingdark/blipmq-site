import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-900 tracking-tight">blipmq</div>

                <div className="hidden md:flex space-x-8 text-sm font-medium">
                    <a href="#features" className="text-gray-700 hover:text-black transition">Features</a>
                    <a href="#docs" className="text-gray-700 hover:text-black transition">Docs</a>
                    <a href="#github" className="text-gray-700 hover:text-black transition">GitHub</a>
                </div>

                <div className="hidden md:block">
                    <a href="#" className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                        Get Demo
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-3 bg-white/90 backdrop-blur-md border-t border-gray-200 text-sm font-medium">
                    <a href="#features" className="block text-gray-700 hover:text-black transition">Features</a>
                    <a href="#docs" className="block text-gray-700 hover:text-black transition">Docs</a>
                    <a href="#github" className="block text-gray-700 hover:text-black transition">GitHub</a>
                    <a href="#" className="block px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
                        Get Demo
                    </a>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
