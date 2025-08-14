import React from 'react'
import Nav from '../components/Nav'
import '../style/project.css'
import Footer from '../components/footer'

function Projects() {
  return (
    <div className='project'>
      <Nav />
      <div className='promain'>
        <div className='pro1'>
          <h1>Projects : Transforming <br />Financial Futures</h1>
        </div>

        <div className='pro2'>
          <p>The stock market is filled with individuals who know the price of everything, but the value of nothing – Philip Fisher</p>
          <h3>GOALS, DREAMS, ASPIRATIONS, LEGACY, RISK MANAGEMENT & LEVERAGE: WE PROVIDE IT ALL IN ONE PLACE.</h3>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Projects
