/* eslint-disable @typescript-eslint/no-explicit-any */
import SocialLinks from "./SocialLinks";
// import healthbenefits from "../assets/images/healthbennefits.jpeg";
// import Healthcheckup from "../assets/images/Healthcheckup.jpeg";
// import hydrated from "../assets/images/hydrated.jpeg";
// import healthtips from "../assets/images/healthtips.jpeg";
// import healthliving from "../assets/images/healthliving.jpeg";
// import Eatingright from "../assets/images/Eatingright.jpeg";
// import bettersleep from "../assets/images/bettersleep.jpeg";
// import mindfullness from "../assets/images/mindfullness.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";
const HealthAndWellness = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, [products]);

  return (
    <section
      className="row d-flex justify-content-center "
      style={{ marginTop: "90px", width: "100%", position: "relative" }}
    >
      {products.map((product: any) => (
        <div
          className=" my-3 border border-4 ms-4 justify-content-center bg-white "
          style={{ width: "300px" }}
        >
          <h5
            className="mt-3 text-center  product-title "
            style={{ fontSize: "18px", marginBottom: "-10px" }}
          >
            {product.title}
          </h5>
          <div
            className=" justify-content-center my-3 py-3 ps-2"
            style={{ position: "relative", width: "270px" }}
          >
            <img
              className="image-fluid"
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
              className="btn btn-primary w-100 d-flex  justify-content-center rounded-1 mt-3 "
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
      ))}
    </section>
  );
};

export default HealthAndWellness;
