/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
// import stunning from "../assets/images/Stunning .jpeg";
import kg from "../assets/images/kg.jpeg";
import hg from "../assets/images/hg.jpeg";
import homage from "../assets/images/homage.jpeg";
import plans from "../assets/images/plans.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";

const ReadContent = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [products, setProducts] = useState<any>([]);
  // const { product_id } = useParams();

  const [input, setInput] = useState("");

  const comment = (e: any) => {
    e.preventDefault();
    console.log(input);
  };

  const getProducts = () => {
    axios
      .get(`https://fakestoreapi.com/products/7`)
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, [products]);

  return (
    <>
      <section className="nav-content bg-white rounded-top  px-5 d-flex  justify-content-between align-items-center">
        <Link to="" className="article-title text-black text-decoration-none">
          {products.title}
        </Link>
        <Link
          to=""
          className="Publication-date text-black text-decoration-none"
        >
          11/ 05/2024
        </Link>
        <Link to="" className="text-decoration-none text-black">
          views
        </Link>
        <div className="social-links d-flex justify-content-evenly mt-auto">
          <Link to="" className="text-decoration-none text-black">
            <i className="fi fi-brands-instagram fs-3 h "></i>
          </Link>
          <Link to="" className="text-decoration-none text-black">
            <i className="fi fi-brands-twitter-alt-circle fs-3 j"></i>
          </Link>
          <Link to="" className="text-decoration-none text-black">
            <i className="fi fi-brands-facebook fs-3 k"></i>
          </Link>
          <Link to="" className="text-decoration-none text-black">
            <i className="fi fi-rs-share fs-3 l"></i>
          </Link>
        </div>
      </section>
      <div className="aurthor-information bg-white d-flex justify-content-between">
        <h4 className=" text-center heading-t d-flex justify-content-center align-items-center">
          {products.title}
        </h4>

        <div className="ms-3 border bg-secondary rounded px-1 border-secondary mt-2 me-2 ">
          <img
            src={products.image}
            className="stunning-image img-fluid pt-2 rounded"
            alt="image"
          />
          <hr />
          <div className=" d-flex mx-1 flex-column">
            <p className="description text-light">{products.description}</p>
            <p className="d-flex gap-2 ">
              <span>
                <h5 className="fw-normal text-white">price :</h5>
              </span>
              ${products.price}
            </p>
            <h5 className="text-white fw-normal" style={{ marginTop: "-15px" }}>
              Rating:
            </h5>
            <div>
              <i className="fi fi-ts-star-sharp-half-stroke"></i>
              <i className="fi fi-rs-star "></i>
              <i className="fi fi-rs-star text-warning"></i>
              <i className="fi fi-rs-star text-warning"></i>
              <i className="fi fi-rs-star text-warning"></i>
            </div>
          </div>
        </div>
      </div>

      <section className="verticle-one bg-white  px-3 py-3 d-flex gap-3">
        <div className="vert-3  d-flex justify-content-center align-items-center flex-column px-2 py-2">
          <img
            className="img-fluid  plans-image rounded"
            src={plans}
            alt="image"
          />
          <div
            className=" h-70  px-2 py-2 overflow-hidden "
            style={{ zIndex: "0", marginTop: "70%" }}
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              voluptatibus ipsam fugit incidunt recusandae accusantium
              distinctio adipisci voluptates, quis omnis quisquam nam
              voluptatum, sed magnam iure iusto, dolorum officia voluptatem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              ut aspernatur inventore perferendis reiciendis voluptatum, quaerat
              exercitationem. Autem voluptatem maxime consequatur optio a porro,
              ipsam beatae soluta voluptate temporibus aliquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              facilis provident, nisi explicabo accusamus, nesciunt illum veniam
              quia nostrum recusandae ullam itaque deleniti? Esse, eius enim
              veritatis qui nostrum doloribus?
            </p>
          </div>
        </div>
        <div className="verticle-two px-2 py-2">
          <div className="px-2 py-2 d-flex flex-column  ">
            <h4 className="d-inline-block w-50" style={{ zIndex: "0" }}>
              Lorem ipsum dolor sit amet. lrome
            </h4>
            <span className="border border-black w-50"> </span>
            <img
              className="float-right img-fluid  ronded-1 "
              src={homage}
              alt="image"
            />
          </div>
          <div className=" w-50 other-centent px-2 py-2">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit iusto accusantium atque ab similique fugit impedit
              odio aperiam omnis laborum!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              expedita ratione culpa distinctio dolores nobis, rem id sit nisi
              quas accusantium assumenda aperiam voluptate excepturi amet dolor
              nemo laudantium nihil!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              expedita ratione culpa distinctio dolores nobis, rem id sit nisi
              quas accusantium assumenda aperiam voluptate excepturi amet dolor
              nemo laudantium nihil!
            </p>
            <img
              className="img-fluid  ronded-1 float-img"
              src={kg}
              alt="image"
            />
          </div>
          <div className="w-50 lorem">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              placeat, dolorum beatae, architecto dolore asperiores est
              voluptatibus earum debitis minima labore iusto, corrupti officia
              voluptas quia. Voluptas quaerat exercitationem nostrum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              placeat, dolorum beatae, architecto dolore asperiores est
              voluptatibus earum debitis minima labore iusto, corrupti officia
              voluptas quia. Voluptas quaerat exercitationem nostrum!
            </p>
            <img className="float-img-2 img-fluid" src={hg} alt="images" />
          </div>
        </div>
      </section>
      <div className="bg-white social-linkz mb-5 pb-3 ps-3  d-flex justify-content-between align-items-center">
        <form
          className="d-flex justify-content-center align-items-center  px-2  comment-form"
          action="
        "
        >
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            title=""
            placeholder=" comment here...."
            required
          />
          <button className="" onClick={comment} type="submit">
            Comment
          </button>
        </form>
        <div style={{ height: "4rem", lineHeight: "3px" }}>
          <p className="fw-700 fs-3">---------------------------------</p>
          <p className="fw-700 fs-3">---------------------------------</p>
          <p className="fw-700 fs-3">---------------------------------</p>
          <p className="fw-700 fs-3">---------------------------------</p>
        </div>

        <div className="me-5 " style={{ lineHeight: "15px" }}>
          <h5>wrighten by Agatha lincoline</h5>
          <p>@okothElijah</p>
          <div className="d-flex gap-2">
            <Link
              className="text-decoration-none fs-3"
              to="https://www.buzzfeed.com/"
              target="_blank"
            >
              <i
                className="fi fi-rr-url web-link"
                style={{ color: "orangered" }}
              ></i>
            </Link>
            <p>Thanks for reading, visit again!.....</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadContent;
