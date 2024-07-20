import Education from "../assets/images/Education.jpeg";
import Environment from "../assets/images/Environment.jpeg";

const ContactUs = () => {
  return (
    <div
      className="  py-2 ps-2  "
      style={{
        justifyContent: "center",
        width: "70em",
        marginTop: "104px",
        height: "50vh",
        marginLeft: "9%",
      }}
    >
      <div
        className="d-flex  "
        style={{ position: "relative", marginLeft: "70px" }}
      >
        <div
          className="para-containerms-5 px-3 py-3 "
          style={{ width: " 1000px", height: "89vh", border: "2px solid gray" }}
        >
          <h4 className="headtitle fs-3">Want To Know More? </h4>
          <h5 className="heading-subtitle fs-4 mb-3">Reach out to us!</h5>
          <button type="button" className="btn btn-success btn-md w-40">
            Contact Us
          </button>
          <img
            src={Education}
            alt="bg-image"
            className="image-fluid"
            style={{
              marginLeft: "688px",
              marginTop: "20px",
              position: "absolute",
              left: "99px",
              width: "200px",
              height: "200px",
              borderRadius: "100px",
              borderTopLeftRadius: "200px",
              zIndex: "1",
              boxShadow: "3px 3px 15px orange",
            }}
          />

          <img
            src={Environment}
            alt="bg-image"
            className="image-fluid"
            style={{
              marginLeft: "500px",
              position: "absolute",
              marginTop: "-85px",
              width: "170px",
              height: "170px",
              borderRadius: "100px",
              zIndex: "1",
              boxShadow: "5px 3px 15px orange",
            }}
          />
          <div className="eclipse"></div>

          <hr style={{ marginTop: "11em", zIndex: "revert-layer" }} />
          <div
            className="col-md-6 justify-content-center d-flex "
            style={{ marginLeft: "260px", zIndex: "1", marginTop: "-180px" }}
          >
            <form
              action=""
              className="py-3 px-3 mb-3  rounded"
              style={{
                width: "400px",
                backgroundColor: "black",
                height: "60vh",
                zIndex: "1",
              }}
            >
              <h3 className="contact-title text-light">Contact Us</h3>
              <h4 className="contact-subtitle fs-5">contact us</h4>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Name"
                  required
                />
                <label htmlFor="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Email"
                  required
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Phone"
                  required
                />
                <label htmlFor="floatingInput">Phone</label>
              </div>
              <button type="submit" className="btn btn-success w-50">
                Submit
              </button>
            </form>
          </div>
          <p
            className="text-content "
            style={{ width: "300px", marginTop: "-200px" }}
          >
            Get started with; <br />
            <span className="text-warning">Article</span> Avenue and access the
            world of articles
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
