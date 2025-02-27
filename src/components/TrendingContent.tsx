/* eslint-disable @typescript-eslint/no-explicit-any */
import culture from "../assets/images/culture.jpeg";
import climate from "../assets/images/climate.jpeg";
import Bike from "../assets/images/Bike.jpeg";

const TrendingContent = () => {
  return (
    <>
      <div
        className=" conatiner-fluid trending-container"
        style={{ position: "relative" }}
      >
        <h4 className="heading text-white">Trending Articles</h4>
        <div className=" d-flex  justify-content-between ">
          <div className="d-flex">
            <img
              className="mt-3 image-fluid me-2"
              src={culture}
              alt="img"
              style={{ width: "70px", height: "70px", borderRadius: "45px" }}
            />
            <div className=" my-2 " style={{ width: "14em" }}>
              <h5 className="text-start text-white">culture</h5>
              <p
                className="text-light"
                style={{
                  width: "17em",
                  lineHeight: "20px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium eaque autem .
              </p>
            </div>
          </div>
          <div className="d-flex gap-2 ">
            <img
              className="mt-3 image-fluid me-2"
              src={Bike}
              alt="img"
              style={{ width: "70px", height: "70px", borderRadius: "45px" }}
            />
            <div className=" my-2 " style={{ width: "14em" }}>
              <h5 className="text-start text-white">Happyness</h5>
              <p
                className="text-light"
                style={{
                  width: "17em",
                  lineHeight: "20px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium eaque autem .
              </p>
            </div>
          </div>
          <div className="d-flex gap-2 ">
            <img
              className="mt-3 image-fluid me-2"
              src={climate}
              alt="img"
              style={{ width: "70px", height: "70px", borderRadius: "45px" }}
            />
            <div className=" my-2 " style={{ width: "14em" }}>
              <h5 className="text-start text-white ">WorkForce Ecosystems</h5>
              <p
                className="text-light"
                style={{
                  width: "17em",
                  lineHeight: "20px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium eaque autem .
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default TrendingContent;
