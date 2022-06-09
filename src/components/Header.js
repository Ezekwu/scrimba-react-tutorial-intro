import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className='header'>
            <Navbar />
            <Hero />
        </header>
    )
}

export default Header