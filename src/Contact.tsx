import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(message);
  };

  return (
    <section className='contact-section'>
      <div className='contact-container'>
        <h2 className='contact-title'>Contact Us</h2>
        <form className='contact-form' onSubmit={handleSubmit}>
          <textarea
            className='contact-textarea'
            placeholder='Write your message here'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type='submit' className='contact-button'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
