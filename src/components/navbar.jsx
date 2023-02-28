import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import homeLogo from "../assets/home.svg";
import browseLogo from "../assets/browse.svg";
import headPhones from "../assets/headphones.svg";
import fill from "../assets/fill.svg";
import "../style/style.css";

const Navbar = () => {
  return (
    <header>
      <nav className="primary-nav">
        <Link to="/" className="primary-nav__logo">
          <img src={logo} alt="logo" />
          <span>tunescape</span>
        </Link>
        <ul className="primary-nav__ul">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "primary-nav__ul__links active"
                  : "primary-nav__ul__links"
              }
            >
              <img src={fill} alt="home" />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/browse" className="primary-nav__ul__links">
              <img src={homeLogo} alt="browse" />
              <span>Browse</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/favourites" className="primary-nav__ul__links">
              <img src={browseLogo} alt="Favourite" />
              <span>Favourite</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/library" className="primary-nav__ul__links">
              <img src={headPhones} alt="library" />
              <span>Library</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
