import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/footer'
import '../style/about.css'

function About() {
  return (
    <div className='amain' >
      <Nav />
      <div className='about'>


        <div className='abt1'>
          <h1>About Spring Wealth</h1>
          <h1>Services</h1>
        </div>

        <div className='abt2'>
          <div className='abt20'>
            <div className='abt21'>
              <h1>Ignite Your FIRE: Your Path to<br /> Financial Independence with<br /> Spring Wealth Services</h1>
            </div>
            <div className='abt22'>
              <p><b>Spring Wealth Services</b> is your dedicated partner in achieving <b>FIRE</b> (Financial Independence, Retire Early).<br />
                <br /><br />
                We have empowered over 350+ clients to break free from the traditional 9 to 5 and design a life they love. Our expertise lies in creating personalized financial plans that combine strategic investments, robust risk management, and effective leverage.
                With over 20 years of experience, we have perfected the art of turning financial dreams into reality. Let us be your guide on the path to financial freedom.</p>
            </div>
          </div>

          <div className='abt2img'>

          </div>

        </div>


        <div className='abt3'>
          <h1>Managing more than 3500 crores as the head for Karnataka</h1><br /><br />
          <div className='abt3img'></div><br />
          <h1>MURTUZA KAPADIA</h1><br />
          <p>Spring Wealth Services</p><br />
          <h2>STAY WEALTHY AT ALL TIMES AND GIVE YOURSELF ADEQUATE TIME</h2>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
