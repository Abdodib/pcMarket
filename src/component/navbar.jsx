import {React , useState }from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; 
import { FaUser , FaShoppingCart,  } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md"
import { TfiMenu } from "react-icons/tfi";
import { RiMenuUnfold3Line } from "react-icons/ri";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"><h1>PC <span>Market</span></h1></Link>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/"><h2> Home</h2></Link></li>
        <li><Link to="/product"><h2>Product</h2></Link></li>
        <li><Link to="/deals"><h2>Deals</h2></Link></li>
        <li><Link to="/support"><h2>Support</h2></Link></li>
        <li><Link to="/admin" className="admin"><h2><MdAdminPanelSettings />Admin</h2></Link></li>
        <div className="nav-icons">
        <li><Link to="/account"><h3><FaUser/></h3></Link></li>
        <li><Link to="/cart"><h3> <FaShoppingCart/></h3></Link></li>
        </div>
      </ul>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? <RiMenuUnfold3Line /> : <TfiMenu />}
      </button>
    </nav>
  );
}
export default Navbar;