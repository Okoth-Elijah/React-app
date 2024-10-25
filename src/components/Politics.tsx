/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useState, useEffect } from "react";
import SocialLinks from "./SocialLinks";
// import debates from "../assets/images/debates.jpeg";
// import youth from "../assets/images/youth.jpeg";
// import breakdom from "../assets/images/breakdom.jpeg";
// import politicaltrend from "../assets/images/politicaltrend.jpeg";
// import globalpolitics from "../assets/images/globalpolitics.jpeg";
// import democracy from "../assets/images/democracy.jpeg";
// import policyimpact from "../assets/images/policyimpact.jpeg";
// import highlights from "../assets/images/highlights.jpeg";

const Politics = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, [products]);

  return (
    <section>
      <div
        className="row d-flex justify-content-center "
        style={{ marginTop: "90px", width: "100%", position: "relative" }}
      >
        {products.map((product: any) => (
          <div
            className=" my-3 border border-4 ms-4 justify-content-center bg-white"
            style={{ width: "300px" }}
          >
            <h5
              className="mt-3 text-center product-title "
              style={{ fontSize: "18px", marginBottom: "-10px" }}
            >
              {product.title}
            </h5>
            <div
              className=" justify-content-center my-3 py-3 ps-2"
              style={{ position: "relative", width: "270px" }}
            >
              <img
                className="image-fluid im-s"
                src={product.image}
                alt="technology-article"
                style={{
                  width: "250px",
                  height: "350px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />

              <p className="product-description">{product.description}</p>
              <button
                type="button"
                className="btn btn-primary rounded-1 mt-3 w-100 d-flex justify-content-center  "
              >
                Explore Now
              </button>
              <SocialLinks />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Politics;
