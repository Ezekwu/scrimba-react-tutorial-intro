import { useState, useEffect } from "react"


const Main = () => {
    const [meme, setMeme] = useState({
        toptext: "",
        bottomText: "",
        image :"https://i.imgflip.com/30b1gx.jpg"
    })
    const [memesData, setMemesData] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target
        setMeme(prevState => ({
            ...prevState,
            [name] : value

        }))
    }

    useEffect(()=> {
        fetch(`https://api.imgflip.com/get_memes`)
        .then(res => res.json())
        .then(data => setMemesData(data.data.memes))
        
    },[])
    
    
    const getMemeImage = () =>{
        const randomNumber = Math.floor(Math.random() * memesData.length );
        const url =memesData[randomNumber].url;
        setMeme((prevState)=>{
            return {
                ...prevState,
                image: url
            }
        })
    }

    return (
        <section className="main">
            
            <div className="form">
                <div className="input">
                    <input type="text"
                    placeholder="Top text" 
                    className="input-1" 
                    name="toptext"
                    value={meme.toptext}
                    onChange={handleChange}/>
                    
                    <input type="text" 
                    placeholder="Bottom text" 
                    className="input-2" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}/>
                </div>
                <button onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img src={meme.image} alt="" className="main-image"/>
                <h2 className="meme-text top">{meme.toptext}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </section>
    )
}

export default Main