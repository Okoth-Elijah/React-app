import logo from "../assets/images/logo.png";

const forgotpassword = () => {
  return (
    <div
      className="container-fluid bg-white rounded-2 px-3 py-3 "
      style={{
        position: "relative",
        width: "70vh",
        height: "70vh",
        flexDirection: "column",
        border: "3px solid gray",
      }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-12  d-flex" style={{ flexDirection: "column" }}>
          <img
            src={logo}
            alt="logo"
            width={100}
            height={100}
            style={{ borderRadius: "50%", marginLeft: "35%" }}
            className="image mb-3 "
          />
          <div className="d-flex justify-content-center gap-2">
            <p className="text-center">Welcome to!</p>
            <p className="text-center">
              Article <span className="text-warning">Avenue</span>
            </p>
          </div>
          <form action="" className="px-3 py-3">
            <p className="para text-center"> For password Recovery!</p>
            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control"
                id="floatingInput"
                placeholder="PhoneNumber"
                required
              />
              <label htmlFor="floatingInput">Enter email address</label>
            </div>
            <div className="submit-button">
              <button type="submit" className="btn btn-primary w-100">
                Get Code
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default forgotpassword;
