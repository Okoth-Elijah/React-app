import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div
      className=" conatiner-fluid  d-flex justify-content-center bg-white  py-5  mx-auto my-5"
      id="login-div"
    >
      <div className=" conatiner-fluid~~ d-flex flex-column justify-content-center border border-2 bg-white rounded lg-content">
        <img
          src={logo}
          alt="logo"
          className="image img-fluid logo-image my-auto mx-auto"
        />
        <div>
          <p
            className="d-flex justify-content-center"
            style={{ marginBottom: "-3px", marginTop: "5px" }}
          >
            Welcome to!
          </p>
          <h2 className="d-flex justify-content-center flex-grow-1">
            Article <span className="text-warning">Avenue</span>
          </h2>
          <form action="*" className="login-form  rounded-3">
            <div className="d-block mb-3">
              <input
                type="Email"
                className="form-control pass mb-3"
                id="Email"
                name="email"
                placeholder="Enter email"
                required
              />
              <input
                type="Password"
                className="form-control pass"
                id="Password"
                name="Password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
            <div className="link-container d-flex gap-3 mt-3 justify-content-center">
              <p>
                Don't have an account? &nbsp;
                <NavLink to="Register" className=" text-decoration-none ">
                  Register.
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
