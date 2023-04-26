import { React, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import gfg from "../../gfgblack.svg";
// import GfgIcon from "../icons/GfgIcon";
// import LeetcodeIcon from "../icons/LeetcodeIcon";
// import { faGitHub } from '@fortawesome/free-brands-svg-icons'
import { FaGithub, FaGoogle, FaLinkedin, FaTiktok } from "react-icons/fa";
import "./Header.css";

// header function
const Header = () => {
  const [isWhite, setIsWhite] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setIsWhite(true);
    } else {
      setIsWhite(false);
    }
  };
  //   const location = useLocation();

  // 692
  window.addEventListener("scroll", changeColor);

  return (
    <div className={isWhite ? "nav-background" : "nav"}>
      <NavLink to="/" className="nav-link" activeClassName="nav-link-active">
        <a className="ml-0">Portfolio</a>
      </NavLink>
      <ul className="navbar-navlist">
        <NavLink to="/" className="navbar-navlist ml-0">
          <li>HOME</li>
        </NavLink>
        <NavLink to="/about" className="navbar-navlist ml-0">
          <li>ABOUT ME</li>
        </NavLink>
        <NavLink to="/portfolio" className="navbar-navlist ml-0">
          <li>PORTFOLIO</li>
        </NavLink>
        <NavLink to="/contact" className="navbar-navlist ml-0">
          <li>CONTACT ME</li>
        </NavLink>
      </ul>
      <ul className="navbar-social">
        <li>
          <FaGithub />
        </li>
        <li>
          <FaGoogle />
        </li>
        <li>
          <FaLinkedin />
        </li>
        {/* <li>
          <LeetcodeIcon className="leetcode-icon" />
        </li>
        <li>
          {/* <img src={gfg} className="gfg-icon"></img> */}
        {/* <GfgIcon className="gfg-icon" /> */}
        {/* </li> */}
        {/*  */}
        {/* <li><FontAwesomeIcon icon={faGoogleLogo} /></li>
                <li><FontAwesomeIcon icon={faLinkedIn} /></li> */}
        {/* <li><FontAwesomeIcon icon="fa-regular fa-coffee" /></li> */}
      </ul>
    </div>
  );
};

export default Header;
