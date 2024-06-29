import Navbar from "../components/navbar";
import Herosection from "../components/herosection";
import Aboutus from "../components/aboutus";
import Featuredarticles from "../components/featuredarticles";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="homepage" style={{ marginTop: "7em" }}>
        <Herosection />
        <Aboutus />
      </div>
      <Featuredarticles />
    </>
  );
};

export default Homepage;
