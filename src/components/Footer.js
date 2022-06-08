import facebook from '../images/Facebook Icon.png';
import git from '../images/GitHub Icon.png';
import instagram from '../images/Instagram Icon.png';
import twitter from '../images/Twitter Icon.png'

const Footer = () => {
    return (
        <footer>
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={git} alt="" />
        </footer>
    )
}

export default Footer