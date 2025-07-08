import React, { useState, useEffect } from 'react';
import './ContactPage.css';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('Sending...');

        // Simulate form submission
        setTimeout(() => {
            setSubmitStatus('Message Sent! ✓');
            setTimeout(() => {
                setSubmitStatus('');
                setIsSubmitting(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            }, 2000);
        }, 1000);
    };

    const handleFocus = (e) => {
        e.target.parentElement.style.transform = 'translateY(-2px)';
    };

    const handleBlur = (e) => {
        e.target.parentElement.style.transform = 'translateY(0)';
    };

    const subjectOptions=[
        {label:"Select a Topic",value:""},
        {label:"Product Inquiry",value:"product-inquiry"},
        {label:"Custom Order",value:"custom-order"},
        {label:"Repair Service",value:"repair-service"},
        {label:"Warranty Claim",value:"warranty"},
        {label:"General Question",value:"general"}
    ]

    return (
        <div className="contact-page">
            <div className="container">
                <div className="header">
                    <h1>Get in Touch</h1>
                    <p>
                        Contact us for expert advice, custom orders, or any questions about our premium accessories.</p>
                </div>

                <div className="content-grid">
                    <div className="contact-form">
                        <h2>Send us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    required
                                >
                                    {subjectOptions.map((opt,idx)=>(
                                    <option key={idx} value={opt.value}>{opt.label} </option>
                                    ))}
                                    
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    placeholder="Tell us about your saxophone setup and what you're looking for..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${submitStatus.includes('Sent') ? 'success' : ''}`}
                                disabled={isSubmitting}
                            >
                                {submitStatus || 'Send Message'}
                            </button>
                        </form>
                    </div>

                    <div className="contact-info">
                        <div className="info-card-container">
                            <div className="info-card">
                                <div className="info-item">
                                    <div className="info-icon"> <IoMdCall/> </div>
                                    <div className="info-details">
                                        <h3>Call Us</h3>
                                        <p>+1 (555) 123-SAXO<br />Mon-Fri: 9AM-6PM EST</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon"><MdEmail /></div>
                                    <div className="info-details">
                                        <h3>Email Us</h3>
                                        <p>info@saxoaccessories.com<br />support@saxoaccessories.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="store-hours-container">
                            <div className="store-hours">
                                <h3>Store Hours</h3>
                                <div className="hours-grid">
                                    <div className="hours-row">
                                        <span className="day">Monday</span>
                                        <span className="time">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="hours-row">
                                        <span className="day">Tuesday</span>
                                        <span className="time">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="hours-row">
                                        <span className="day">Wednesday</span>
                                        <span className="time">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="hours-row">
                                        <span className="day">Thursday</span>
                                        <span className="time">9:00 AM - 8:00 PM</span>
                                    </div>
                                    <div className="hours-row">
                                        <span className="day">Friday</span>
                                        <span className="time">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="hours-row">
                                        <span className="day">Saturday</span>
                                        <span className="time">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="hours-row">
                                        <span className="day">Sunday</span>
                                        <span className="time">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage; 