import SocialLinks from "./SocialLinks";
import minimalistliving from "../assets/images/minimalistliving.jpeg";
import traveltips from "../assets/images/traveltips.jpeg";
import homedecor from "../assets/images/homedecor.jpeg";
import fashion from "../assets/images/fashion.jpeg";
import worklife from "../assets/images/worklife.jpeg";
import adventure from "../assets/images/adventure.jpeg";
import culinary from "../assets/images/culinary.jpeg";
import fitness from "../assets/images/fitness.jpeg";

const Lifestyle = () => {
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
            className="mt-3 text-center "
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Minimalist Living
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={minimalistliving}
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
              Explore Now
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center "
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Travel Tips
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={traveltips}
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
              Explore Now
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center "
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Home Decor Ideas
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={homedecor}
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
              Explore Now
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center "
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Fashion Trends
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={fashion}
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
              Explore Now
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center "
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Work-Life Balance
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={worklife}
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
              Explore Now
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center "
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Outdoor Adventures
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={adventure}
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
              Explore Now
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center "
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Culinary Delights
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={culinary}
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
              Explore Now
            </button>
            <SocialLinks />
          </div>
        </div>
        <div
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center "
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Fitness Routines
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={fitness}
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
              Explore Now
            </button>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
