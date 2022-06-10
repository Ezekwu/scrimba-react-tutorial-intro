import Card from "./Card"
import Data from '../Data'

const CardSection = () => {
    return (
        <section className="card-section">
            {
                Data.map((item)=>{
                    return <Card key={item.id}
                            item={item}/>
                })
            }
        </section>
    )
}

export default CardSection