import { NavLink } from "react-router-dom";
import avatar from "../assets/images/avatar.jpeg";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "1000",
      }}
    >
      <div className="container-fluid ">
        <NavLink className="navbar-brand" to="/">
          Article <span className="text-warning">Avenue</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse px-3 py-3  ps-5 "
          id="navbarScroll"
        >
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/articles/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Technology
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Health and Wellness
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Lifestyle
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Business and Finance
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Science
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Education
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Entertainment
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Politics
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Sports
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Food and Drink
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Culture
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Environment
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Automotive
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/articles/aboutus"
                aria-disabled="true"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/articles/contactus"
                aria-disabled="true"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Register/*"
                aria-disabled="true"
              >
                Logout
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#" aria-disabled="true">
                Featured Articles
              </NavLink>
            </li>
          </ul>
          <form
            className="search-form"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              width: "300px",
              marginRight: "30px",
            }}
            role="search"
          >
            <div className="search-bar d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ height: "40px" }}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{ height: "40px" }}
              >
                Search
              </button>
            </div>
          </form>
          <div className="proflie">
            <NavLink to="#">
              <img
                src={avatar}
                alt="Profile"
                className="profile-image"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "25px",
                  boxShadow: " 0px 1px 5px gray",
                  opacity: "8",
                  transition: "boxshadow easein",
                }}
              />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
