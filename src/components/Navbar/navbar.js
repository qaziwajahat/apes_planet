import './navbar.css'
import logo from "../../images/logo.png";

function Navbar(){
    return(
        <nav className="navbar navbar-dark bg-black  navbar-expand-md " style={{zIndex:"1",top:"0"}}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} height="150" alt="" />
                </a>
                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                    <ul className="navbar-nav mt-2  mt-lg-0 ">
                        <li className="nav-item ">
                            <a className="nav-link " href="#Home">Home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#Team">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Roadmap">Roadmap</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#FAQ">FAQ</a>
                        </li>
                    </ul>
                    <div className='socials'>
                    <a href="#"><i className="bi-twitter mx-2"></i></a>
                    <a href="#"><i className="bi-discord mx-2"></i></a>
                    <a href="#"><i className="bi-instagram mx-2"></i></a>
                </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;