import React from 'react'
import Location from './Location'
import Data from '../Data'
const Main = () => {
    
    return (
        <section className="main">
            { Data.map((item) => {
                return <Location key={item.id}  item={item}/>
            })}
            
            
        </section>
    )
}

export default Main