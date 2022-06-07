import logo from '../logo.svg';


const Navbar = () => {
    return (
        <nav>
            <div className="logo-header">
                <img src={logo} alt="" />
                <h3>ReactFacts</h3>
            </div>
            <div className="nav-item">
                <h4>React Course- project 1</h4>
            </div>
        </nav>
    )
}

export default Navbar