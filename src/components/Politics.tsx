import SocialLinks from "./SocialLinks";
import debates from "../assets/images/debates.jpeg";
import youth from "../assets/images/youth.jpeg";
import breakdom from "../assets/images/breakdom.jpeg";
import politicaltrend from "../assets/images/politicaltrend.jpeg";
import globalpolitics from "../assets/images/globalpolitics.jpeg";
import democracy from "../assets/images/democracy.jpeg";
import policyimpact from "../assets/images/policyimpact.jpeg";
import highlights from "../assets/images/highlights.jpeg";

const Politics = () => {
  return (
    <section>
      <div
        className="row d-flex justify-content-center "
        style={{ marginTop: "90px", width: "100%", position: "relative" }}
      >
        <div
          className=" my-3 border border-4 ms-4 justify-content-center bg-white"
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Election Highlights
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={highlights}
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
              Explore More
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center bg-white "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Policy Impact
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={policyimpact}
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
              Explore More
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center bg-white"
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Democracy Today
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={democracy}
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
              Explore More
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center bg-white"
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Global Politics
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={globalpolitics}
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
              Explore More
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center bg-white"
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Political Trends
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={politicaltrend}
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
              Explore More
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center bg-white"
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Policy Breakdown
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={breakdom}
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
              Explore More
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center bg-white"
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Youth in Politics
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={youth}
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
              Explore More
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center bg-white"
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Political Debates
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={debates}
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
              Explore More
            </button>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Politics;
