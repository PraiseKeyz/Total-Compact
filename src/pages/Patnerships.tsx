import { motion } from 'framer-motion';
import image1 from '../assets/partnership.image1.jpg'

const Partnerships = () => {
    const investmentOptions = [
        {
            title: 'Direct Capital Investment',
            description: 'Support large-scale projects',
            minimumCommitment: '$100,000',
            riskLevel: 'Moderate to High',
            expectedROI: '15-25% annually',
            timeframe: '2-5 years'
        },
        {
            title: 'Real Estate Joint Ventures',
            description: 'Partner on new property developments',
            minimumCommitment: '$250,000',
            riskLevel: 'Moderate',
            expectedROI: '12-20% annually',
            timeframe: '3-7 years'
        },
        {
            title: 'Material & Equipment Partnership',
            description: 'Lease/supply returns on tools & machines',
            minimumCommitment: '$50,000',
            riskLevel: 'Low to Moderate',
            expectedROI: '8-15% annually',
            timeframe: '1-3 years'
        },
        {
            title: 'Equity Stake Options',
            description: 'For qualified investors only',
            minimumCommitment: '$500,000',
            riskLevel: 'High',
            expectedROI: '20-30% annually',
            timeframe: '5+ years'
        }
    ];

    const projectPipeline = [
        {
            type: 'Residential',
            description: 'Luxury apartment complex in prime location',
            timeline: 'Q2 2024 - Q4 2025',
            value: '$15M'
        },
        {
            type: 'Commercial',
            description: 'Modern office space development',
            timeline: 'Q3 2024 - Q2 2026',
            value: '$25M'
        },
        {
            type: 'Renovation',
            description: 'Historic building restoration',
            timeline: 'Q1 2024 - Q4 2024',
            value: '$5M'
        }
    ];

    const investmentSteps = [
        'Fill out interest form',
        'Receive our investment brochure',
        'Schedule a strategy call',
        'Review terms',
        'Sign agreement & begin partnership'
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

            <section className="py-16 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Why Invest in Total Compact?</h2>
                <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
                    Total Compact Limited stands as a beacon of excellence in construction,
                    interior design, and renovations. With a proven track record of successful
                    projects and sustainable growth, we offer diverse investment opportunities
                    that align with your financial goals.
                </p>

                <h3 className="text-2xl font-semibold text-center mb-8">Investment Opportunities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {investmentOptions.map((option, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                            <h4 className="text-xl font-semibold text-tertiary mb-4">{option.title}</h4>
                            <p className="text-gray-600 mb-4">{option.description}</p>
                            <ul className="space-y-2 text-gray-600">
                                <li>Minimum: {option.minimumCommitment}</li>
                                <li>Risk Level: {option.riskLevel}</li>
                                <li>Expected ROI: {option.expectedROI}</li>
                                <li>Timeframe: {option.timeframe}</li>
                            </ul>
                        </div>
                    ))}
                </div>

                <button className="block mx-auto px-8 py-4 bg-tertiary hover:bg-tertiary/90 text-white rounded-lg transition-colors">
                    Request Investment Deck
                </button>
            </section>

            <section className="py-16 bg-gray-50 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Project Pipeline</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projectPipeline.map((project, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                            <h4 className="text-xl font-semibold text-tertiary mb-4">{project.type}</h4>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="space-y-2 text-gray-600">
                                <p>Timeline: {project.timeline}</p>
                                <p>Value: {project.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Impact & Returns</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-8">
                        <h4 className="text-xl font-semibold text-tertiary mb-4">Financial Returns</h4>
                        <p className="text-gray-600">Our projects have historically delivered returns ranging from 8-30% annually*</p>
                        <small className="text-gray-500 block mt-4">*Past performance does not guarantee future results</small>
                    </div>
                    <div className="p-8">
                        <h4 className="text-xl font-semibold text-tertiary mb-4">Social Impact</h4>
                        <p className="text-gray-600">Creating jobs, improving infrastructure, and contributing to community development</p>
                    </div>
                    <div className="p-8">
                        <h4 className="text-xl font-semibold text-tertiary mb-4">Sustainability</h4>
                        <p className="text-gray-600">Committed to eco-friendly construction practices and sustainable development</p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {investmentSteps.map((step, index) => (
                        <div key={index} className="text-center">
                            <div className="w-10 h-10 bg-tertiary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-tertiary font-bold">{index + 1}</span>
                            </div>
                            <p className="text-gray-600">{step}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 text-center">
                <h2 className="text-3xl font-bold mb-8">Ready to Partner?</h2>
                <button className="px-8 py-4 bg-tertiary hover:bg-tertiary/90 text-white rounded-lg transition-colors">
                    Book a Call with Our Investment Lead
                </button>
            </section>
        </div>
    );
};

export default Partnerships;