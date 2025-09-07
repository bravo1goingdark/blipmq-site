import {FaInstagram, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import DarkLogo from '../assets/Footer.svg';
import WhiteLogo from '../assets/Footer (White).svg';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
    const { theme } = useTheme();
    const Logo = theme === 'dark' ? WhiteLogo : DarkLogo;
    
    return (
    <footer className="bg-white dark:bg-dark-background px-6 py-4 border-t border-gray-200 dark:border-dark-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">


            <Link to="/" className="text-3xl font-extrabold text-indigo-600 tracking-tight hover:opacity-90 transition">
                <img src={Logo} alt="BlipMQ Logo" className="h-10 md:h-12 w-auto inline-block mr-2"/>

            </Link>


            <p className="text-sm text-center md:text-left text-gray-600 dark:text-dark-muted max-w-xl leading-relaxed">
                Minimal, lightning-fast messaging built for developers who want total control
            </p>

            <div className="flex items-center space-x-5">
                <ThemeToggle />
                <a
                    href="https://www.instagram.com/blipmq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-dark-muted hover:text-black dark:hover:text-dark-foreground transition"
                >
                    <FaInstagram size={20}/>
                </a>
                <a
                    href="https://twitter.com/blipmq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-dark-muted hover:text-black dark:hover:text-dark-foreground transition"
                >
                    <FaTwitter size={20}/>
                </a>
                <a
                    href="https://linkedin.com/company/blipmq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-dark-muted hover:text-black dark:hover:text-dark-foreground transition"
                >
                    <FaLinkedin size={20}/>
                </a>

                <a
                    href="https://github.com/bravo1goingdark/blipmq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-dark-muted hover:text-black dark:hover:text-dark-foreground transition"
                >
                    <FaGithub size={20}/>
                </a>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
