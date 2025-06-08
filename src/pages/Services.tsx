import { useState } from 'react'
import { motion } from 'framer-motion'
import image1 from '../assets/service.image1.jpg'
import image2 from '../assets/service.image2.jpg'
import image3 from '../assets/service.image3.jpg'
import image4 from '../assets/service.image4.jpg'
import serviceFood from '../assets/service.food.jpg'
import serviceSoftware from '../assets/service.soft.jpg'
import serviceConsult from '../assets/service.consult.jpg'
import serviceCare from '../assets/service.care.jpg'
import serviceMotors from '../assets/service.car.jpg'
import serviceFarm from '../assets/service.farm.jpg'
import serviceGraphics from '../assets/service.graphics.jpg'
import { Link } from 'react-router-dom'
import ServiceModal from '../components/ServiceModal'

const serviceData = [
        {
          id: 1,
          href: "tc-real-estate",
          title: "TC Real Estate",
          description: "Delivering strategic real estate solutions with a focus on value creation and long-term returns. TC Real Estate leverages market intelligence, professional insights, and networked partnerships to support clients in acquisition, sales, and asset optimization.",
          offerings: [
            "Property Sales & Leasing",
            "Real Estate Investment Advisory",
            "Land Acquisition & Allocation",
            "Property Valuation & Due Diligence",
            "Facility Management Services"
          ],
          targetAudience: [
            "Property investors",
            "Real estate developers",
            "Private buyers/sellers",
            "Estate agencies"
          ],
          image: image2
        },
        {
          id: 2,
          href: "building-construction",
          title: "Building & Construction",
          description: "From concept to completion, we provide reliable and innovative construction services tailored to your project’s needs. Our teams ensure architectural integrity, structural safety, and delivery excellence across all phases of development.",
          offerings: [
            "Residential & Commercial Building",
            "Architectural Design & Engineering",
            "Project Supervision & Management",
            "Renovation & Remodeling",
            "Interior Finishing & Landscaping"
          ],
          targetAudience: [
            "Property developers",
            "Government agencies",
            "Private homeowners",
            "Contracting firms"
          ],
          image: image1
        },
        {
          id: 3,
          href: "consultancy-training",
          title: "Consultancy & Training",
          description: "Empowering businesses and professionals through expert consultancy and tailored training programs. Our focus is on delivering practical knowledge, strategic insights, and transformative learning experiences across industries.",
          offerings: [
            "Business Strategy & Advisory",
            "Workshops & Corporate Training",
            "Human Capital Development",
            "Leadership & Team Building",
            "Change Management & Compliance"
          ],
          targetAudience: [
            "Companies & institutions",
            "Startups & SMEs",
            "Public sector teams",
            "Professionals & executives"
          ],
          cta: "Schedule a Consultation",
          image: serviceConsult
        },
        {
          id: 4,
          href: "tc-technologies",
          title: "TC Technologies",
          description: "Driving digital transformation through innovative technology solutions. TC Technologies delivers cutting-edge IT infrastructure, smart systems, and digital platforms that power growth, efficiency, and resilience.",
          offerings: [
            "IT Infrastructure & Network Setup",
            "Smart Tech Systems (IoT, AI)",
            "Custom Software Integration",
            "Cybersecurity Solutions",
            "Tech Support & Maintenance"
          ],
          targetAudience: [
            "Enterprises & startups",
            "Government & NGOs",
            "Retail & education sectors"
          ],
          image: image4
        },
        {
          id: 5,
          href: "software-project-management",
          title: "Software & Project Management",
          description: "We build scalable, user-centric software solutions and manage projects with precision. Our approach combines agile methodologies, strategic oversight, and seamless execution to ensure your ideas reach their full potential.",
          offerings: [
            "Custom Software Development",
            "Product Lifecycle Management",
            "Agile Project Delivery",
            "Business Process Automation",
            "IT Project Supervision"
          ],
          targetAudience: [
            "Tech startups",
            "Enterprise teams",
            "Project consultants",
            "SaaS product owners"
          ],
          image: serviceSoftware
        },
        {
          id: 6,
          href: "tc-farm",
          title: "TC Farm",
          description: "Committed to sustainable agriculture and food security, TC Farm cultivates quality produce and livestock through eco-conscious farming practices, innovation, and responsible agribusiness operations.",
          offerings: [
            "Crop Production & Greenhouse Farming",
            "Livestock Rearing",
            "Organic & Agro Produce",
            "AgroTech Integration",
            "Agri-business Consultancy"
          ],
          targetAudience: [
            "Distributors & food suppliers",
            "Government/NGO food projects",
            "Agropreneurs",
            "Local communities"
          ],
          cta: "Partner with TC Farm",
          image: serviceFarm
        },
        {
          id: 7,
          href: "tc-graphics",
          title: "TC Graphics",
          description: "Where ideas meet visuals. TC Graphics offers professional design and branding solutions that tell compelling stories, reinforce identity, and drive engagement across all mediums.",
          offerings: [
            "Brand Identity Design",
            "Print & Digital Media Design",
            "Packaging & Merchandise Graphics",
            "Motion Graphics & Animations",
            "Visual Content for Marketing"
          ],
          targetAudience: [
            "Brands & startups",
            "Corporate marketing teams",
            "NGOs & creatives",
            "Event planners"
          ],
          image: serviceGraphics
        },
        {
          id: 8,
          href: "tc-care-fashion",
          title: "TC Care & Fashion",
          description: "Blending personal care and modern fashion to promote wellness and confidence. Our offerings reflect quality, creativity, and a commitment to empowering lifestyles with elegance and authenticity.",
          offerings: [
            "Beauty & Skincare Products",
            "Health & Wellness Essentials",
            "Fashion Apparel & Accessories",
            "Style Consulting",
            "Unisex Fashion Retail"
          ],
          targetAudience: [
            "Fashion lovers",
            "Self-care enthusiasts",
            "Young professionals",
            "Retailers & salons"
          ],
          image: serviceCare
        },
        {
          id: 9,
          href: "tc-foods",
          title: "TC Foods",
          description: "Delivering fresh, quality foods and catering solutions that nourish communities. From farm-to-table products to dynamic food services, TC Foods blends nutrition with excellence.",
          offerings: [
            "Food Processing & Packaging",
            "Bulk Ingredient Supply",
            "Catering Services & Meal Plans",
            "Healthy Snack Production",
            "Restaurant Partnerships"
          ],
          targetAudience: [
            "Event organizers",
            "Supermarkets & stores",
            "Institutions & schools",
            "Households"
          ],
          image: serviceFood
        },
        {
          id: 10,
          href: "tc-motors",
          title: "TC Motors",
          description: "Your trusted mobility partner. TC Motors provides reliable automotive solutions—from sales and maintenance to fleet services—tailored for performance, comfort, and safety on the road.",
          offerings: [
            "New & Pre-owned Vehicle Sales",
            "Car Servicing & Repairs",
            "Fleet Leasing & Management",
            "Vehicle Customization",
            "Auto Parts & Accessories"
          ],
          targetAudience: [
            "Private car owners",
            "Logistics companies",
            "Corporate fleets",
            "Transport agencies"
          ],
          image: serviceMotors
        }  
]

const Services = () => {
    const [selectedService, setSelectedService] = useState<any>(null);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[60vh] py-24 bg-black/60 bg-blend-overlay" 
                 style={{ 
                    backgroundImage: `url(${image3})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                 }}
            >
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
                    <p className="text-xl text-white/90 max-w-2xl">Comprehensive solutions for all your real estate and construction needs, delivered with expertise and dedication.</p>
                </div>
            </div>

            {/* Services List */}
            <div className="container py-8 gap-8 mx-auto grid grid-cols-1 lg:grid-cols-3 px-8">
                {serviceData.map((service, index) => (
                    <motion.div 
                    className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    key={index}
                    onClick={() => setSelectedService(service)}
                >
                    <div className="relative h-48">
                        <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-3">{service.description}</p>
                    </div>
                    <button className='text-primary text-sm m-5 underline'>
                    View More
                </button>
                </motion.div>
                
                ))}
            </div>

            {selectedService && (
                <ServiceModal 
                    selectedService={selectedService} 
                    setSelectedService={setSelectedService}
                />
            )}

            {/* Global CTA */}
            <div className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Contact us today to discuss your project needs and discover how we can help bring your vision to life.</p>
                    <Link to='/contact' className="bg-primary text-white py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors">
                        Contact Us Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Services


                    // <motion.section
                    //     key={service.id}
                    //     id={service.href}
                    //     initial={{ opacity: 0, y: 20 }}
                    //     whileInView={{ opacity: 1, y: 0 }}
                    //     viewport={{ once: true }}
                    //     transition={{ duration: 0.6, delay: index * 0.2 }}
                    //     className="py-16 border-b border-gray-200 last:border-b-0"
                    // >
                    //     <div className="container mx-auto px-4">
                    //         <div className="flex flex-col lg:flex-row gap-12">
                    //             {/* Left Content Column */}
                    //             <div className="lg:w-3/5">
                    //                 <h2 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h2>
                    //                 <div className="prose prose-lg max-w-none mb-8">
                    //                     <p className="text-gray-600">{service.description}</p>
                    //                 </div>

                    //                 {/* Benefits Section */}
                    //                 <div className="mb-8">
                    //                     <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                    //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    //                         {service.benefits.map((benefit, index) => (
                    //                             <div key={index} className="flex items-start">
                    //                                 <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm mr-2">
                    //                                     {index + 1}
                    //                                 </span>
                    //                                 <p className="text-gray-600 text-sm">{benefit}</p>
                    //                             </div>
                    //                         ))}
                    //                     </div>
                    //                 </div>

                    //                 {/* Process Section */}
                    //                 <div className="mb-8">
                    //                     <h3 className="text-2xl font-smibold text-gray-900 mb-4">How It Works</h3>+
                                        
                    //                     <div className="space-y-3">
                    //                         {service.process.map((step, index) => (
                    //                             <div key={index} className="flex items-start">
                    //                                 <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm mr-3">
                    //                                     {index + 1}
                    //                                 </div>
                    //                                 <p className="text-gray-600 text-sm">{step}</p>
                    //                             </div>
                    //                         ))}
                    //                     </div>
                    //                 </div>

                    //                 <div className="flex gap-4">
                    //                     <Link to='/contact' className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    //                         Request Service
                    //                     </Link>
                    //                 </div>
                    //             </div>

                    //             {/* Right Image Column */}
                    //             <div className="hidden md:block md:w-4/5 lg:w-2/5">
                    //                 <div className="">
                    //                     <div className="aspect-[1/1] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                    //                         <img 
                    //                             src={service.image} 
                    //                             alt={service.title}
                    //                             className="w-full h-full object-cover"
                    //                         />
                    //                     </div>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </motion.section>