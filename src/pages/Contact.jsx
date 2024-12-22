import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mt122ze', // Replace with your EmailJS service ID
        'template_31npzz8', // Replace with your EmailJS template ID
        form.current,
        'EL7VbREnzzZK-m-dy' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setSuccessMessage('Message sent successfully!');
          setErrorMessage('');
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.error('Failed to send message:', error.text);
          setErrorMessage('Failed to send message. Please try again.');
          setSuccessMessage('');
        }
      );
  };

  return (
    <section className="contact">
      {/* Add an image above the form */}
      <div className="image-container">
        <img
          src="/src/assets/images/electriccontact.png"
          alt="Contact Us"
          className="contact-image"
        />
      </div>
      {/* Form Container */}
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail}>
          <label>
            Name
            <input type="text" name="user_name" placeholder="Your Name" required />
          </label>
          <label>
            Email
            <input type="email" name="user_email" placeholder="Your Email" required />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Your Message" required />
          </label>
          {successMessage && <p className="success">{successMessage}</p>}
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
