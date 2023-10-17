import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Leaving???</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#comtact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/aakash.c.4508/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/aakaas.c/"><FiInstagram/></a>
        <a href="https://twitter.com/Aakashtwts?t=RobfvMKlQB8kmlOyP9g57g&s=09"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; AAKASH. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer