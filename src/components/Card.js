

const Card = ({  title, price, img, rating, reviewCount }) => {
    
    return (
        <div className="card">
        
            <img src={img} alt="" />
            <div className="card-info">
                <div className='rating-country'>
                    <span className='star' ><img src={require('../images/Star 1.png')} alt="" /></span>
                    <span className='rating'>{rating}</span>
                    <span className='country'>({reviewCount}).USA</span>
                </div>

                <p>{title}</p>

                <div className="price">
                    <p><span>From ${price}</span> / person</p>
                </div>
            </div>
            
        </div>
    )
}

export default Card