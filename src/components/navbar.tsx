import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary nav-style"
      style={{
        position: "absolute",
        top: "0",
        width: "100%",
        zIndex: "1000",
      }}
    >
      <div className="container-fluid ">
        <Link className="navbar-brand nav-nn" to="/articles/home">
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
          className="collapse navbar-collapse px-3 py-3  ps-5  good"
          id="navbarScroll"
        >
          <ul className="navbar-nav me-auto d-flex justify-content-center my-2 my-lg-0 navbar-nav-scroll">
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
                  <Link className="dropdown-item" to="/articles/business">
                    Business and Finance
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/articles/science">
                    Science
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/articles/Education">
                    Education
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/articles/Entertainment">
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/articles/politics">
                    Politics
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/articles/sports">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/articles/foodanddrinks">
                    Food and Drink
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/articles/culture">
                    Culture
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/articles/Environment">
                    Environment
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/articles/automotive">
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
                Contact Us
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
            <div className="search-bar d-flex search">
              <input
                className="form-control rounded-0  "
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ height: "40px" }}
              />
              <button
                className="btn btn-outline-success rounded-0"
                type="submit"
                style={{ height: "40px" }}
              >
                Search
              </button>
            </div>
          </form>
          <ProfileDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
