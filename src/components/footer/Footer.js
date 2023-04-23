import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGitHub } from '@fortawesome/free-brands-svg-icons'
import { FaGithub, FaGoogle, FaLinkedin, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <p>Social Media</p>
                {/* <p>Find me on Social Media</p> */}
                <ul className='footer-social'>
                    <li><FaGithub /></li>
                    <li><FaGoogle /></li>
                    <li><FaLinkedin /></li>
                    <li><FaTiktok /></li>
                </ul>
            </div>
        </>
    )
}

export default Footer;