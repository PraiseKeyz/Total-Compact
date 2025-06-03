import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import image1 from '../assets/contact.image1.jpg'

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log(formData)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full flex items-center bg-black/60 bg-blend-overlay" 
                style={{ 
                    backgroundImage: `url(${image1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="container mx-auto px-4 text-white">
                    <h1 className="text-5xl font-bold text-left ">Contact Us</h1>
                    <p className="text-left mt-4 max-w-2xl text-xl">We're here to help and answer any questions you might have. We look forward to hearing from you.</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition duration-200"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition duration-200"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition duration-200"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary transition duration-200"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary cursor-pointer text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition duration-200 transform hover:-translate-y-1"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Company Info Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <FaMapMarkerAlt className="text-primary text-xl mt-1" />
                                    <div>
                                        <h3 className="font-medium">Address</h3>
                                        <p className="text-gray-600">No. 4 South Link<br />Beside Gbose Autos<br />Asa-dam Road, Ilorin</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaPhone className="text-primary text-xl" />
                                    <div>
                                        <h3 className="font-medium">Phone</h3>
                                        <p className="text-gray-600">+234 7060858436</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaEnvelope className="text-primary text-xl" />
                                    <div>
                                        <h3 className="font-medium">Email</h3>
                                        <p className="text-gray-600">info@totalcompact.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 h-[400px] overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7893.071720911243!2d4.5603851004885145!3d8.447154380047305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037b3feae792b51%3A0xeaf29aed30b28c8f!2sGBOSE%20AUTOS!5e0!3m2!1sen!2sng!4v1748950008815!5m2!1sen!2sng"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts