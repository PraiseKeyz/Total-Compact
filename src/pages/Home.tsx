import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import hero1 from '../assets/heroimage1.jpg'
import hero2 from '../assets/heroimage2.jpg'
import heroBg from '../assets/herrosectionbacground.jpg'

const HomePage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        hero1,
        hero2,
        hero1
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <motion.section
                className="relative flex min-h-[85vh]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Left Hero Section with Background */}
                <div className="md:w-[55%] w-full relative before:content-[''] before:absolute before:inset-0 before:bg-cover before:bg-center before:opacity-20 before:z-0 flex items-center px-12"
                    style={{
                        "--bg-image": `url(${heroBg})`
                    } as React.CSSProperties}>
                    <div className="relative z-10">
                        <motion.h1 
                            className="text-5xl font-bold mb-6"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Find Your Dream Home
                        </motion.h1>
                        <motion.p 
                            className="text-xl text-gray-600 mb-8"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Discover the perfect property that matches your lifestyle and dreams
                        </motion.p>
                        <div className="flex gap-3">
                        <motion.button 
                            className="bg-tertiary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            About Us
                        </motion.button>
                        <motion.button 
                            className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            Projects
                        </motion.button>
                        </div>
                    </div>
                </div>

                {/* Right Hero Section with Changing Images */}
                <div className="w-[45%] hidden md:block relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-20 before:w-40 before:h-full before:bg-tertiary before:transform before:skew-x-12 before:z-10">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            animate={{ 
                                opacity: currentImage === index ? 1 : 0,
                                scale: currentImage === index ? 1 : 1.1
                            }}
                            transition={{ duration: 1 }}
                        >
                            <img 
                                src={img} 
                                alt={`Hero image ${index + 1}`} 
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <motion.section className="container mx-auto flex flex-col md:flex-row min-h-[85vh] py-8 px-4 items-center gap-8">
                {/* Images Stack */}
                <div className="relative w-full md:w-1/2 h-[500px]">
                    <img 
                        src={hero1} 
                        className="absolute top-0 left-0 w-[80%] h-[400px] rounded-2xl object-cover shadow-xl z-10" 
                        alt="Property showcase 1" 
                    />
                    <img 
                        src={hero2} 
                        className="absolute top-20 left-20 w-[80%] h-[400px] rounded-2xl object-cover shadow-xl" 
                        alt="Property showcase 2" 
                    />
                    
                    {/* Experience Box */}
                    <motion.div 
                        className="absolute -right-4 top-1/2 transform -translate-y-1/2 rounded-3xl p-8 bg-tertiary text-white shadow-2xl z-20 hover:scale-105 transition-transform duration-300"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex flex-col items-center">
                            <span className="text-5xl font-bold mb-2">12</span>
                            <span className="text-lg font-medium">Years</span>
                            <span className="text-lg font-medium">Experience</span>
                        </div>
                        <div className="absolute -z-10 w-full h-full top-0 left-0 bg-white/10 rounded-3xl blur-sm"></div>
                    </motion.div>
                </div>

                {/* Company Description */}
                <div className="w-full md:w-1/2">
                <div className="w-full md:w-1/2">
                    <motion.div 
                        className="flex items-center space-x-3 bg-tertiary/5 rounded-full px-6 py-3 mb-6 w-fit"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3">
                            <span className="h-2.5 w-2.5 bg-tertiary rounded-full animate-pulse"></span>
                            <span className="text-tertiary font-semibold tracking-wide text-sm">WHO WE ARE</span>
                        </div>
                    </motion.div>
                </div>
                    <motion.h2 
                        className="text-4xl font-bold mb-6 text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Building Dreams Into Reality
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-gray-600 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        With over a decade of experience in real estate development, we've helped countless families find their perfect homes. Our commitment to quality and customer satisfaction has made us a trusted name in the industry.
                    </motion.p>
                    <motion.button 
                        className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        Learn More
                    </motion.button>
                </div>
            </motion.section>


            <motion.section className="bg-gray-200 p-12">
                <div className="container mx-auto">
                <motion.div 
                        className="flex items-center space-x-3 bg-tertiary/5 rounded-full px-6 py-3 mb-6 w-fit"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                    <div className="flex items-center gap-3">
                        <span className="h-2.5 w-2.5 bg-tertiary rounded-full animate-pulse"></span>
                        <span className="text-tertiary font-semibold tracking-wide text-sm">OUR SERVICES</span>
                    </div> 
                </motion.div>
                    <motion.h2 
                        className="text-4xl font-bold mb-12 text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        We provide the best service for you...
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature Box 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="relative group"
                        >
                            <img 
                                src={hero1} 
                                alt="Features image 1" 
                                className="w-full h-[300px] object-cover rounded-2xl" 
                            />
                            <div className="absolute bottom-4 left-4 right-4 bg-white p-6 rounded-xl shadow-lg transition-all duration-300 group-hover:bg-tertiary">
                                <div className="absolute -top-8 right-4 w-16 h-16 bg-tertiary text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-white group-hover:text-tertiary">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-white">Property Management</h3>
                                <p className="text-gray-600 group-hover:text-white/90">Professional management services for your real estate investments.</p>
                            </div>
                        </motion.div>

                        {/* Feature Box 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="relative group"
                        >
                            <img 
                                src={hero2} 
                                alt="Features image 2" 
                                className="w-full h-[300px] object-cover rounded-2xl" 
                            />
                            <div className="absolute bottom-4 left-4 right-4 bg-white p-6 rounded-xl shadow-lg transition-all duration-300 group-hover:bg-primary">
                                <div className="absolute -top-8 right-4 w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-white group-hover:text-primary">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-white">Expert Consultation</h3>
                                <p className="text-gray-600 group-hover:text-white/90">Get expert advice from our experienced real estate consultants.</p>
                            </div>
                        </motion.div>

                        {/* Feature Box 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="relative group"
                        >
                            <img 
                                src={hero1} 
                                alt="Features image 3" 
                                className="w-full h-[300px] object-cover rounded-2xl" 
                            />
                            <div className="absolute bottom-4 left-4 right-4 bg-white p-6 rounded-xl shadow-lg transition-all duration-300 group-hover:bg-secondary">
                                <div className="absolute -top-8 right-4 w-16 h-16 bg-secondary text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-white group-hover:text-secondary">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1v2h-1v-2zm1-2V9h-1v2h1zm-5-2H7v2h6V9zm2 0h1v2h-1V9zm1-2V7h-1v2h1zm-5-2H7v2h6V7zm2 0h1v2h-1V7zm1-2V5h-1v2h1zm-5-2H7v2h6V5z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-white">Property Valuation</h3>
                                <p className="text-gray-600 group-hover:text-white/90">Accurate property valuation services for your real estate.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section className="py-16 relative before:content-[''] before:absolute before:inset-0 before:opacity-5 before:bg-[radial-gradient(circle_at_2px_2px,#6b7280_2px,transparent_0)] before:bg-[length:20px_20px]">
                <div className="container mx-auto px-4">
                <motion.div 
                        className="flex items-center space-x-3 bg-tertiary/5 rounded-full px-6 py-3 mb-6 w-fit"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                    <div className="flex items-center gap-3 ">
                        <span className="h-2.5 w-2.5 bg-tertiary rounded-full animate-pulse"></span>
                        <span className="text-tertiary font-semibold tracking-wide text-sm">PROJECT GALLERY</span>
                    </div>
                    </motion.div>
                    <motion.h2 
                        className="text-4xl font-bold mb-12 text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Our Projects
                    </motion.h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Luxury Villa Complex",
                                location: "Beverly Hills, CA",
                                image: hero1,
                                price: "$5.2M"
                            },
                            {
                                title: "Modern Apartments",
                                location: "Downtown Manhattan, NY",
                                image: hero2,
                                price: "$2.8M"
                            },
                            {
                                title: "Seaside Residences",
                                location: "Miami Beach, FL",
                                image: hero1,
                                price: "$3.5M"
                            }
                        ].map((project, index) => (
                            <motion.div
                                key={index}
                                className="relative group rounded-2xl overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                            >
                                <div className="aspect-[4/5] relative">
                                    <img 
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-6 right-6 w-[45%] bg-white/95 p-4 rounded-xl shadow-lg">
                                        <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center text-gray-600 text-sm mb-2">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span className="line-clamp-1">{project.location}</span>
                                        </div>
                                        <div className="text-tertiary font-semibold">
                                            {project.price}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <motion.section className="bg-white py-16">
                <div className="container mx-auto px-4">
                <motion.div 
                        className="flex items-center space-x-3 bg-tertiary/5 rounded-full px-6 py-3 mb-6 w-fit"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                    <div className="flex items-center gap-3">
                        <span className="h-2.5 w-2.5 bg-tertiary rounded-full animate-pulse"></span>
                        <span className="text-tertiary font-semibold tracking-wide text-sm">WHY CHOOSE US</span>
                    </div>
                    </motion.div>
                    <motion.h2 
                        className="text-4xl font-bold mb-12 text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        The Right Choice for Your Real Estate Journey
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Trusted Experience",
                                description: "With over 12 years of excellence in real estate, we've built a reputation for delivering exceptional results.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Client-Focused Approach",
                                description: "Your dreams and satisfaction are our top priority. We tailor our services to meet your unique needs.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Innovative Solutions",
                                description: "We leverage cutting-edge technology and market insights to provide you with the best opportunities.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                )
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                            >
                                <div className="w-16 h-16 bg-tertiary/10 rounded-2xl flex items-center justify-center mb-6 text-tertiary">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-800">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        className="mt-16 bg-tertiary/5 p-8 rounded-2xl text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to Start Your Journey?</h3>
                        <p className="text-gray-600 mb-6">Let us help you find the perfect property that matches your dreams.</p>
                        <button className="bg-tertiary text-white px-8 py-3 rounded-lg hover:bg-tertiary/90 transition-colors">
                            Contact Us Today
                        </button>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left side with image */}
                        <div className="hidden md:block md:w-1/2 relative before:content-[''] before:absolute before:inset-0 before:bg-cover before:bg-center before:opacity-90 before:z-0 min-h-[400px] rounded-2xl overflow-hidden"
                            style={{
                                backgroundImage: `url(${hero1})`
                            }}>
                        </div>

                        {/* Right side with testimonials */}
                        <div className="w-full md:w-1/2 bg-secondary/5 rounded-2xl p-8 relative before:content-[''] before:absolute before:inset-0 before:opacity-5 before:bg-[radial-gradient(circle_at_2px_2px,#6b7280_2px,transparent_0)] before:bg-[length:20px_20px]">
                        <motion.div 
                        className="flex items-center space-x-3 bg-tertiary/5 rounded-full px-6 py-3 mb-6 w-fit"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                            <div className="flex items-center gap-3 ">
                                <span className="h-2.5 w-2.5 bg-tertiary rounded-full animate-pulse"></span>
                                <span className="text-tertiary font-semibold tracking-wide text-sm">TESTIMONIALS</span>
                            </div>
                        </motion.div>
                            <motion.h2 
                                className="text-4xl font-bold mb-8 text-gray-800"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                What Our Clients Say
                            </motion.h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        text: "Working with this team was an absolute pleasure. They found us our dream home within our budget.",
                                        author: "Praise Adebayo",
                                        position: "Homeowner"
                                    },
                                    {
                                        text: "Professional, efficient, and truly caring about their clients' needs. Highly recommended!",
                                        author: "Samuel Success",
                                        position: "Property Investor"
                                    }
                                ].map((testimonial, index) => (
                                    <motion.div 
                                        key={index}
                                        className="bg-white p-6 rounded-xl relative pl-8"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                    >
                                        {/* Primary color line */}
                                        <div className="absolute left-0 top-6 bottom-6 w-1 bg-primary rounded-full"></div>
                                        
                                        <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                                        <div>
                                            <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                                            <span className="text-sm text-gray-500">{testimonial.position}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default HomePage;
