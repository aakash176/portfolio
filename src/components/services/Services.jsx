import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Build API</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can build API.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can integrate API with your prebuilt frontend.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loreaam, ipsum dolor sit amet consectetuae elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loreaam, ipsum dolor sit amet consectetuae elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loreaam, ipsum dolor sit amet consectetuae elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loreaam, ipsum dolor sit amet consectetuae elit.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loreaam, ipsum dolor sit amet consectetuae elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loreaam, ipsum dolor sit amet consectetuae elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loreaam, ipsum dolor sit amet consectetuae elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loreaam, ipsum dolor sit amet consectetuae elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loreaam, ipsum dolor sit amet consectetuae elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loreaam, ipsum dolor sit amet consectetuae elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loreaam, ipsum dolor sit amet consectetuae elit.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web App Development</h3>
          </div>
          
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loreaam, ipsum dolor sit amet consectetuae elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loreaam, ipsum dolor sit amet consectetuae elit.</p>
            </li>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loreaam, ipsum dolor sit amet consectetuae elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loreaam, ipsum dolor sit amet consectetuae elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loreaam, ipsum dolor sit amet consectetuae elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loreaam, ipsum dolor sit amet consectetuae elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services