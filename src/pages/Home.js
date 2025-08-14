import React from 'react'
import Nav from '../components/Nav'
import { NavLink } from 'react-router-dom'
import '../style/home.css'
import Footer from '../components/footer'

function Home() {
  return (

    <div className='home'>
      <Nav />
      <div className='hmain'>

        <div className='home1'>
          <h1>Unlock Your Financial Spring.<br /> Let Your Money Bloom!</h1>

          <h6>Experience personalized wealth management that grows with you</h6>
          <NavLink to={'/contact'}><button className='hbut'>Schedule Your Financial Spring</button></NavLink>
        </div>



        <div className='himg'>

        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Home
