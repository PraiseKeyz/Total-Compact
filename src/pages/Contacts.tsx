import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

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
            <div className="bg-primary/10 py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">Contact Us</h1>
                    <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">We're here to help and answer any questions you might have. We look forward to hearing from you.</p>
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
                                className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition duration-200 transform hover:-translate-y-1"
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
                                        <p className="text-gray-600">123 Business Avenue<br />Suite 100<br />New York, NY 10001</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaPhone className="text-primary text-xl" />
                                    <div>
                                        <h3 className="font-medium">Phone</h3>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FaEnvelope className="text-primary text-xl" />
                                    <div>
                                        <h3 className="font-medium">Email</h3>
                                        <p className="text-gray-600">contact@yourcompany.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 h-[400px] overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1644332274352!5m2!1sen!2s"
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