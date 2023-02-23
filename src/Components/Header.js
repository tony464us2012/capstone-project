import React from 'react'
import Nav from './Nav'
// import Hamburger from "../assets/hamburger.png";
// import Close from "../assets/close.png";

const Header = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }
  return (
    <header>
      <nav className="burger">
        <img
          src={require("../assets/nav-logo.png")}
          alt="Little Lemon logo"
          className="nav-image"
        ></img>

        <button className="burger-icon" onClick={handleToggle}>
          <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
        </button>
      </nav>
      <Nav device="desktop" />
      {navbarOpen ? <Nav device="mobile" /> : ""}
    </header>
  )
}

export default Header