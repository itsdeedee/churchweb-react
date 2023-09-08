import { useState } from "react";
import { Link } from "react-router-dom";
import churchLogo from "../images/churchLogo.png";
import "../Home.css";
export default function Header() {
  const [click, setClick] = useState(false);

  function HandleClick() {
    setClick(!click);
  }

  return (
    <div>
      <nav className="navbar-header">
        <div className="navbarContainer">
          <Link to="/" className="navbar-logo">
            <img src={churchLogo} alt="RCCG Logo" />
          </Link>
          <div className="menu-icons" onClick={HandleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "navbar-menu active" : "navbar-menu"}>
            <li>
              <Link to="/home" className="navbar-links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="navbar-links">
                About
              </Link>
            </li>
            <li>
              <Link to="/events" className="navbar-links">
                Event
              </Link>
            </li>
            <li>
              <Link to="/ministries" className="navbar-links">
                Ministries
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="navbar-links">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navbar-links">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
