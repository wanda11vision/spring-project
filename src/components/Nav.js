import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineBars } from "react-icons/ai";
import './nav.css'

function Nav() {


  return (
    <div className='nmain'>

      <div className='n1'>
        <ul className='ul1'>
          <NavLink to={'/'}><li>Spring Wealth Services</li></NavLink>
          
        </ul>
        <ul className='ul2'>
          <NavLink to={'/'}><li>HOME</li></NavLink>
          <NavLink to={'/about'}><li>ABOUT</li></NavLink>
          <NavLink to={'/services'}><li>SERVICES</li></NavLink>
          <NavLink to={'/projects'}><li>PROJECTS</li></NavLink>
          <NavLink to={'/contact'}><li>CONTACT</li></NavLink>
        </ul>
        <ul className='bar'><AiOutlineBars /></ul>
      </div>

      <ul className='ul3'>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>
    </div>


  )
}

export default Nav
