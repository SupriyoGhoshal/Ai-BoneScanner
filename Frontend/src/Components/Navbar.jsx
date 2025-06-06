import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
    return ( 
        <>
          <nav className="navbar navbar-expand-lg navbar-gradient sticky-top shadow-sm">
            <div className="container">
              <a className="navbar-brand logo-text" href="#">🦴 NutriBone</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarModern">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarModern">
                <ul className="navbar-nav ms-auto align-items-center">
                  <li className="nav-item">
                    <a className="nav-link active" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#scan">Scan</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#summary">Summary</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="btn get-started-btn ms-3">Get Started</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </> 
    );
}

export default Navbar;