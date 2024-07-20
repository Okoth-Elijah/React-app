import { useState } from "react";

const CreatePassword = () => {
  const [next, setNext] = useState("Next");

  const nextPage = () => {
    setNext("Go to nextpage");
  };

  return (
    <>
      <section className="container-fluid d-flex image-section">
        <div className="form-container">
          <h5 className="text-center text-decoration-underline par">
            <span className="text-warning fs-1 ">A</span>rticle Avenue. <br />
          </h5>
          <form
            action=""
            className="bg-white border rounded-top confirm"
            style={{
              justifyContent: "center",
              flexWrap: "wrap",
              width: "50vh",
              padding: "20px",
              alignItems: "center",
            }}
          >
            <h4 className="title text-center">Create Password</h4>
            <div className="form-floating mb-3 ">
              <input
                type="Password"
                className="form-control "
                id="floatingPassword-1"
                placeholder="input-Password"
                required
              />
              <label htmlFor="floatingInput">Enter Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="Password"
                className="form-control "
                id="floatingPassword"
                placeholder="input-Password"
                required
              />
              <label htmlFor="floatingInput">Confirm Password</label>
            </div>
            <button
              onClick={nextPage}
              type="button"
              className="btn btn-primary w-100"
            >
              {next}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CreatePassword;
