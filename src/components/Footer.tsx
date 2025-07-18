import {FaInstagram, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Logo from '../assets/Footer.svg';

const Footer = () => (
    <footer className="bg-white px-6 py-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">


            <Link to="/" className="text-3xl font-extrabold text-indigo-600 tracking-tight hover:opacity-90 transition">
                <img src={Logo} alt="BlipMQ Logo" className="h-10 md:h-12 w-auto inline-block mr-2"/>

            </Link>


            <p className="text-sm text-center md:text-left text-gray-600 max-w-xl leading-relaxed">
                Minimal, lightning-fast messaging built for developers who want total control
            </p>

            <div className="flex items-center space-x-5">
                <a
                    href="https://www.instagram.com/blipmq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition"
                >
                    <FaInstagram size={20}/>
                </a>
                <a
                    href="https://twitter.com/blipmq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition"
                >
                    <FaTwitter size={20}/>
                </a>
                <a
                    href="https://linkedin.com/company/blipmq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition"
                >
                    <FaLinkedin size={20}/>
                </a>

                <a
                    href="https://github.com/bravo1goingdark/blipmq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition"
                >
                    <FaGithub size={20}/>
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;
