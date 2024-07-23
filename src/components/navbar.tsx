import { Link } from "react-router-dom";
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
        <Link className="navbar-brand" to="/">
          Article <span className="text-warning">Avenue</span>
        </Link>
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
              <Link
                className="nav-link active"
                aria-current="page"
                to="/articles/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/articles/technology">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/articles/healthandwellness"
                  >
                    Health and Wellness
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/articles/lifestyle">
                    Lifestyle
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Business and Finance
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Science
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Education
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Politics
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Food and Drink
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Culture
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Environment
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Automotive
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/articles/aboutus"
                aria-disabled="true"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/articles/contactus"
                aria-disabled="true"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Register/*" aria-disabled="true">
                Logout
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" aria-disabled="true">
                Featured Articles
              </Link>
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
            <Link to="#">
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
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
