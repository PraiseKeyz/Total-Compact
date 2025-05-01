import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import lgog from '../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <header>
            {/* Top Bar */}
            <div className="flex">
                <div className="bg-primary hidden md:block flex-1">
                    <div className="container px-4 py-2">
                        <div className="flex items-center space-x-4">
                            <a href="tel:+1234567890" className="flex items-center text-white">
                                <FaPhone className="mr-2" />
                                <span>(123) 456-7890</span>
                            </a>
                            <a href="mailto:info@realestate.com" className="flex items-center text-white">
                                <FaEnvelope className="mr-2" />
                                <span>info@totalcompact.com</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative bg-tertiary flex-1 md:flex-initial">
                    <div className="absolute top-0 right-0 bottom-0 md:w-12 bg-tertiary transform origin-top-right-skew-x-12"></div>
                    <div className="relative px-12 py-2">
                        <div className="flex items-center justify-center md:justify-start space-x-4">
                            <a href="#" className="text-white hover:text-gray-300"><FaFacebook /></a>
                            <a href="#" className="text-white hover:text-gray-300"><FaTwitter /></a>
                            <a href="#" className="text-white hover:text-gray-300"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className={`bg-white shadow-md ${isScrolled ? 'fixed w-full top-0 left-0 z-50' : ''}`}>
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <img src={lgog} alt="Real Estate Logo" className="w-20" />
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-tertiary focus:outline-none z-50 cursor-pointer"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isMenuOpen 
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16m-7 6h7"
                                    }
                                ></path>
                            </svg>
                        </button>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-6">
                            <Link to="/" className="text-gray-700 hover:text-tertiary text-[21px]">Home</Link>
                            <Link to="/properties" className="text-gray-700 hover:text-tertiary text-[21px]">Properties</Link>
                            <Link to="/about" className="text-gray-700 hover:text-tertiary text-[21px]">About</Link>
                            <Link to="/about" className="text-gray-700 hover:text-tertiary text-[21px]">Careers</Link>
                            <Link to="/contact" className="text-gray-700 hover:text-tertiary text-[21px]">Contact</Link>
                        </nav>

                        {/* Mobile Navigation */}
                        <div className={`fixed top-0 right-0 h-screen w-[80%] bg-white z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden shadow-xl`}>

                            {/* Logo in mobile menu */}
                            <div className="pt-8 pb-6 px-6 border-b">
                                <img src={lgog} alt="Real Estate Logo" className="w-24 mx-auto" />
                            </div>

                            {/* Navigation Links */}
                            <div className="flex flex-col px-6 py-8 space-y-6">
                                <Link 
                                    to="/" 
                                    className="flex items-center text-gray-700 hover:text-tertiary text-lg font-medium transition-colors duration-200 border-b border-gray-100 pb-4" 
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link 
                                    to="/properties" 
                                    className="flex items-center text-gray-700 hover:text-tertiary text-lg font-medium transition-colors duration-200 border-b border-gray-100 pb-4" 
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Properties
                                </Link>
                                <Link 
                                    to="/about" 
                                    className="flex items-center text-gray-700 hover:text-tertiary text-lg font-medium transition-colors duration-200 border-b border-gray-100 pb-4" 
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About
                                </Link>
                                <Link 
                                    to="/about" 
                                    className="flex items-center text-gray-700 hover:text-tertiary text-lg font-medium transition-colors duration-200 border-b border-gray-100 pb-4" 
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Careers
                                </Link>
                                <Link 
                                    to="/contact" 
                                    className="flex items-center text-gray-700 hover:text-tertiary text-lg font-medium transition-colors duration-200 border-b border-gray-100 pb-4" 
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>

                        {/* Overlay */}
                        {isMenuOpen && (
                            <div 
                                className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                                onClick={() => setIsMenuOpen(false)}
                            ></div>
                        )}

                        {/* Search Bar */}
                        <div className="relative hidden md:block">
                            <input
                                type="text"
                                placeholder="Search properties..."
                                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;