import React from 'react'
import mail from  '../images/Icon.png'
const Info = () => {
    return (
        <div className='main-info'>
            <div className="Name-socials">
                <div className="name">
                    <h1>Laura Smith</h1>
                    <h3>Frontend Developer</h3>
                    <p>laurasmith.website</p>
                </div>
                <div className="socials">
                    <a href="">
                        <img src={mail} alt="" />
                        <h3>Email</h3>
                    </a>
                    <a href="" id='linkedin'>
                    <i class="fa-brands fa-linkedin"></i>
                    <h3>Linkedin</h3>
                    </a>
                </div>
            </div>
            <div className="about-interest">
                <div className="about">
                    <h2>About</h2>
                    <p>
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                    </p>
                </div>
                <div className="interest">
                    <h2>Interests</h2>
                    <p>
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Info