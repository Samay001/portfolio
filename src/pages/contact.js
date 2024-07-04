import React from 'react'
import './style/contact.css'
import img from '../assets/images/contact-img.jpg'

const Contact = () => {
  return (
    <div className='container-contact'>
      <div className='contact-content'>
        <div className='heading-contact'>
          <h1>What are you waiting for?</h1>
          <h1>Let's Do This.</h1>
        </div>
        <div className='contact-form'>
          <form>
            <input type='text' placeholder='Name' className='form-input' />
            <input type='email' placeholder='Email' className='form-input' />
            <textarea placeholder='Message' className='form-textarea'></textarea>
            <button type='submit' className='form-button'>Send</button>
          </form>
        </div>
      </div>
      <div className='contact-img'>
        <img src={img} alt='contact' />
      </div>
    </div>
  )
}

export default Contact
