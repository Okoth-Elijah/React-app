import logo from "../assets/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const navigate = useNavigate();

  const input = (e: { preventDefault: () => void }) => {
    e.preventDefault;

    if (password === confirm) {
      const data = {
        name: name,
        email: Email,
        password: password,
      };

      localStorage.setItem("User_data", String(data));
      console.log(data);

      // window.location.href = "/login";
      navigate("/login");
    } else {
      alert("Password and Confirm password should be the same");
    }
  };

  return (
    <div className="container bg-white mt-3 register-container ">
      <img
        src={logo}
        alt="logo"
        width={100}
        height={100}
        style={{ borderRadius: "50%" }}
        className="image"
      />
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <h2 className="register-title  ">
            Article <span className="text-warning">Avenue</span>
          </h2>
          <form action="" className=" p-3 Register" style={{ width: "500px" }}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                onChange={(e) => setName(e.target.value)}
                placeholder="Username"
                required
              />
              <label htmlFor="floatingInput">UserName</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="input-email"
                required
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-row  password-aline">
              <div className="form-floating mb-3 col-sm-6">
                <input
                  type="Password"
                  className="form-control"
                  id="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <label htmlFor="floatingInput">Password</label>
              </div>
              <div className="form-floating mb-3 col-sm-6">
                <input
                  type="Password"
                  className="form-control"
                  id="floatingPassword"
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="Password"
                  required
                />
                <label htmlFor="floatingInput">Confirm-Password</label>
              </div>
            </div>

            <button
              type="button"
              onClick={input}
              className="btn btn-primary btn-md  w-100"
            >
              Submit
            </button>
            <div className="link-container d-flex justify-content-center mt-3 ">
              <p style={{ width: "50%" }}>Already have an account?</p>
              <NavLink to="*" className=" text-decoration-none  ">
                Login
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
