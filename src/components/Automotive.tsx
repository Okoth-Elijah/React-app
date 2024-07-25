import SocialLinks from "./SocialLinks";
import tires from "../assets/images/tires.jpeg";
import offe from "../assets/images/offe.jpeg";
import hybrid from "../assets/images/hybrid.jpeg";
import fuel from "../assets/images/fuel.jpeg";
import selfdriving from "../assets/images/selfdriving.jpeg";
import topl from "../assets/images/topl.jpeg";
import electriccar from "../assets/images/electriccar.jpeg";
import latestc from "../assets/images/latestc.jpeg";

const Automotive = () => {
  return (
    <section>
      <div
        className="row d-flex justify-content-center "
        style={{ marginTop: "90px", width: "100%", position: "relative" }}
      >
        <div
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Latest Car Tech Trends
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={latestc}
              alt="technology-article"
              style={{
                width: "250px",
                height: "350px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <button
              type="button"
              className="btn btn-primary rounded-1 mt-3 "
              style={{
                display: "flex",
                marginTop: "1px",
              }}
            >
              Read Now
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Electric Vehicles Explained
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={electriccar}
              alt="technology-article"
              style={{
                width: "250px",
                height: "350px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <button
              type="button"
              className="btn btn-primary rounded-1 mt-3 "
              style={{
                display: "flex",
                marginTop: "1px",
              }}
            >
              Read Now
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Top Luxury Cars of 2024
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={topl}
              alt="technology-article"
              style={{
                width: "250px",
                height: "350px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <button
              type="button"
              className="btn btn-primary rounded-1 mt-3 "
              style={{
                display: "flex",
                marginTop: "1px",
              }}
            >
              Read Now
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            The Future of Self-Driving Cars
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={selfdriving}
              alt="technology-article"
              style={{
                width: "250px",
                height: "350px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <button
              type="button"
              className="btn btn-primary rounded-1 mt-3 "
              style={{
                display: "flex",
                marginTop: "1px",
              }}
            >
              Read Now
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Fuel Efficiency Hacks
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={fuel}
              alt="technology-article"
              style={{
                width: "250px",
                height: "350px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <button
              type="button"
              className="btn btn-primary rounded-1 mt-3 "
              style={{
                display: "flex",
                marginTop: "1px",
              }}
            >
              Read Now
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            The Rise of Hybrid Cars
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={hybrid}
              alt="technology-article"
              style={{
                width: "250px",
                height: "350px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <button
              type="button"
              className="btn btn-primary rounded-1 mt-3 "
              style={{
                display: "flex",
                marginTop: "1px",
              }}
            >
              Read Now
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Off-Roading Essentials
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={offe}
              alt="technology-article"
              style={{
                width: "250px",
                height: "350px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <button
              type="button"
              className="btn btn-primary rounded-1 mt-3 "
              style={{
                display: "flex",
                marginTop: "1px",
              }}
            >
              Read Now
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Choosing the Right Tires
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={tires}
              alt="technology-article"
              style={{
                width: "250px",
                height: "350px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <button
              type="button"
              className="btn btn-primary rounded-1 mt-3 "
              style={{
                display: "flex",
                marginTop: "1px",
              }}
            >
              Read Now
            </button>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automotive;
