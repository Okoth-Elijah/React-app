/* eslint-disable @typescript-eslint/no-explicit-any */
// import unfolded from "../assets/images/unfloded_.jpeg";
// import newh from "../assets/images/newh.jpeg";
// import workshift from "../assets/images/workshift.jpeg";
// import eco from "../assets/images/eco.jpeg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopArticles = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <section className="mb-5">
      <div className="top-container">
        <h4 className="title text-center text-white">Top Stories</h4>
        <p
          className="text-content text-center text-light move-paragraph"
          style={{ letterSpacing: "1px" }}
        >
          Dive into our Top Stories for the latest and most captivating
          articles. Explore the content that's making waves and resonating with
          readers like you!
        </p>
      </div>
      <div className=" d-flex flex-wrap justify-content-between gap-2 top-content floating  ">
        {products.map((product: any) => (
          <div
            key={product.id}
            className=" story-content bg-white d-flex flex-column rounded-1"
            style={{ position: "relative" }}
          >
            <img
              className="img-fluid img-thumbnail tech-2 mb-2 mx-auto"
              src={product.image}
              alt="image"
            />
            <div className="d-flex flex-column">
              <h4 className="text-center futured-title">{product.title}</h4>
              <p className="text-center mx-3 text">{product.description}</p>
            </div>
            <div>
              <Link
                to={`readcontent/${product.id}`}
                className="btn btn-primary rounded-1 w-50 mb-2 "
                style={{ marginLeft: "23%" }}
              >
                Explore More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopArticles;
