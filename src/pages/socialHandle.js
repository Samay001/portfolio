import React from 'react';
import './style/socialHandle.css';
import img from '../assets/images/footer-img.png';

const SocialHandle = () => {
  
  return (
    <div className='container-social'>
      <div className='main-heading'>
        <h1>Let's Collaborate</h1>
      </div>
      <div className='footer-content'>
        <div className='socials'>
          <div className='sub-heading'>
            <h1>Socials</h1>
          </div>
          <div className='social-links'>
            <div className='social-link'>
              <a href='https://www.linkedin.com/in/samay-rathod-625a29230/' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-linkedin'></i>
                <span>LINKEDIN.</span>
              </a>
            </div>
            <div className='social-link'>
              <a href='https://github.com/Samay001' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-github'></i>
                <span>GITHUB.</span>
              </a>
            </div>
            <div className='social-link'>
              <a href='mailto:samayrathod1@gmail.com' target='_blank' rel='noopener noreferrer'>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>GMAIL.</span>
              </a>
            </div>
            <div className='social-link'>
              <a href='https://drive.google.com/file/d/1cJeL_OGvQrGRz8OFMgq9VgYpjP7Fo0wT/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
                <i class="fa fa-link" aria-hidden="true"></i>
                <span>RESUME.</span>
              </a>
            </div>
          </div>
        </div>
        <div className='footer-img'>
          <img src={img} alt='footer' />
        </div>
      </div>
    </div>
  );
};

export default SocialHandle;
