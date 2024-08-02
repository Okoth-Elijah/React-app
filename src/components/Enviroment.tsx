import SocialLinks from "./SocialLinks";
import wonders from "../assets/images/wonders.jpeg";
import coral from "../assets/images/coral.jpeg";
import gardening from "../assets/images/gardening.jpeg";
import oceancrisis from "../assets/images/oceancrisis.jpeg";
import wildlife from "../assets/images/wildlife.jpeg";
import deforestation from "../assets/images/deforestation.jpeg";
import renewable from "../assets/images/renewable.jpeg";
import climateb from "../assets/images/cilmateb.jpeg";

const Enviroment = () => {
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
            Nature's Wonders
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={wonders}
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
            Climate Change Basics
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={climateb}
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
            Renewable Energy Sources
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={renewable}
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
            The Impact of Deforestation
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={deforestation}
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
            Wildlife Protection Efforts
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={wildlife}
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
            Oceans in Crisis
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={oceancrisis}
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
            Urban Gardening Ideas
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={gardening}
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
            Protecting Coral Reefs
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={coral}
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

export default Enviroment;
