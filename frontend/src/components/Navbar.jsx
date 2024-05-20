import React, { useEffect, useState } from "react";
import "./components.css"
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dark, setisdark] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (dark) {
      document.documentElement.style.setProperty('--bg', 'rgba(18, 18, 18, 1)');
      document.documentElement.style.setProperty('--text', 'white');
      document.documentElement.style.setProperty('--title', 'white');
      document.documentElement.style.setProperty('--primary-shadow', '0 0px 235px rgb(214 24 214)');
      document.documentElement.style.setProperty('--linear-shadow', 'linear-gradient(21deg, transparent 0%, transparent 52%, rgba(334,333,338,1) 404%, rgba(231,231,231,1) 165%)');
      document.documentElement.style.setProperty('--footer', 'rgba(49, 25, 49, 1)');
      // Reset other properties as needed
    } else {
      document.documentElement.style.setProperty('--primary-shadow', '0 0px 21px rgb(138 97 138)');
      document.documentElement.style.setProperty('--bg', 'white');
      document.documentElement.style.setProperty('--text', 'rgba(18, 18, 18, 0.8)');
      document.documentElement.style.setProperty('--title', 'rgba(18, 18, 18, 1)');
      document.documentElement.style.setProperty('--linear-shadow', ' linear-gradient(19deg, transparent 0%, transparent 52%, rgba(255,255,255,1) 55%, rgba(231,231,231,1) 100%)');
      document.documentElement.style.setProperty('--footer', 'rgba(202, 188, 215, 1)');

      // Set other properties for night mode
    }
  }, [dark])
  

  
  return (
    <nav className="nav--bar container df container">
      <img src="/image/logo.png" alt="" className="layer" srcset="" />
      <div className={`links df ${isOpen ? 'opened' : ''}`} id="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/products">Products</NavLink>
      </div>
      <button
      className={`menu ${isOpen ? 'opened' : ''}`}
      onClick={toggleMenu}
      aria-expanded={isOpen}
      aria-label="Main Menu"
    >
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path
          className="line line1"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path className="line line2" d="M 20,50 H 80" />
        <path
          className="line line3"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </button>

      <div className="night-mode-button">
        <input type="checkbox" class="checkbox" value={dark} onChange={()=>{setisdark(!dark); console.log(dark)}}  id="chk" />
        <label class="label" for="chk">
            <MdOutlineWbSunny className="fas fa-sun" />
            <IoMoonOutline className="fas fa-moon" />
            <div class="ball">

            <svg width="6" height="17" viewBox="0 0 6 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="shape" d="M4.03717 15.7261C0.0688448 11.7578 0.0837379 5.30896 4.07043 1.32227" stroke="#8D168B" stroke-width="2" stroke-linecap="round"/>
</svg>
            </div>

        </label>
        </div>
    </nav>
  );
}

export default Navbar;
