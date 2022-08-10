import { Link } from 'react-router-dom';
import { AiOutlinePhone } from 'react-icons/ai';
import { GoHome } from 'react-icons/go';
import { BsShop, BsPersonCircle } from 'react-icons/bs';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul className="menu">
        <Link to="/" className={`mobile`}>
          <li>
            <GoHome className="nav-icon" />
            <span className="nav-text">mobile</span>
          </li>
        </Link>
        <Link to="/home">
          <li>
            <BsPersonCircle className="nav-icon" />
            <span className="nav-text">Accueil</span>
          </li>
        </Link>
        <Link to="/login">
          <li>
            <BsShop className="nav-icon" />
            <span className="nav-text">Login</span>
          </li>
        </Link>
        <Link to="/recipe">
          <li>
            <AiOutlinePhone className="nav-icon" />
            <span className="nav-text">Blog</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
