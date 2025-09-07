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
        <footer className="bg-gray-50 dark:bg-dark-card border-t border-gray-200 dark:border-dark-border">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <Link to="/" className="inline-block mb-4">
                            <img src={Logo} alt="BlipMQ Logo" className="h-10 w-auto"/>
                        </Link>
                        <p className="text-sm text-gray-600 dark:text-dark-muted max-w-md leading-relaxed mb-6">
                            High-performance messaging infrastructure built in Rust. Designed for modern microservices and real-time applications.
                        </p>
                        <div className="flex items-center space-x-4">
                            <a
                                href="https://github.com/bravo1goingdark/blipmq"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                            >
                                <FaGithub size={20}/>
                            </a>
                            <a
                                href="https://twitter.com/blipmq"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                            >
                                <FaTwitter size={20}/>
                            </a>
                            <a
                                href="https://linkedin.com/company/blipmq"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                            >
                                <FaLinkedin size={20}/>
                            </a>
                            <a
                                href="https://www.instagram.com/blipmq/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                            >
                                <FaInstagram size={20}/>
                            </a>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-dark-foreground mb-4">Products</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-sm text-gray-600 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-indigo-400 transition">BlipMQ</Link></li>
                            <li><Link to="/mailgrid" className="text-sm text-gray-600 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-indigo-400 transition">MailGrid</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-dark-foreground mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><Link to="/features" className="text-sm text-gray-600 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-indigo-400 transition">Features</Link></li>
                            <li><a href="https://github.com/bravo1goingdark/blipmq" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-indigo-400 transition">GitHub</a></li>
                            <li><button className="text-sm text-gray-600 dark:text-dark-muted hover:text-indigo-600 dark:hover:text-indigo-400 transition text-left">Documentation</button></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 dark:border-dark-border pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} BlipMQ. Built with ❤️ for developers.
                    </p>
                    <div className="flex items-center mt-4 sm:mt-0">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
