import { motion } from 'framer-motion'
import image1 from '../assets/service.image1.jpg'

const serviceData = [
    {
        id: 1,
        href: "real-estate",
        title: "Real Estate Buying & Selling",
        description: "Expert guidance through every step of your real estate journey, ensuring seamless transactions and optimal value for your property investments. Our comprehensive real estate services cater to both buyers and sellers, providing personalized solutions that meet your specific needs. With our deep market knowledge and extensive network, we help you make informed decisions and achieve your real estate goals efficiently.",
        benefits: [
            "Access to exclusive property listings",
            "Professional market analysis and valuation",
            "Expert negotiation support",
            "Complete transaction management",
            "Thorough property inspections",
            "Detailed market insights"
        ],
        process: [
            "Initial consultation and requirement analysis",
            "Property search and shortlisting",
            "Property viewings and assessment",
            "Negotiation and offer management",
            "Documentation and legal review",
            "Transaction completion and handover"
        ],
        image: image1
    },
    {
        id: 2,
        href: "construction-renovation",
        title: "Construction & Renovation",
        description: "From groundbreaking to finishing touches, our construction and renovation services deliver high-quality craftsmanship and innovative solutions tailored to your vision. Whether you're building from scratch or upgrading existing spaces, we ensure precision, durability, and style at every stage of the project.",
        benefits: [
            "Customized architectural planning",
            "End-to-end project management",
            "Use of high-quality materials",
            "Compliance with safety and building standards",
            "On-time and within-budget delivery",
            "Sustainable and energy-efficient designs"
        ],
        process: [
            "Project consultation and feasibility assessment",
            "Design planning and budgeting",
            "Permit acquisition and approvals",
            "Construction or renovation execution",
            "Regular progress updates and quality checks",
            "Final inspection and client handover"
        ],
        image: image1
    },
    {
        id: 3,
        href: "property-management",
        title: "Property Management",
        description: "Our property management services are designed to protect your investment and maximize its returns. From tenant sourcing to maintenance, we handle all aspects with professionalism and efficiency, giving you peace of mind and freeing up your time.",
        benefits: [
            "Reliable tenant screening and placement",
            "Timely rent collection and financial reporting",
            "Regular property inspections and maintenance",
            "Handling of tenant inquiries and issues",
            "Legal compliance and lease management",
            "Vacancy reduction strategies"
        ],
        process: [
            "Property evaluation and onboarding",
            "Marketing and tenant acquisition",
            "Lease drafting and execution",
            "Ongoing management and maintenance",
            "Monthly reporting and updates",
            "Renewals or tenant transition handling"
        ],
        image: image1
    }
    
    
]

const Services = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-primary/10 py-24">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
                    <p className="text-xl text-gray-600 max-w-2xl">Comprehensive solutions for all your real estate and construction needs, delivered with expertise and dedication.</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
            </div>

            {/* Services List */}
            <div className="py-16">
                {serviceData.map((service, index) => (
                    <motion.section
                        key={service.id}
                        id={service.href}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="py-16 border-b border-gray-200 last:border-b-0"
                    >
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col lg:flex-row gap-12">
                                {/* Left Content Column */}
                                <div className="lg:w-3/5">
                                    <h2 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h2>
                                    <div className="prose prose-lg max-w-none mb-8">
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>

                                    {/* Benefits Section */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {service.benefits.map((benefit, index) => (
                                                <div key={index} className="flex items-start">
                                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm mr-2">
                                                        {index + 1}
                                                    </span>
                                                    <p className="text-gray-600 text-sm">{benefit}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Process Section */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">How It Works</h3>
                                        <div className="space-y-3">
                                            {service.process.map((step, index) => (
                                                <div key={index} className="flex items-start">
                                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm mr-3">
                                                        {index + 1}
                                                    </div>
                                                    <p className="text-gray-600 text-sm">{step}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                                            Request Service
                                        </button>
                                        <button className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary/10 transition-colors">
                                            Learn More
                                        </button>
                                    </div>
                                </div>

                                {/* Right Image Column */}
                                <div className="hidden md:block lg:w-2/5">
                                    <div className="">
                                        <div className="aspect-[1/1] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                                            <img 
                                                src={service.image} 
                                                alt={service.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                ))}
            </div>

            {/* Global CTA */}
            <div className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Contact us today to discuss your project needs and discover how we can help bring your vision to life.</p>
                    <button className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors">
                        Contact Us Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Services