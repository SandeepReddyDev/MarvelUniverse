import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './index.css';
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaArrowUp,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  const form = useRef();

  const companyLinks = ['About', 'Search & Filters', 'Theme Changing', 'Chrono Timline', 'Movie Details'];
  const otherLinks = ['React', 'Redux', 'Node', 'Express', 'MongoDB'];
  const contactInfo = [
    { icon: <FaPhone />, text: '+123 456 7890' },
    { icon: <FaEnvelope />, text: 'sandeepreddydaram779@gmail.com' },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_uus6lqq',           // ✅ Your Service ID
      'template_xhclcl8',         // ✅ Your Template ID
      form.current,
      'qERNjb-WkeQJjNn-3'         // ✅ Your Public Key
    ).then(
      (result) => {
        alert('✅ Thanks for your feedback!');
        form.current.reset();
      },
      (error) => {
        alert('❌ Oops! Something went wrong.');
        console.error('EmailJS error:', error.text);
      }
    );
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - Feedback Section */}
        <div className="feedback-section ">
          <p className='footer-feedback-quote'><span style={{ color: "red" }}>Thank You...</span>for visiting...!</p>
          <div>
            <p style={{ fontSize: "10px", marginBottom: "5px" }}>
              Your feedback matters — Drop us a line!
            </p>
            <form ref={form} onSubmit={sendEmail} className="feedback-form">
              <input type="text" name="user_name" placeholder="Your Name" required className='feedback-input' />
              <input type="email" name="user_email" placeholder="Your Email" required className='feedback-input' />
              <textarea name="message" placeholder="Your Feedback..." required className='feedback-textarea'></textarea>
              <button type="submit" className='feedback-btn'>Send</button>
            </form>
          </div>
        </div>

        {/* Features */}
        <div className="footer-links">
          <h3 className='footer-title'>Features</h3>
          <ul>
            {companyLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>

        {/* Technologies Used */}
        <div className="footer-links">
          <h3 className='footer-title'>Technologies Used</h3>
          <ul>
            {otherLinks.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-links">
          <h3 className='footer-title'>Contact</h3>
          <ul>
            {contactInfo.map((item, index) => (
              <li key={index}>
                {item.icon} <span className="contact-text">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <FaArrowUp />
      </button>

      {/* Background Image */}
      <img
        src="https://i.postimg.cc/mkrBg5Mj/deadpool-t.png"
        alt="deadpool"
        className="deadpool-t"
      />
    </footer>
  );
};

export default Footer;
