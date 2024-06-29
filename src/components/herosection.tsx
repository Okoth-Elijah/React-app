import logo from "../assets/images/logo.png";
import back from "../assets/images/back.jpeg";

const Herosection = () => {
  return (
    <div
      className="row hero-section d-flex justify-content-center"
      style={{
        position: "relative",
        width: "95%",
        marginLeft: "35px",
      }}
    >
      <div className="cotainer-fluid col-md-6 col-lg-12 hero-col">
        <div className="d-flex justify-content-center align-items-center gap-3 pt-3">
          <h2 className="heading ">
            Welcome to Article Avenue your - Your Destination for insightful
            Articles!
          </h2>
          <img
            src={logo}
            alt=""
            style={{
              width: "70px",
              height: "70px",
              objectFit: "cover",
              borderRadius: "36px",
              boxShadow: "4px 3px 10px orange",
            }}
          />
        </div>
        <p className="lead d-flex justify-content-center">
          "Explore a World of Knowledge with Our Curated Articles Across Various
          Topics".
        </p>
        <div className="descip-container px-5 d-flex gap-5 justify-content-center align-items-center flex-wrap">
          <img
            src={back}
            alt="futured image"
            style={{
              width: "300px",
              height: " 240px",
              marginRight: "50px",
              marginLeft: "20px",
              marginTop: "10px",
              marginBottom: "10px",
              boxShadow: "3px 5px 15px gray",
              borderRadius: "2px",
            }}
          />
          <div className="col-5">
            <div className="hero-description">
              <p className="description-para  text-center d-flex mb-5">
                Discover high-quality, well-researched articles on technology,
                health, business, entertainment, and more. Stay informed and
                inspired with Article Avenue.
              </p>
            </div>
            <div className="buttons-links d-flex justify-content-center">
              <button className="btn btn-primary btn-sm ">Read Now</button>
              <button className="btn btn-secondary btn-sm ">
                Explore Articles
              </button>
              <button className="btn btn-success btn-sm ">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
