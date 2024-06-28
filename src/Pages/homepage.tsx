import Navbar from "../components/navbar";
import Herosection from "../components/herosection";
import Aboutus from "../components/aboutus";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="homepage" style={{ marginTop: "7em" }}>
        <Herosection />
        <Aboutus />
      </div>
    </>
  );
};

export default Homepage;
