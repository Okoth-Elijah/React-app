import avatar from "../assets/images/avatar.jpeg";

const navbar = () => {
  return (
    <div className="navbar-container mb-2 border rounded-1  d-flex justify-content-center">
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary  "
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex: "1000",
        }}
      >
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            Article <span className="text-warning">Avenue</span>
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Technology
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Health and Wellness
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Lifestyle
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Business and Finance
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Science
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Education
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Entertainment
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Politics
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sports
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Food and Drink
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Culture
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Environment
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Automotive
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" aria-disabled="true">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" aria-disabled="true">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login-form " aria-disabled="true">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" aria-disabled="true">
                  Featured Articles
                </a>
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
              <a href="#">
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
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
