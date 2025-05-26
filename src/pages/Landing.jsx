import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Service from '../components/Service'
import About from '../components/About'
import Footer from '../components/Footer'

function Landing() {
    return (
        <>
            <Header />
            <Hero />
            <Service />
            <About />
            <hr className='text-gray-200' />
            <Footer />
        </>
    )
}

export default Landing