import {FaInstagram, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Logo from '../assets/Footer.svg';
import ThemeToggle from './ThemeToggle';

const Footer = () => (
    <footer className="bg-white dark:bg-gray-900 px-6 py-4 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">


            <div className="flex flex-col items-center gap-4">
                <Link to="/" className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight hover:opacity-90 transition">
                    <img src={Logo} alt="BlipMQ Logo" className="h-10 md:h-12 w-auto inline-block mr-2"/>
                </Link>
                <ThemeToggle />
            </div>

            <p className="text-sm text-center md:text-left text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                Minimal, lightning-fast messaging built for developers who want total control
            </p>

            <div className="flex items-center space-x-5">
                <a
                    href="https://www.instagram.com/blipmq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                >
                    <FaInstagram size={20}/>
                </a>
                <a
                    href="https://twitter.com/blipmq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                >
                    <FaTwitter size={20}/>
                </a>
                <a
                    href="https://linkedin.com/company/blipmq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                >
                    <FaLinkedin size={20}/>
                </a>

                <a
                    href="https://github.com/bravo1goingdark/blipmq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                >
                    <FaGithub size={20}/>
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
