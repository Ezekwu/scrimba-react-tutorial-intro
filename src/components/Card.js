

const Card = ({ item }) => {
    let badgeText
    if(item.openSpots === 0){
        badgeText = 'SOLD OUT'
    } else if(item.location === 'online'){
        badgeText = 'ONLINE'
    }
    
    return (
        <div className="card">
            {badgeText && <div className="badge">{badgeText}</div>}
            <img src={item.img} alt="" />
            <div className="card-info">
                <div className='rating-country'>
                    <span className='star' ><img src={require('../images/Star 1.png')} alt="" /></span>
                    <span className='rating'>{item.stats.rating}</span>
                    <span className='country'>({item.stats.reviewCount}).USA</span>
                </div>

                <p className='title'>{item.title}</p>

                <div className="price">
                    <p><span>From ${item.price}</span> / person</p>
                </div>
            </div>
            
        </div>
    )
}

export default Card