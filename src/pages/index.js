import * as React from 'react'

import '../styles/main.scss'

import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Qualification from '../components/Qualification'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

const IndexPage = () => {
  return (
    <main className='main'>
      <Header />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <Contact />
    </main>
  )
}

export default IndexPage
