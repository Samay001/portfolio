import React from 'react';
import './style/contact.css';
import img from '../assets/images/contact-img.jpg';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d1b7b85e-1f59-453b-b94e-bfe3a7ca66de");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <div className='container-contact'>
      <div className='contact-content'>
        <div className='heading-contact'>
          <h1>What are you waiting for?</h1>
          <h1>Let's Do This.</h1>
        </div>
        <div className='contact-form'>
          <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='NAME' className='form-input' required />
            <input type='email' name='email' placeholder='EMAIL' className='form-input' required />
            <textarea name='message' placeholder='HOW CAN I HELP YOU?' className='form-textarea' required></textarea>
            <button type='submit' className='form-button'>SEND</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
      <div className='contact-img'>
        <img src={img} alt='contact' />
      </div>
    </div>
  )
}

export default Contact;
