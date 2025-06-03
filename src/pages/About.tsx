import { motion } from 'framer-motion';
import herosection from '../assets/about.herosection.jpg';
import { FaHome, FaHandshake, FaChartLine} from 'react-icons/fa';
import image1 from '../assets/about.image1.jpg'
import image2 from '../assets/about.image3.jpg'

const About = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section with Parallax Effect */}
            <motion.section
                className="relative flex min-h-[85vh] md:min-h-[50vh] lg:min-h-[60vh] overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute inset-0">
                    <motion.div
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="relative h-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-tertiary/90 to-primary/90" />
                        <img src={herosection} alt="About Us Hero" className="w-full h-full object-cover" />
                    </motion.div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center justify-center h-full py-20">
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Building Dreams,<br />Creating Homes
                            </h1>
                            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
                                With over a decade of excellence in real estate, we transform your vision into reality.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Company Overview with Modern Cards */}
            <motion.section 
                className="py-24 bg-white relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute top-0 left-0 w-64 h-64 bg-tertiary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2" />
                
                <div className="container mx-auto px-4 relative">
                    {/* Story Header */}
                    <div className="text-center mb-16">
                        <motion.div 
                            className="flex items-center justify-center gap-3 mb-4"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="h-2.5 w-2.5 bg-tertiary rounded-full animate-pulse"></span>
                            <span className="text-tertiary font-semibold tracking-wide text-sm">OUR JOURNEY</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Story of Growth</h2>
                        <div className="w-24 h-1 bg-tertiary mx-auto rounded-full mb-8"></div>
                    </div>

                    {/* Story Content with Image */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="relative"
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
                                <img 
                                    src={image1} 
                                    alt="Our Journey" 
                                    className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-tertiary rounded-full z-0 opacity-20"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full z-0 opacity-20"></div>
                        </motion.div>

                        <motion.div
                            className="space-y-6"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold text-gray-900">Building Dreams Since 2005</h3>
                                <p className="text-gray-600 leading-relaxed">
                                TC enterprises started since 2005, Upgraded to TOTAL COMPACT LIMITED 2018 with the intention to serve our valuable customers better
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Founded with a vision to revolutionize the real estate industry, Total Compact has evolved from a small local agency to a trusted name in property solutions. Our journey has been marked by unwavering commitment to excellence and innovation.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We've helped countless families find their dream homes and assisted investors in making informed decisions. Our success is built on understanding our clients' unique needs and delivering personalized solutions.
                                </p>
                                <div className="grid grid-cols-2 gap-6 mt-8">
                                    <div className="border-l-4 border-tertiary pl-4">
                                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Our Expertise</h4>
                                        <p className="text-gray-600">Specialized in residential and commercial properties with a focus on sustainable development.</p>
                                    </div>
                                    <div className="border-l-4 border-primary pl-4">
                                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Our Promise</h4>
                                        <p className="text-gray-600">Committed to transparency, integrity, and exceptional service in every transaction.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Values Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
                        <motion.div 
                            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                            whileHover={{ y: -10 }}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="w-14 h-14 bg-tertiary/10 rounded-xl flex items-center justify-center mb-6">
                                <FaHome className="text-2xl text-tertiary" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600">To provide exceptional real estate services while maintaining the highest standards of integrity and professionalism.</p>
                        </motion.div>

                        <motion.div 
                            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                            whileHover={{ y: -10 }}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                <FaChartLine className="text-2xl text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600">To be the leading real estate company known for innovation, reliability, and customer satisfaction.</p>
                        </motion.div>

                        <motion.div 
                            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                            whileHover={{ y: -10 }}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="w-14 h-14 bg-tertiary/10 rounded-xl flex items-center justify-center mb-6">
                                <FaHandshake className="text-2xl text-tertiary" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
                            <p className="text-gray-600">Integrity, Excellence, Innovation, and Customer-First approach guide everything we do.</p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>


            {/* Our Process Section */}
            <motion.section 
                className="py-24 bg-gray-50 relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {/* Background Decorations */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-tertiary/5 rounded-full -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="container mx-auto px-4 relative">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <motion.div 
                            className="flex items-center justify-center gap-3 mb-4"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <span className="h-2.5 w-2.5 bg-tertiary rounded-full animate-pulse"></span>
                            <span className="text-tertiary font-semibold tracking-wide text-sm">OUR PROCESS</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How We Work</h2>
                        <div className="w-24 h-1 bg-tertiary mx-auto rounded-full mb-8"></div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our streamlined process ensures a smooth and efficient experience from initial consultation to final handover.</p>
                    </div>

                    {/* Process Timeline */}
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Step 1 */}
                            <motion.div
                                className="group relative"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                                    <div className="w-16 h-16 bg-tertiary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-tertiary/20 transition-colors duration-300">
                                        <span className="text-3xl font-bold text-tertiary">01</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Initial Consultation</h3>
                                    <p className="text-gray-600">We begin by understanding your needs, preferences, and budget to create a tailored property search strategy.</p>
                                </div>
                                <div className="absolute -right-4 top-1/2 w-8 h-8 bg-tertiary rounded-full hidden lg:flex items-center justify-center z-10 -translate-y-1/2">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div
                                className="group relative"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                                        <span className="text-3xl font-bold text-primary">02</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Property Search</h3>
                                    <p className="text-gray-600">Our experts search and shortlist properties that match your criteria, saving you time and effort.</p>
                                </div>
                                <div className="absolute -right-4 top-1/2 w-8 h-8 bg-primary rounded-full hidden lg:flex items-center justify-center z-10 -translate-y-1/2">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div
                                className="group relative"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                                    <div className="w-16 h-16 bg-tertiary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-tertiary/20 transition-colors duration-300">
                                        <span className="text-3xl font-bold text-tertiary">03</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Property Tours</h3>
                                    <p className="text-gray-600">Schedule viewings of selected properties with our experienced agents who will guide you through each option.</p>
                                </div>
                            </motion.div>

                            {/* Step 4 */}
                            <motion.div
                                className="group relative"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                                        <span className="text-3xl font-bold text-primary">04</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Negotiation</h3>
                                    <p className="text-gray-600">We handle all negotiations to ensure you get the best possible deal and terms for your chosen property.</p>
                                </div>
                                <div className="absolute -right-4 top-1/2 w-8 h-8 bg-primary rounded-full hidden lg:flex items-center justify-center z-10 -translate-y-1/2">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </motion.div>

                            {/* Step 5 */}
                            <motion.div
                                className="group relative"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                                    <div className="w-16 h-16 bg-tertiary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-tertiary/20 transition-colors duration-300">
                                        <span className="text-3xl font-bold text-tertiary">05</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Documentation</h3>
                                    <p className="text-gray-600">Our team manages all legal documentation and paperwork, ensuring a smooth and compliant transaction process.</p>
                                </div>
                                <div className="absolute -right-4 top-1/2 w-8 h-8 bg-tertiary rounded-full hidden lg:flex items-center justify-center z-10 -translate-y-1/2">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </motion.div>

                            {/* Step 6 */}
                            <motion.div
                                className="group relative"
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <div className="bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                                        <span className="text-3xl font-bold text-primary">06</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Final Handover</h3>
                                    <p className="text-gray-600">Complete the transaction and receive ongoing support for a seamless transition to your new property.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Stats Section with Animation */}
            <motion.section 
                className="py-24 bg-gray-50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <motion.div 
                            className="text-center p-8 bg-white rounded-2xl shadow-sm"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="w-16 h-16 bg-tertiary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl font-bold text-tertiary">10+</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Years Experience</h3>
                            <p className="text-gray-600 mt-2">Industry Excellence</p>
                        </motion.div>

                        <motion.div 
                            className="text-center p-8 bg-white rounded-2xl shadow-sm"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl font-bold text-primary">500+</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Properties Sold</h3>
                            <p className="text-gray-600 mt-2">Happy Clients</p>
                        </motion.div>

                        <motion.div 
                            className="text-center p-8 bg-white rounded-2xl shadow-sm"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="w-16 h-16 bg-tertiary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl font-bold text-tertiary">98%</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Client Satisfaction</h3>
                            <p className="text-gray-600 mt-2">Trust & Quality</p>
                        </motion.div>

                        <motion.div 
                            className="text-center p-8 bg-white rounded-2xl shadow-sm"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl font-bold text-primary">24/7</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Support</h3>
                            <p className="text-gray-600 mt-2">Always Available</p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            

            {/* Enhanced CTA Section */}
            <section className="py-24 relative before:content-[''] before:absolute before:inset-0 before:opacity-5 before:bg-[radial-gradient(circle_at_2px_2px,#6b7280_2px,transparent_0)] before:bg-[length:20px_20px]">
                {/* Content Container */}
                <div className="container mx-auto px-4 relative">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        {/* Left Image Section */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                                <img 
                                    src={image2} 
                                    alt="Luxury Property Showcase" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Enhanced Decorative Elements */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/30 rounded-full blur-3xl"></div>
                            <div className="absolute -top-6 -left-6 w-40 h-40 bg-tertiary/30 rounded-full blur-3xl"></div>
                        </div>

                        {/* Right Content Card */}
                        <div className="w-full md:w-1/2">
                            <div className="bg-gradient-to-br from-primary/80 via-primary/70 to-tertiary/80 backdrop-blur-lg rounded-2xl p-8 md:p-10 shadow-xl border border-white/10 relative overflow-hidden">
                                {/* Card Background Pattern */}
                                <div className="absolute inset-0">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#ffffff10_1px,transparent_8px)] bg-[length:24px_24px]"></div>
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                                </div>
                                
                                <div className="relative z-10">
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                        Ready for Your Dream Home?
                                    </h2>
                                    <p className="text-white/90 text-lg mb-8">
                                        Transform your vision into reality. Our expert team is here to guide you through every step of finding your perfect luxury property.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button className="bg-white text-primary font-semibold py-4 px-8 rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-white/20 hover:shadow-2xl transform hover:-translate-y-1">
                                            Start Your Journey
                                        </button>
                                        <button className="bg-black/20 text-white font-semibold py-4 px-8 rounded-xl hover:bg-black/30 transition-all duration-300 border border-white/20 hover:border-white/30 hover:shadow-lg">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;