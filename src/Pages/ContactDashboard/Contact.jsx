import React, { useState } from 'react';
import DashboardSidebar from '../../Components/Dashboard/DashboardSidebar';
import './Contact.css';

const ContactPage = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API'ye form verilerini göndermek için işlemler
    console.log(contactInfo);
  };

  return (
    <div className="contact-page-container">
      <DashboardSidebar />
      <main className="contact-content">
        <h1>Contact Us</h1>
        <p>If you have any questions or feedback, please fill out the form below and we'll get back to you as soon as possible.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={contactInfo.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={contactInfo.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </main>
    </div>
  );
};

export default ContactPage;
