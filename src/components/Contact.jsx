import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Message sent successfully!");
    };

    return (
        <section id="contact" className="bg-gradient-to-b from-gray-900 to-black py-16 px-5">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-green-400 mb-4">Get in Touch</h2>
                    <p className="mt-4 text-xl font-medium text-gray-500">
                        I&apos;d love to hear from you! Whether you have a question, want to work together, or just say hello, feel free to reach out.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Information */}
                    <div className="bg-white shadow-lg p-8 rounded-lg">
                        <h3 className="text-3xl font-bold text-blue-600 mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-center">
                                <FaEnvelope className="text-blue-600 text-2xl mr-4" />
                                <div>
                                    <h4 className="font-semibold text-gray-700">Email</h4>
                                    <p className="text-gray-600">rajesh99.bd@gmail.com</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center">
                                <FaPhoneAlt className="text-blue-600 text-2xl mr-4" />
                                <div>
                                    <h4 className="font-semibold text-gray-700">Phone</h4>
                                    <p className="text-gray-600">+880 1856607609</p>
                                    <p className="text-gray-600">+91 8114809754</p>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="flex items-center">
                                <FaWhatsapp className="text-green-500 text-2xl mr-4" />
                                <div>
                                    <h4 className="font-semibold text-gray-700">WhatsApp</h4>
                                    <p className="text-gray-600">+880 1856607609</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-blue-600 text-2xl mr-4" />
                                <div>
                                    <h4 className="font-semibold text-gray-700">Location</h4>
                                    <p className="text-gray-600">Dhaka, Bangladesh</p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="space-y-3">
                                <h4 className="font-semibold text-gray-700">Follow Me</h4>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://facebook.com/rajesh2441139"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-700 text-2xl transition"
                                    >
                                        <FaFacebook />
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/rajesh-chowdhury-361360224"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-600 text-2xl transition"
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <a
                                        href="https://github.com/rajeshbd99"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-black text-2xl transition"
                                    >
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className=" shadow-lg p-8 rounded-lg">
                        <h3 className="text-3xl font-bold text-white mb-6">Send Me a Message</h3>
                        <form action="#" className="space-y-6" onSubmit={handleSubmit}>
                            {/* Name */}
                            <div>
                                <label className="block text-white mb-2 font-medium">Name</label>
                                <input
                                    type="text"
                                    className="w-full border text-white border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            {/* Email */}
                            <div>
                                <label className="block text-white mb-2 font-medium">Email</label>
                                <input
                                    type="email"
                                    className="w-full border  text-white border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            {/* Message */}
                            <div>
                                <label className="block text-white mb-2 font-medium">Message</label>
                                <textarea
                                    className="w-full border text-white border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    rows="4"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
