import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import image1 from '../assets/partnership.image1.jpg'
import image2 from '../assets/partnership.image2.jpg'
import image3 from '../assets/partnership.image3.jpg'

const Partnerships = () => {
    const investmentOptions = [
        {
            title: 'Land Projects',
            description: 'Secure fast growing land properties (through our Landee platform or estate schemes',
            timeframe: '2-5 years'
        },
        {
            title: 'Fix & Flip Projects',
            description: 'We acquire distressed properties, renovate them, and resell at market value',
            minimumCommitment: '$250,000',
            riskLevel: 'Moderate',
            expectedROI: '20% per investment cycle',
            timeframe: '3-7 years'
        },
        {
            title: 'Buy-to-Build Projects',
            description: 'Invest in buildings we construct or redevelop from scratch',
            minimumCommitment: '$50,000',
            riskLevel: 'Low to Moderate',
            expectedROI: '20% per investment cycle',
            timeframe: '1-3 years'
        }
    ];

    const investmentSteps = [
        'You partner with us',
        'We manage the rist',
        'You earn 20% returns'
    ];

    return (
        <div className="w-full ">
<div className="relative h-[60vh] w-full flex items-center bg-black/60 bg-blend-overlay" 
    style={{ 
        backgroundImage: `url(${image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}
>
    <div className="max-w-7xl w-full mx-auto px-4 text-white">
        <div className="max-w-2xl">
            <motion.h1
                className="text-5xl font-bold mb-4 text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Invest in Total Compact Limited
            </motion.h1>
            <motion.p
                className="text-xl mb-8 text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Empowering infrastructure, enriching value.
            </motion.p>
        </div>
    </div>
</div>

<motion.section
            className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className='container mx-auto px-6 lg:px-10 space-y-20 relative'>
                <div className="text-center mb-16">
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className="h-2.5 w-2.5 bg-tertiary rounded-full animate-pulse"></span>
                        <span className="text-tertiary font-semibold tracking-wider text-sm uppercase">PARTNERSHIP</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">Investment & Partnership Program</h2>
                    <div className="w-40 h-1 bg-tertiary mx-auto rounded-full mb-8 transform transition-all duration-300 hover:w-48"></div>
                </div>
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
                                src={image2}
                                alt="Our Journey"
                                className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
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
                        <div className='space-y-6'>
                            <h3 className='text-2xl font-semibold text-gray-900'>Invest. Build. Earn. With Zero Stress</h3>
                            <p className="text-gray-600 leading-relaxed">
                                At Total Compact, we believe that real estate should be a wealth-building tool for everyone not just developers. Our Investment & Partnership Program offers you the opportunity to earn consistent returns by partnering with us on real estate projects while we do the heavy lifting.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We stand as a beacon of excellence in construction, interior design, and renovations. With a proven track record of successful projects and sustainable growth, we offer diverse investment opportunities that align with your financial goals.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mt-8">
                                <div className="border-l-4 border-tertiary pl-4 py-3 bg-white/50 rounded-r-lg hover:bg-white/80 transition-all duration-300">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-tertiary rounded-full"></span>
                                        Our Process
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">We transform undervalued properties into profitable investments through strategic renovation and development.</p>
                                </div>
                                <div className="border-l-4 border-primary pl-4 py-3 space-y-3 bg-white/50 rounded-r-lg hover:bg-white/80 transition-all duration-300">
                                    <div className="flex items-center gap-3 group cursor-pointer">
                                        <div className="w-2.5 h-2.5 rounded-full bg-primary group-hover:scale-110 transition-transform"></div>
                                        <div>
                                            <p className="text-gray-800 text-sm font-medium">Your Role: Investment Partner</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 group cursor-pointer">
                                        <div className="w-2.5 h-2.5 rounded-full bg-primary group-hover:scale-110 transition-transform"></div>
                                        <div>
                                            <p className="text-gray-800 text-sm font-medium">Our Role: Project Execution</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 group cursor-pointer">
                                        <div className="w-2.5 h-2.5 rounded-full bg-primary group-hover:scale-110 transition-transform"></div>
                                        <div>
                                            <p className="text-gray-800 text-sm font-medium">Result: Guaranteed Returns</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
                <motion.div 
                                        initial={{ y: +50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                className="hidden lg:block absolute top-180 bottom-0 left-1/2 w-1 h-80 bg-primary"></motion.div>
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold text-center mb-6">Investment Opportunities</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                            {investmentOptions.map((option, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
                                    <h4 className="text-lg font-semibold text-tertiary mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span>
                                        {option.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{option.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ x: +50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-semibold text-center mb-6">Impact & Returns</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center">
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-left">
                                <h4 className="text-lg font-semibold text-tertiary mb-3">Financial Returns</h4>
                                <p className="text-sm text-gray-600">Our projects have historically delivered returns ranging from 8-30% annually</p>
                                <small className="text-xs text-gray-500 block mt-3">Past performance does not guarantee future results</small>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-left">
                                <h4 className="text-lg font-semibold text-tertiary mb-3">Social Impact</h4>
                                <p className="text-sm text-gray-600">Creating jobs, improving infrastructure, and contributing to community development</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-left">
                                <h4 className="text-lg font-semibold text-tertiary mb-3">Sustainability</h4>
                                <p className="text-sm text-gray-600">Committed to eco-friendly construction practices and sustainable development</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-10">
                    <h2 className="text-3xl font-bold text-center">How It Works</h2>
                    <div className="w-24 h-1 bg-tertiary mx-auto rounded-full mb-12"></div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="absolute left-0 top-0 w-1 bg-primary/20 h-full rounded-full">
                                <div className="sticky top-20 w-full bg-primary h-1/3 rounded-full transition-all duration-500"></div>
                            </div>
                            
                            <div className="space-y-3 pl-8">
                                {investmentSteps.map((step, index) => (
                                    <div key={index} className="relative group">
                                        <div className="absolute -left-8 top-0 w-4 h-4 bg-white border-2 border-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-primary font-semibold">Step {index + 1}</span>
                                                <div className="h-px flex-1 bg-gray-200"></div>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">{step}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <motion.div
                            className="relative hidden md:block"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
                                <img 
                                    src={image3} 
                                    alt="Investment Process" 
                                    className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-tertiary rounded-full z-0 opacity-20"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full z-0 opacity-20"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-10 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl font-bold text-gray-900">Ready to Start Your Investment Journey?</h2>
                            <p className="text-lg text-gray-600 mb-8">Join our network of successful investors and be part of our next project</p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button className="px-8 py-4 bg-tertiary text-white rounded-lg hover:bg-tertiary/90 transition-colors duration-300 ">
                                <Link to='/contact' className="flex items-center gap-2 group">
                                <span>Schedule a Consultation</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
                
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full"></div>
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-tertiary/5 rounded-full"></div>
            </section>
        </div>
    );
};

export default Partnerships;