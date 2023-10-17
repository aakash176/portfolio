import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Services from './components/services/Services'
import Testimonal from './components/testimonals/Testimonal'
import Experience from './components/Experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
const App = () => {
  return (
    <div>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonal/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App