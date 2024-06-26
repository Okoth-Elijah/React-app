
const navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Article <span className="text-warning">Avenue</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse px-3 py-3 pe-5 ps-5" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Technology</a></li>
                  <li><a className="dropdown-item" href="#">Health and Wellness</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Lifestyle</a></li>
                  <li><a className="dropdown-item" href="#">Business and Finance</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Science</a></li>
                  <li><a className="dropdown-item" href="#">Education</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Entertainment</a></li>
                  <li><a className="dropdown-item" href="#">Politics</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Sports</a></li>
                  <li><a className="dropdown-item" href="#">Food and Drink</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Culture</a></li>
                  <li><a className="dropdown-item" href="#">Environment</a></li>
                  <li><a className="dropdown-item" href="#">Automotive</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">SignUp</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">Featured Articles</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default navbar