import { Link } from "react-router-dom";
import stunning from "../assets/images/Stunning .jpeg";
import plans from "../assets/images/plans.jpeg";
const ReadContent = () => {
  return (
    <>
      <section className="nav-content bg-white rounded-top mt-1  px-5 d-flex justify-content-between align-items-center">
        <Link to="" className="article-title text-black text-decoration-none">
          Home News
        </Link>
        <Link
          to=""
          className="Publication-date text-black text-decoration-none"
        >
          11/ 05/2024
        </Link>
        {/* <Link className="text-decoration-none text-black" to="">
          Aurthor Information
        </Link> */}
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
          The Art Of Mordern Interior Elegance
        </h4>
        <img
          src={stunning}
          className="stunning-image img-fluid my-3 me-3 rounded"
          alt="image"
        />
      </div>

      <section className="verticle-one bg-white mb-5 px-3 py-3 d-flex gap-3">
        <div className="vert-3  d-flex justify-content-center align-items-center flex-column px-2 py-2">
          <img className="img-fluid rounded" src={plans} alt="image" />

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            voluptatibus ipsam fugit incidunt recusandae accusantium distinctio
            adipisci voluptates, quis omnis quisquam nam voluptatum, sed magnam
            iure iusto, dolorum officia voluptatem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ut
            aspernatur inventore perferendis reiciendis voluptatum, quaerat
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
        <div className="verticle-two border border-success px-2 py-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit neque,
          itaque non dolorem, eius aspernatur assumenda soluta id et minima
          asperiores expedita ratione vero suscipit nam modi praesentium cumque
          iste sed. Repellendus tenetur ducimus doloribus saepe obcaecati non,
          quod quidem officia consectetur, quia sunt error, fuga soluta nemo
          perspiciatis itaque.
        </div>
      </section>
    </>
  );
};

export default ReadContent;
