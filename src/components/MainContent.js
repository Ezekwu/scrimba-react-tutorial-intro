import React from 'react'
import Footer from './Footer'
import HeaderImage from './HeaderImage'
import Info from './Info'

const MainContent = () => {
    return (
        <div className='main-content'>
            <HeaderImage />
            <Info />
            <Footer />
        </div>
    )
}

export default MainContent