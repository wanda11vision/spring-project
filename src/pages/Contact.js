import React from 'react'
import Nav from '../components/Nav'
import '../style/contact.css'
import Footer from '../components/footer'

function Contact() {
  return (
    <div className='contact'>
      <Nav />
      <div className='conmain'>
        <div className='con1'>
          <h1>Connect with Spring Wealth<br/>Services Today</h1>
        </div>

        <div className='con2'>
          <h1>Reach Out for Personalized Financial Guidance</h1>
          <p>Let us guide you towards a secure financial future with personalized strategies and expert advice.</p>

          <div className='connum'>
            <h1>PHONE</h1>
            <h2>+91 98866 60304</h2>
          </div>

          <div className='connum'>
            <h1>EMAIL</h1>
            <h2>contact@springwealthservices.com</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
