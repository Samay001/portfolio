import React from 'react';
import './style/contact.css';
import img from '../assets/images/contact-img.jpg';

const Contact = () => {
  return (
    <div className='container-contact'>
      <div className='contact-content'>
        <div className='heading-contact'>
          <h1>What are you waiting for?</h1>
          <h1>Let's Do This.</h1>
        </div>
        <div className='contact-form'>
          <form action='https://formsubmit.co/samayrathod1@gmail.com' method='POST'>
            <input type='text' placeholder='NAME' className='form-input' required />
            <input type='email' placeholder='Email' className='form-input' required />
            <textarea placeholder='HOW CAN I HELP YOU?' className='form-textarea' required></textarea>
            <button type='submit' className='form-button'>SEND</button>
          </form>
        </div>
      </div>
      <div className='contact-img'>
        <img src={img} alt='contact' />
      </div>
    </div>
  )
}

export default Contact;
