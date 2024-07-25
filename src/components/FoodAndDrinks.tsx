import SocialLinks from "./SocialLinks";
import planting from "../assets/images/planting.jpeg";
import wine from "../assets/images/wine.jpeg";
import coffee from "../assets/images/coffee.jpeg";
import global from "../assets/images/global.jpeg";
import streetfood from "../assets/images/streetfood.jpeg";
import eatinghacks from "../assets/images/eatinghacks.jpeg";
import cookingtips from "../assets/images/cookingtips.jpeg";
import easyrecipe from "../assets/images/easyrecipe.jpeg";

const FoodAndDrinks = () => {
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
            Quick & Easy Recipes
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={easyrecipe}
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
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Gourmet Cooking Tips
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={cookingtips}
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
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Healthy Eating Hacks
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={eatinghacks}
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
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Street Food Delights
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={streetfood}
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
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Global Cuisine Guide
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={global}
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
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            The Coffee Lover's Guide
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={coffee}
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
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            Wine Pairing Essentials
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={wine}
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
          className=" my-3 border border-4 ms-4 justify-content-center "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center"
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            The Art of Food Plating
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid im-s"
              src={planting}
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

export default FoodAndDrinks;
