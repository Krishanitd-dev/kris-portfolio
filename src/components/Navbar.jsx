import image1 from "../assets/nt.png";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-container">

        <a href="#home" className="sport-logo" onClick={closeMenu}>
         <img src={image1} alt="Krish" className="sp-logo" />
          <span className="sp-logo"></span>
           <b className="nav-name">Krishani </b>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

         

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;