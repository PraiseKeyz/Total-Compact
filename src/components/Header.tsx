import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaSearch, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import lgog from '../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

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

    const serviceLinks = [
        { name: 'Property Management', href: '/services#property-management' },
        { name: 'Real Estate Consulting', href: '/services#consulting' },
        { name: 'Property Valuation', href: '/services#valuation' },
        { name: 'Investment Advisory', href: '/services#investment' },
    ];

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
                            className="lg:hidden text-tertiary focus:outline-none z-50 cursor-pointer"
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
                        <nav className="hidden md:hidden lg:flex lg:space-x-8 items-center">
                                <Link to="/" className="text-gray-700 hover:text-tertiary md:text-sm  lg:text-xl font-medium transition-colors">Home</Link>
                                <Link to="/about" className="text-gray-700 hover:text-tertiary md:text-sm lg:text-xl font-medium transition-colors">About Us</Link>
                                <div className="relative group">
                                    <button 
                                        className="flex items-center text-gray-700 hover:text-tertiary text-xl cursor-pointer font-medium transition-colors"
                                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    >
                                        Services
                                        <FaPlus className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
                                    </button>
                                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
                                        {serviceLinks.map((service, index) => (
                                            <a
                                                key={index}
                                                href={service.href}
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-tertiary transition-colors"
                                            >
                                                {service.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <Link to="/partnerships" className="text-gray-700 hover:text-tertiary text-xl font-medium transition-colors">Partnerships</Link>
                                <Link to="/contact" className="text-gray-700 hover:text-tertiary text-xl font-medium transition-colors">Contact</Link>
                            </nav>

                        {/* Mobile Navigation */}
                        <div className={`fixed top-0 right-0 h-screen w-[80%] bg-white z-40 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden shadow-xl`}>

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
                                    to="/about" 
                                    className="flex items-center text-gray-700 hover:text-tertiary text-lg font-medium transition-colors duration-200 border-b border-gray-100 pb-4" 
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About
                                </Link>

                                <div className="py-3 border-b border-gray-100">
                            <button 
                                className="flex items-center justify-between hover:text-tertiary  w-full text-xl font-medium text-gray-700"
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                            >
                                Services
                                <FaPlus className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-45' : ''}`} />
                            </button>
                            <div className={`mt-2 space-y-2 ${isServicesOpen ? 'block' : 'hidden'}`}
                            onClick={() => setIsMenuOpen(false)}>
                                {serviceLinks.map((service, index) => (
                                    <a
                                        key={index}
                                        href={service.href}
                                        className="block pl-4 py-2 text-gray-600 hover:text-tertiary"
                                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                                        
                                    >
                                        {service.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <Link 
                                    to="/partnerships" 
                                    className="flex items-center text-gray-700 hover:text-tertiary text-lg font-medium transition-colors duration-200 border-b border-gray-100 pb-4" 
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Partnerships
                                </Link>
                                <Link 
                                    to="/contact" 
                                    className="flex items-center text-gray-700 hover:text-tertiary text-lg font-medium transition-colors duration-200 border-b border-gray-100 pb-4" 
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        {/* Overlay */}
                        {isMenuOpen && (
                            <div 
                                className="fixed inset-0 bg-black/70 z-30 md:hidden"
                                onClick={() => setIsMenuOpen(false)}
                            ></div>
                        )}

                        {/* Search Bar */}
                        <div className="relative hidden lg:block">
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

// import { useState, useEffect } from 'react';
// import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaSearch, FaPlus, FaAngleDown } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isServicesOpen, setIsServicesOpen] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 50);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     useEffect(() => {
//         if (isMenuOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'unset';
//         }
    
//         return () => {
//             document.body.style.overflow = 'unset';
//         };
//     }, [isMenuOpen]);

    // const serviceLinks = [
    //     { name: 'Property Management', href: '/services#property-management' },
    //     { name: 'Real Estate Consulting', href: '/services#consulting' },
    //     { name: 'Property Valuation', href: '/services#valuation' },
    //     { name: 'Investment Advisory', href: '/services#investment' },
    // ];

//     return (
//         <header className="relative">
//             {/* Top Bar */}
//             <div className="flex">
//                 <div className="bg-primary hidden md:block flex-1">
//                     <div className="container px-4 py-3">
//                         <div className="flex items-center space-x-6">
//                             <a href="tel:+1234567890" className="flex items-center text-white hover:text-white/80 transition-colors">
//                                 <FaPhone className="mr-2" />
//                                 <span className="text-sm">(123) 456-7890</span>
//                             </a>
//                             <a href="mailto:info@realestate.com" className="flex items-center text-white hover:text-white/80 transition-colors">
//                                 <FaEnvelope className="mr-2" />
//                                 <span className="text-sm">info@totalcompact.com</span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="relative bg-tertiary flex-1 md:flex-initial">
//                     <div className="absolute top-0 right-0 bottom-0 md:w-12 bg-tertiary transform -skew-x-[20deg] origin-top-left"></div>
//                     <div className="relative px-12 py-3">
//                         <div className="flex items-center justify-center md:justify-start space-x-4">
//                             <a href="#" className="text-white hover:text-white/80 transition-colors"><FaFacebook size={18} /></a>
//                             <a href="#" className="text-white hover:text-white/80 transition-colors"><FaTwitter size={18} /></a>
//                             <a href="#" className="text-white hover:text-white/80 transition-colors"><FaInstagram size={18} /></a>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Navigation */}
//             <div className={`relative ${isScrolled ? 'fixed w-full top-0 left-0 z-50 animate-slideDown' : ''}`}>
//                 <div className="flex">
//                     {/* Logo Section */}
//                     <div className="bg-white py-4 px-6 flex-[0_0_300px] relative z-10 shadow-md">
//                         <Link to="/" className="flex items-center">
//                             <img src={logo} alt="Total Compact Logo" className="w-24" />
//                         </Link>
//                         <div className="absolute top-0 right-0 h-full w-12 bg-white transform skew-x-[20deg] origin-top-right translate-x-6"></div>
//                     </div>

//                     {/* Navigation Section */}
//                     <div className="bg-gray-50 flex-1 py-4 pl-12 pr-6 shadow-md">
//                         <div className="flex justify-between items-center">
//                             {/* Desktop Navigation */}
                            // <nav className="hidden md:flex lg:space-x-8 md:space-x-4 items-center">
                            //     <Link to="/" className="text-gray-700 hover:text-tertiary text-lg font-medium transition-colors">Home</Link>
                            //     <Link to="/about" className="text-gray-700 hover:text-tertiary text-lg font-medium transition-colors">About Us</Link>
                            //     <div className="relative group">
                            //         <button 
                            //             className="flex items-center text-gray-700 hover:text-tertiary text-lg font-medium transition-colors"
                            //             onClick={() => setIsServicesOpen(!isServicesOpen)}
                            //         >
                            //             Services
                            //             <FaAngleDown className="ml-1 group-hover:rotate-180 transition-transform duration-200" />
                            //         </button>
                            //         <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
                            //             {serviceLinks.map((service, index) => (
                            //                 <a
                            //                     key={index}
                            //                     href={service.href}
                            //                     className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-tertiary transition-colors"
                            //                 >
                            //                     {service.name}
                            //                 </a>
                            //             ))}
                            //         </div>
                            //     </div>
                            //     <Link to="/partnerships" className="text-gray-700 hover:text-tertiary text-lg font-medium transition-colors">Partnerships</Link>
                            //     <Link to="/contact" className="text-gray-700 hover:text-tertiary text-lg font-medium transition-colors">Contact</Link>
                            // </nav>

//                             {/* Mobile Menu Button */}
//                             <button
//                                 className="md:hidden text-gray-700 focus:outline-none z-50"
//                                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                             >
//                                 <svg
//                                     className="w-6 h-6"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     viewBox="0 0 24 24"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d={isMenuOpen 
//                                             ? "M6 18L18 6M6 6l12 12"
//                                             : "M4 6h16M4 12h16m-7 6h7"
//                                         }
//                                     ></path>
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Mobile Navigation */}
//                 <div className={`
//                     fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out
//                     ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
//                     md:hidden
//                 `}>
//                     <div className="flex flex-col h-full pt-20 px-6 pb-6 overflow-y-auto">
//                         <Link 
//                             to="/" 
//                             className="py-3 text-xl font-medium text-gray-700 border-b border-gray-100"
//                             onClick={() => setIsMenuOpen(false)}
//                         >Home</Link>
//                         <Link 
//                             to="/about" 
//                             className="py-3 text-xl font-medium text-gray-700 border-b border-gray-100"
//                             onClick={() => setIsMenuOpen(false)}
//                         >About Us</Link>
                        // <div className="py-3 border-b border-gray-100">
                        //     <button 
                        //         className="flex items-center justify-between w-full text-xl font-medium text-gray-700"
                        //         onClick={() => setIsServicesOpen(!isServicesOpen)}
                        //     >
                        //         Services
                        //         <FaPlus className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-45' : ''}`} />
                        //     </button>
                        //     <div className={`mt-2 space-y-2 ${isServicesOpen ? 'block' : 'hidden'}`}>
                        //         {serviceLinks.map((service, index) => (
                        //             <a
                        //                 key={index}
                        //                 href={service.href}
                        //                 className="block pl-4 py-2 text-gray-600 hover:text-tertiary"
                        //                 onClick={() => setIsMenuOpen(false)}
                        //             >
                        //                 {service.name}
                        //             </a>
                        //         ))}
                        //     </div>
                        // </div>
//                         <Link 
//                             to="/partnerships" 
//                             className="py-3 text-xl font-medium text-gray-700 border-b border-gray-100"
//                             onClick={() => setIsMenuOpen(false)}
//                         >Partnerships</Link>
//                         <Link 
//                             to="/contact" 
//                             className="py-3 text-xl font-medium text-gray-700 border-b border-gray-100"
//                             onClick={() => setIsMenuOpen(false)}
//                         >Contact</Link>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;