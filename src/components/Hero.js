import React from 'react'
//import heroImage from 

const Hero = () => {
    const img = require('../images/Group 77.png')
    return (
        <div className='hero'>
            <div className="hero-image">
                <img src={img} alt="" />
            </div>
            <div className="hero-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}

export default Hero