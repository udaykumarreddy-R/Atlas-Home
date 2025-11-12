import CommonBanner from "../../components/commonComponents/banner/CommonBanner";
// import Homepage_Properties from "../../components/homepage_components/homepage_Properties/Homepage_Properties";
import { resolveOptimizedAsset } from "../../utils/resolveOptimizedAsset";

// const contactInfo = [
//     { icon: "📍", text: "Pune, Maharashtra, India" },
//     { icon: "📞", text: "+91-8983901675" },
//     { icon: "📞", text: "+91-9112385333" },
//     { icon: "📞", text: "+91-9112387333" },
//     { icon: "📞", text: "+91-9112385333" },
//     { icon: "✉️", text: "soumilsstays@gmail.com" },
// ];


import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { emailJsConfig, getMissingEmailJsEnvKeys, isEmailJsConfigured } from "../../utils/emailjsConfig";

const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactnumber: "",
        destination: "",
        description: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isEmailJsConfigured()) {
            const missingKeys = getMissingEmailJsEnvKeys().join(", ");
            console.error("EmailJS environment variables are not fully configured.", missingKeys);
            alert("Contact form is temporarily unavailable. Please reach out via phone or email.");
            return;
        }

        try {
            const response = await emailjs.send(
                emailJsConfig.serviceId!,
                emailJsConfig.templateId!,
                {
                    user_name: formData.name,
                    user_email: formData.email,
                    user_contactnumber: formData.contactnumber,
                    destination: formData.destination,
                    message: formData.description,
                    to_email: emailJsConfig.ownerEmail,
                },
                emailJsConfig.publicKey!
            );
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", contactnumber: "", destination: "", description: "" });
        } catch (error) {
            console.log("FAILED...", error);
            alert("Failed to send message. Please try again.");
        }
    };

    return (
        <section>
            {/* Banner */}
            <div>
                <CommonBanner image={resolveOptimizedAsset('banner.jpg')} PageName={'Contact Us'} />
            </div>

            {/* Contact Info Section */}
            <div className="flex flex-col md:flex-row gap-8 px-4 lg:px-20 py-8">
                {/* Left Section */}
                <div className="w-full text-gray-600 text-lg leading-relaxed">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
                    <p>
                        At <span className="text-orange-500 font-semibold">Soumil Stay's</span>, we prioritize your comfort and convenience. Whether you have questions about reservations, special requests, or need assistance, our team is always here to help.
                    </p>
                    <p className="mt-4">
                        Visit us at any of our locations or reach out through the contact details provided. We look forward to hosting you!
                    </p>
                </div>

                {/* Right Section */}
                {/* <div className="md:w-1/2 text-gray-800 text-lg leading-relaxed space-y-4">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start">
                            <span className="text-orange-500 mr-4">{info.icon}</span>
                            <span>{info.text}</span>
                        </div>
                    ))}
                </div> */}
            </div>
            {/* Contact Us form  */}
            <div className="max-w-md my-8 mx-auto p-6 py-8 border bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold  text-center">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md"
                    />
                    <input
                        type="number"
                        name="contactnumber"
                        placeholder="Your Contact Number"
                        value={formData.contactnumber}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md"
                    />
                    <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="">Select Destination</option>
                        <option value="Lonavala">Lonavala</option>
                        <option value="Dapoli">Dapoli</option>
                    </select>
                    <textarea
                        name="description"
                        placeholder="Your Message"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded-md h-28"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Send
                    </button>
                </form>
            </div>

            {/* Homepage Property section */}
            <div>
                {/* <Homepage_Properties /> */}
            </div>


        </section>
    );
};

export default ContactUs;
