import { useState } from "react"


const Main = () => {
    
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        passwordConfirmation: "",
        
    })
    const handleChange =  (e) => {
        const {name, value, checked} = e.target;
        setFormData(prevData => {
            return  {
                ...prevData,
                [name]: value
            }
            
        })
        console.log(formData);
    }
    const submit =(e) => {
        e.preventDefault()
        console.log(formData);
    }
    return (
        <section className="main">
            <form >
                <input type="text"
                placeholder="username"
                name="username"
                value={formData.username}
                onChange={handleChange}/>

                <input type="password"
                placeholder="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}/>

                <input type="text"  
                placeholder="confirm password"
                name="passwordConfirmation"
                value={formData.passwordConfirmation}
                onChange={handleChange}
                />

                <div className="check-container">
                    <input type="checkbox" 
                    id="check"/>
                    <label htmlFor="check">join news letter</label>
                </div>
                <button>sign up</button>
            </form>
            {/* <div className="form">
                <div className="input">
                    <input type="text" placeholder="Top text" className="input-1" />
                    <input type="text" placeholder="Bottom text" className="input-2"[i] />
                </div>
                <button >Get a new meme image  🖼</button>
            </div>
            <img src="../images/memeimg.png" alt="" className="main-image"/> */}
        </section>
    )
}

export default Main