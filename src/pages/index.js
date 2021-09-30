import React from 'react'
import { Helmet } from 'react-helmet'

import favicon from '../images/logo.jpg'

import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import '../styles/main.scss'

const IndexPage = () => {
  return (
    <main className='main'>
      <Helmet>
        <title>AlbertcacV</title>
        <link rel='icon' href={favicon} />
      </Helmet>

      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}

export default IndexPage
