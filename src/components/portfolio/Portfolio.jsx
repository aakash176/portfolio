import React from 'react'
import './portfolio.css'
import img1 from '../../assets/Img1.jpg'
import img2 from '../../assets/Img2.png'
import img3 from '../../assets/Img3.png'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>Waste Recognition Management System</h3>
          <a href="https://github.com/sandy252/Waste_Recognition_Management_System" className='btn'>Github</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img2} alt="" />
          </div>
          <h3>Loan Predicting App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/sandy252/LoanPredictingApp" className='btn'>Github</a>
            <a href="https://aakash176.github.io/Library-Management-System/" className='btn btn-primary' target='_blank'>Live Demo</a>

          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img3} alt="" />
          </div>
          <h3>UGB Agriculture Solution</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/sandy252/UGV-Unmanned-Ground-Vehicle-based-Agriculture-solution" className='btn'>Github</a>
            <a href="https://bicyclefrontend-3kt33habmq-uc.a.run.app/" className='btn btn-primary' target='_blank'>Live Demo</a>

          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio