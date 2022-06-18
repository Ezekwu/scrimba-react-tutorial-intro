import logo from '../logo.svg';


const Navbar = ({ light, toggleLight }) => {
    return (
        <nav className={light ? "light-nav" : ""}>
            <div className="logo-header">
                <img src={logo} alt="" />
                <h3 >ReactFacts</h3>
            </div>
            <div className="nav-item">
                <h4 onClick={toggleLight}>React Course- project 1</h4>
            </div>
        </nav>
    )
}

export default Navbar