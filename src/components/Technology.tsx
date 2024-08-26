/* eslint-disable @typescript-eslint/no-explicit-any */
// import technology from "../assets/images/technology.jpeg";
import SocialLinks from "./SocialLinks";
// import one from "../assets/images/one.jpeg";
// import two from "../assets/images/two.jpeg";
// import three from "../assets/images/three.jpeg";
// import four from "../assets/images/four.jpeg";
// import five from "../assets/images/five.jpeg";
// import six from "../assets/images/six.jpeg";
// import security from "../assets/images/Security.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";

const Technology = () => {
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
    <section className="container-fluid " style={{ marginTop: "7em" }}>
      <div className="row border d-flex justify-content-center ">
        {products.map((product: any) => (
          <div
            className=" my-3 border border-4 ms-3 justify-content-center bg-white "
            style={{ width: "300px" }}
          >
            <h5
              className="mt-3"
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
              <button
                type="button"
                className="btn w-100 d-flex justify-content-center btn-primary rounded-1 mt-3 "
                style={{
                  display: "flex",
                  marginTop: "1px",
                }}
              >
                Explore Now
              </button>
              {<SocialLinks />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
