import SocialLinks from "./SocialLinks";
import biotechnology from "../assets/images/biotechnology.jpeg";
import space from "../assets/images/space.jpeg";
import physics from "../assets/images/physics.jpeg";
import neuroscience from "../assets/images/neuroscience.jpeg";
import climate from "../assets/images/climate.jpeg";
import genetics from "../assets/images/genetics.jpeg";
import austrobiology from "../assets/images/austrobiology.jpeg";
import quantom from "../assets/images/quantom.jpeg";

const Science = () => {
  return (
    <section>
      <div
        className="row d-flex justify-content-center "
        style={{ marginTop: "90px", width: "100%", position: "relative" }}
      >
        <div
          className=" my-3 border border-4 ms-4 justify-content-center bg-white "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Quantum Mysteries
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={quantom}
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
              Read More
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
            Astrobiology
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={austrobiology}
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
              Read More
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
            Genetic Frontiers
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={genetics}
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
              Read More
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
            Climate Science
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={climate}
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
              Read More
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
            Neuroscience
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={neuroscience}
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
              Read More
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
            Physics Unveiled
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={physics}
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
              Read More
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
            Space Exploration
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={space}
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
              Read More
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
            Biotechnology
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={biotechnology}
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
              Read More
            </button>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Science;
