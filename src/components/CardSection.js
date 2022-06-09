import Card from "./Card"
import Data from '../Data'

const CardSection = () => {
    return (
        <section className="card-section">
            {
                Data.map((item)=>{
                    return <Card key={item.id}
                            title={item.title} 
                            price={item.price}
                            img={item.img}
                            rating={item.stats.rating}
                            reviewCount={item.stats.reviewCount}/>
                })
            }
        </section>
    )
}

export default CardSection