import technology from "../assets/images/technology.jpeg";
import Automotive from "../assets/images/Automotive.jpeg";
import Education from "../assets/images/Education.jpeg";
import Environment from "../assets/images/Environment.jpeg";
import lifestyle from "../assets/images/lifestyle.jpeg";
import science from "../assets/images/science.jpeg";
import sports from "../assets/images/sports.jpeg";
import business from "../assets/images/business .jpeg";
import entertainment from "../assets/images/entertainment.jpeg";
import politic from "../assets/images/politic.jpeg";
import culture from "../assets/images/culture.jpeg";
import food from "../assets/images/food.jpeg";
import health from "../assets/images/health.jpeg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className="col-12 col-md-4 col-lg-3 py-2 text-center ">
        <img src={technology} alt="" className="category-image" />
        <Link
          to="/articles/technology"
          className="para pt-3 text-decoration-none  "
        >
          Technology
        </Link>
        <button type="button" className=" btn btn-primary w-100 btn-3 ">
          Explore more
        </button>
      </div>
      <div className="col-12 col-md-4 col-lg-3 py-2 text-center ">
        <img src={health} alt="" className="category-image" />
        <Link to="#" className="para pt-3 text-decoration-none  ">
          Health & Wellness
        </Link>
        <button type="button" className=" btn btn-primary w-100 btn-3">
          Explore more
        </button>
      </div>
      <div className="col-12 col-md-4 col-lg-3 py-2 text-center ">
        <img src={lifestyle} alt="" className="category-image" />
        <Link to="#" className="para pt-3 text-decoration-none  ">
          Lifestyle
        </Link>
        <button type="button" className=" btn btn-primary w-100 btn-3">
          Explore more
        </button>
      </div>
      <div className="col-12 col-md-4 col-lg-3 py-2 text-center ">
        <img src={business} alt="" className="category-image" />
        <Link to="#" className="para pt-3 text-decoration-none  ">
          Business & Finance
        </Link>
        <button type="button" className=" btn btn-primary w-100 btn-3">
          Explore more
        </button>
      </div>
      <div className="col-12 col-md-4 col-lg-3 py-2 text-center ">
        <img src={science} alt="" className="category-image" />
        <Link to="#" className="para pt-3 text-decoration-none  ">
          Science
        </Link>
        <button type="button" className=" btn btn-primary w-100 btn-3">
          Explore more
        </button>
      </div>
      <div className="col-12 col-md-4 col-lg-3 py-2 text-center ">
        <img src={Education} alt="" className="category-image" />
        <Link to="#" className="para pt-3 text-decoration-none  ">
          Education
        </Link>
        <button type="button" className=" btn btn-primary w-100 btn-3">
          Explore more
        </button>
      </div>
      <div className="col-12 col-md-4 col-lg-3 py-2 text-center ">
        <img src={entertainment} alt="" className="category-image" />
        <Link to="#" className="para pt-3 text-decoration-none  ">
          Entertainment
        </Link>
        <button type="button" className=" btn btn-primary w-100 btn-3">
          Explore more
        </button>
      </div>
      <div className="col-12 col-md-4 col-lg-3 py-2 text-center ">
        <img src={politic} alt="" className="category-image" />
        <Link to="#" className="para pt-3 text-decoration-none  ">
          Politics
        </Link>
        <button type="button" className=" btn btn-primary w-100 btn-3">
          Explore more
        </button>
      </div>
      <div className="col-12 col-md-4 col-lg-3 py-2 text-center ">
        <img src={sports} alt="" className="category-image" />
        <Link to="#" className="para pt-3 text-decoration-none  ">
          Sports
        </Link>
        <button type="button" className=" btn btn-primary w-100 btn-3">
          Explore more
        </button>
      </div>
      <div className="col-12 col-md-4 col-lg-3 py-2 text-center ">
        <img src={food} alt="" className="category-image" />
        <Link to="#" className="para pt-3 text-decoration-none  ">
          Food & Drinks
        </Link>
        <button type="button" className=" btn btn-primary w-100 btn-3 ">
          Explore more
        </button>
      </div>
      <div className="col-12 col-md-4 col-lg-3 py-2 text-center ">
        <img src={culture} alt="" className="category-image" />
        <Link to="#" className="para pt-3 text-decoration-none  ">
          Culture
        </Link>
        <button type="button" className=" btn btn-primary w-100 btn-3">
          Explore more
        </button>
      </div>
      <div className="col-12 col-md-4 col-lg-3 py-2 text-center ">
        <img src={Environment} alt="" className="category-image" />
        <Link to="#" className="para pt-3 text-decoration-none  ">
          Environment
        </Link>
        <button type="button" className=" btn btn-primary w-100 btn-3">
          Explore more
        </button>
      </div>
      <div className="col-12 col-md-4 col-lg-3 py-2 text-center ">
        <img src={Automotive} alt="" className="category-image" />
        <Link to="#" className="para pt-3 text-decoration-none  ">
          Automotive
        </Link>
        <button type="button" className=" btn btn-primary w-100 btn-3">
          Explore more
        </button>
      </div>
    </>
  );
};

export default Categories;
