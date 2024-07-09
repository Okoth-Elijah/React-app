import logo from "../assets/images/logo.png";

const Passwordverification = () => {
  return (
    <div className="container-fluid bg-white Password-verification-contaner">
      <div className="row">
        <div className="col-lg-12 " style={{ width: "25rem" }}>
          <img
            src={logo}
            alt="logo"
            width={100}
            height={100}
            style={{ borderRadius: "50%", marginLeft: "35%" }}
            className="image mb-3 image-fluid mt-3"
          />
          <form action="">
            <div className="form-floating mb-3">
              <div>
                <div className="d-flex justify-content-center gap-2">
                  <p className="text-center">Welcome to!</p>
                  <p className="text-center">
                    Article <span className="text-warning">Avenue</span>
                  </p>
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="floatingInput"
                  placeholder="PhoneNumber"
                  required
                />
                <label htmlFor="floatingInput">Enter Code</label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary btn-md w-100 mb-3"
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Passwordverification;
