import biotechnology from "../assets/images/biotechnology.jpeg";
import coffee from "../assets/images/coffee.jpeg";
import climate from "../assets/images/climate.jpeg";
import Bike from "../assets/images/Bike.jpeg";
import TopArticles from "./TopArticles";
import { useState, useEffect } from "react";
import axios from "axios";

const Content = () => {
  const [products, setProducts] = useState<any>([]);

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
    <>
      <div className=" d-flex justify-content-between  content-a ">
        <span>
          <h5 className=" h5-title">All </h5>
        </span>
        <span>
          <h5 className=" h5-title">News</h5>
        </span>
        <span>
          <h5 className=" h5-title">Personal Advice</h5>
        </span>
        <span>
          <h5 className=" h5-title">Self-Development</h5>
        </span>
        <span>
          <h5 className=" h5-title">Travel</h5>
        </span>
        <span>
          <h5 className=" h5-title">Funny situations</h5>
        </span>
        <span>
          <h5 className=" h5-title">Natural</h5>
        </span>
      </div>
      <section className=" px-3 py-2 mb-5 mt-5 d-flex gap-3">
        <aside style={{ width: "50%", height: "110vh" }}>
          <img
            src={biotechnology}
            alt="img"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </aside>
        <aside
          className=" px-2 py-2"
          style={{ width: "20%", height: "100vh", position: "relative" }}
        >
          <img
            className="image-fluid rounded-2 mb-3"
            src={coffee}
            alt="img"
            style={{ position: "relative", width: "100%", height: "35%" }}
          />
          <img
            className="image-fluid rounded-2 mb-3"
            src={Bike}
            alt="img"
            style={{ position: "relative", width: "100%", height: "35%" }}
          />
          <img
            className="image-fluid rounded-2 mb-3"
            src={climate}
            alt="img"
            style={{ position: "relative", width: "100%", height: "35%" }}
          />
        </aside>
        <aside style={{ width: "30%", height: "110vh" }}>
          <div className="mt-3">
            <h5 className="text-start text-light ms-3">
              Coffee Delights: A Brew-tiful Journey
            </h5>
            <p className=" text-start text-light ms-3">
              Dive into the world of coffee delights! From selecting beans to
              enjoying the perfect brew, this article explores the joy and
              flavor in every cup. Whether you prefer a bold espresso or a
              smooth latte, discover how coffee can brighten your day and make
              every moment brew-tiful!
            </p>
          </div>
          <div style={{ marginTop: "60px" }}>
            <h5 className="text-start text-light ms-3">Pedal to Happiness</h5>
            <p className=" text-start text-light ms-3">
              Bike riding brings pure joy and freedom. Feel the wind in your
              hair and enjoy the simple thrill of pedaling through scenic paths
              or city streets. Each ride is a chance to escape, unwind, and
              embrace happiness on two wheels!
            </p>
          </div>
          <div style={{ marginTop: "60px" }}>
            <h5 className="text-start text-light ms-3">
              Understanding Climate Change
            </h5>
            <p className=" text-start text-light ms-3">
              Climate change affects us all, altering weather patterns and
              impacting ecosystems. This article explains the basics of climate
              change, its causes, and its effects on our planet. Learn how these
              changes are influencing our environment and what actions we can
              take to make a difference.
            </p>
          </div>
        </aside>
      </section>
      <div>
        <TopArticles />
      </div>
    </>
  );
};

export default Content;
