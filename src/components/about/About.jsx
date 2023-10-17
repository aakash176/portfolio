import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/avatar3.jpg'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Freelancer</h5>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Certifications</h5>
              <small>2 Certifications</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ projects</small>
            </article>

          </div>

          <p>
          I'm an aspiring machine learning engineer working on uncovering insights and solving complex problems using data. With a strong foundation in mathematics and programming, I excel in, Machine Learning and Deep Learning. I'm dedicated to expanding my knowledge and skills in this ever evolving field of artificial Intelligence and possess strong communication abilities to convey data-driven insights effectively 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About