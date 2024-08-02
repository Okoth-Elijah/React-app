import { useState } from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log({ email, password });
  };

  return (
    <div className="container  d-flex justify-content-center bg-white mt-5 login-div">
      <img
        src={logo}
        alt="logo"
        width={100}
        height={100}
        style={{ borderRadius: "50%" }}
        className="image"
      />
      <div className="row  justify-content-center">
        <div className="col-lg-12">
          <p
            className="d-flex justify-content-center"
            style={{ marginBottom: "-3px", marginTop: "5px" }}
          >
            Welcome to!
          </p>
          <h2 className="d-flex justify-content-center">
            Article <span className="text-warning">Avenue</span>
          </h2>
          <form action="*" className="login-form  rounded-3">
            <div className="d-block mb-3">
              <input
                type="Email"
                className="form-control pass mb-3"
                id="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
              <input
                type="Password"
                className="form-control pass"
                id="Password"
                onChange={(e) => setPassword(e.target.value)}
                name="Password"
                placeholder="Password"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              onClick={handleLogin}
            >
              Login
            </button>
            <div className="link-container d-flex gap-3 mt-3 justify-content-center">
              <p>Don't have an account?</p>
              <NavLink to="Register" className=" text-decoration-none ">
                Register.
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
