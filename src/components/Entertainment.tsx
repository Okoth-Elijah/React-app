/* eslint-disable @typescript-eslint/no-explicit-any */
import SocialLinks from "./SocialLinks";
// import comedy from "../assets/images/comedy.jpeg";
// import virtual from "../assets/images/virtual.jpeg";
// import bookscreen from "../assets/images/bookscreen.jpeg";
// import redcarpet from "../assets/images/redcarpet.jpeg";
// import bingtv from "../assets/images/bingtv.jpeg";
// import behind from "../assets/images/behind.jpeg";
// import risingartists from "../assets/images/risingartists.jpeg";
// import musicevolution from "../assets/images/musicevolution.jpeg";
import { useState, useEffect } from "react";
import axios from "axios";

const Entertainment = () => {
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

export default Entertainment;
