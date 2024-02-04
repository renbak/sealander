import React, { useState } from 'react';
import './ContactFormStyles.css';

function ContactForm() {
  const [formStatus, setFormStatus] = useState({ success: null, message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accessKey: "83f144a5-b403-40d1-b0e1-ee6574788511",
          name: event.target.name.value,
          email: event.target.email.value,
          phone: event.target.phone.value,
          message: event.target.message.value,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // successful submission
        setFormStatus({ success: true, message: 'Email Sent' });

        // Redirect user after 3 seconds
        setTimeout(() => {
          window.location.href = '/'; 
        }, 3000); 
      } else {
        // Send error
        setFormStatus({ success: false, message: 'Error sending email' });
      }
    } catch (error) {
      // Error processing
      setFormStatus({ success: false, message: 'Error sending email' });
    }
  };

  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      {formStatus.success !== null && (
        <div className={`form-status ${formStatus.success ? 'success' : 'error'}`}>
          {formStatus.message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="accessKey" value="83f144a5-b403-40d1-b0e1-ee6574788511" />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" name="phone" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ContactForm;


