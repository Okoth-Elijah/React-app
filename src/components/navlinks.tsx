import menu from "../assets/images/menu.jpeg";
import { NavLink } from "react-router-dom";

const Navlinks = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center linksection "
      style={{
        gap: "30px",
      }}
    >
      <span>
        <NavLink to="#">Recent Articles</NavLink>
      </span>
      <span>
        <NavLink to="#">Favourite Articless</NavLink>
      </span>
      <span>
        <NavLink to="#">Comments</NavLink>
      </span>
      <span>
        <NavLink to="#">Posts</NavLink>
      </span>
      <span>
        <NavLink to="#">
          <img src={menu} alt="img" style={{ width: "20px" }} />
        </NavLink>
      </span>
    </div>
  );
};

export default Navlinks;
