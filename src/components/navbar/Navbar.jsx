import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import './Navbar.css'
const Navbar = () => {

  const [navbar, setNavbar] = useState(false)
  const [scroll, setScroll] = useState(false)
  const handleNavbar = () => {
    setNavbar(!navbar)
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      setScroll(true)
    }
    else {
      setScroll(false)
    }
  })

  return (
    <header className={scroll ? 'header scroll' : 'header'}>
      <nav className='navbar'>
        <div className='navbar_logo'>
          <img src={Logo} alt="" />
        </div>
        <ul className={navbar ? 'navbar_list active' : 'navbar_list'}>
          <li className='navbar_item'>
            <Link onClick={handleNavbar} to="Home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='navbar_item'>
            <Link onClick={handleNavbar} to="About" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='navbar_item'>
            <Link onClick={handleNavbar} to="Skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='navbar_item'>
            <Link onClick={handleNavbar} to="Work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className='navbar_item'>
            <Link onClick={handleNavbar} to="Contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <div className='hamMenu' onClick={handleNavbar}>
          {navbar ? (<FaTimes className='icon' size={25} style={{ color: '#fff', cursor: 'pointer' }} />) : (<FaBars className='icon' size={25} style={{ color: '#fff', cursor: 'pointer' }} />)}
        </div>
      </nav>
    </header>
  )
}

export default Navbar