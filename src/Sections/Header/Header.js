import "./Header.css";
import logo from "../../assets/images/logo.png";
import { NavItem } from "../../Components/index";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top main-navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <NavItem link="/" active="true">
                Home
              </NavItem>
              <NavItem link="#2">About</NavItem>
              <NavItem link="#3">Servies</NavItem>
              <NavItem link="#4">Contact</NavItem>
              <NavItem link="/profile">Profile</NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
