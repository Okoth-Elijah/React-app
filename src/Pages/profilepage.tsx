import { Link } from "react-router-dom";
import profi from "../assets/images/profi.jpeg";

const Profilepage = () => {
  return (
    <section className=" border border-danger bg-info d-flex">
      <div className="profile-section  bg-primary">
        <h4 className="text-center text-white fs-3 mt-3">Success</h4>
      </div>
      <div className="border border-muted border-2 profile-container-5 d-flex flex-column mx-auto">
        <nav className="navbar bg-body-tertiary profile-navbar">
          <div className="container-fluid">
            <a className="navbar-brand">Profile Page</a>
            <form
              className="d-flex"
              role="search"
              style={{ marginLeft: "20em" }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div className=" me-3 text-danger" style={{ cursor: "pointer" }}>
              <button type="button" className="btn btn-danger icon-btn">
                <i className="fi fi-rs-portal-exit fs-3 "></i>...
              </button>
            </div>
          </div>
        </nav>
        <section className="mt-4 bg-white  py-3">
          <div className="d-flex">
            <div className="bg-white img-fluid d-flex rounded justify-content-between py-2 px-2 mx-3 profile-img-4-container ">
              <img src={profi} alt="profile-image" />
              <div className=" lh-1 ">
                <h4>Wander lilly</h4>
                <p>
                  <span className="text-primary fw-bold me-3">
                    Contact Information :
                  </span>
                  +256 7048498764
                </p>
                <p>
                  <span className="text-primary fw-bold me-3">Location :</span>
                  Kampala / Uganda
                </p>
                <p>
                  <span className="text-primary fw-bold me-3"> Bio :</span>
                  Passionate writer exploring diverse stories.
                </p>
                <p>
                  <span className="text-primary fw-bold me-3">Posts :</span> 5
                  posts
                </p>
                <div className=" px-2 py-2 d-flex justify-content-evenly fs-4 lin-container">
                  <Link className="text-decoration-none" to="">
                    <i
                      className="fi fi-brands-facebook co-1"
                      style={{ color: "#1877f2" }}
                    ></i>
                  </Link>

                  <Link className="text-decoration-none" to="">
                    <i
                      className="fi fi-brands-instagram co-2"
                      style={{ color: "#c13584" }}
                    ></i>
                  </Link>

                  <Link className="text-decoration-none" to="">
                    <i
                      className="i fi-brands-tik-tok co-2"
                      style={{ color: "#010101" }}
                    ></i>
                  </Link>

                  <Link className="text-decoration-none" to="">
                    <i
                      className="fi fi-brands-twitter-alt-circle co-3"
                      style={{ color: "#1da1f2" }}
                    ></i>
                  </Link>

                  <Link className="text-decoration-none" to="">
                    <i
                      className="fi fi-brands-youtube co-4"
                      style={{ color: "#ff0000" }}
                    ></i>
                  </Link>

                  <Link className="text-decoration-none" to="">
                    <i
                      className="fi fi-brands-github co-5"
                      style={{ color: "#181717" }}
                    ></i>
                  </Link>

                  <Link className="text-decoration-none" to="">
                    <i
                      className="fi fi-brands-pinterest co-6"
                      style={{ color: "#e60023" }}
                    ></i>
                  </Link>

                  <Link className="text-decoration-none" to="">
                    <i
                      className="fi fi-brands-behance co-7"
                      style={{ color: "#0057ff" }}
                    ></i>
                  </Link>

                  <Link className="text-decoration-none" to="">
                    <i
                      className="fi fi-brands-dribbble co-8"
                      style={{ color: "#ea4c89" }}
                    ></i>
                  </Link>
                </div>
              </div>
              <i
                className="fi fi-rr-user-pen fs-4 text-success"
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div className="container-5 d-flex flex-column justify-content-center ps-2 ">
              <h5 className="text-center ">Achievements</h5>
              <p>
                <span className="text-primary fw-bold">
                  Most Read Article :
                </span>
                <i
                  className="fi fi-rr-stars ms-3"
                  style={{ color: "orangered" }}
                ></i>
              </p>
              <p>
                <span className="text-primary fw-bold">
                  Article of the Month :
                </span>
                <i
                  className="fi fi-ss-trophy-star ms-3"
                  style={{ color: "orangered" }}
                ></i>
              </p>
              <p style={{ color: "orangered" }}>
                <span className="text-primary fw-bold me-3">
                  Top Contributor Badge :
                </span>
                5.5k <span className="text-success">Views!</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Profilepage;
