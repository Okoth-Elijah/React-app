/* eslint-disable @typescript-eslint/no-explicit-any */
import logo from "../assets/images/logo.png";
// import back from "../assets/images/back.jpeg";
import { useState, useEffect } from "react";
import axios from "axios";

const Herosection = () => {
  const [products, setProducts] = useState<any>([]);

  const getProducts = () => {
    axios
      .get("https://fakestoreapi.com/products/9")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(`You'v got an error: ${err}`));
  };

  useEffect(() => {
    getProducts();
  });

  return (
    <div className="d-flex flex-column hero-col ">
      <div
        className="d-flex justify-content-center align-items-center gap-3 pt-3"
        style={{ position: "inherit" }}
      >
        <h2 className="heading">{products.title}</h2>
        <img
          src={logo}
          alt=""
          className="img-fluid img-1 border border-danger"
          style={{
            width: "70px",
            height: "70px",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "36px",
            boxShadow: "4px 3px 10px orange",
          }}
        />
      </div>
      <p className="lead d-flex justify-content-center">
        "Explore a World of Knowledge with Our Curated Articles Across Various
        Topics".
      </p>
      <div className="descip-container   px-5 d-flex gap-5 justify-content-center align-items-center flex-wrap">
        <img
          src={products.image}
          alt="futured image"
          className="img-2 "
          style={{
            width: "300px",
            height: " 240px",
            marginRight: "50px",
            marginLeft: "20px",
            marginTop: "10px",
            marginBottom: "10px",
            borderRadius: "2px",
          }}
        />
        <div className="col-5">
          <div className="hero-description">
            <p className="description-para  text-center d-flex mb-5">
              {products.description}
            </p>
          </div>
          <div className="buttons-links d-flex justify-content-center">
            <button type="button" className="btn btn-primary btn-sm ">
              Read Now
            </button>
            <button type="button" className="btn btn-secondary btn-sm ">
              Explore Articles
            </button>
            <button type="button" className="btn btn-success btn-sm ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
