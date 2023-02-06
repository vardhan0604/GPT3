import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-1'>
            <div className='logo'>GPT-3</div>
            <div className='nav-links'>
                <a href="#">Home</a>
                <a href="#">What is GPT?</a>
                <a href="#">Open AI</a>
                <a href="#">Case Studies</a>
                <a href="#">Library</a>
        </div>
        </div>
        <div className='nav-buttons'>
            <a href="#" >Sign in</a>
            <a href="#" className='nav-button'>Sign up</a>
        </div>
    </div>
  )
}

export default Navbar
