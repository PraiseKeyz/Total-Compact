import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">About Us</h3>
                        <p className="text-gray-400 mb-4">
                            Your trusted partner in finding the perfect property. We provide exceptional real estate services with a focus on your needs.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
                            </li>
                            <li>
                                <Link to="/properties" className="text-gray-400 hover:text-white">Properties</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">Property Sales</li>
                            <li className="text-gray-400">Property Rental</li>
                            <li className="text-gray-400">Property Management</li>
                            <li className="text-gray-400">Property Consultation</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <div className="space-y-4">
                            <p className="flex items-center text-gray-400">
                                <FaMapMarkerAlt className="mr-2" />
                                123 Real Estate Street, City, Country
                            </p>
                            <p className="flex items-center text-gray-400">
                                <FaPhone className="mr-2" />
                                (123) 456-7890
                            </p>
                            <p className="flex items-center text-gray-400">
                                <FaEnvelope className="mr-2" />
                                info@totalcompact.com
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Total Compact. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;