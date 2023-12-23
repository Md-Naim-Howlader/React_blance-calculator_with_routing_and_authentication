import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container footerWraper">
        <ul className="footerIcon">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaXTwitter />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
