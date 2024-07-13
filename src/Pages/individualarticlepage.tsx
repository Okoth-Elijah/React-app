import bike from "../assets/images/Bike.jpeg";
import Navlinks from "../components/navlinks";
import Searchbar from "../components/searchbar";

const Individualarticlepage = () => {
  return (
    <>
      <div className="container-fluuid">
        <section className="bor p-3">
          <div className="profile-pic gap-3">
            <img src={bike} alt="Profilepic" />
            <h5 className="Profile-name">Okoth Elijah</h5>
          </div>
          <Searchbar />
          <Navlinks />
        </section>
      </div>
    </>
  );
};

export default Individualarticlepage;
