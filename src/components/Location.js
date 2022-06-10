import React from 'react'

const Location = ({item}) => {
    
    return (
        <div className='location'>
            <img src={item.img} alt="" />
            <div className="info">
                <div className="country-link">
                    <span><img src="../images/Fill 219.png" alt="" /> <h4>{item.Location}</h4></span>
                    <a href="">View on Google Maps</a>
                </div>
                <h1 className="landmark">
                    {item.landmark}
                </h1>
                <h3 className="date">
                    {`${item.startDate}- ${item.endDate}`}
                </h3>
                <p className="description">
                {item.description}
                </p>
            </div>
        </div>
    )
}

export default Location