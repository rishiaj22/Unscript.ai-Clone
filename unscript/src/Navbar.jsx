import "./Navbar.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://cdn.prod.website-files.com/6643532c58c89f83c4fcd358/66435cbb1e8a3fb4dd89a6b1_unscript%20Logo.webp" alt="Unscript Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#">Use Cases <FontAwesomeIcon icon={faAngleDown} style={{ color: '#0d0d0d' }} /></a>
        </li>
        <li>
          <a href="#">Features <FontAwesomeIcon icon={faAngleDown} style={{ color: '#0d0d0d' }} /></a>
        </li>
        <li>
          <a href="#">Resources <FontAwesomeIcon icon={faAngleDown} style={{ color: '#0d0d0d' }} /></a>
        </li>
        <li>
          <a href="#">Company <FontAwesomeIcon icon={faAngleDown} style={{ color: '#0d0d0d' }} /></a>
        </li>
      </ul>
      <button className="navbar-button">Contact Sales</button>
    </nav>
  );
}

export default Navbar;
