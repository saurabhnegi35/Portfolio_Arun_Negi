import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGitHub } from '@fortawesome/free-brands-svg-icons'
import { FaGithub, FaGoogle, FaLinkedin, FaTiktok } from "react-icons/fa";
import "./Header.css";

// header function
const Header = () => {
  const [isWhite, setIsWhite] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 70) {
      setIsWhite(true);
    } else {
      setIsWhite(false);
    }
  };

  // 692
  window.addEventListener("scroll", changeColor);

  return (
    <div className={isWhite ? "nav-background" : "nav"}>
      <a>Portfolio</a>
      <ul className="navbar-navlist">
        <li>HOME</li>
        <li>ABOUT ME</li>
        <li>PORTFOLIO</li>
        <li>CONTACT ME</li>
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
        <li>
          <FaTiktok />
        </li>
        <li>
          <img src={"../../GFG_black.svg"}></img>
        </li>
        {/* <li><FontAwesomeIcon icon={faGoogleLogo} /></li>
                <li><FontAwesomeIcon icon={faLinkedIn} /></li> */}
        {/* <li><FontAwesomeIcon icon="fa-regular fa-coffee" /></li> */}
      </ul>
    </div>
  );
};

export default Header;
