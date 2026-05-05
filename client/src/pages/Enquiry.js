import React from 'react';
import { FaWhatsapp, FaEnvelope, FaClock } from 'react-icons/fa'; 

const Enquiry = () => {
    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 font-body">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-slate-900 mb-8 font-heading">Enquire Now</h1>
                <p className="text-center text-slate-600 mb-12">Have questions? We are here to help you plan your perfect Sri Lankan getaway.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Details */}
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="bg-green-100 p-3 rounded-full text-green-600 text-2xl">
                                <FaWhatsapp />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">WhatsApp</h3>
                                <p className="text-slate-600">+94 7X XXX XXXX</p>
                                <a href="https://wa.me/947XXXXXXXXX" target="_blank" className="text-blue-600 hover:underline">Message us</a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 p-3 rounded-full text-blue-600 text-2xl">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Email</h3>
                                <p className="text-slate-600">info@jailankatravels.com</p>
                                <a href="mailto:info@jailankatravels.com" className="text-blue-600 hover:underline">Send an email</a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-slate-100 p-3 rounded-full text-slate-600 text-2xl">
                                <FaClock />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Opening Hours</h3>
                                <p className="text-slate-600 italic font-medium">Monday - Friday: 8:00 AM - 6:00 PM</p>
                                <p className="text-slate-600 italic font-medium">Saturday: 9:00 AM - 4:00 PM</p>
                                <p className="text-slate-600 italic font-medium text-red-500">Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Enquiry Form (Optional) */}
                    <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-lg font-bold mb-4">Quick Message</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-2 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500" />
                            <textarea placeholder="Your Message" className="w-full p-2 h-24 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                            <button className="w-full bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enquiry;