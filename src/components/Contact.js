import React, { useRef } from 'react';
import './styles/Contact.scss';
import emailjs from '@emailjs/browser';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-scroll';
import SendIcon from '@mui/icons-material/Send';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_txxjj6a', 'template_ahezpwh', form.current, 'fyL6qBgHlPKRg6fiG')
      .then((result) => {
          console.log(result.text);
          console.log('message sent');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <div id="contact">

<div className='container'>


<div className='contact-cover'>
  <div className='column-left'>
    
    <h2>Contact</h2>
    <p>Please fill out the form   below to discuss any work opportunities</p>

    <p><MailOutlineIcon/> Email:  sandeep.bidla556@gmail.com</p>

  </div>
  <div className='column-right'>

  <form ref={form} onSubmit={sendEmail}>
<div className="inputs">

       
        <input type="text" name="from_name" placeholder='name' />
        <input type="email" name="from_email" placeholder='Email' />
        <input type="text" name="message" placeholder='Message' className='message' />
        <button value="Send"><SendIcon/> Send</button>
      </div>
      </form>


    <Link activeClass='active' to="main" spy={true} smooth={true} offset={-100} duration={500} className="myBtn" title="Go to top"><ArrowUpwardIcon/></Link>
   

  </div>

  </div>


    </div>
    </div>
  );
};