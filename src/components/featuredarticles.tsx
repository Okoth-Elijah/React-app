import futured from "../assets/images/futured.jpeg";

const Featuredarticles = () => {
  return (
    <div>
      <div className="row">
        <div
          className="col-lg-12 d-flex "
          style={{
            border: "2px solid red",
            position: "relative",
            width: "1220px",
            marginLeft: "50px",
            gap: "20px",
          }}
        >
          <div className="border border-5">
            <img
              src={futured}
              alt="Featured Articles "
              style={{ width: "400px" }}
            />
          </div>
          <div className="border border-3 border-primary justify-content-center">
            <h4 className=" border border-3 mb-3 mt-2">
              Discover Our Top Picks: Featured Articles
            </h4>

            <p className="introduction" style={{ marginTop: "100px" }}>
              Welcome to our featured articles section, where knowledge meets
              inspiration. Delve into a curated selection of compelling reads
              designed to expand your horizons. From in-depth analyses of
              industry trends to insightful perspectives on current affairs,
              each article is handpicked to offer valuable insights and
              practical knowledge. Whether you're a seasoned professional or an
              avid learner, our featured articles are here to inform, engage,
              and inspire you on your journey of discovery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featuredarticles;
